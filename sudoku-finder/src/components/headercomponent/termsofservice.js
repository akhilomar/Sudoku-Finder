import React from 'react';
import Header from '../header';
import Footer from '../footer';

const TermsofService=()=>{

let content=(
    <>
    <Header />
    <br/>
    <h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>TERMS OF SERVICE</h2>
    <article className="para">
        <p>Please Do Read This Terms Carefully.</p>
        <p>By using this Game you are agreeing on these conditions : </p>
        <ul>
            <li style={{color:"#feca57",fontWeight:"bold"}}>This is a free App. No money will be charged for any users.</li>
            <li style={{color:"#48dbfb",fontWeight:"bold"}}>You should be above 5 years old to use this App.</li>
            <li style={{color:"#ff6b6b",fontWeight:"bold"}}>This App is not responsible for solution of any ongoing event relaterd to Sudoku</li>
        </ul>
    </article>
    <Footer />
    </>
);
   
return content;

}

export default TermsofService;