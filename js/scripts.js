window.onscroll = function() { changeImage() }

function changeImage() {
    var scroll = window.scrollY + (window.innerHeight/3);

    Array.from(document.getElementsByClassName('img-section')).forEach(el => {
        el.classList.remove('active');

        if(el.offsetTop <= scroll && el.offsetTop + el.offsetHeight > scroll) {
            el.classList.add('active');
        }
    });
}

changeImage();

function sendMail() {
    var mailElement = document.getElementById('email');
    var mail = mailElement.value;

    var messageElement = document.getElementById('message');
    var message = messageElement.value;

    if(mail.length !== 0 && message.length !== 0) {
        Email.send({
                SecureToken : "06204797-44a0-4aba-aaf7-7d613bcf3a25",
                To : 'Tracky.app@gmx.net',
                From : "Tracky.app@gmx.net",
                Subject : "Income request - Tracky.web",
                Body : "E-Mail: " + mail + "; Message: " + message
        }).then(
            message => alert("Email send: " + message)            
        );

        mailElement.value = "";
        messageElement.value = "";
    } else {
        console.log("Email or message is empty.");
    }
}