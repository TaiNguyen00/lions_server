import jwt from "jsonwebtoken";

const genneralAccessToken = async (payload) => {
    console.log(payload)
    const access_token = jwt.sign({
        payload
    }, process.env.ACCESS_TOKEN, { expiresIn: '1h' })
    return access_token
}

const genneralRefreshToken = async (payload) => {
    console.log(payload);
    const refresh_token = jwt.sign({
        payload
    }, process.env.REFRESH_TOKEN, { expiresIn: '360d' })
    return refresh_token
}
module.exports = {
    genneralAccessToken,
    genneralRefreshToken
}