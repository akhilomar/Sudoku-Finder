import React from 'react';
import Header from '../header';
import Footer from '../footer';
import "../../App.css";
const About=()=>{

let content=(
    <>
    <Header />
    <br/>
    <h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>ABOUT SUDOKU</h2>
    <article className="para">
        <p>Sudoku is a mind and logic game to boost your brain wires.
       It is a puzzle game with 9x9 square grid boxes. The main focus of this game is to fill the empty boxes with 
integers between 1 to 9. You offen find this game mostly on newspapers. The main motive of this game is to fill the boxes such that following conditions fulfilled :  </p>

<ul style={{fontWeight:"bold",color:"white"}} >
    <li style={{color:"#2ed573"}}>Each row must contain the digits 1-9 without repetition.</li>
    <li style={{color:"#ff6b81"}}>Each column must contain the digits 1-9 without repetition.</li>
    <li style={{color:"#48dbfb"}}>Each of the 9 "3x3" sub-boxes of the grid must contain the digits 1-9 without repetition.</li>
</ul>

<p> It is an intresting mind puzzle game for light fun and also helps to sharpen your mind.
We help you to play this game online and have a better experience.</p> 
</article>

<br/>
<br/>
    <Footer />
    </>
);
   
return content;

}

export default About;