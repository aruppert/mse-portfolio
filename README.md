# Portfolio for Miriam S. Exner

Miriam S. Exner is great designer with experience in UX/UI - web design, photography, videography and graphic design. Check out the current preview here https://mse.alexanderruppert.com/ [or find a less frequently updated version here: https://www.miriam-exner-design.de/ (Some features might be missing)]

## Description

This websites acts as a digital portfolio of Miriam's work. It's design and conception was made by Miriam and I developed her idea in code.

## Motivation

This is my first cooperation with a designer and first website development which got properly released. It's not part of any course work. It was really interesting to totally focus on the developing part of the creational process and deliver a product as close as possible to Miriam's vision and wishes.

## Tech/framework highlights

<b>Built mainly with </b>

- React
- React-Router
- Emotion
- PropTypes
- Node.js
- Express
- Nodemailer
- npm

## Features

General:
- Get an overview of the designers work
- Learn more about the designer in short teaser texts
- Check out the ‘About me’-section to get a closer look
- Browse through her work with image carousels
- Follow external links to her work by clicking on some images
- Use the contact form to send an email to the designer
- Find a detailed overview of each working field on subpages


## Code Example

```
  const { register, errors } = useForm({
    mode: "onBlur",
  });

  const sendEmail = (event) => {
    event.preventDefault();
    if (state.name && state.email && state.message) {
      setLoading(true);
      axios
        .post("/send", { ...state })
        .then((response) => {
          setResult(response.data);
          setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            tel: "",
          });
        })
        .catch(() => {
          setResult({
            success: false,
            message: "Something went wrong. Reload and try again later",
          });
        });
    }
  };
```

## Installation

Clone the repo. Run:

```
 npm install
```

If you like to test the contact form, you need a gmail account. Please create a file in the root directory called “.env” with the following content (replacing the <PLACEHOLDERS> with you personal login):


```
email=<YOUR.EMAIL.ADDRESS@GMAIL.COM>
password=<YOUR.PASSWORD>
```

Note: The website doesn’t save, share or otherwise endangers you login data if you chose to try it out. But as it is required to write down your login data in an unencrypted fashion, this still is a potential dangerous. To be totally safe, I strongly advise to create a new gmail account for this or use an unimportant one (e.g. your account for spam mails).

## How to start

To just preview the website run:

```
npm run start
```

To preview the website and try the contact form with your own account (see above):
Open two terminals.
In one run:

```
npm run server
```

And in the other:

```
npm run start
```


The app should start either way in your browser (usually on http://localhost:3000)
