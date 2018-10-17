// 1. Создать стандартный проект с main.js и папкой assets.
// В папке assets будут лежать файлы secret.txt, secret.png, 
// secret.jpg.Добавить контроль версий и gitignore.Сделать так, 
// чтобы все файлы с именем secret не отслеживались гитом.
// То есть найти способ, чтобы любой файл secret не зависимо 
// от расширения игнорировался.Если не получится, то добавьте 
// поштучно каждый файл

// 3. Создать package.json, установить туда nodemailer и попробовать 
// отправить самому себе письмо

const nodemailer = require('./3/node_modules/nodemailer');
const userMail = 'email';
const userPass = 'password';

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: userMail,
        pass: userPass
    },  
    tls: { rejectUnauthorized: false }
});

const mailOptions = {
    from: userMail,
    to: userMail,
    subject: 'Sending Email using Node.js',
    text: 'You recive message'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
}); 