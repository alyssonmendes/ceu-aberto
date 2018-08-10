const name = document.querySelector('input[type=text]')
const submit = document.querySelector('input[type=submit]')
const helloMessage = document.querySelector('#hello-message')



const url = `/hello.php?name=${name.value}`
fetch(url)
    .then(res => res.json())
    .then(json => loadHello(json))


function loadHello(message) {
    helloMessage.innerHTML = message.body
}