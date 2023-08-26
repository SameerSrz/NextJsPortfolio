const nodemailer = require("nodemailer")

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMPT_HOST,
        port: process.env.SMPT_PORT,
        service: process.env.SMPT_SERVICE,
        auth:{
            user: options.email,
            pass: process.env.SMPT_PASSWORD,
        },
    });

    const mailOptions = {
        from: options.email,
        to: process.env.SMPT_MAIL,
        subject: options.subject,
        html: `
        <div style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
        <h2 style="color: #333; margin-bottom: 10px;">Contact Form</h2>
        <div style="background-color: white; padding: 15px; border-radius: 5px; box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);">
            <p style="margin: 0;"><strong>Name:</strong> ${options.name}</p>
            <p style="margin: 0;"><strong>Email:</strong> ${options.email}</p>
            <p style="margin: 0;"><strong>Subject:</strong> ${options.subject}</p>
        </div>
        <h3 style="color: #444; margin-top: 20px;">Message:</h3>
        <p style="margin: 0;">${options.message}</p>
    </div>
        `,
    };
    console.log(options.subject)

    await transporter.sendMail(mailOptions);
};


module.exports = sendMail;