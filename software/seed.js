const mongoose = require('mongoose');
const Product = require('./models/Products');

const products = [
    {
        name:"Iphone 17pro",
        img:"https://phoneprice.in/wp-content/uploads/2025/07/Apple-iPhone-17-Pro-Max-600x600.jpg" ,
        price: 120000,
        desc: "Kidney bech do" 
    },
    {
        name:"Macbook m4 pro",
        img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSxfyDnBKUMlkfY6bcoM4KIw3mmjcUwG7ewZ_fAH7d89CBmiW01_8Q4AsMKOdjENK7wM8UH9bBOXF_AZ1hGaLj7TphYwddUCoMlhv75HhkS7Nh-hWpTKi6l",
        price: 230000 , 
        desc:"Khud bich jaao fir bhi nhi aega"
    },
    {
        name:"Iwatch",
        price:30000,
        img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTb6cvHV7p7RGEZQajnp4x0xmqC6brFBBZjKldS8A4G73pm1gTV9cAVjLvqdrWuXsxcYTfYwmYxd7uJ0BsqZwc_qh9k-kN0WeN-JApSW2GJpqLPnNKRSkui",
        desc:"le sakta hai chal isse to."
    },
    {
        name:"iPad Pro", 
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ8OVhOw9Dz2JHAjDX2TaBCYCxiElwpNLVaJ2Uc4ZoyyW_A7-_GBXIF2wwkHzIxkB18y6ygRGUG78dr-9fZifTu0zW_kgPMHextG4EA0V_FhzwXUuJvRUpinQ", 
        price: 150000, 
        desc: "Dono kidney janegi isme teri"
    },
    {
        name:"airpods" , 
        img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ5QqfwpmSj92Hfnz2hCY-j7zo5jUDiW4-tMBL_8BoGKqZj89LznmqCiGF5Og8CEh5wkjUFgwP0P8m1xgsYJuVV6HrRUkKlJdug1nQVJeGM75kiK0H0apchEQ" , 
        price: 20000 ,
        desc: "Bekar hai worth it nhi hai"
    }
]

async function seedDB(){
    // await Product.deleteMany({});  // for future deletion 
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;
 