const EmailList = require('../models/EmailList')
const { sendEmail } = require('../config/mailerConfig')

module.exports = (title, message) => {
    EmailList.find().then((list)=>{
        let emailList = list.map((item)=> item.email).join(",")
        sendEmail("Cool Blog", emailList, title, message)
    })
}