const form = document.querySelector('.emailForm');
const currentDatetimeStr = currentDatetime.toISOString();

function send_msg(){

    var senderEmail = document.getElementById("senderEmail").value;
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var mymail = "sdilhara544@gmail.com"

    const fs = require('fs');

// Open the file in append mode
fs.appendFile('../data/contact.txt', currentDatetimeStr + name + mobile + senderEmail +  subject + message, (err) => {
  if (err) throw err;
  console.log('Data appended to file.');
});

    
  // Configure SMTPJS
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sdilhara544@gmail.com",
    Password : "EEE4E970000A9BF8D5A00B90D4BC9C77FC3E",
    To: mymail,
    From: senderEmail,
    Subject: subject,
    Body: message
  }).then(function(response) {
    alert("Email sent successfully!");
    // Clear form fields
    document.getElementById("emailForm").reset();
  }).catch(function(error) {
    console.error("Error sending email:", error);
    alert("An error occurred while sending the email. Please try again later.");
  });

};

form.addEventListener('submit', send_msg);