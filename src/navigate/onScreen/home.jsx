import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../header';
import Video from '../video';
import Submit from '../form';
import Footer from '../footer';



const Cta = styled.div`
.background-img
{
  background-image:url("https://i.ibb.co/3hNcP1g/EGBi2.jpg");
  height:800px;
  width:100%;
  background-size:cover;
  background-repeat:no-repeat;
}
display:grid;
grid-template-columns:100%;;
grid-template-rows:50% 20% 30%;
height:1400px;

.cta-landing{
    position:relative;
    font-family:Poppins;
    top:220px;
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
height:800px;
margin:0;
margin-top:0px;
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
        margin-bottom:80px;
        top:220px;
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

        
          <div className="background-img">
            {/* <img src="https://i.ibb.co/0YtSZbF/Bruno-e-Federica-210821-35.jpg" alt="landing_image" className="photo land" /> */}
          </div>

          <div className="cta-landing">
            <h1 className="cta-text">
              Vuoi scoprire tutta la nostra gamma di servizi?
            </h1>
            <Link to="/photogrid">
              {' '}
              <button type="button" className="cta-btn">Guarda quello che possiamo fare per te </button>
            </Link>
          </div>
        
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
