/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import load from "../Date picker-bro.svg"

const FormWrap = styled.div`
border-top:solid;

.container{
	text-align: center;
	height: 600px;
  background:none;
  width:80%;
  display:grid;
  grid-template-columns:60% 40%;
  position:relative;
  left:4.8%;
  margin:4%;
  border-radius:8px;
  padding:2%;
}
.btn-container {
	position: relative;
	left:4%;
  

	width: 20%;
	margin-top: 2%;
}
.btn-txt {
	margin: 0;
	display:flex;
  justify-content:center;
	padding: 2px;
	font-size: 2rem;
}
.submit {
	background-color: #1d1d1d;
	color: #f6f6f6 ;
	border: #1d1d1d solid;
 text-align:center;
	width: 44%;
	height: 40px;
	position: relative;
	font-size: 1.6rem;
  padding:2%;
  top:20px;
	left: 22%;
	border-radius: 8px;
}
.submit:active {
	color: #f6f6f6;
	background-color: black;
	border: #1d1d1d solid;
}
.text {
	position:relative;
}
.input {
	display:grid;
	grid-template-rows: 20% 20% 20%;
	
  text-align: left;
	position: relative;
  top:-20px;
	left:1%;
	width: 100%;
}
.style {
	background: none;
	color: #1d1d1d;
	border:none;
	margin: 2%;
  margin-top:8%;
	inline-size: 40%;
	height:12px;
	padding: 2%;
	font-family: "Poppins";
	font-size: 16px;
  width:60%;
	border-bottom: solid 0.08em  #939597;
}
.formtitle
{ color:#1d1d1d;
  margin:0;
  font-size:1.4rem;

}
.formdesc
{
  margin:0;
}
.adj
{
  position:relative;
  top:-12px;
}
.style::placeholder
{
	color:#939597;

	font-size: 1.2rem;
}
.img-load{
  height:80%;
  width:80%;
  position:relative;
  top:10%;
}
.checkbox{
    display:grid;
    grid-template-columns:10% 80%;
    width:60%;
  
  }
.check{
  position:relative;
  top:22px;
  left:14px;
}
@media screen and (max-width:1080px){
  
  .container
  { 
    display:grid;
    grid-template-columns:100%;
    left:10%;
  }
  .text{
    margin-bottom:20%;
    height:180px;
  
  }
  .img-load{
    visibility:hidden;
    display:none;
  }
  
}
`

function Submit() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = React.useRef()


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
        console.log(form.current.email)
        console.log(result.text);
        alert('form inviato');
      }, (error) => {
        console.log(error.text);
      });
  }

  // const handleClick = (e) => {
  //   const { name, value } = e.target;
  //   setOne({ ...one, [name]: value });
  //   console.log(value);
  // };
  console.log(one)
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

      <input {...register("name", { required: true } )} className="style"  placeholder="Nome" />
     
      <input {...register("emaildata", { required: true })} className="style" placeholder="Email"/>
      <input {...register("email", { required: true })} className="style hidden" type="email" defaultValue="paolo.uni.95@gmail.com"/>
      
      {errors.exampleRequired && <span>This field is required</span>}
    
      <input {...register("message", { required: true })} className="style" placeholder="Messaggio" />
          {errors.exampleRequired && <span>This field is required</span>}
        <div className="checkbox">
          <input {...register("consenso", { required: true })} type="checkbox" className="check" />
          <h6 className="checktext">spuntando accetta, sottostarai ai nostri termini e condizioni, consultabili nel box privacy-policy</h6>.
        </div>
      <button type="submit" className="submit" onClick={handleSubmit(sendEmail)} > <h1 className="txt adj">Invia </h1> </button>
           
          
    </form>
        <div className="svg-container">
          <img src={load} alt="load" className="img-load"/>
          </div>

        

      </div>
    </FormWrap>
  );
}

export default Submit;
