const codes = require('./codeStore')

const EXPIRY_INTERVAL_MS = 60 * 1000

const createCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString()
}

const addCode = (number, code) => {
    codes.set(number, { code: code, expiresAt: Date.now() + EXPIRY_INTERVAL_MS })
}

const deleteCode = number => {
    codes.delete(number)
}

const verifyCode = (number, code) => {
    if (codes.get(number).code !== code) {
        throw new Error('Your code does not match.')
    } else if (Date.now() >= codes.get(number).expiresAt) {
        throw new Error('Your code has expired.')
    }
}

module.exports = {
    createCode,
    addCode,
    deleteCode,
    verifyCode
}
