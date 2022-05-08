import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const url = 'https://i.ibb.co/hcNcrQp/Senza-titolo-1.png';

const Foot = styled.div`
background-color:#1d1d1d;
height:20vh;
width:100vw;
display:flex;
justify-content:space-evenly;
align-items:center;
@media screen  and (max-width:680px){
  flex-direction:column;
  padding-bottom:20px;
}
        `;
const DataWrap = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:38vw;
color:#f6f6f6;
margin:2rem;
margin-right:8rem;
@media screen  and (max-width:680px){
  display:none;
}
`;
const SocialWrap = styled.div`
width:20vw;
display:flex;
justify-content:space-evenly;
.social-icon{
  height:10vh;
 
  

}`;

function Footer() {
  return (
    <section className="footer">
      <Foot>
        <Link to="/"><img src={url} alt="Logo" className="logo" /></Link>
        <DataWrap>
          <p>
            Digital Photo di Fontana Francesco, via Nicola Furnari 47, Reggio Calabria 89129
            <br />
            {' '}
            P.Iva 02225453807
            <br />

            Negozio di Fotografia & Video. Vendita di articoli inerenti la fotografia e il digitale

          </p>
        </DataWrap>
        <SocialWrap>
          <a href="https://www.instagram.com/digitalphotorc"><img src="https://img.icons8.com/color/96/000000/instagram-new--v1.png" alt="icona" className="social-icon" /></a>
          <a href="https://www.facebook.com/digitalphotorc"><img src="https://img.icons8.com/color/96/000000/facebook.png" alt="icona" className="social-icon" /></a>
          <a href="https://www.youtube.com/channel/UCQuBWv9iTaPV6kEuHXiaIAQ/featured"><img src="https://img.icons8.com/color/96/000000/youtube-play.png" alt="icona" className="social-icon" /></a>

        </SocialWrap>
      </Foot>

    </section>
  );
}
export default Footer;
