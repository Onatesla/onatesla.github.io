/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';
import Navbar from '../header';
import Slider from '../slider';

const WorkGrid = styled.div`
 height:max-content;
 margin-bottom:22vh;
 display:flex;
 flex-direction:column;
 justify-content:start;
 
 position:relative;
 left:1.2vw;
 width:100vw;
 .carosello{
   width:72vw;
  position:relative;
  left:12.8vw;
   align-items:center;
   justify-content:center;
   border-radius:2px;
   margin-bottom:12vh;
 }
 .photo{
   border-radius:8px;
   width:72vw;
   height:68vh;
   align-self:center;
 }
 .carotxt
 {font-size:2.2em;
    font-family:"poppins";
text-align:center;
display:flex;
align-items:center;
justify-content:center;

margin-left:0;
height:100px;
}



.service-card{
    display:flex;
    justify-content:start;
    align-items:center;
    
    background-color:white;
    color:#1d1d1d;
    margin:0%;
    height:26vh;
    width:36vw;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0.001em 0.001em 18px rgba(0, 0, 0, .08); 
}
.service-icon
{height:22vh;
width:30vw;
position:relative;
left:6vw;
top:0%;}
@media screen and (max-width:800px){
    margin-top:2.2%;
    .photo{
        height:80%;;
    }
.carotxt{
    font-size:1.2rem;
}
}
    @media screen and (max-width:1420px) {
   left:0vw;
  .carosello{
    left:12.8vw;
  } }


 `;
const ServiceContainer = styled.div`
    position:relative; 
    top:4vh;
    left:8vw;
    display:grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 30%  30%  30%;
    grid-gap:4vw;
    height:max-content;
    width:80vw;
    
    .txt-container{
        
        position:relative;
        left:2vw;
        font-family:"DM sans";
    }
    .service-name{
        
        padding:2%;
        border-radius:32px;
        
    }
    .service-card
    {
        left:-12%;
        padding:2%;
    }
    .service-desc
    {
    left-margin:2.8%;
    padding:2%;}
    @media screen and (max-width:1420px) {
        height:fit-content; 
        width:100%;
        margin-bottom:0.2%;
        display:flex;
        flex-direction:column;
        position:relative;
        left:0.1vw;
        
        .service-icon
        {
            height:100%;
            width:36vw;
            padding:0;
            margin:0;
            border-radius:8px;
            
            
        }
        .txt-container{
          width:52vw;
        }
        .service-card{
            display:flex;
            justify-content:space-evenly;
            align-items:center;

            color:#1d1d1d;
            position:relative;
            left:4vw;
            height:32vh;
            width:86vw;
            border-radius:12px;
            box-shadow:0.001em 0.001em 18px rgba(0, 0, 0, .12);
        }
        .service-name{
            font-size:1.2rem;
            
             margin:0; 
        }
        .service-desc{
            font-size:0.8rem;
            margin-top:-2px;
            padding:2%;
        }
        
    }
    @media screen  and (max-width:680px){
 .service-card{
   height:18vh;
 }

}`;

function Photogrid() {
  const data = React.useMemo(() => [
    {
      icona: 'https://www.darrigodiamantiroma.it/wp-content/uploads/2019/04/fede-sito.jpg',
      nome: 'Matrimoni e Battesimi',
      descrizione: 'Servizi foto e video, con possibilità di trailer e di stampe in sala.',
    },
    {
      icona: 'https://i.ibb.co/9rcNBz8/icona.png',
      nome: 'Eventi / Recite',
      descrizione: 'Servizio di ripresa e fotografia di recite, compleanni, saggi e comunioni',
    },
    {
      icona: 'https://www.fotografia-digitale.info/wp-content/uploads/2014/09/fotografie-matrimonio.jpg',
      nome: 'Album Digitali',
      descrizione: 'Stampa e rilegatura di album digitali di vario formato.',
    },
    {
      icona: 'https://www.tuogadget.com/wp-content/uploads/2020/01/tazza-personalizzata-colorata-COVER.jpg',
      nome: 'Gadget',
      descrizione: 'Tazze, Plaid, Cuscini, Stampa su Tela, Pannelli, Portachiavi e altro ancora',
    },
    {
      icona: 'https://www.periscopio.biz/images/fotografia/stampa/FOTO2.gif',
      nome: 'Stampa Foto',
      descrizione: 'Stampa su carta fotografica ad alta resa in 30 minuti in vari formati.',
    },
    {
      icona: 'https://www.investireoggi.it/risparmio/wp-content/uploads/sites/9/2016/08/videocassetta.jpg',
      nome: 'Conversione in digitale di cassette',
      descrizione: 'conversione in vari formati digitali di cassette super8, vhs, 8mm e mini-dv.',
    },
  ], []);
  React.useEffect(() => {
    document.title = 'Digital Photo RC - I Nostri Lavori';
  }, []);
  return (
    <article>
      <Navbar />
      <section className="photogrid">
        <WorkGrid>
          <div className="carosello">
            <h1 className="txt carotxt"> Le nostre foto </h1>
            <Slider className="slide" />
          </div>
          <ServiceContainer>
            {data.map((el) => (
              <div className="service-card">
                <div className="txt-container">
                  <h1 className="service-name">
                    {el.nome}
                    {' '}
                  </h1>
                  <h4 className="service-desc">{el.descrizione}</h4>
                </div>
                <img src={el.icona} alt="icona" className="service-icon" />
              </div>
            ))}
          </ServiceContainer>
        </WorkGrid>
      </section>

      <Footer />

    </article>
  );
}

export default Photogrid;
