import React from "react";
import Footer from "../footer";
import Navbar from "../header";
import styled from "styled-components";

const SocialCard=styled.section`
margin:0;
position:relative;
margin-top:12%;
height:540px;
display:grid;
grid-template-rows:12% 12% 5% 40%;
grid-gap:2%;
.social-heading{
    font-family:"poppins";
    margin:2%;
    font-size:4em;
}
.social-subtitle{
    font-family:"poppins";
    margin:2.4%;;
}
.social-hr
{width:100%;
height:0px;
border-top:solid 1px #1d1d1d;
}
.social-icon
{
    width:32px;
    position:relative;
    left:2%;
    margin:2%;
}
@media screen and (max-width:800px)
{
    margin-top:42%;
    .social-heading{
        height:100px;
        inline-height:2px;
        font-size:3rem;

    }
    .social-subtitle
    {
        margin-top:28%;
    }
    .social-hr{
        margin-top:28%;
    }
    .social-icon
    {
        top:48%;
        left:28%;
    }
}
 `;

function Social() {
    React.useEffect(()=>{
        document.title="Digital Photo RC - I Nostri Social"
    },[])
    return(
        <>
        <Navbar/>

        <SocialCard>
            <h1 className="social-heading">SEGUICI SUI SOCIAL!</h1>
            <h4 className="social-subtitle"> per restare aggiornato su sconti, promozioni e tanto altro!</h4>
            <hr className="social-hr"/>
            <div className="social-line">
                <img src="https://img.icons8.com/ios-filled/344/instagram-new--v1.png" href="https://www.instagram.com/digitalphotorc" alt="icona" className="social-icon" />
                <a href="https://www.facebook.com/digitalphotorc"><img src="https://img.icons8.com/ios-filled/344/facebook--v1.png"  alt="icona" className="social-icon" /></a>
                <img src="https://img.icons8.com/ios-filled/344/twitter.png" alt="icona" className="social-icon" />
                <img src="https://img.icons8.com/ios-filled/344/flickr.png" alt="icona" className="social-icon" />
            </div>
        </SocialCard>

        <Footer/>
        </>
    )
}
export default Social;