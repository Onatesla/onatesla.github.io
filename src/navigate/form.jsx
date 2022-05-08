/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-alert  */
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import load from '../Date picker-bro.svg';

const FormWrap = styled.div`

height:620px;

width:100vw;
display:flex;
justify-content:center;
align-items:start;

.container{
text-align: center;

  background:none;
  height:580px;
  width:80vw;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:start;
  gap:14rem;
  position:relative;
  left:-2vw;
  margin:0;

}


.submit {
background-color: #1d1d1d;
color: #f6f6f6 ;
border: #1d1d1d solid;
display:flex;
justify-content:center;
text-align:center;
width: 18vw;
height: 42px;
position: relative;
font-size: 1.6rem;
left: 6vw;
border-radius: 8px;
}
.submit:active {
color: #f6f6f6;
background-color: black;
border: #1d1d1d solid;
}

.input {
display:flex;
flex-direction:column;
justify-content:start;
align-items:start;
text-align: left;
height:400px;
position: relative;
top:100px;
width: 50vw;

}
p
{
  margin:0;
  position:relative;
  height:20px;
}
.style {
background: none;
color: #1d1d1d;
border:none;
margin:0;
margin-bottom:2vh;
margin-top:2vh;
height:32px;
font-family: "Poppins";
font-size: 24px;
width:32vw;
border-bottom: solid 0.08em  #939597;
}
.formtitle
{ color:#1d1d1d;
  margin:0;
  font-size:1.2rem;
  text-align:left;

  

}
.text{
  display:flex;
  flex-direction:column;
  justify-content:start;
  align-items:start;
  margin:0;
  padding:0;
  
}
.formdesc
{
  margin:0;
  font-size:1.2rem;
   
}
.adj
{
  position:relative;
  top:-12px;
}
.style::placeholder
{
color:#939597;
font-size: 1.24rem;
}
.img-load{
  height:400px;
  width:40vw;
  position:relative;
  top:12vh;
}
.checkbox{
    display:grid;
    grid-template-columns:2vw  22vw;
    gap:6%;
    width:60%;
  
  }
.check{
  position:relative;
  top:22px;
  left:0px;
}
.end
{
  top:40px;
  border:red solid 0.1rem;
  height:42px;
  width:12vw;
  position:relative;
  top:-16vh;
  left:28vw;
  font-size:0.8rem;
  text-align:center;
  border-radius:8px;
  padding:8px;
  background:#f6f6f6;
  justify-content:center;
}
@media screen and (max-width:1080px){
  height:520px;
   width:100vw;
   position:relative;
   top:0vh;
   left:-4vw;
   margin-bottom:220px;
  align-items:start;

  .container
  { 
    display:flex;
    height:100%;
    align-items:start;
    width:100vw;
    margin:0;

  }
  .txt{
   
   text-align:left;
    font-size:0.8rem;
  
  }
  .img-load{
    visibility:hidden;
    display:none;
  }
  .input{
    margin-top:0px;
    font-size:0.6rem;
    align-items:center;
    width:80vw;
  }
  .style{
    width:100%;
    border-radius:none;
  }
  .style::placeholder
{
font-size: 1rem;
}
  .text{
    width:100%;
  }
  .checkbox{
    align-items:center;
    position:relative;
    left:-16.8vw;
    grid-template-columns:4vw 42vw;
  }
  .check{
    top:0px;
  }
  .submit
  { align-self:end;
    width:32vw;
    left:-2px;
  }
}
`;

function Submit() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = React.useRef();

  const [one, setOne] = useState({
    nome: ' ',
    email: 'paolo.uni.95@gmail.com',
    message: ' ',
    emaildata: ' ',
  });
  // const [list, setList] = useState ([]);
  const sendEmail = (data) => {
    setOne(data);
    emailjs.sendForm('service_6ckdu5q', 'template_ddnas2b', form.current, 'user_COHw7BwAfI4bYoD3GOuRd')
      .then((result) => {
        console.log(form.current.email);
        console.log(result.text);
        alert('form inviato');
      }, (error) => {
        console.log(error.text);
      });
  };

  // const handleClick = (e) => {
  //   const { name, value } = e.target;
  //   setOne({ ...one, [name]: value });
  //   console.log(value);
  // };
  console.log(one);
  // useEffect(() => {
  //   const { log } = console;
  //   log(one);
  // }, [one]);
  return (
    <FormWrap>
      <div className="container">
        <form onSubmit={handleSubmit(sendEmail)} ref={form} className="input">
          <div className="text">
            <h2 className="txt formtitle">Vuoi prenotare un servizio fotografico?</h2>
            <h4 className="txt formdesc">Un nostro impiegato ti contatterà in 48 ore</h4>
          </div>

          <input {...register('name', { required: true, maxLength: 20, pattern: /[A-Za-z]{3}/ })} className="style" placeholder="Nome" />
          {errors.name && <p>Campo Richiesto.</p>}
          <input {...register('emaildata', { required: true })} className="style" placeholder="Email" />
          {errors.emaildata && <p>Campo Richiesto.</p>}
          <input {...register('email', { required: true })} className="style hidden" type="email" defaultValue="paolo.uni.95@gmail.com" />
          {errors.exampleRequired && <p>Campo Richiesto.</p>}

          <input {...register('message', { required: true })} className="style" placeholder="Messaggio" />
          {errors.message && <p>Campo Richiesto.</p>}
          <div className="checkbox">
            <input {...register('consenso', { required: true })} type="checkbox" className="check" />
            <h6 className="checktext">spuntando accetta, sottostarai ai nostri termini e condizioni, consultabili nel box privacy-policy</h6>
            .
          </div>
          <button type="submit" className="submit" onClick={handleSubmit(sendEmail)}>
            {' '}
            <h1 className="txt adj">Invia </h1>
            {' '}
          </button>
          {errors.consenso && <p className="end">Devi spuntare il tuo consenso se vuoi inviare il form</p>}

        </form>

        <img src={load} alt="load" className="img-load" />

      </div>
    </FormWrap>
  );
}

export default Submit;
