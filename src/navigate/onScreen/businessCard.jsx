import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';
import Navbar from '../header';

const BusinessLand = styled.section`

height:800px;
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
    top:28px;
    left:122px;
    font-size:1.2em;
    height:88%;
    width:80%;
    text-transform:capitalize;
    font-family:"poppins";
    border:0.001em solid;
    border-radius:12px;
    background:#ececec;
   
    
  
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
  top:40px;
  vertical-align:super;
  height:200px;
}
.info-container
{
  position:relative;
  left:64px;
  top:40px;
}
.data-header
{
  position:relative;
  left:64px;
  top:22px;
}
.info-header
{
  position:relative;
  top:22px;
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
    height:640px;
    
    .data-container {
      margin:0;
      
        position:relative;
        top:32px;
        left:22px;
        height:70%;
        font-size:0.62em;
        width:80%;
        padding:6%;
        border:none;
    }
    .icona
    {
        height:24px;
        margin:0;
        position:relative;
        top:12px;
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
            <span class="material-icons icona">
              phone_in_talk
            </span>

         
            <a href="tel:096556570" className="contact"> 096556570 </a>
        
<span class="material-icons icona">
email
</span>
            <a href="mailto:digitalphotorc@tiscali.it" className="contact">
         
              Digitalphotorc@tiscali.it
          
              </a>
          
<span class="material-icons icona">
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
