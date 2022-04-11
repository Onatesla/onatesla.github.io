import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';
import Navbar from '../header';

const BusinessLand = styled.section`
display:grid;
grid-template-columns:100%;
height:720px;
margin-top:0%;
margin-bottom:-1%;
background-image:url("https://i0.wp.com/4.bp.blogspot.com/-pN30-bal-1o/VwtDBbnbpkI/AAAAAAAAm2E/ULYKwzLdXXQL4joCsR2fvBKdtrDkuHTOw/s1600/Fotografo%2BProfessionista.jpg?ssl=1");
.img-container{
    object-fit:cover;
    overflow:hidden;
}
.data-container
{
    margin-top:44px;
    margin-left:10%;
    font-size:1.2em;
    height:88%;
    width:80%;
    text-transform:capitalize;
    font-family:"poppins";
    border:0.001em solid;
    border-radius:56px;
    background:#ececec;
    display:grid;
    grid-template-rows:18% 30% 18% 40%;
    
  
}
.cont-container
{
  display:grid;
  grid-template-columns:10% 80%;
  grid-template-rows:60px 60px 60px;
  font-size:0.6rem;
  position:relative;
  left:82px;
}
.info-container
{
  position:relative;
  left:82px;
}
.data-header
{
  position:relative;
  left:22px;
  top:22px;
}
.info-header
{
  position:relative;
  left:22px;
}
.info-para
{ font-size:1rem;
  inline-size:70%;
}
.icona
{
  height:40px;
  margin:0px;
  margin-left:20px;
}
.landImg
{
    object-fit:cover;
    height:760px;
}

@media screen and (max-width:800px){
    display:inline;
    .data-container {
        margin-left:0.2%;
        margin-top:2.8%;
        font-size:0.62em;
        width:85%;
        padding:6%;
        border:none;
    }
    .icona
    {
        height:32px;
    }
    .txta
{ padding:5%; margin:2%; }
    .img-container
    {height:400px;;
        width:100%;
    overflow:hidden;}
    .landImg
    {height:100%;
    width:100%;}
}`;
function BusinessCard() {
  React.useEffect(() => {
    document.title = 'Digital Photo RC - Contatti';
  }, []);
  return (
    <>
      <Navbar />
      <BusinessLand>
       
        <div className="data-container">
          <h1 className="data-header">Contatti:</h1>
          <div className="cont-container">
            <img src="https://img.icons8.com/ios-filled/50/000000/phone-not-being-used.png" alt="contIco" className="icona" />
          <h1 className="txta">
            <a href="tel:096556570"> 096556570 </a>
          </h1>
            <img src="https://img.icons8.com/ios-filled/50/000000/send-mass-email.png" alt="contIco" className="icona due" />
          <h1 className="txta">
            <a href="mailto:digitalphotorc@tiscali.it">Digitalphotorc@tiscali.it</a>
          </h1>
          
            <img src="https://img.icons8.com/ios-filled/50/000000/iphone.png" alt="contIco" className="icona tre" />
            {' '}
          <h1 className="txta"> <a href="tel:3482766454"> 3482766454</a>
          </h1>
          </div>
      
        <h1 className="info-header">Info utili:</h1>
        <div className="info-container">
          <div className="info-data">
            <h4 className="info-para">
              Digital Photo è un azienda individuale per la fotografia e il photo/video editing.
              Il titolare e responsabile legale dell&apos;azienda è Francesco Fontana.
              P.iva 010202102202102.

           </h4>
          </div>
        </div>
        </div>
      </BusinessLand>
      <Footer />
    </>
  );
}
export default BusinessCard;
