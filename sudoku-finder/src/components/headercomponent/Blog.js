import React from 'react';
import Header from '../header';
import Footer from '../footer';
import "../../App.css";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Blog=()=>{

let content=(
    <>
    <Header />
    <br/>
    <div style={{"padding":"1rem"}}>
    <div style={{"padding":"1rem"}}>
    <h2 style={{"color":"white","paddingRight":"3rem","fontWeight":"600"}}>SUDOKU</h2>
    <p><img src="https://cdn.pixabay.com/photo/2014/12/01/16/24/sudoku-552944_960_720.jpg" alt="Sudoku" style={{"width":"170px","height":"170px","marginRight":"15px"}}></img>Sudoku is a stratigical number game which has gained popularity over time because of its
increasing interest of mathematicians into it.
<br/>
<br/>
<Link to="/sudoku">
<Button variant="contained" color="secondary" >
  Read More
</Button>
</Link>
</p>
</div> 
<br/>
<br/>
<div style={{"padding":"1rem"}}>
<br/>
<h2 style={{"color":"white","paddingRight":"3rem","fontWeight":"600"}}>CHESS</h2>
    <p><img src="https://cdn.pixabay.com/photo/2014/04/05/11/40/chess-316658_960_720.jpg" alt="Chess" style={{"width":"170px","height":"170px","marginRight":"15px"}}></img>Chess is a strategical board game played by between two players . It is played on a board which
consists 64 squares arranged in grid format of 8*8.
<br/>
<br/>
<Link to="/chess">
<Button variant="contained" color="secondary">
  Read More
</Button>
</Link>
</p>
<br/>
</div>
<br/>
<br/>
<div style={{"padding":"1rem"}}>
<br/>
<h2 style={{"color":"white","paddingRight":"3rem","fontWeight":"600"}}>SNAKE AND LADDER</h2>
<br/>
    <p><img src="https://cdn.pixabay.com/photo/2012/04/18/01/08/snake-36376_960_720.png" alt="Snake And Ladder" style={{"width":"170px","height":"170px","marginRight":"15px"}}></img>If you go up a ladder with your respective token, you get a added bonus of getting another
turn to roll the dice.
<br/>
<br/>
<Link to="/snakeladder">
<Button variant="contained" color="secondary">
  Read More
</Button>
</Link>
</p> 

<br/>
</div>
<br/>
<br/>
<div style={{"padding":"1rem"}}>
<br/>
<h2 style={{"color":"white","paddingRight":"3rem","fontWeight":"600"}}>TIC TAK TOE</h2>
    <p><img src="https://cdn.pixabay.com/photo/2017/07/31/21/45/toys-2561392_960_720.jpg" alt="Snake And Ladder" style={{"width":"170px","height":"170px","marginRight":"15px"}}></img>Tic tac toe is strategy game played between two players. It is a simple pen and paper game
of crosses and noughts hence it is also known as noughts and crosses.
<br/>
<br/>
<Link to="/tictoe">
<Button variant="contained" color="secondary">
  Read More
</Button>
</Link>
</p>
<br/>
</div>
</div>
<br/>
<br/>
    <Footer />
    </>
);
   
return content;

}

export default Blog;