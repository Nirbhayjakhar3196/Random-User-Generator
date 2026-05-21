const userImg = document.getElementById('user-img')
const userName = document.getElementById('user-name')
const userEmail = document.getElementById('user-email')
const userCountry = document.getElementById('user-country')
const userAge = document.getElementById('user-age')
const btn = document.getElementById('btn')

async function getData() {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()

    console.log(data);
    
}
getData()