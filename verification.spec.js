const verification = require('./verification')
const codes = require('./codeStore')

describe('createCode', () => {
    it('creates generates a random 6 digit number as a string', () => {
        const code = verification.createCode('fake number')
        expect(code).toMatch(/^[0-9]{6}$/)
    })
})

describe('addCode', () => {
    it('adds an entry to the pendingCodes map with the given number and code', () => {
        verification.addCode('fakeNumber', 'fakeCode')
        expect(codes.get('fakeNumber').code).toEqual('fakeCode')
    })
})

describe('deleteCode', () => {
    it('removes the entry from the pendingCodes map with the given number', () => {
        codes.set('testNumber', { code: 'fake', expiresAt: 0 })
        verification.deleteCode('testNumber')
        expect(codes.get('testNumber')).toBe(undefined)
    })
})

describe('verifyCode', () => {
    it('throws an error if the code provided has expired', () => {
        codes.set('testNumber', { code: 'fake', expiresAt: 0 })
        expect(() => {
            verification.verifyCode('testNumber', 'fake')
        }).toThrow('Your code has expired.')
    })

    it('throws an error if the code provided is invalid', () => {
        codes.set('testNumber', { code: 'fake', expiresAt: Date.now() + 30000 })
        expect(() => {
            verification.verifyCode('testNumber', 'notFake')
        }).toThrow('Your code does not match.')
    })
})
