import floor from '../models/Floor'
import YourProduct from '../models/YourProduct'
export const getAllFloor = async (req, res, next) => {
    try {
        const floors = await floor.find().populate({
            path: 'id_room',
            populate: [
                { path: 'client_id' },
                { path: 'catelory_room' },
            ],

        });
        return res.status(200).json(floors)
    } catch (err) {
        return res.status(404).json(err)
    }
}
export const getFloorById = async (req, res, next) => {
    try {
        const id = req.body.id_yourProduct
        const floorById = await floor.find({ id_yourProduct: id }).populate({
            path: 'id_room',
            populate: {
                path: 'catelory_room'
            }
        });

        if (!floorById) {
            return res.status(404).json({ message: 'Floor not found' });
        }

        return res.status(200).json(floorById);
    } catch (err) {
        return res.status(404).json(err);
    }
};
export const addFloor = async (req, res, next) => {
    try {
        const newFloor = new floor(req.body)
        const saveFloor = await newFloor.save()
        const updateYourProduct = await YourProduct.findByIdAndUpdate(newFloor.id_yourProduct, {
            $addToSet: {
                id_floor: newFloor._id
            }
        })
        if (!updateYourProduct) {
            return res.status(404).json('update Floor in YourProduct npt success')
        }
        return res.status(200).json(saveFloor)
    } catch (err) {
        return res.status(404).json(err)
    }
}
export const editFloor = async (req, res, next) => {
    try {
        const id = req.body._id
        const updatedFloor = await floor.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        if (!updatedFloor) {
            return res.status(404).json({ message: 'Floor not found' });
        }

        return res.status(200).json(updatedFloor);
    } catch (err) {
        return res.status(500).json(err);
    }
};
export const deleteFloor = async (req, res, next) => {
    const id = req.body._id
    try {
        const deletedFloor = await floor.findByIdAndDelete(id);

        if (!deletedFloor) {
            return res.status(404).json({ message: 'Floor not found' });
        }

        // Remove the floor reference from YourProduct
        const updateYourProduct = await YourProduct.findByIdAndUpdate(
            deletedFloor.id_yourProduct,
            {
                $pull: {
                    id_floor: deletedFloor._id,
                },
            }
        );

        if (!updateYourProduct) {
            return res.status(404).json('Update YourProduct for deleted floor not successful');
        }

        return res.status(200).json({ message: 'Delete success' });
    } catch (err) {
        return res.status(500).json(err);
    }
};