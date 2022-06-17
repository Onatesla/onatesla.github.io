/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useToggle from '@rooks/use-toggle';

const Burger = styled.div`
.hamburger-menu {
display: none;
}
@media screen and (max-width: 1380px) {
.hamburger-menu {
display: inline;
}}

#menu__toggle {
opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
transform: rotate(45deg);
background-color: #1d1d1d;
}
#menu__toggle:checked + .menu__btn > span::before {
top: 0;
transform: rotate(0deg);
background-color: #f6f6f6;
}
#menu__toggle:checked + .menu__btn > span::after {
top: 0;
transform: rotate(90deg);
background-color: #f6f6f6;
}
#menu__toggle:checked ~ .menu__box {
left: 80% !important;
}
.menu__btn {
display: flex;
position: absolute;
justify-content: space-around;
top: 32px;
right: 4vw;
max-width: 8vw;
min-width: 4vh;
height: 46px;
cursor: pointer;
border: none;
z-index: 1;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
display: flex;
justify-content: space-around;
align-items: space-between;
position: absolute;
width: 100%;
border: solid 0.01em;
height: 2px;
background-color: white;
transition-duration: .25s;
}
.menu__btn > span::before {
content: '';
border: solid 0.01em;
display: flex;
top: -8px;
}
.menu__btn > span::after {
content: '';
border: solid 0.01em;
top: 8px;
}
.menu__item {
display: block;
padding: 2%;
color: white;
font-family: "poppins";
font-size: 1.4rem;
text-align:right;
font-weight: 600;
position: relative;
top: -14px;
left:-14px;
text-decoration: none;
transition-duration: .25s;
}
.menu__item:hover {
background-color: #f6f6f6;
color: #1d1d1d;
border-radius: 2% 0px 0px 22px;
}
`;

function Ham() {
  const [show, toggleShow] = useToggle(false);
  return (
    <Burger>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" onClick={toggleShow} />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span />
        </label>

        <ul className={`${show ? '' : 'hidden'}`}>
          <li>
            <Link to="/where" className="menu__item">
              Dove siamo?
            </Link>
          </li>
          <li>
            <Link to="/photogrid" className="menu__item">
              I nostri lavori
            </Link>
          </li>
          <li>
            <Link to="/businesscard" className="menu__item">
              Contattaci
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu__item">
              Preventivo
            </Link>
          </li>
        </ul>
      </div>
    </Burger>
  );
}

export default Ham;
