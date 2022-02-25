import styled from "styled-components";
import Footer from "../footer";
import Navbar from "../header";
const url="https://scontent-mxp2-1.xx.fbcdn.net/v/t1.6435-9/66164999_10217888318311122_5351962552886624256_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=EnGYMUMZ5vEAX9abP94&tn=VyCUQC1AOsHYQh4u&_nc_ht=scontent-mxp2-1.xx&oh=00_AT9emqnOmnAcuBkJbT0puiYXB2ADtqYQvyX5oavx3lnRpQ&oe=6237F310"
const Biopic= styled.section`
display:grid;
grid-template-columns:50% 50%;
margin-bottom:-1.3%;
height:1000px;
.img-container{
    overflow:hidden;
}
.text-container
{  font-family:"Space Grotesk";
    position:relative;
    top:50%;
    left:10%;
    height:220px;
}
@media screen and (max-width:840px){
    display:grid;
    grid-template-columns:100%;
    .img-container{
        height:60%;
       
    }
    .text-container
{  font-family:"Space Grotesk";
    position:relative;
    top:-20%;
    left:10%;
    height:100%;
}
    .bio-pic
    { object-fit:fill;
    height:100%;
    width:100%;}
}`

function Me() {
    return(
        <>
        <Navbar/>
        <Biopic>
            <div className="img-container">
             <img src={url} alt="FF" className="bio-pic" />
            </div>
            <div className="text-container">
                <h1>ciao sono franco</h1>
                <h4>bla bla bla bla bla</h4>

            </div>
        </Biopic>
        <Footer />
        </>
    )
}
export default Me;