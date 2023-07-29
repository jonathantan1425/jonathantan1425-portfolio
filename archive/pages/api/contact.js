require("dotenv").config();
const PERSONAL_EMAIL = process.env.personal_email;
const EMAIL = process.env.email;
const PASSWORD = process.env.password;

export default function send(req, res) {
  var nodeoutlook = require("nodejs-nodemailer-outlook");
  nodeoutlook.sendEmail({
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
    from: EMAIL,
    to: PERSONAL_EMAIL,
    subject: `Message From ${req.body.name}`,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p><p>Phone number:${req.body.phone}</p>`,
    onError: (e) => console.log(e),
    onSuccess: (i) => {
      console.log(i);
      res.status = 200;
      console.log(res);
      return res;
    },
  });
}
