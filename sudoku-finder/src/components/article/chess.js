import React from 'react';
import Header from '../header';
import Footer from '../footer';
import "../../App.css";
const Chess=()=>{

let content=(
    <>
    <Header />
    <br/>
    <article className="para">

    <h1 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>CHESS</h1>
    <article className="para">
        <p>Chess is a strategical board game played by between two players . It is played on a board which
consists 64 squares arranged in grid format of 8*8. It consists of 16 pieces each player of two
different colours being black and white pieces respectively. So the total number pieces in a match is
a total of 2*16=32 pieces. The 16 pieces consist of 8 pawns, 2 bishops, 2 rooks, 2 knights, 1 king and
1 queen . The most powerful of the six different categories of pieces is the queen and the least
powerful piece type is the pawn. The sole objective for each player in this game is CHECKMATE, i.e to
eliminate the king of the opposite colour. On reaching checkmate the game ends with the player of
who has his king still intact in the game. Every piece type in this game has unique way to move which
is distinguishable from the other pieces.</p>
<br/>
<p>To reach this point the player uses his pieces to attack the opponent’s pieces and vice a versa and
gradually the game progresses in the same way. In all this while the player also keeps in mind that he
needs to keep his pieces safe too and support each other. It is generally a typical exchange of pieces
with the opponent’s similar pieces and always try to have a better hand at the game and an
advantageous upper hand over the other along the gameplay. In addition to checkmate the game
can also be won by the player if the opponent resigns or isn’t in a position to make a legal possible
move. There are also ways by which the game ends to a draw or when the time runs out or in case of
mutual resignation. It is basically capturing the opponent’s king and keeping your respective king
safe from the threat of capture or attack.</p>
<br/>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>ARRANGEMENT</h2>
<article className="para">
    <p>The chess pieces are divided into two colours traditionally being black and white. Each colour
consists of a specific set of 16 pieces being 8 pawns, 2 knights , 2 rook , 2 bishop ,king and queen.
The game is generally setup in a board consisting of eight rows and eight columns . The rows from
top to bottom are also known as ranks and are numbered from 1 to 8. The columns from left to right
are named as files and are denoted by letters a to h. The entire cross section of squares on the board
of 64 squares has alternative colour pattern i.e the squares are alternatively coloured black and
white. The queen of the player is always place on the square of its own colour and the king begins
with square of the opposite colour I.e. if the player has the black colour king it is placed on the white
square. To understand the setup more carefully you have to know that on the board during the
arrangement of the pieces the white square on either side lies the closest to the player’s right hand
corner.</p>
<br/>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>HOW THE PIECES MOVE</h2>
<article className="para">
    <p>Every piece on the chess board moves differently and has a distinguishable movement pattern . In
one particular time the player is allowed to make only one move with his selected piece other than
during Castling when two pieces the king and a rook is moved and the player cannot skip his/her
turn and also the player can only make the move he/she has already started off with , one cannot
change the move or the game piece during one move to a different one as it is held as an illegal
chance and is called off by TOUCH AND MOVE. The player cannot intentionally put his/her king in
situation where it can be called as a CHECK.</p>
<br/>
<p>Each piece moves differently along a particular pattern if there are no other pieces obstructing the
path along the movement pattern. Only the KNIGHT can leap over intercepting pieces</p>
</article>
<br/>
<h3 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>PIECES MOVE</h3>
<article className="para">
    <p>
        <strong>KING</strong>
        <br/>
The KING can move by only one square be it in any direction. The KING and a ROOK together make
up for a special move called CASTLING.
<br/>
<br/>
<strong>ROOK</strong>
<br/>
The ROOK always moves in straight pattern along the board and can move as many squares as it
wants . It either moves along the file or along the rank.
<br/>
<br/>
<strong>BISHOP</strong>
<br/>
Bishop is moved diagonally as many number of squares as it want .
<br/>
<br/>
<strong>KNIGHT</strong>
<br/>
The KNIGHT always moves in a L shaped pattern with no other pieces interjecting its path so it
involves a move with three squares either two squares horizontally and one square vertically or two
squares vertically and one square horizontally. Only the KNIGHT has the ability to jump ove the other
pieces during its move.
<br/>
<br/>
<strong>QUEEN</strong>
<br/>
A QUEEN can move in two different ways i.e. like the rook and the other being like the bishop
diagonally and can move to any number of squares. Thus it is the most powerful piece of all the
other pieces.
<br/>
<br/>
<strong>PAWN</strong>
<br/>
A pawn can move only move one square to the next file if unoccupied or two squares if both are
unoccupied . A pawn can be used to eliminate an opponent’s piece if it is placed on diagonally in
front of it on the next file by moving up to that square and removing the other piece. This move is
called the EN PASSANT.
<br/>
<br/>
If the pawn can move up to the 8 th rank on the board , the player can make it into a bishop, knight,
rook or the queen of the player’s choice . This is called the PROMOTION.
<br/>
<br/>
<strong>CASTLING</strong>
<br/>
The KING moves along two files of the first rank towards the ROOK and the ROOK comes to the last
square occupied by the KING. This special move is called CASTLING. This move is possible where
there are no more pieces between them and if the KING is not in a position of CHECK. This should be
a first move for both the pieces, only then is the move possible.
<br/>
<br/>
<strong>CHECK</strong>
<br/>
When the KING is under attack by the opponent’s one of the pieces and is under the threat of
elimination it is called as a CHECK. The player under can move the king to square where it is or has
less threat of capture. But if there is no more moves a player can make to protect its KING from a
CHECK it is called a CHECKMATE and the opponent wins the game as the player has no more legal
moves left.
<br/>
</p>
<br/>
</article>
<h3 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>END OF THE GAME</h3>
<article className="para">
    <p>The game ends with a CHECKMATE or a draw if there is not enough time left or if both the players
have no more legal moves to make and they come to a mutual resign.</p>
</article>
</article>
<br/>
<br/>
    <Footer />
    </>
);
   
return content;

}

export default Chess;