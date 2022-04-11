import React from "react";
import styled from "styled-components";
import Navbar from "../header";

const TermsWrap = styled.div``
function Terms() {
  return (
  <TermsWrap>
    <Navbar />
    <div className="terms-container">
        <h1 className="terms-div" >
        tutti i dati indicati saranno utilizzati SOLO per un ricontatto. Verrà mandata una mail utilizzando un sistema che usa una mail di proprietà del creatore del sito. I dati saranno letti e osservati solo da Digital Photo nella figura di Francesco Fontana o di eventuali dipendenti del negozio.
        </h1>
    </div>
  </TermsWrap>
  )
}

export default Terms;