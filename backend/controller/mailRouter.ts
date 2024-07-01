import 
// 
const sendEmail = async (req: Request, res: Response) => { 
    const {data} = req.body;
    try {
        await sendMail(data);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        res.status(500).send('Failed to send email');
    }
}