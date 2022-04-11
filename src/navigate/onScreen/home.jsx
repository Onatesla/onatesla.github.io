import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../header';
import Video from '../video';
import Submit from '../form';
import Footer from '../footer';

const Caros = styled.div`
height:980px;
width:100%;
z-index:-1;
object-fit:cover;
margin-bottom:-0.8%;
background-image:url("https://i.ibb.co/3hNcP1g/EGBi2.jpg");
background-repeat:no-repeat;
background-size:cover;
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

`;
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
    height:80%;
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
    padding:2%;
    font-size:1.2em;
    border-radius:12px;
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
        height:60%;
        font-size:0.8em;
        align-items:center;
        text-align:center;}

`;

function Home() {
  React.useEffect(() => {
    document.title = 'Digital Photo RC - Home';
  }, []);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Cta>

        <article className="showgrid">
          <Caros>
            {/* <img src="https://i.ibb.co/0YtSZbF/Bruno-e-Federica-210821-35.jpg" alt="landing_image" className="photo land" /> */}
          </Caros>
          <div className="cta-landing">
            <h1 className="cta-text">
              Vuoi scoprire tutta la nostra gamma di servizi?
            </h1>
            <Link to="/photogrid">
              {' '}
              <button type="button" className="cta-btn">Guarda quello che possiamo fare per te </button>
            </Link>
          </div>
        </article>
      </Cta>
      <Video />

      <section className="contatti">
        <Submit />
      </section>
      <Footer />
    </>

  );
}

export default Home;
