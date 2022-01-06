import React from 'react'
import Illustration from './img/illustration-hero.svg';
import Musicicon from './img/icon-music.svg'

function App() {
        return <main>
        <section className="container">
       
            <div className='cart-summary'>
                <Cartimage />
                <Cartinfo />
                <Orders/>
            </div>
           
        </section>
       
    </main>
     
}

function Cartimage(){
    return(
      <div className="Illustration-hero">
            <img src={Illustration} alt="Illustration"/>
      </div>
    )
  }

  function Cartinfo(){
    return(
      <div className="cart-info">
          <h2>Order Summary</h2>
          <p>Lorem ipsum dolor sit amet consectetur 
              eligendi similique voluptatum, dolor
               ad reiciendis, atque soluta adipisci.</p>
      </div>
    )
  }

function Orders(){
    return(
      <div className="orders-box">
             <div className='annual-plan'>
                <img  src={Musicicon} alt="Music" />
                <div className='order-info'>
                    <h3>Annual Plan</h3>
                    <p>$59.99/year</p>
                </div>
                <button className='change-btn'>Change</button>
             </div>
            <button className='payment-btn'>Proceed to Payment</button>
            <button className='cancel-btn'>Cancel Order</button>
      </div>
    )
  }

export default App;