import React from 'react';
import Header from '../header';
import Footer from '../footer';
import "../../App.css";
const TicTac=()=>{

let content=(
    <>
    <Header />
    <br/>
    <article className="para">

    <h1 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>TIC TAC TOE</h1>
    <article className="para">
        <p>Tic tac toe is strategy game played between two players. It is a simple pen and paper game
of crosses and noughts hence it is also known as noughts and crosses. It is played on simple
paper grid of 3 rows and 3 columns. Hence the cross section of the grid has a 3*3 six blank
spaces. Each player of the two chooses a particular symbol of the two i.e. either he chooses
noughts or the crosses. Traditionally the cross starts first and then the noughts and then the
turns alternate accordingly. The game generally lasts even less than a minute or two and
you have to be very frisk and alert with your moves.</p>
<br/>
<p>There quite a number of possibilities by which the either of the two i.e. either of the cross or
nought can win. It consists of the symbol X’s and O’s. It generally is a game of optimum strategy played by kids to increase their skills but it is
quite popular with the grown ups too.</p>
<br/>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>HOW SHOULD IT BE PLAYED</h2>
<article className="para">
    <p>The game is played with player trying to get three of his X’s or O’s in a row either
horizontally, vertically, or diagonally in this 3*3 cross sectional grid. In the same time the
player should also be looking to obstruct the opponent from doing so and getting all of his
symbols in a row. The game reaches a draw if both players have played their best games and
none of the moves are possible which would lead to clear row of 3 either of X’s or O’s. This
is one the simplest games played.</p>
<br/>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>MOVES</h2>
<article className="para">
    <p>There are several moves a player can make to ensure that he makes a perfect start so that
he can ensure a win or a draw at least but his deliberate attempt should be to win the game
as soon as possible. So some of the moves that can help you win the game are:</p>
</article>
<br/>
<h3 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>RIGHT HAND TOP CORNER:</h3>
<article className="para">
    <p>If you are to begin first try and begin with the right hand top corner and even if you are
second to move , this can always be a safe option for a safe start because it can give wins in
three different ways if in your hands i.e. vertically along the row, horizontally along the
column or even diagonally.</p>
<br/>
</article>
<h3 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>LEFT HAND TOP CORNER:</h3>
<article className="para">
    <p>Similar to the RHTC it is one option that can never go wrong for a good start.</p>
</article>
<h3 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>RIGHT HAND BOTTOM CORNER:</h3>
<article className="para">
    <p>A corner option can always help whenever you have the chance because it efficiently
provides you with three possibilities through which you can win the match.</p>
<br/>
</article>
<h3 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>LEFT HAND BOTTOM CORNER:</h3>
<article className="para">
    <p>Similar to the other corner options.</p>
    <br/>
</article>
<h3 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>CENTRE</h3>
<article className="para">
    <p>In the next move try to get hand of the centre in the very next move so that you can get a
two way diagonal option and the centre row option.</p>
<br/>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>THE FORK</h2>
<article className="para">
    <p>This move is sure to get you a victory because this is two way trap which can only be
blocked by the before you start making the move. In this move filling up for three spaces in
the grid is involved for e.g. the top right corner, bottom right corner and bottom left corner
similarly other moves can be made and the opponent can defend only one move you make
at a time and other option is open for the next move you make and hence you win it in this
move .
It generally has a L-Shaped resemblance on the grid .</p>
<br/>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>DEFEND BY BLOCK</h2>
<article className="para">
    <p>If the opponent places two in a row place your symbol on the third occupancy to avoid
letting the opponent complete his three in a row and hence win. Always try to avoid the fork
and do not let the opponent make his move for this because after the fork is ready you
cannot defend it.</p>
    <br/>
</article>
</article>
<br/>
<br/>
    <Footer />
    </>
);
   
return content;

}

export default TicTac;