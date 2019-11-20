import React from 'react';
import Header from '../header';
import Footer from '../footer';

const ContactUs=()=>{

let content=(
    <>
    <Header />
    <br/>
    <h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>CONTACT US</h2>
    <article className="para">
        <p>For the mail enquiries please contact us at 
 <a href="thekarma1947@gmail.com" target="_blank" style={{fontWeight:"bold",color:"#1dd1a1"}}> thekarma1947@gmail.com</a></p>
 <p> Feel free to contact us 
 24 X 7 available</p>
    </article>
        <br/>
        <br/>
    <Footer />
    </>
);
   
return content;

}

export default ContactUs;