
import nodeMailer from 'nodemailer';

const useMail = () => {
    const sendMail = async (to: string, subject: string, text: string) => {
        const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
        });
    
        const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject,
        text,
        };
    
        await transporter.sendMail(mailOptions);
    };
    
    return { sendMail };
    };