import React from 'react';
import styled from 'styled-components';
import Navbar from '../header';
import Submit from '../form';
import Footer from '../footer';

const ContattiForm = styled.div`
position:relative;
height:100vh;
justify-content:center;
.container{
    position:relative;
    top:12vh;
    
    
}
.text
{position:relative;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:0;
}
@media screen and (max-width:800px){
    
    padding: 0;
    margin-top:0%;
    margin-bottom:2rem;
    height:620px;
    width:80vw;
    .container{
    position:relative;
    top:2vh;
    left:-1.6vh;
    height:42vh;
    
    
}
}
`;

function Contact() {
  React.useEffect(() => {
    document.title = 'Digital Photo RC - Manda una richiesta';
  }, []);
  return (
    <>
      <Navbar />

      <ContattiForm>
        <Submit />
      </ContattiForm>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
