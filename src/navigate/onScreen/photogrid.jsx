/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';
import Navbar from '../header';
import Slider from '../slider';

const WorkGrid = styled.div`
 padding:6%;
 margin-top:-6%;
 width:90%;
 .carotxt
 {font-size:3em;
    font-family:"poppins";
text-align:center;
text-transform:capitalize;
margin-left:0;
padding:2%;}



.service-card{
    display:grid;
    grid-template-columns:50% 50%;
    background-color:white;
    color:#1d1d1d;
    margin:0%;
    height:80%;
    width:88%;;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0.001em 0.001em 18px rgba(0, 0, 0, .08); 
}
.service-icon
{height:100%;
width:92%;
position:relative;
left:28%;
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

 `;
const ServiceContainer = styled.div`
    position:relative; 
    left:-6%;
    display:grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 40%  40%  40%;
    grid-gap:4%;
    height:600px;
    width:1260px;
    margin:8%;
    left-margin:0;
    .txt-container{
        padding:2%;
        position:relative;
        top:-2%;
        left:8%;
        font-family:"poppins";
    }
    .service-name{
        
        padding:2%;
        border-radius:32px;
        
    }
    .service-card
    {
        left:-12%;
    }
    .service-desc
    {
    left-margin:2.8%;
    padding:2%;}
    @media screen and (max-width:1420px) {
        height:40%; 
        width:100%;
        margin-bottom:0.2%;
        display:inline;
        position:relative;
        left:-11%;
        
        .service-icon
        {
            height:100%;
            width:100%;
            
        }
        .service-card{
            display:grid;
            grid-template-columns:60% 40%;;
            background-color:#f6f6f6;
            color:#1d1d1d;
            margin:10%;
            height:140px;
            width:100%;;
            border-radius:24px;
            box-shadow:0.001em 0.001em 18px rgba(0, 0, 0, .12);
        }
        .service-name{
            font-size:1.2rem;
            padding:8ì4px;
             margin:0; 
        }
        .service-desc{
            font-size:0.8rem;
            margin-top:-2px;
            padding:2%;
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
            <h1 className="txt carotxt"> le nostre foto </h1>
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
