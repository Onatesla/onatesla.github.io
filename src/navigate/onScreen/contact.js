import React from 'react'
import Navbar from '../header';
import Submit from '../form';
import Footer from '../footer';
import styled from 'styled-components';

const ContattiForm = styled.div`
position:relative;
.container{
    position:relative;
    top:40%;
    margin-top:%;;
}
.text
{position:relative;
padding:8%;}
@media screen and (max-width:800px){
    margin-top:22%;
}
`


const Contact = () => {
    return (
        <>
           <Navbar></Navbar>
        

        <ContattiForm>
        <Submit></Submit>
        </ContattiForm>
        
        <div className ="footer">
            <Footer/>
        </div>
        </>
    )
}

export default Contact;