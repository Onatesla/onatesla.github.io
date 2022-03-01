import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Foot = styled.div`
display:inline-flex;
color:white;
width:100%;
text-align:center;
.footer-nav{
        color:white;
        display:flex;
        
        width:100%;
        gap:1%;
        margin-top:1%;
        
        background:#1d1d1d;
        height:120%;

}
.footer-nav-ul{
        display:flex;
        gap:10%;
        width:100%;
        padding:2%;
        position:relative;
        left:4%;
        
}
.link
{
        color:white;
        text-transform:capitalize;
        
        left-margin:22%;
        white-space:no-wrap;
        
        font-family:"poppins"
}
.link:hover
        { text-decoration:underline;}
@media screen and (max-width:820px) 
{
        .footer-nav
        {
                display:grid;
                grid-template-rows:20% 20% 20% 20% 20% 20%;
                grid-template-columns:100%;
                width:200%;
                height:120%;
                text-align:center;
                left-margin:20%;
                background:#1d1d1d;
                margin-top:2%;
        }
        .footer-nav-ul{
                display:grid;
                gap:10%;
                width:80%;
                position:relative;
                left:0%;
                height:460px;
        
        }
        .link
        {
                left-margin:6%;
                top-margin:42%;
        }
        
        li
        {margin:0;
        padding:0;
height:20px;}
        `
const Footer = () => {
return(<section className="footer">
   <Foot> 
   <div className="footer-nav">
   
         <ul className="footer-nav-ul">
         <li><Link to = "/photogrid" > <h5 className = "footer-nav-menu link">I nostri lavori </h5></Link></li>
         <li><Link to = "/where"><h5 className = "footer-nav-menu link">Dove Siamo </h5> </Link></li>
         <li><Link to = "/contact"> <h5 className = "footer-nav-menu link" > prenota un matrimonio </h5> </Link></li>
         <li><Link to = "/social"> <h5 className = "footer-nav-menu link" > i nostri social </h5> </Link></li>
         <li><Link to = "/businesscard"> <h5 className = "footer-nav-menu link" > contatti </h5> </Link></li>
         <li><Link to = "/me"> <h5 className = "footer-nav-menu link" > chi sono? </h5> </Link></li>
         </ul>
    </div>
  
    </Foot>
      
       
       
       
        </section>)
       }
export default Footer; 