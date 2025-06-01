import nodemailer from "nodemailer";
import {  NextResponse } from "next/server";
export async function POST(request: Request) {
    const data = await request.json();
     // CONFIGURE TRANSPORTER EMAIL
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER, // tu email
          pass: process.env.EMAIL_PASS, // tu contraseña
        },
      });

       // Configurar el contenido del correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Email del cliente
      subject: data.subject,
      html: generateEmailTemplate( {
       name: data.name,
       email: data.email,
       subject: data.subject,
       message: data.message,
       phone: data.phone
      }),
    };

     await transporter.sendMail(mailOptions);

    return NextResponse.json("Email sent");
}

function generateEmailTemplate(
  data: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }
) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .email-container {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .email-header {
          background-color: #1c1c1c;
          color: white;
          padding: 10px;
          text-align: center;
        }
        .email-body {
          background-color: white;
          padding: 20px;
          margin-top: 10px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-transform: capitalize;
        }
        .email-footer {
          margin-top: 20px;
          text-align: center;
          color: #888;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="email-header">
          <h1>${data.name}</h1>
        </div>
        <div class="email-body">
          <h2><strong>Cliente:</strong>${data.name}!</h2>
          <p><strong>Email:</strong>${data.email}</p>
          <p><strong>Subject:</strong>${data.subject}</p>
          <p><strong>Message:</strong>${data.message}</p>
          <p><strong>Phone:</strong>${data.phone}</p>
        </div>
        <div class="email-footer">
          <p>Yunior Zequeira</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
