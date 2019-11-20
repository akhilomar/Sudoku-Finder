import React from 'react';
import Header from '../header';
import Footer from '../footer';

const Disclaimer=()=>{

let content=(
    <>
    <Header />
    <br/>
    <h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>DISCLAIMER</h2>
    <article className="para">
        <p>This app is based on React framework. We have implemented our own logics to solve the Sudoku. No Api's are used in this app. We are not responsible in any type of copying code or logic. 
        Our github repository link is given on contributors page. You can verify all other information regarding code from our github repository.</p>
    </article>
    <br/>
    <br/>
    <Footer />
    </>
);
   
return content;

}

export default Disclaimer;