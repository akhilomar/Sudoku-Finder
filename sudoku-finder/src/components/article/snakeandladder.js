import React from 'react';
import Header from '../header';
import Footer from '../footer';
import "../../App.css";
const SnakeAndLadder=()=>{

let content=(
    <>
    <Header />
    <br/>
    <h1 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>SNAKES AND LADDERS</h1>
    <article className="para">
        <p>Snakes and Ladders is board game played by two or more players which is quite popular
among the young kids. Its strategically a very simple game and require much tactics to begin
with. It is derived from an ancient Indian board game called Moksha Patam and is quite
similar to the original version.</p>
<br/>
<p>It basically is game of which involves sheer luck and patience and is a simple race to the
finish line with your specific colored tokens. The player moves his token along the board on
the numbered track and the number the dice rolls to is used to navigate the token’s move. It
has the dice playing a major role in the moves of the players so it can also be called a basic
dice game. The game board has a square shape and is turned into a grid of hundred
numbered squares and the grid has snakes and ladders made on them on certain areas
which have a specific starting square and end a different numbered square.</p>
<br/>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>THE BOARD</h2>
<article className="para">
    <p>The board has a square outline. The board is divided in 100 squares which in turns it into a
grid of square spaces. The grid is divided into 10 rows and 10 columns making it 10*10 a
total of 100 squares. The board also has ladders and snakes made in some places around the
grid. The ladders and snakes have one end of them on a lower numbered square and the
other end on a higher number square. The dice is rolled on the board to start the game and
the tokens start off from the square numbered 1 and cross every other numbered square till
the 100 th square. The numbering of the squares is done in way that it gives the path of a ox
plow from top to bottom which is also known as the boustrophedon form of track setup.</p>
<br/>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>THE TOKENS</h2>
<article className="para">
    <p>The number of players participating in this game are 2 or more. Every player in this game
has a token allotted which has a specific colour. The players one by one take turns to roll the
dice and the number the dice rolls to decides the number of squares the player’s token
moves up to. Each player takes only one turn at a time to move his token and after he has
made his move the turn passes on to the next player.</p>
<br/>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>THE GAMEPLAY</h2>
<article className="para">
    <p>The game starts with the first player rolling the dice and if the dice rolls to the number 1,
the player moves his token on the first square of the grid i.e. the 1 numbered square ,
similarly the next player takes his turn and so on. If the player doesn’t get a 1 on the very
first roll of the dice the turn moves on to the other player and has to wait to a second
chance. After the tokens have landed on the first square, the player rolls the dice again and

the number on the dice is number of squares by which the player moves his token. It is
important to cross each and every square along the way, you cannot just skip the steps.
Also, you are not allowed to miss out on a chance or skip the move just because the number
is not favorable. Other than that, if it’s a possible move, you cannot skip your turn. Now,
while crossing the squares, the player’s token lands or ends his turn on a square with has
the lower end of a ladder, the token moves up to the other end ladder on the higher
number square. Its more like skipping the gradual track of movement and getting a
promotion to higher number directly. On the other hand if your token lands or end the turn
on a square with the upper end or the mouth of a snake, the token will be demoted to the
lower numbered square having the other end or the tail portion of the snake. This just
seems to turn the game entirely for the player. Even if he is the one leading in the game, out
of sheer bad luck and the snake he can have chance on losing the game completely. So it is
more of a luck based game than anything else. If you have a favorable luck, you can end the
game in a two or three chances but if you are out of luck, its gonna take forever to end the
game.</p>
<br/>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>WINNING THE GAME</h2>
<article className="para">
    <p>If you go up a ladder with your respective token, you get a added bonus of getting another
turn to roll the dice. Similarly if you roll the dice to a six, your token will move six squares
forward and then you get another chance to roll the dice again and if for e.g. it rolls to a five
it becomes the best move you can get because in a turn you get to move up to 11 squares.
But if it rolls to a six again the entire chance is deemed void and the turn moves on to the
next player. If your token is waiting on a 96 or the 97 th numbered square and you have rolled
a five with the dice on your turn, the move gets nullified because a legit move isn’t possible
and you have to wait for the next chance to roll your dice again to yield yourself a possible
move. The player who reaches the 100 th square first wins the game but the game continues
on for other players till the 2 nd , 3 rd and last positions are decided.</p>
<br/>
<p>This is one of the most easiest games in terms of rules and other complications but it
delivers as one of the best board games.</p>
<br/>
</article>
<br/>
<br/>
    <Footer />
    </>
);
   
return content;

}

export default SnakeAndLadder;