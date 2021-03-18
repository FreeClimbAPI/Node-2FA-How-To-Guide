// import dependencies and files and set up express server
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

// endpoint for incoming GET  requests
app.get('/', (req, res) => {
    res.status(200).render('inputPhone')
})

// generate and send 2FA code
app.post('/send-verification', async (req, res) => {
    const number = req.body.number // get the phone number send with the incoming request (number var defined in inputPhone.handlebars template)
    const code = verification.createCode() // use verification to create a new 2FA code
    verification.addCode(number, code) //add 2FA code to storage

    try {
        await msg.sendCode(number, code) // attempt to send an SMS message to the number entered by the user
        res.status(200).render('inputCode', { number: number }) // on success render the inputCode.handlebars template, pass along the phone number for use in code verification
    } catch (err) {
        console.error(err) //on failure to send SMS, log error to console
        verification.deleteCode(number) // remove 2FA code
        res.status(500).render('inputPhone', {
            error:
                'Something went wrong with your request please make sure you entered a valid phone number.' // re-render the inputPhone.handlebars template with this error message
        })
        })
    }
})

// verify 2FA code
app.post('/verify-number', (req, res) => {
    number = req.body.number // pull phone number off request
    code = req.body.code // pull 2FA code off request

    try {
        verification.verifyCode(number, code)
        verification.deleteCode(number) // if 2FA code successfully verified remove it to prevent re-use
        res.status(200).render('success') // render success.handlebars template
    } catch (err) {
        console.error(err)
        res.status(500).render('inputCode', { error: err.message, number: number }) // render inputCode.handlebars template with error message, pass along phone number for verification code resend
    }
})

//start the server
const server = app.listen(port, () => {
    console.log(`running app on port ${port}`)
})

module.exports = { app, server }
