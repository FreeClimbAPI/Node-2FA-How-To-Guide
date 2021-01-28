const env = require('dotenv-safe')
const express = require('express')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const verification = require('./verification')

env.config()

const msg = require('./messenger')

const app = express()

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).render('inputPhone')
})

app.post('/send-verification', async (req, res) => {
    const number = req.body.number
    const code = verification.createCode()
    verification.addCode(number, code)

    try {
        await msg.sendCode(number, code)
        res.status(200).render('inputCode', { number: number })
    } catch (err) {
        console.error(err)
        verification.deleteCode(number)
        res.status(500).render('inputPhone', {
            error:
                'Something went wrong with your request please make sure you entered a valid phone number.'
        })
    }
})

app.post('/verify-number', (req, res) => {
    number = req.body.number
    code = req.body.code

    try {
        verification.verifyCode(number, code)
        verification.deleteCode(number)
        res.status(200).render('success')
    } catch (err) {
        console.error(err)
        res.status(500).render('inputCode', { error: err.message, number: number })
    }
})

const server = app.listen(port, () => {
    console.log(`running app on port ${port}`)
})

module.exports = { app, server }
