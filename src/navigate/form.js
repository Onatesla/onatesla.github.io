import React, { useEffect, useState,useRef } from "react";
import emailjs from '@emailjs/browser'



const Submit = () => {

const form = useRef();
const user_email="paolo.uni.95@gmail.com";

const [one, setOne] = useState ({nome : " ",
email:"paolo.uni.95@gmail.com", message : " ", emaildata: " "});
// const [list, setList] = useState ([]);
const sendEmail = (e) => {
    e.preventDefault();
   if (one.nome==="" || one.message===""){
    emailjs.sendForm('service_6ckdu5q', 'template_ddnas2b', form.current,  'user_COHw7BwAfI4bYoD3GOuRd')
      .then((result) => {
          console.log(result.text);
          alert("form inviato")
      }, (error) => {
          console.log(error.text);
      });}
      else
      alert("Form non riempito")
  };
// const gestiscidati = (e) => {
//     e.preventDefault();
//     if (one.nome && one.email && one.message)
//     {
        
//     setList ([...list, 
//     {
//         id: new Date(Date.now()).getTime().toString(),
//         ...one
//     },])
//     setOne ({
//         nome: "",
//         email: "",
//         message: ""

//     })
const handleClick = (e) => {
    const { name, value} = e.target
    setOne({...one, [name]: value})
    console.log(value)
}

useEffect (()=> {
    const {log} = console;
    log(one);
}, [one]);
return(
    <article className="form" > 
<div className = "container"  >
                <div className="text">
                <h2 className = "txt formtitle">Vuoi prenotare un servizio fotografico?</h2>
                <h4 className= "txt formdesc">Un nostro impiegato ti contatterà in 48 ore</h4>
                </div>
                <form className = "input" ref={form} onSubmit = {sendEmail} >
                    <label htmlFor= "nome">
                    <h4 className = "txt label">Nome:</h4>
                    <input type = "text" id = "name" name = "name"  className = "style name" value = {one.name} onChange = {handleClick}/>
                    </label>
                    <label htmlFor = "email">
                    <h4 className = "txt label" >Email:</h4>
                    <input type = "text" id = "name" name = "emaildata" value = {one.emaildata} onChange = {handleClick} className = "style name"/>
                    <input type= "email" value={user_email} className="hidden" />
                    </label>
                    <label htmlFor = "message">
                    <h4 className = "txt label">Messaggio:</h4>
                    <input type = "textarea" id = "message"  name ="message" value  = {one.message} onChange = {handleClick} className = "style messaggio"/>
                    </label>

                    
                    
                </form>
                <div className="btn-container">
                <button type = "submit" className = " style submit " > <h2 className="btn-txt">Manda form!</h2></button>
                </div>
</div>
</article>
)
}

export default Submit;
                