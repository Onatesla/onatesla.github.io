import React from 'react';
import Navbar from "../header";
import Video from '../video';
import Submit from '../form';
import Footer from '../footer';
import Sliderone from '../slider';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Caros = styled.div`
heigth:100%;
width:100%;
z-index:-1;
object-fit:cover;
margin-bottom:-0.8%;
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
    width:92%;
    height:300px;
   
    margin:0;
    margin-left:3.8%;
    margin-top:-100%;
    z-index:-1;
    

}

`
const Cta = styled.div`
display:grid;
grid-template-columns:100%;;
grid-template-rows:50% 20% 30%;
height:1400px;

.cta-landing{
    position:relative;
    font-family:Poppins;
    top:20%;
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
    border-radius:24px;
    background:#1d1d1d;
    color:#f6f6f6;
}
.cta-btn:hover
{
    transform: scale(1.08) ;
}
@media screen and (max-width:800px) {
display:grid;
grid-template-rows:50% 10%;
grid-template-columns:100%;
height:600px;
margin:0;
margin-top:0px;
.showgrid
{  height:300px;
   width:100%;
    margin-left:0%;
}
.land{
    width:100%;
    margin:0;
}
align-items:center;
    .cta-landing{
        position:relative;
        font-family:Poppins;
        margin:0;
        margin-top:2%;
        top:-60%;
        left:3.2%;
        width:94%;
        height:50%;
        font-size:0.8em;
        align-items:center;
        text-align:center;}

`;

const Home = () => {
    React.useEffect(()=>{
        document.title="Digital Photo RC - Home"
    },[])
    return(
        <>
        <div>
            <Navbar/ >
            </div>
            <Cta>
            
           
            <article className="showgrid">
            <Caros>
            <img src="https://i.ibb.co/3hNcP1g/EGBi2.jpg" alt="landing_image" className="photo land" />
            </Caros>
            <div className="cta-landing" >
              <h1 className="cta-text">
                Vuoi informazioni sulla data per un matrimonio?
              </h1>
              <Link to="/contact"> <button type="button" className="cta-btn">Contattaci Adesso</button></Link>
            </div>
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
