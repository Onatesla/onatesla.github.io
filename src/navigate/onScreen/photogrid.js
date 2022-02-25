import styled from "styled-components";
import Footer from "../footer";
import Navbar from "../header"
import Slider from "../slider"
 const WorkGrid = styled.div`
 padding:6%;
 
 .carotxt
 {font-size:3em;
text-align:center;
text-transform:capitalize;
margin-left:0;}


}
.service-card{
    display:grid;
    grid-template-columns:50% 50%;
    background-color:#1d1d1d;
    color:#f6f6f6;
    margin:0%;
    height:80%;;
    width:100%;;
    border-radius:24px;
}
.service-icon
{height:80%;
width:60%;
position:relative;
left:22%;
top:2%;}
@media screen and (max-width:800px){
    margin-top:4.2%;
    .photo{
        height:80%;;
    }
}

 `
 const ServiceContainer =styled.div`
    position:relative; 
    left:-10%;
    display:grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 40%  40%  40%;
    grid-gap:1%;
    height:600px;
    width:100%;
    margin:8%;
    left-margin:0;
    .txt-container{
        padding:2%;
        position:relative;
        top:-2%;
        left:8%;
        font-family:"space grotesk";
    }
    .service-name{
        
        padding:2%;
        border-radius:32px;
        
    }
    .service-desc
    {
    left-margin:2.8%;
    padding:2%;}
    @media screen and (max-width:800px) { height:100%; 
        margin-bottom:0.8%;
        display:inline;
        
        .service-icon
        {
            visibility:hidden;
            
        }
        .service-card{
            display:grid;
            grid-template-columns:80%;
            background-color:#1d1d1d;
            color:#f6f6f6;
            margin:10%;
            height:40%;;
            width:100%;;
            border-radius:24px;
        }
        
    }`;
    
;
const data =[
    {icona:"https://lisanalven.com/wp-content/uploads/2021/07/Icon-Placeholder-1.png",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
     {icona:"https://lisanalven.com/wp-content/uploads/2021/07/Icon-Placeholder-1.png",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
     {icona:"https://lisanalven.com/wp-content/uploads/2021/07/Icon-Placeholder-1.png",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
     {icona:"https://lisanalven.com/wp-content/uploads/2021/07/Icon-Placeholder-1.png",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
     {icona:"https://lisanalven.com/wp-content/uploads/2021/07/Icon-Placeholder-1.png",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
     {icona:"https://lisanalven.com/wp-content/uploads/2021/07/Icon-Placeholder-1.png",
     nome:"Nome Servizio",
     descrizione:"descrizione servizio bla bla bla bla bla bla bla bla bla bla",},
]
const Photogrid = () => {
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