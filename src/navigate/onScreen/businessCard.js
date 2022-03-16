import React from 'react'
import styled from "styled-components";
import Footer from "../footer";
import Navbar from "../header";

const BusinessLand= styled.section`
display:grid;
grid-template-columns:50% 50%;
height:720px;
margin-top:0%;
margin-bottom:-1%;
.img-container{
    object-fit:cover;
    overflow:hidden;
}
.data-container
{
    margin-top:10%;
    margin-left:10%;
    font-size:1.2em;
    height:80%;
    width:80%;
    text-transform:capitalize;
    font-family:"poppins";
    border:0.001em solid;
    border-radius:56px;
  
}
.txta
{ padding:4%; position:relative; }
.landImg
{
    object-fit:cover;
    height:760px;
}
.tre
{margin-top:-2%;}
.due
{margin-top:-0.6%}
@media screen and (max-width:800px){
    display:inline;
    .data-container {
        margin-left:0.2%;
        margin-top:2%;
        font-size:0.68em;
        width:85%;
        padding:6%;
        border:none;
    }
    .txta
{ padding:6%; margin:1.8%; }
    .img-container
    {height:400px;;
        width:100%;
    overflow:hidden;}
    .landImg
    {height:100%;
    width:100%;}
}`;
function BusinessCard() {
    React.useEffect(()=>{
        document.title="Digital Photo RC - Contatti"
    },[])
    return (
        <>
        <Navbar />
        <BusinessLand>
        <div className="img-container">
        <img src="https://i0.wp.com/4.bp.blogspot.com/-pN30-bal-1o/VwtDBbnbpkI/AAAAAAAAm2E/ULYKwzLdXXQL4joCsR2fvBKdtrDkuHTOw/s1600/Fotografo%2BProfessionista.jpg?ssl=1" alt="diocane" className="landImg"/>
        </div>
        <div className="data-container">
        <h1 className="txta">Contatti:</h1>
            <h1 className="txta"><img src="https://img.icons8.com/ios-filled/50/000000/phone-not-being-used.png" alt ="contIco" className="icona"/><a href="tel:096556570"> 096556570 </a></h1>
            <h1 className="txta"><img src="https://img.icons8.com/ios-filled/50/000000/send-mass-email.png" alt="contIco" className="icona due"/><a href="mailto:digitalphotorc@tiscali.it">Digitalphotorc@tiscali.it</a></h1>
            <h1 className="txta"><img src="https://img.icons8.com/ios-filled/50/000000/iphone.png" alt="contIco" className="icona tre"/> <a href="tel:3482766454"> 3482766454</a></h1>
        </div>
        </BusinessLand>
        <Footer/>
        </>
    )
}
export default BusinessCard;
