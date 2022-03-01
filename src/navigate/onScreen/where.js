/* eslint-disable react/style-prop-object */
import React from "react";
import styled from "styled-components";
import Footer from "../footer";
import Navbar from "../header";

const Dove = styled.section`
position:relative;
top:100%;
margin-top:0%;
height:780px;
display:grid;
grid-template-columns:50% 50%;
.text-data
{
    position:relative;
    top:38%;
    left:8%;
    height:400px;
    margin:1.2%;
}
.nome
{
 font-size:2.2rem;
 margin:0.8%;
 margin-left:1.2%;
 margin-bottom:-2.1%;
 line-height:92.6%;
 padding:0;

}
.sub {
    margin-top:4%;
    inline-size:80%;

}
.sub-sub {
    margin-top:2%;
    margin-bottom:2%;
}
.orari
{
    inline-size:60%;
    text-transform:Capitalize;
    font-size:1.8em;
    margin-top:-2%;
}
@media screen and (max-width:800px){
.text-data
{
    position:relative;
    top:4%;
    left:1.6%;
    height:100%;
    margin:1.2%;
}
display:grid;
grid-template-rows:50% 50%;
grid-template-columns:100%;
font-size:1.2rem;
.nome
{
 font-size:2rem;
 margin:0.8%;
 margin-left:0%;
 margin-bottom:-2.1%;
 
}
.orari
{
    font-size:0.9rem;
}
.map{
    left:2%;
}
}
`
const Adj =styled.section`
position:relative;
bottom:0;
width:100%;
margin:0;
margin-top:0%`



;

const Where = () => {
    React.useEffect(()=>{
        document.title="Digital Photo RC - Dove Siamo"
    },[])
    return(
    <>
        <Navbar />

        
        <Dove>
        <iframe title="loco" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.786624508083!2d15.635810915326928!3d38.09863017970184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13145a81b22412f7%3A0x869c14256a141cbc!2sDIGITAL%20PHOTO%20DI%20FRANCO%20FONTANA!5e0!3m2!1sit!2sit!4v1645452317694!5m2!1sit!2sit" width="100%" height="102%" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        <div className="text-data"><h1 className="txt nome">Digital Photo di Fontana Francesco</h1>
        <h3 className="txt sub">Via Nicola Furnari, 47, 89129 Reggio Calabria RC.</h3>
        <h3 className="txt sub-sub">Orari:</h3>
        <h5 className="txt orari">lunedì-venerdì:
9.00:20.00

sabato-domenica:
Chiuso</h5>
        </div>
        </Dove>
        
    <Adj>
    <Footer/>
    </Adj>
    </>)
}
export default Where;