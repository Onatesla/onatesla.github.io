import React from "react";
import styled from "styled-components";
import Footer from "../footer";
import Navbar from "../header"
import Slider from "../slider"
 const WorkGrid = styled.div`
 padding:6%;
 
 .carotxt
 {font-size:3em;
    font-family:"poppins";
text-align:center;
text-transform:capitalize;
margin-left:0;}



.service-card{
    display:grid;
    grid-template-columns:50% 50%;
    background-color:white;
    color:#1d1d1d;
    margin:0%;
    height:80%;;
    width:94%;;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0.001em 0.001em 18px rgba(0, 0, 0, .08); 
}
.service-icon
{height:200px;
width:280px;
position:relative;
left:20%;
top:0%;}
@media screen and (max-width:800px){
    margin-top:4.2%;
    .photo{
        height:80%;;
    }
}

 `
 const ServiceContainer =styled.div`
    position:relative; 
    left:-8%;
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
        height:100%; 
        margin-bottom:0.8%;
        display:inline;
        position:relative;
        
        .service-icon
        {
            visibility:hidden;
            
        }
        .service-card{
            display:grid;
            grid-template-columns:80%;
            background-color:#f6f6f6;
            color:#1d1d1d;
            margin:10%;
            height:150px;
            width:100%;;
            border-radius:24px;
            box-shadow:0.001em 0.001em 18px rgba(0, 0, 0, .12);
        }
        
    }`;
    
;
const data =[
    {icona:"https://www.tuogadget.com/wp-content/uploads/2020/01/tazza-personalizzata-colorata-COVER.jpg",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
     {icona:"https://www.tuogadget.com/wp-content/uploads/2020/01/tazza-personalizzata-colorata-COVER.jpg",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
     {icona:"https://www.tuogadget.com/wp-content/uploads/2020/01/tazza-personalizzata-colorata-COVER.jpg",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
     {icona:"https://www.tuogadget.com/wp-content/uploads/2020/01/tazza-personalizzata-colorata-COVER.jpg",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
     {icona:"https://www.tuogadget.com/wp-content/uploads/2020/01/tazza-personalizzata-colorata-COVER.jpg",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
     {icona:"https://www.tuogadget.com/wp-content/uploads/2020/01/tazza-personalizzata-colorata-COVER.jpg",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
]
const Photogrid = () => {
    React.useEffect(()=>{
        document.title="Digital Photo RC - I Nostri Lavori"
    },[])
    return(
        <article>
        <Navbar/>
    <section className = "photogrid">
        <WorkGrid>
            <div className="carosello">
            <h1 className = "txt carotxt"> le nostre foto </h1>
            <Slider className="slide"></Slider>
            </div>
            <ServiceContainer>
                {data.map((el)=>{
                    return(
                        <div className="service-card">
                        <div className="txt-container">
                        <h1 className="service-name">{el.nome} </h1>
                        <h4 className="service-desc">{el.descrizione}</h4>
                        </div>
                        <img src={el.icona} alt="icona" className="service-icon" />
                        </div>
                    )
                })}
            </ServiceContainer>
            </WorkGrid>
            </section>

            <Footer/>

            </article>) }


export default Photogrid;