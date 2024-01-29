// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <header>
        <h1>Genotek Expansion Joint Covers</h1>
        <p>Your Solution for Quality Joint Protection</p>
      </header>
      <section className="hero">
        <img src="https://scontent.fpat2-4.fna.fbcdn.net/v/t39.30808-6/309438771_433034612265814_8773789142768926789_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=JtJ7da5WsokAX_u8ekU&_nc_ht=scontent.fpat2-4.fna&oh=00_AfC6_V1opPBkOgy78XRW1LdNjKziGecftjUUrStegHEdNg&oe=65BC746B" />
        <div className="cta">
          <h2>Enhance Your Project with Genotek</h2>
          <p>Explore our high-quality expansion joint covers designed for durability and aesthetics.</p>
          <button onClick={handleFormToggle}>Get a Quote</button>
        </div>
      </section>
      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Durable Materials</li>
          <li>Easy Installation</li>
          <li>Aesthetic Designs</li>
        </ul>
      </section>
      <section className={`contact-form ${showForm ? 'show' : ''}`}>
        <h2>Get a Quote</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default App;
