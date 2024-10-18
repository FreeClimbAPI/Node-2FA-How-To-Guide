const freeClimbSDK = require("@freeclimb/sdk")

const accountId = process.env.ACCOUNT_ID
const apiKey = process.env.API_KEY
const fcNumber = process.env.FC_PHONE_NUMBER

const freeClimbConfig = freeClimbSDK.createConfiguration({
    accountId,
    apiKey,
})
const apiInstance = new freeClimbSDK.DefaultApi(freeClimbConfig)

exports.sendCode = async (to, code) => {
    const messageRequest = {
        from: fcNumber,
        to,
        text: `Your verification code is: ${code}`,
    }
    await apiInstance.sendAnSmsMessage(messageRequest)
}
