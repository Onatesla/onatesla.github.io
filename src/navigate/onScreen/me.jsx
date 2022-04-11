// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';
import Footer from '../footer';
import Navbar from '../header';
import Video from '../video';

const Biopic = styled.section`
display:grid;
margin-bottom:-1.3%;
height:1000px;
.video
{
    margin:0;
    margin-top:8%;
}
.title
{ color:#1d1d1d;
position:relative;
top:110%;
text-align:center; }
.mobile-txt
{
    display:none;
}
@media screen and (max-width:840px){
    display:grid;
    heigth:300px;
    grid-template-rows: 10% 60%;
    .title{
        position: relative;
        top:106%;
        left:0%;
        height:50px;
        margin-bottom:0;
    }
    .mobile-txt
    {display: grid;
    position:relative;
    top:10%;
    left:2%;}
}`;

function Me() {
  React.useEffect(() => {
    document.title = 'Digital Photo RC - I nostri video';
  }, []);
  return (
    <>
      <Navbar />
      <Biopic>
        <h1 className="title"> I nostri trailer </h1>
        <Video />

        <h5 className="mobile-txt">
          <a href="https://youtu.be/au8a4V23zno">Bruno e Federica</a>
        </h5>
      </Biopic>
      <Footer />
    </>
  );
}
export default Me;
