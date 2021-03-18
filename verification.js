const codes = require('./codeStore') // import our code storage map from codeStore.js

const EXPIRY_INTERVAL_MS = 60 * 1000 // create a default amount of time for 2FA code expiry - in this case 60000 ms or 1 min

const createCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString() // create verification code as random 6 digit number represented with a string
}

const addCode = (number, code) => {
    codes.set(number, { code: code, expiresAt: Date.now() + EXPIRY_INTERVAL_MS }) // set code with expiration time, keyed to phone number
}

const deleteCode = number => {
    codes.delete(number) // remove code
}

const verifyCode = (number, code) => {
    if (codes.get(number).code !== code) { // throw err if code not present in codes map
        throw new Error('Your code does not match.')
    } else if (Date.now() >= codes.get(number).expiresAt) { // throw err if current time is past expiry time of code
        throw new Error('Your code has expired.')
    }
}

module.exports = {
    createCode,
    addCode,
    deleteCode,
    verifyCode
}
