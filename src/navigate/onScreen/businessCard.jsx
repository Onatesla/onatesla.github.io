import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';
import Navbar from '../header';

const BusinessLand = styled.section`

height:82vh;
margin-top:0%;
margin-bottom:0%;
background-image:url("https://i0.wp.com/4.bp.blogspot.com/-pN30-bal-1o/VwtDBbnbpkI/AAAAAAAAm2E/ULYKwzLdXXQL4joCsR2fvBKdtrDkuHTOw/s1600/Fotografo%2BProfessionista.jpg?ssl=1");
.img-container{
    object-fit:cover;
    overflow:hidden;
}
.contact
{
  font-size:16px;
  font-weight:900;
}
.data-container
{
   
    position:relative;
    top:88px;
    left:122px;
    font-size:1.2em;
    height:60vh;
    width:82vw;
    text-transform:capitalize;
    font-family:"poppins";
    border:0.001em solid;
    border-radius:12px;
    background:rgba(255,255,255, 0.8);
    display:flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
   
    
  
}
.cont-container
{
  display:grid;
  grid-template-columns:24px 100px;
  grid-template-rows:24px 24px 24px;
  column-gap:8px;
  row-gap:40px;
  font-size:0.6rem;
  position:relative;
  left:64px;
  top:0px;
  vertical-align:super;
  height:200px;
}
.info-container
{
  position:relative;
  left:64px;
  top:0px;
}
.data-header
{
  position:relative;
  left:64px;
  top:0px;
}
.info-header
{
  position:relative;
  top:0px;
  left:64px;
}
.txta
{
  
  text-align:left;
  position:relative;

}
.info-para
{ font-size:1rem;
  inline-size:70%;
}
.icona
{
  height:24px;
  width:24px;
  margin:0px;
  position:relative;
  
  justify-items:center;
}
.landImg
{
    object-fit:cover;
    height:760px;
}

@media screen and (max-width:800px){
    background-size:contain;
    height:100vh;
    
    .data-container {
      margin:0;
      
        position:relative;
        top:32px;
        left:10vw;
        height:80vh;
        min-height:80vh;
      max-heigth:84vh;
        font-size:0.62em;
        width:80vw;
       
        border:none;
    }
    .cont-container{
      left:8vw;
      
      column-gap:4vw;
    }
    .info-container{
      left:8vw;
     
    }
    .icona
    {
        height:12px;
        margin:0;
        position:relative;
        
    }
    .txta
{  }
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
            <span className="material-icons icona">
              phone_in_talk
            </span>

            <a href="tel:096556570" className="contact"> 096556570 </a>

            <span className="material-icons icona">
              email
            </span>
            <a href="mailto:digitalphotorc@tiscali.it" className="contact">

              Digitalphotorc@tiscali.it

            </a>

            <span className="material-icons icona">
              phone_iphone
            </span>

            {' '}
            <a href="tel:3482766454" className="contact"> 3482766454</a>

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
