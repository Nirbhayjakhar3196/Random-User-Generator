const userImg = document.getElementById('user-img')
const userName = document.getElementById('user-name')
const userEmail = document.getElementById('user-email')
const userCountry = document.getElementById('user-country')
const userAge = document.getElementById('user-age')
const btn = document.getElementById('btn')

async function getData() {

    try {

        btn.disabled = true
        btn.textContent = "loading..."

        userName.textContent = "loading..."
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()

        console.log(data);

        const user = data.results[0]
        console.log(user);
        
        
        userImg.src = user.picture.large
        userName.textContent = `${user.name.first} ${user.name.last}`
        userEmail.textContent = user.email
        userCountry.textContent = user.location.country
        userAge.textContent = `${user.dob.age}
        `
        
        
    } catch (error) {
        userName.textContent = "Failed to fetch user.."
        console.log(error);
    }
    finally{
        btn.disabled = false
        btn.textContent = "Generate User"

    }
    
}


btn.addEventListener('click', () => {
    getData()
})
getData()