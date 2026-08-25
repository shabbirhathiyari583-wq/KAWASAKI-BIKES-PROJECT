# 🏍️ Kawasaki Bike Showcase

<p align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/CSS-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
</p>

<p align="center">
  <b>A modern Kawasaki motorcycle showcase website built using React.js.</b><br>
  This project focuses on Components, Props, Data Passing and Reusable UI.
</p>

---

## 📌 Project Overview

**Kawasaki Bike Showcase** is a React.js based motorcycle showcase project created to understand and practically implement the basic concepts of React.

The website is divided into three main reusable components:

- 🔝 Header
- 🏍️ Home
- 🔻 Footer

The motorcycle information is stored as an array and passed between components using **Props**. The Home component uses JavaScript's `.map()` method to dynamically create motorcycle cards.

---

## 🎯 Project Objective

The main objective of this project is to understand:

- React Functional Components
- Props
- Parent-to-Child Data Passing
- Component Import and Export
- `.map()` method
- Dynamic UI rendering
- Reusable Components
- Inline CSS
- External CSS
- React project structure

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| ⚛️ React.js | Building the user interface |
| ⚡ Vite | Project setup and development server |
| 🟨 JavaScript | Logic and motorcycle data |
| 🎨 CSS | Styling the motorcycle cards |
| 📦 JSX | Creating React components |
| 🔗 Props | Passing data between components |

---

# 📂 Project Structure

```text
KAWASAKI-BIKE-PROJECT
│
├── public
│
├── screenshots
│   ├── header.png
│   ├── home.png
│   └── footer.png
│
├── src
│   │
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

---

# 🔗 Component Connection

The complete application follows this flow:

```text
main.jsx
   │
   │ kawasakiBikes
   ▼
App.jsx
   │
   ├──────────────► Header.jsx
   │
   │ Props
   ▼
Home.jsx
   │
   │ kawasakiBikes
   ▼
Motorcycle Cards
   │
   ▼
Footer.jsx
```

### Data Flow

```text
kawasakiBikes Array
        ↓
     main.jsx
        ↓
      App.jsx
        ↓
Props: kawasakiBikes
        ↓
     Home.jsx
        ↓
props.kawasakiBikes
        ↓
      .map()
        ↓
Motorcycle Cards
```

---

# ⚛️ Components

## 1. Header Component

The `Header.jsx` component contains the complete navigation area.

It includes:

- Kawasaki branding
- E-Shop
- Kawasaki Global Web
- Find a Dealer
- Search icon
- Product navigation
- Parts & Accessories
- Clothing & Merchandise
- Purchase Tools
- Service
- News
- Green Academy
- W Heritage

The component is imported into `App.jsx`:

```jsx
import Header from "./components/Header";
```

Then implemented as:

```jsx
<Header />
```

The Header uses **Inline CSS** through a JavaScript `styles` object.

---

## 2. Home Component

The `Home.jsx` component displays all motorcycle cards.

It receives the bike data through Props:

```jsx
function Home(props) {
```

The data is accessed using:

```jsx
props.kawasakiBikes
```

The `.map()` method is then used to display each motorcycle:

```jsx
props.kawasakiBikes.map((bike, index) => (
```

Each card displays:

- Motorcycle image
- Company name
- Model name
- Price
- Description
- View Details button

---

## 3. Footer Component

The `Footer.jsx` component contains the website footer.

It includes three main navigation groups:

### PRODUCTS

- Motorcycles
- Parts & Accessories
- Clothing & Merchandise
- Purchase Tools

### SUPPORT

- Service
- Find a Dealer
- Test Ride
- Contact Us

### COMPANY

- News
- Green Academy
- W Heritage
- Kawasaki Global Web

The Footer is imported into `App.jsx`:

```jsx
import Footer from "./components/Footer";
```

And implemented as:

```jsx
<Footer />
```

The Footer uses **Inline CSS**.

---

# 🧩 Props Implementation

Props are the main React concept demonstrated in this project.

The motorcycle data is created in `main.jsx`:

```jsx
const kawasakiBikes = [
  {
    img: "...",
    companyName: "Kawasaki",
    modelName: "Ninja H2R",
    price: "₹79,90,000",
    description: "..."
  }
];
```

The data is passed to the `App` component:

```jsx
<App kawasakiBikes={kawasakiBikes} />
```

Then `App.jsx` passes the same data to `Home`:

```jsx
<Home kawasakiBikes={kawasakiBikes} />
```

Finally, `Home.jsx` receives the Props:

```jsx
function Home(props) {
```

And uses:

```jsx
props.kawasakiBikes
```

This demonstrates **Parent-to-Child Data Passing using Props**.

---

# 🔄 How the Application Works

The working process is:

```text
1. Motorcycle data is created
          ↓
2. Data is stored in kawasakiBikes array
          ↓
3. main.jsx passes the array to App
          ↓
4. App passes the array to Home using Props
          ↓
5. Home receives the Props
          ↓
6. .map() loops through every bike
          ↓
7. Individual motorcycle cards are created
          ↓
8. Header + Home + Footer are displayed
```

---

# 🎨 Styling

The project uses multiple styling approaches.

### Header

Header styling is written using Inline CSS:

```jsx
const styles = {
  navbar: {
    backgroundColor: "#3d3d3d",
  }
};
```

And applied using:

```jsx
<nav style={styles.navbar}>
```

### Home

The Home component uses an external CSS file:

```jsx
import "../App.css";
```

The CSS controls:

- Grid layout
- Card design
- Image size
- Typography
- Hover effects
- Button styling
- Spacing
- Background

### Footer

Footer styling is written using Inline CSS.

---
# 🖥️ Project Screenshots

## 🔝 Header

![Header](src/assets/Screenshot%202026-08-25%20164337.png)

The Header contains the Kawasaki branding and navigation menu.

---

## 🏍️ Home

![Home](src/assets/Screenshot%202026-08-25%20164426.png)
    

The Home section dynamically displays the motorcycle cards using Props and `.map()`.

---

## 🔻 Footer

![footer](src/assets/Screenshot%202026-08-25%20164441.png)

The Footer contains Products, Support and Company sections.

---

## 🎥 Project Demo
<p align="center">

Watch the complete working demonstration of the **Kawasaki Bike Project** by clicking the button below.
<p><strong>🎥 Click the button below to watch the complete working demonstration of this Image Slider project.</strong></p>

<a href="https://drive.google.com/file/d/1ENIK8ORodkYy4lBD24IGVVS_D_8GpLLz/view?usp=sharing" target="_blank">

<img src="https://img.shields.io/badge/▶️%20Watch%20Project%20Demo-Click%20Here-red?style=for-the-badge&logo=googleplay&logoColor=white">

</a>

</p>

# 🚀 How to Run the Project

### Step 1 — Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### Step 2 — Open the project

```bash
cd KAWASAKI-BIKE-PROJECT
```

### Step 3 — Install dependencies

```bash
npm install
```

### Step 4 — Start the development server

```bash
npm run dev
```

---

# 📚 What I Learned

While creating this project, I learned how to divide a React application into reusable components and how data can be passed from a parent component to a child component using Props.

### Key Learnings

✅ Creating Functional Components  
✅ Importing and Exporting Components  
✅ Passing Props  
✅ Receiving Props  
✅ Parent → Child Data Flow  
✅ Using `.map()` for Dynamic Rendering  
✅ Separating UI into Components  
✅ Using Inline CSS  
✅ Using External CSS  
✅ Creating Reusable UI  
✅ Understanding React Project Structure  

---

# ✨ Project Features

- 🏍️ Kawasaki-themed design
- ⚛️ React component architecture
- 🔄 Dynamic motorcycle rendering
- 📦 Props-based data transfer
- 🖼️ Motorcycle images
- 💰 Price display
- 📝 Motorcycle descriptions
- 🔘 View Details button
- 🔝 Custom Header
- 🔻 Custom Footer
- 🎨 Modern card-based UI
- ♻️ Reusable components

---

# 🔮 Future Improvements

The project can be extended with:

- 🔍 Search functionality
- 🏷️ Bike category filtering
- 💰 Price sorting
- ❤️ Favourite bikes
- 📄 Individual bike details
- 🛒 Add to Cart
- 📱 Improved mobile responsiveness
- 🌙 Dark/Light theme
- ⚡ React Router navigation

---

# 👨‍💻 Developer

## Shabbir Hathiyari

**React.js | JavaScript | HTML | CSS | Vite**

---

<p align="center">

### 🏍️ Kawasaki Bike Showcase

**Built with React.js ❤️**

`Components` • `Props` • `Data Passing` • `Reusable UI`

</p>



