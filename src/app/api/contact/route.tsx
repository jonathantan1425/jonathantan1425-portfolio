import { NextResponse } from "next/server";

require("dotenv").config();
const PERSONAL_EMAIL = process.env.personal_email;
const EMAIL = process.env.email;
const PASSWORD = process.env.password;

export async function POST(req: any) {
  // if (req.method !== "POST") {
  //   return res.status(405).json({ message: "Method not allowed" });
  // }
  const body = await req.json();

  if (!body.name || body.name === "") {
    return NextResponse.json({ message: "Name is required" }, { status: 400 });
  }
  if (
    (!body.email && !body.phone) ||
    (body.email === "" && body.phone === "")
  ) {
    return NextResponse.json(
      { message: "Email or phone number is required" },
      { status: 400 }
    );
  }
  if (!body.message || body.message === "") {
    return NextResponse.json(
      { message: "Message is required" },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = body;

  const nodeoutlook = require("nodejs-nodemailer-outlook");

  nodeoutlook.sendEmail({
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    from: EMAIL,
    to: PERSONAL_EMAIL,
    subject: `Message From ${name}`,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p><p>Phone number:${phone}</p>`,
    onError: (e: any) => {
      return
    },
    onSuccess: (i: any) => {
      return
    },
  });
  return NextResponse.json({ message: "Send success" }, { status: 200 });
}
