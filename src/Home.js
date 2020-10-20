import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter/SABSN2GL/Header/N2GL_PC_header_English.jpg"
        />
        <div className="home__row">
          <Product
            id="01"
            title="Apple iPhone 11 (128GB) - Black (Includes EarPods, Power Adapter)"
            price={54999.0}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg"
          />
          <Product
            id="02"
            title="AmazonBasics 6 kg Fully-Automatic Front Load Washing Machine (Grey/Silver, In-built Heater, Self cleaning technology) "
            price={12999.0}
            rating={3}
            img="https://images-na.ssl-images-amazon.com/images/I/81X52AI2ovL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="03"
            title="Cracking the Coding Interview (Indian Edition)"
            price={445.0}
            rating={5}
            img="https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg"
          />
          <Product
            id="04"
            title="AMZ Exclusive Soft Rocking Chair Cushions Home Cotton Cushion Long Chair Pad (48 x 16 inches,Set of 1) (48 x 16 Inches, Chocolate Brown)"
            price={599.0}
            rating={3}
            img="https://images-na.ssl-images-amazon.com/images/I/71zfMbaHK9L._SL1001_.jpg"
          />
          <Product
            id="05"
            title="VILLS LAURRENS Analogue Men's & Boys' Watch (Black Dial Black Colored Strap)"
            price={329.0}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/71SPHNugxEL._UL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="06"
            title="Onida 108 cm (43 Inches) Fire TV Edition Full HD Smart IPS LED TV 43FIF (Black) (2019 Model) "
            price={21900.0}
            rating={4}
            img="https://images-na.ssl-images-amazon.com/images/I/81bNwWF3Z2L._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
