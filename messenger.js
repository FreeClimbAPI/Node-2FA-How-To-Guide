const freeClimbSDK = require('@freeclimb/sdk')

const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const freeClimb = freeClimbSDK(accountId, authToken) // create FreeClimb client using your account Id and auth token
const fcNumber = process.env.FC_PHONE_NUMBER

exports.sendCode = async (to, code) => {
    await freeClimb.api.messages.create(fcNumber, to, `Your verification code is: ${code}`) // send SMS message using FreeClimb client
}
