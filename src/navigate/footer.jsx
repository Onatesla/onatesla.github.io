import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

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
        padding:0.2%;
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
{ width:100%;
 margin:0;
        .footer-nav
        {
                display:grid;
                grid-template-rows:16% 16% 16% 16% 16% 16%;
                grid-template-columns:100%;
                width:100%;
                height:300px;
                
                text-align:center;
                background:#1d1d1d;
                margin-top:22%;

        }
        .footer-nav-ul{
                display:grid;
                gap:40%;
                width:90%;
                position:relative;
                left:0%;
                height:100%;
                background:#1d1d1d;
        
        }
        .link
        {
                left-margin:0%;
                top-margin:42%;
                padding:0%;
                background:#1d1d1d;
        }
        
        li
        {margin:0;
        padding:0;
height:30px;}
        `;
function Footer() {
  return (
    <section className="footer">
      <Foot>
        <div className="footer-nav">

          <ul className="footer-nav-ul">
            <li>
              <Link to="/photogrid">
                {' '}
                <h5 className="footer-nav-menu link">I nostri lavori </h5>
              </Link>
            </li>
            <li>
              <Link to="/where">
                <h5 className="footer-nav-menu link">Dove Siamo </h5>
                {' '}
              </Link>
            </li>
            <li>
              <Link to="/contact">
                {' '}
                <h5 className="footer-nav-menu link"> prenota un matrimonio </h5>
                {' '}
              </Link>
            </li>
            <li>
              <Link to="/social">
                {' '}
                <h5 className="footer-nav-menu link"> i nostri social </h5>
                {' '}
              </Link>
            </li>
            <li>
              <Link to="/businesscard">
                {' '}
                <h5 className="footer-nav-menu link"> contatti </h5>
                {' '}
              </Link>
            </li>
            <li>
              <Link to="/me">
                {' '}
                <h5 className="footer-nav-menu link"> I nostri video </h5>
                {' '}
              </Link>
            </li>
          </ul>
        </div>

      </Foot>

    </section>
  );
}
export default Footer;
