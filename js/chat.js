const url = `https://api.sendgrid.com/v3/mail/send`
const mail = {
    "personalizations": [
      {
        "to": [
          {
            "email": "laerteb.medeiros@gmail.com"
          }
        ],
        "subject": "Céu aberto - "
      }
    ],
    "from": {
      "email": "from_address@example.com"
    },
    "content": [
      {
        "type": "text/plain",
        "value": "Hello, World!"
      }
    ]
  }
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer jZgTHxobTpefxDXZvSKKIg",
    },
    body: JSON.stringify(mail)
  }
  
  fetch(url, config)

function show_email(email){
    console.log(email)
}