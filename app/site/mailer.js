var nodemailer = require('nodemailer');

module.exports = function () {
    var transporter = {};

    function sendEmail(to, subject, body, callback) {
        var mailOptions = {
            from: __env.EMAIL_USER,
            to: to,
            subject: subject,
            text: body
        };
        transporter.sendMail(mailOptions, callback);
    }

    function initialize() {
        transporter = nodemailer.createTransport({
            service: __env.EMAIL_SERVICE,
            auth: {
                user: __env.EMAIL_USER,
                pass: __env.EMAIL_PWD
            }
        });
    }

    initialize();
    return {
        sendEmail: sendEmail
    };
};