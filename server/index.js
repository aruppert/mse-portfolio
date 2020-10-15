require("dotenv").config();
const path = require("path");
const express = require("express");
const transporter = require("./config");

const app = express();

const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/send", (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: req.body.subject,
      html:
        req.body.message + "  From: " + req.body.email + "  " + req.body.tel,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "Something went wrong. Reload and try later",
        });
      } else {
        res.send({
          success: true,
          message: "Thanks for contacting me. I'll be in touch.",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong. Reload and try later",
    });
  }
});

app.listen(3030, () => {
  console.log("server start on port 3030");
});
