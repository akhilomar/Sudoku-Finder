import React from 'react';
import Header from '../header';
import Footer from '../footer';

const Contribute=()=>{

let content=(
    <>
    <Header />
    <br/>
    <h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>CONTRIBUTE</h2>
    <article className="para">
        <p>This App is opensource. You can contribute via GitHub.</p>
        <p>GitHub repository:<a style={{fontWeight:"bold",color:"#48dbfb"}} href="https://github.com/akhilomar/Sudoku-Finder.git" rel="noopener noreferrer" target="_blank"> Click Here</a></p>
        <br/>
        <p style={{fontWeight:"bold"}}>CONTRIBUTORS : </p>
        <ul>
            <li style={{fontWeight:"bold"}}><a href="https://github.com/akhilomar" target="_black" style={{color:"#FDA7DF"}}>Akhil Omar</a></li>
        </ul>
    </article>
    <Footer />
    </>
);
   
return content;

}

export default Contribute;