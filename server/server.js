const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Configure CORS
const corsOptions = {
    origin: '*',  // Replace with your frontend's origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed HTTP methods
    credentials: true, // Allow sending credentials like cookies (if needed)
    optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    console.log('Received contact form submission:', { name, email, subject, message });

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            logger: true,
            debug: true
        });

        transporter.verify(function (error, success) {
            if (error) {
                console.log("Nodemailer verify error:", error);
            } else {
                console.log("Server is ready to take our messages");
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'recipient@example.com',
            subject: subject,
            html: `<p>Name: ${name}</p>
                   <p>Email: ${email}</p>
                   <p>Message: ${message}</p>`,
        };

        console.log('Sending email with options:', mailOptions);

        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent successfully.  Message ID:', info.messageId, 'Response:', info.response);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});