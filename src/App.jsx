import React from "react";

const productData = [
  {
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    photoName: "/laptop.png",
    soldOut: false,
  },
  {
    name: "Smartphone X",
    description: "Latest model with stunning display.",
    price: 800,
    photoName: "/smartphone.png",
    soldOut: false,
  },
  {
    name: "Wireless Headphones",
    description: "Noise-cancelling headphones with great sound quality.",
    price: 200,
    photoName: "/headphones.png",
    soldOut: false,
  },
  {
    name: "Smartwatch Z",
    description: "Stylish smartwatch with fitness tracking features.",
    price: 150,
    photoName: "/smartwatch.png",
    soldOut: false,
  },
  {
    name: "Gaming Console",
    description: "Powerful gaming console for endless fun.",
    price: 400,
    photoName: "/console.png",
    soldOut: true,
  },
  {
    name: "4K TV",
    description: "Ultra HD television with vibrant colors.",
    price: 1000,
    photoName: "/tv.png",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <Catalog />
      <Footer />
    </>
  );
}

function Header() {
  const hour = new Date().getHours();
  console.log(hour);

  const openHourse = 9;
  const closeHourse = 21;

  const isOpen = hour >= openHourse && hour < closeHourse;

  return (
    <header>
      <h1>Electronik Store</h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#catalog">Catalog</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact ">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        {isOpen ?
          <p>
            We are current open. Hours: {openHourse}:00 - {closeHourse}:00 :
          </p>
        : <p>
            We are closed. Open from: {openHourse}:00 - {closeHourse}:00
          </p>
        }
      </div>
    </header>
  );
}

/* function Header() {
  return React.createElement(
    "header",
    null,
    React.createElement("h1", null, "Elec tronik"),
  );
} */

function Catalog() {
  return (
    <main>
      <ul>
        <Product />
      </ul>
    </main>
  );
}

function Product() {
  const products = [...productData];

  return (
    <li>
      <img src={products[1].photoName} alt={products[1].name} />
      <div>
        <h3>{products[1].name}</h3>
        <p>{products[1].description}</p>
        <span>{products[1].price}</span>
      </div>
    </li>
  );
}

function Footer() {
  return <footer>Footer</footer>;
}
export default App;
