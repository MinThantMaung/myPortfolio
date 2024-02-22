// //
// // const mongoose = require("mongoose");
// // const express = require("express");
// // const dbURI = "mongodb+srv://kei94:kei94@cluster0.w6setwz.mongodb.net/test?retryWrites=true&w=majority";
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const nodemailer = require("nodemailer");
// // const app = express()
// // app.use(bodyParser.json({ limit: '100mb' }));
// // app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
// // app.use(cors())
// //
// // const emailUsername = process.env.EMAIL_AUTH_USER
// // const emailPassword = process.env.EMAIL_AUTH_PASS;
// //
// // const port = 8000;
// //
// // const sendEmail = async (email) => {
// //     try {
// //         const transporter = nodemailer.createTransport({
// //             host: 'smtp.gmail.com', // Replace with your email provider's SMTP host
// //             port: 587,
// //             secure: false, // Use `true` for TLS, `false` for STARTTLS
// //             auth: {
// //                 user: emailUsername,
// //                 pass: emailPassword,
// //             },
// //         });
// //
// //         const mailOptions = {
// //             from: email, // Your sender email address
// //             to: emailUsername,
// //             subject: 'testing',
// //             text: `test`,
// //         };
// //
// //         await transporter.sendMail(mailOptions);
// //         console.log('Email sent to:', email);
// //     } catch (error) {
// //         console.error('Error sending email:', error);
// //         return { success: false, message: error.message };
// //     }
// // };
// //
// // app.post('/send-email', async (req, res) => {
// //     const { recipientEmail, subject, body } = req.body;
// //
// //     if (!recipientEmail || !validateEmail(recipientEmail)) {
// //         return res.status(400).json({ message: 'Invalid email address' });
// //     } else if (!subject || !body) {
// //         return res.status(400).json({ message: 'Missing subject or body' });
// //     }
// //
// //     try {
// //         await sendEmail(recipientEmail, subject, body);
// //         res.json({ message: 'Email sent successfully' });
// //     } catch (error) {
// //         // Handle errors gracefully, providing meaningful messages to the client
// //         // using appropriate HTTP status codes
// //         res.status(500).json({ message: 'Error sending email: ' + error.message });
// //     }
// // });
// //
// // app.listen(port,()=>{
// //     console.log(`server is running in port ${port}`)
// // })
//
//
// const mongoose = require('mongoose');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// require('dotenv').config(); // Load environment variables from .env file
//
// const app = express();
//
// // Use a dynamic port assigned at runtime or from an environment variable:
// const port = process.env.PORT || 8000;
//
// // Body parser configuration for JSON and URL-encoded payloads:
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// // Allow CORS for wider accessibility (adjust allowed origins if needed):
// app.use(cors());
//
// // Improved email sending function with security, error handling, and retries:
// async function sendEmail(recipientEmail, subject, body) {
//     const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com', // Replace with your email provider's SMTP host
//         port: 587,
//         secure: false, // Use `true` for TLS, `false` for STARTTLS
//         auth: {
//             user: 'minthant180@gmail.com',
//             pass: 'taea ndwl anfv uddj',
//         },
//     });
//
//     const mailOptions = {
//         from: 'minthantmg169@gmail.com', // Replace with your authenticated email address
//         to: 'minthant12310@gmail.com', // Add the recipient email address here
//         subject,
//         text: body,
//     };
//
//     try {
//         await transporter.sendMail(mailOptions);
//         console.log('Email sent to:', 'minthant12310@gmail.com');
//     } catch (error) {
//         console.error('Error sending email:', error);
//     }
// }
//
// app.post('/send-email', async (req, res) => {
//     const { recipientEmail, subject, body } = req.body;
//
//     try {
//         await sendEmail(recipientEmail, subject, body);
//         res.json({ message: 'Email sent successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error sending email: ' + error.message });
//     }
// });
//
// // Server startup with graceful shutdown:
// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });
// async function gracefulShutdown() {
//     console.log('Received termination signal. Shutting down...');
//     console.log('Exiting...');
//     process.exit(0);
// }
