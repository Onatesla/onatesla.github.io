/* eslint-disable react/style-prop-object */
import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';
import Navbar from '../header';

const Dove = styled.section`
position:relative;
top:100%;
margin-top:0%;
height:780px;
display:flex;
justify-content:center;
align-items:center;
.text-data
{
    position:relative;
    top:0vh;
    left:6vw;
    height:400px;
    width:40vw;
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
    margin-top:2rem;
    inline-size:80%;

}

.orari
{
    inline-size:70%;
    text-transform:Capitalize;
    font-size:1.8em;
    margin-top:2rem;
}
.map{
  position:relative;
  left:2vw;
  box-shadow: 0.1rem 0.1rem 4px rgba(27,27,27, 0.4);
  width:60vw;
  height:80vh;
}
@media screen and (max-width:800px){
  margin-top:8vh;
.text-data
{
    position:relative;
    width:80vw;
    top:2vh;
    left:4vw;
    height:100%;
    margin:1.2%;
}
flex-direction:column;
font-size:1.2rem;
.nome
{
 font-size:2rem;
 margin:0.8%;
 margin-left:1.4%;
 margin-bottom:-2.1%;
 
}
.orari
{
    font-size:0.9rem;
}
.map{
    
    width:80vw;
    margin-bottom:2rem;
}
}
`;
const Adj = styled.section`
position:relative;
bottom:0;
width:100%;
margin:0;
margin-top:0%`;
function Where() {
  React.useEffect(() => {
    document.title = 'Digital Photo RC - Dove Siamo';
  }, []);
  return (
    <>
      <Navbar />

      <Dove>
        <iframe title="loco" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.786624508083!2d15.635810915326928!3d38.09863017970184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13145a81b22412f7%3A0x869c14256a141cbc!2sDIGITAL%20PHOTO%20DI%20FRANCO%20FONTANA!5e0!3m2!1sit!2sit!4v1645452317694!5m2!1sit!2sit" style={{ borderRadius: 24, border: 0 }} allowFullScreen="" loading="lazy" />
        <div className="text-data">
          <h1 className="txt nome">Digital Photo di Fontana Francesco</h1>
          <h3 className="txt sub">Via Nicola Furnari, 47, 89129 Reggio Calabria RC.</h3>

          <h5 className="txt orari">
            lunedì-venerdì:
            9-13; 16-20

            sabato-domenica:
            Chiuso
          </h5>
        </div>
      </Dove>

      <Adj>
        <Footer />
      </Adj>
    </>
  );
}
export default Where;
