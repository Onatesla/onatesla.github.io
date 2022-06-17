import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from '../header';
import Submit from '../form';
import Footer from '../footer';

const Cta = styled.div`
.background-img
{

  
  width:100vw;
  overflow:hidden;

}
.photo{
  height:100%;
  width:100vw;
  object-fit:fill;
}


.cta-landing{
    position:absolute;
    font-family:'DM sans', Poppins;
    top:18vw;
    left:8vw;
    height:400px;
    width:42vw;
    background-color:rgba(195,195,195 ,0.92);
    border-radius:8px;
    font-size:1em;
    font-weight:400;
    color:black;
    gap:12rem;
    margin:0;
    display:flex;
    align-items:center;
    justify-content:center;
  
    

}
.paragraph{
  font-weight:900;

  margin-top:18px;
  margin-bottom:22px;
  letter-spacing:2px;
}
.cta-text{
  font-weight:600;
}

.ctaImg{
  height:280px;
  border-radius:286px;
}
.ctaTextContainer{
  text-align:left;
  
  width:32vw;
}
.cta-btn
{
    border:solid black 1px;
    background:none;
    font-family:'DM sans';
    padding:1rem;
    position:relative;
    left:0rem;
    font-size:1em;
    border-radius:12px;
    background:#1d1d1d;
    color:#f6f6f6;
}
.cta-btn:hover
{
    transform: scale(1.08) ;
}
@media screen and (max-width:800px) {
display:flex;
flex-direction:column;
height:540px;
margin:0;
margin-top:0px;
justify-content:start;
.land{
    width:100vw;
    margin:0;
}
align-items:center;
    .cta-landing{
        position:relative;
        font-family:Poppins;
        margin:0;
        border-radius:12px;
        left:0vw;
        top:2vh;
        width:92vw;
        height:40vh;
        font-size:0.6em;
        align-items:center;
        text-align:center;}
.ctaTextContainer{
  text-align:left;
  width:280px;
}
.cta-btn {
  font-size:1.2rem
}

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
          <img src="https://i.ibb.co/0YtSZbF/Bruno-e-Federica-210821-35.jpg" alt="landing_image" className="photo land" />
        </div>

        <div className="cta-landing">
          <div className="ctaTextContainer">
            <h1 className="cta-text">
              Da sempre, rendiamo i tuoi ricordi qualcosa che rimane.
              <br />
              <p className="paragraph"> Per sempre.</p>
            </h1>
            <Link to="/photogrid">
              <button type="button" className="cta-btn">Guarda quello che possiamo fare per te </button>
            </Link>
          </div>

        </div>

      </Cta>

      <Submit />

      <Footer />
    </>

  );
}

export default Home;
