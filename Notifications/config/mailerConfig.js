// const mailjet = require('node-mailjet').connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)

require('dotenv')
async function sendEmail(from, to, subject, html) {

    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "tech@findhomes.com.ng",
                        "Name": "Findhomes"
                    },
                    "To": [
                        {
                            "Email": to,
                            "Name": ""
                        }
                    ],
                    "Subject": subject,
                    "HTMLPart": html
                }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
}


module.exports = { sendEmail }