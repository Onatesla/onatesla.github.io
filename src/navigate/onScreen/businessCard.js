import React from 'react'
import styled from "styled-components";
import Footer from "../footer";
import Navbar from "../header";

const BusinessLand= styled.section`
display:grid;
grid-template-columns:50% 50%;
height:720px;
margin-top:2%;
margin-bottom:-1%;
.img-container{
    object-fit:cover;
    overflow:hidden;
}
.data-container
{
    margin-top:28%;
    margin-left:10%;
    font-size:1.2em;
    text-transform:capitalize;
    font-family:"poppins";

}
.landImg
{
    object-fit:cover;
    height:760px;
}
@media screen and (max-width:800px){
    display:inline;
    .data-container {
        margin-left:2%;
        margin-top:8%;
        font-size:1em;
    }
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
            <h1 className="txta">Telefono: 096556570</h1>
            <h1 className="txta">email : paperino@photo.it</h1>
            <h1 className="txta">fax: 096556570</h1>
            <h1 className="txta">cellulare 1: 3482766454</h1>
            <h1 className="txta">cellulare 2: 3382364375</h1>
        </div>
        </BusinessLand>
        <Footer/>
        </>
    )
}
export default BusinessCard;
