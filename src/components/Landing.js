import React from 'react'
import image1 from "../images/image1.png";
import "../style/Landing.css"
import service1card from "../cards/service1card.png";
import service2card from "../cards/service2card.png";
import service3card from "../cards/service3card.png";
import service4card from "../cards/service4card.png";
import Rectangle6 from "../cards/Rectangle6.png";
import map from "../images/map.png"
import logovinay from "../images/logovinay.png";
import Rectangle8 from "../images/Rectangle8.png";
// import Accordin from './Accordin';
function Landing() {
  return (
    <div>

    <div className='myImage'>
        <img src={image1} alt='none'/>
    </div>
    <div className="delievery">
      Delievery hai? <br/>
    <h1>#HoJayega!</h1>  
    </div>

    <div className='rec'>
    <img className='img1' src={service1card} alt='none'></img>
    <img className='img2' src={service2card} alt='none'></img>
    <img className='img3' src={service3card} alt='none'></img>
    <img className='img4' src={service4card} alt='none'></img>
    <img className='img5' src={Rectangle6} alt='none'></img>
    </div>

    <div className="white-box">
        Moving a billion dreams ahead, one delivery at a time. Pursuing an 
        <br/>
        unsaid promise to deliver anything, anywhere, anytime with the 
        <br/>
        collaborative efforts of our driver - partners.
    </div>

    <div className="indian-map">
    And thanks to you, we are growing each &
    <br/>
    every day!

    <div className="nine">
      19+
    </div>

    <div className="cities">
      Cities
    </div>

    <div className="fivelakh">
      5 Lakh+
    </div>

    <div className="driverpartner">
    Driver Partners
    </div>

    <div className="onecrore">
      1 Crore+
    </div>

    <div className="customer">
      Customers
    </div>

    <div className="tencrore">
      10 Crore+
    </div>

    <div className="trip">
      Trips
    </div>

    <div className="map">
      <img src={map} alt='none'></img>
    </div>

    <div className="para">
   <p> We are serving in Delhi NCR, Bengaluru, Mumbai, Hyderabad, Ahmedabad, Jaipur, Pune, Kolkata, Surat, Chennai, Coimbatore, Indore, 
    <br/>
    Nagpur, Chandigarh, Lucknow, Vadodara, Ludhiana, Kochi, and Nashik.</p>
    </div>

    <div className="heading">
      <h6>SOME WORDS FROM OUR HAPPY CUSTOMERS</h6>
    </div>

    <div className="rec8">
      <img src={Rectangle8} alt='none'></img>
    </div>

    <div className="imgicon">
       <img src={logovinay} alt='none'></img>
    </div>

    <div className="name1">
      Vinay
    </div>

    <div className="nagpur1">
      Nagpur
    </div>

    <div className="mytext">
    “Way better than naaka <br/>
     waalas. Have shifted all my <br/>
     logistics needs to Porter and I <br/>
     can now safely focus on my <br/>
     business growth. Amazing <br/>
     service!”
    </div>

    <div className="rec9">
      <img src={Rectangle8} alt='none'></img>
    </div>

    <div className="imgicon2">
       <img src={logovinay} alt='none'></img>
    </div>
    <div className="name2">
      Vinay
    </div>

    <div className="nagpur2">
      Nagpur
    </div>

    <div className="mytext2">
    “Way better than naaka <br/>
     waalas. Have shifted all my <br/>
     logistics needs to Porter and I <br/>
     can now safely focus on my <br/>
     business growth. Amazing <br/>
     service!”
    </div>

    <div className="rec10">
      <img src={Rectangle8} alt='none'></img>
    </div>

    <div className="imgicon3">
       <img src={logovinay} alt='none'></img>
    </div>
    <div className="name3">
      Vinay
    </div>

    <div className="nagpur3">
      Nagpur
    </div>

    <div className="mytext3">
    “Way better than naaka <br/>
     waalas. Have shifted all my <br/>
     logistics needs to Porter and I <br/>
     can now safely focus on my <br/>
     business growth. Amazing <br/>
     service!”
    </div>
    </div>

    {/* <div className="whitepage">
      <h1>Frequently asked Questions</h1>
      <p>Here are some of the top FAQs to support you. Please do feel free to reach out to us for any <br/> questions that you might have had but are not answered by the following.</p>
    </div>
    */}
</div>

  )
}

export default Landing