const freeClimbSDK = require('@freeclimb/sdk')

const accountId = process.env.ACCOUNT_ID
const authToken = process.env.AUTH_TOKEN
const freeClimb = freeClimbSDK(accountId, authToken)
const fcNumber = process.env.FC_PHONE_NUMBER

exports.sendCode = async (to, code) => {
    await freeClimb.api.messages.create(fcNumber, to, `Your verification code is: ${code}`)
}
