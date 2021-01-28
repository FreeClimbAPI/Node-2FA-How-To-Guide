jest.mock('./verification')
const { app, server } = require('./index')
const supertest = require('supertest')
const request = supertest(app)
const verification = require('./verification')
const msg = require('./messenger')

afterAll(() => {
    server.close()
})

describe('GET /', () => {
    it('renders the inputPhone template', async () => {
        const res = await request.get('/')
        expect(res.status).toBe(200)
    })
})

describe('POST /send-verification', () => {
    it('renders the inputCode template with the correct phone number', async () => {
        const fcSpy = jest.spyOn(msg, 'sendCode').mockImplementation((from, to, code) => {})
        const res = await request.post('/send-verification', { number: '+11001001001' }) //mock fc api call
        expect(fcSpy).toHaveBeenCalled()
        expect(res.status).toBe(200)
    })

    it('re-renders the inputPhone template with an error message on message send error', async () => {
        const fcSpy = jest.spyOn(msg, 'sendCode').mockImplementation((from, to, code) => {
            throw new Error('fake error')
        })
        const res = await request.post('/send-verification', { number: 'bad value' })
        expect(fcSpy).toHaveBeenCalled()
        expect(res.status).toBe(500)
    })
})

describe('POST /verify-number', () => {
    it('renders the success template if the given code is verified', async () => {
        const verifySpy = jest.spyOn(verification, 'verifyCode').mockImplementation(() => {})
        const res = await request.post('/verify-number', { code: 'code', number: 'fakenumber' })
        expect(verifySpy).toHaveBeenCalled()
        expect(res.status).toBe(200)
    })

    it('renders the inputCode template with the invalid code error message if the given code is not valid', async () => {
        const verifySpy = jest.spyOn(verification, 'verifyCode').mockImplementation(() => {
            throw new Error('Fake Error')
        })
        const res = await request.post('/verify-number', { code: 'code', number: 'fakenumber' })
        expect(verifySpy).toHaveBeenCalled()
        expect(res.status).toBe(500)
    })
})
