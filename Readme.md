# 🎲 Random User Generator

A modern and interactive Random User Generator web application built using **HTML, CSS, and JavaScript**.  
This project fetches real random user data from an API and dynamically updates the UI.

---

# 🚀 Live Features

✅ Generate random users instantly  
✅ Fetch real-time data using API  
✅ Display user image, name, email, country, and age  
✅ Loading state while fetching data  
✅ Error handling using try/catch  
✅ Interactive button hover effects  
✅ Smooth card hover animation  
✅ Responsive and clean UI  

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|----------|
| HTML5 | Structure |
| CSS3 | Styling & Animations |
| JavaScript (ES6) | Functionality |
| Fetch API | API Requests |
| Random User API | Random User Data |

---

# 🌐 API Used

## Random User API

```bash
https://randomuser.me/api/
```

This API provides randomly generated user data including:
- Name
- Email
- Profile Picture
- Country
- Age
- Gender
- And more...

---

# 📁 Project Structure

```bash
random-user-generator/
│
├── index.html
├── style.css
└── script.js
```

---

# 📚 Concepts Practiced

This project helped practice and understand:

## JavaScript Concepts
- DOM Manipulation
- Event Listeners
- fetch API
- async/await
- Promises
- try/catch/finally
- Dynamic UI Rendering

## CSS Concepts
- Flexbox
- Hover Effects
- CSS Transitions
- Box Shadow
- Responsive Centering
- Gradient Backgrounds
- Card UI Design

---

# 🧠 How the Project Works

```text
Button Click
   ↓
Fetch API Request
   ↓
Receive User Data
   ↓
Extract Required Information
   ↓
Update DOM Dynamically
   ↓
Display New User
```

---

# 📸 UI Preview

The application displays:

- 👤 Profile Image
- 🧑 Full Name
- 📧 Email
- 🌍 Country
- 🎂 Age
-  ♀ Gender
with a modern card-based interface.

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Nirbhayjakhar3196/Random-User-Generator.git
```

---

## 2️⃣ Open the Project Folder

```bash
cd random-user-generator
```

---

## 3️⃣ Run the Project

Simply open:

```bash
index.html
```

in your browser.

---

# 🔥 Main JavaScript Logic

## Fetching API Data

```js
const response = await fetch('https://randomuser.me/api/');
const data = await response.json();
```

---

## Updating DOM Dynamically

```js
userName.textContent =
`${user.name.first} ${user.name.last}`;
```

---

## Error Handling

```js
try{
   // fetch data
}
catch(error){
   console.log(error);
}
finally{
   // cleanup
}
```

---

# 🎨 UI Features

- Gradient background
- Smooth hover animations
- Floating card effect
- Responsive centered layout
- Circular profile image
- Modern button design

---

# 🚀 Future Improvements

Planned upgrades for the project:

- 🌙 Dark Mode
- 📋 Copy Email Button
- ❤️ Save Favorite Users
- 👥 Multiple User Cards
- 🔍 Search Functionality
- ⏳ Loading Spinner
- 🎭 Skeleton Loading Effect

---

# 💡 What I Learned

Through this project, I learned:

- How APIs work
- How frontend communicates with backend services
- Handling asynchronous JavaScript
- Rendering dynamic data on UI
- Creating modern responsive layouts
- Writing cleaner and reusable code

---

## 🚀Live Demo


# 👨‍💻 Author

## Nirbhay

Built with ❤️ while learning Frontend Development.

---

# ⭐ If You Like This Project

Give this repository a ⭐ on GitHub and follow my learning journey 🚀