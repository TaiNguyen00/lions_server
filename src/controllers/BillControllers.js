import Bill from "../models/Bill"

export const getAllBill = async (req, res) => {
  try {
    const bills = await Bill.find().populate({
      path: "id_package",
      path: "id_user",
      populate: [
        {
          path: 'account_manage', populate: [
            { path: 'yourProduct' },
            { path: 'package' },

          ],
        },

      ],
    });
    return res.status(200).json(bills)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export const createBillBuyPackage = async (userID, packageID) => {
  try {
    const newBill = new Bill({ id_user: userID, id_package: packageID })

    await newBill.save()

    return newBill;
  } catch (err) {
    console.log(err)
    throw new Error('Failed to create bill for package purchase')
  }
}