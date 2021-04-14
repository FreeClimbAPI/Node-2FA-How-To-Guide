const freeClimbSDK = require('@freeclimb/sdk')

const accountId = process.env.ACCOUNT_ID
const apiKey = process.env.API_KEY
const freeClimb = freeClimbSDK(accountId, apiKey) // create FreeClimb client using your account Id and auth token
const fcNumber = process.env.FC_PHONE_NUMBER

exports.sendCode = async (to, code) => {
    await freeClimb.api.messages.create(fcNumber, to, `Your verification code is: ${code}`) // send SMS message using FreeClimb client
}
