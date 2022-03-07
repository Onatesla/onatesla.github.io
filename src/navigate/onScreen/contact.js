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
}
.text
{position:relative;
padding:0;
margin-top:12%;}
@media screen and (max-width:800px){
    margin-top:32%;
}
`


const Contact = () => {
    React.useEffect(()=>{
        document.title="Digital Photo RC - Manda una richiesta"
    },[])
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