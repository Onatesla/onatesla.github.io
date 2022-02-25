import React from 'react';
import Navbar from "../header";
import Video from '../video';
import Submit from '../form';
import Footer from '../footer';
import Sliderone from '../slider';
import styled from 'styled-components';

const Caros = styled.div`
heigth:100%;
width:100%;
z-index:-1;
object-fit:cover;
margin-bottom:2%;
.showgrid
{  heigth:1000px;
   width:100%;
    margin-left:22%;
}
@media screen and (max-width:800px) {
height:400px;;
margin-bottom:44%;
    .showgrid
{   display:flex;
    height:0;
    margin:0;
    
}
.photo{
    width:100%;
    height:400px;
    margin:0;
    margin-left:2%;
    margin-top:12%;
    

}

`
const Cta = styled.div`
display:grid;
grid-template-columns:50% 50%;
margin-bottom:2%;

.cta-landing{
    position:relative;
    font-family:Poppins;
    top:40%;
    left:22%;
    width:52%;
    height:50%;
    font-size:0.8em;
    margin:0;
    align-items:center;
    text-align:center;
    
    

}
.cta-btn
{
    border:solid black 1px;
    background:none;
    font-family:Poppins;
    padding:4%;
    font-size:2em;
    border-radius:36px;
    background:#1d1d1d;
    color:#f6f6f6;
}
@media screen and (max-width:800px) {
display:grid;
grid-template-rows:50% 50%;
grid-template-columns:100%;
margin:0;
align-items:center;
    .cta-landing{
        position:relative;
        font-family:Poppins;
        margin:0;
        margin-top:42%;
        top:0%;
        left:2%;
        width:98%;
        height:50%;
        font-size:0.8em;
        align-items:center;
        text-align:center;}

`;

const Home = () => {
    return(
        <>
        <div>
            <Navbar/ >
            </div>
            <Cta>
            <div className="cta-landing" >
              <h1 className="cta-text">
                anche tu vuoi queste foto per i tuoi momenti speciali?
              </h1>
              <button type="button" className="cta-btn">Contattaci adesso</button>
            </div>
           
            <article className="showgrid">
            <Caros>
            <Sliderone />
            </Caros>
            
            </article>
            </Cta>
        <Video></Video> 
        
        <section className = "contatti">
           <Submit />
        </section>
        <Footer></Footer>
        </>
        
    )
}

export default Home;
