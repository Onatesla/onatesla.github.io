import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Ham from './sidemenu';

const Header = styled.div`
background:#1d1d1d;
position:relative;
top:0px;
width:100%;;
box-shadow:4px 4px 18px rgba(27,27,27,.15);
z-index:2;
overflowX:hidden;
.nav
{height:88px;}
.nav-menu
{display:flex;
position:relative;
top:-50px;
left:2vw;
gap:4%;
margin-right:0;
width:600px;
overflow:hidden;}
.nav-item
{color:white;
font-family:poppins;
}

@media screen and (max-width:1380px){
  .nav-menu{display:none;}
  .nav{
    height:60px;
  }
  .logo{
    top:-8px;
  }
}
`;
const ShopLink = styled.div`background:#939597;
height: 4rem;
width:12vw;
border-radius:12px;
overflow:hidden;
color:white;

gap:2vw;
box-shadow: 0.01rem 0.01rem 8px rgba(0,0,0,0.17);
display:flex;
position: fixed; top: 100px; 
right: 2vw;
.img{
    height: 4rem;
    flex: 2;
    background-Color: #ececec;
    padding-right: 0.8rem,
}
.mobHid{
 
}
@media (max-width:440px){
  width:14vw;
  flex-direction:column;
  height:8rem;
  gap:0.2rem;
  margin-left:0.2rem;
  right:84vw;
  top:10vh;
  .img{
    height:6vh;
    
  }
  .mobHid{
    margin-left:0.1rem;
  }
  
}`;

const url = 'https://i.ibb.co/hcNcrQp/Senza-titolo-1.png';
function Navbar() {
  return (
    <Header>
      <section className="navbar">
        <div className="nav">
          <Link to="/"><img src={url} alt="Logo" className="logo" /></Link>
          <ul className="nav-menu">
            <li><Link to="/where" className="nav-item">Dove siamo?</Link></li>
            <li><Link to="/photogrid" className="nav-item">I nostri lavori</Link></li>
            <li><Link to="/businesscard" className="nav-item">Contattaci</Link></li>
            <li><Link to="/contact" className="nav-item">Preventivo</Link></li>

          </ul>
          <a href="https://digital-photo-di-francesco-fontana.sumupstore.com">
            <ShopLink>
              <img
                src="https://img.icons8.com/ios/100/undefined/online-shop-favorite.png"
                alt="shop"
                className="img"
              />

              <div style={{
                flex: 3, display: 'flex', gap: '2rem', alignItems: 'center', justifyContents: 'center', alignText: 'center',
              }}
              >
                <h1 style={{ fontSize: '14px' }} className="mobHid">
                  Vai allo
                  <br />
                  <span className="mobShow" style={{ fontSize: '19px', fontWeight: 900 }}>Shop!</span>
                </h1>
              </div>
            </ShopLink>
          </a>
        </div>
        <Ham />
      </section>
    </Header>
  );
}

export default Navbar;
