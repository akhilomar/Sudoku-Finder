import React from 'react';
import Header from '../header';
import Footer from '../footer';
import "../../App.css";
const Sudoku=()=>{

let content=(
    <>
    <Header />
    <br/>
    <h1 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>SUDOKU</h1>
    <article className="para">
        <p>Sudoku is a stratigical number game which has gained popularity over time because of its
increasing interest of mathematicians into it. It is a game of combinations and compository grids
of numbers making it one of the simplest games yet requires some skill set and special interest
on combinations and algorithms. This game which started off as a simple paper and pencil
game , today has a wide number of variations and the most number of combinatorial
possibilities.</p>
<br/>
<p>It has the easiest and common configuration possible , having a 9*9 grid with random numbers
ranging from 1-9 appearing in some of the squares. So its more or less a number puzzle where
you need to fill up the remaining boxes using only the numbers from 1-9 exactly one in each row
and column and the 3*3 sub grids. So basically the grid of 9*9 is made up 9 3*3 subgrids. It is
entirely logic based and the level of difficulty depends on the organisation, quantity and position
of the original n umbers given on the grid beforehand.</p>
<br/>
<p>There were several variations of the game which made the game a degree difficult from its
original predecessor version which its growing populaity among the mathematicians for its
number game. Hence, it gained popularity with it being published in newspapers as well as
magazine copies making it a popula morning routine for the people.</p>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>THE GAME</h2>
<article className="para">
    <p>So, it basically consists of a grid having nine rows and nine columns in total. Turning the entire
grid into a cross section of 81 squares or boxes. Now these nine rows and nine columns are
further sub divided into smaller grids of 3 . Each sub grid having a 3*3 cross section. Now some
of the boxes in the entire grid have randomn number on randomn boxes ranging from 1-9. Now
you have to be very careful that you fill every one of those unfilled boxes with the numbers
missing from 1-9. One sub grid of 3*3 should have the number only once( ranging from 1 to 9)
and no number cannot be repeated.</p>
<br/>
<p>Also you need to keep in mind that a total of 9 rows and 9 columns are there and each column
should have a number from 1 to 9 only once i.e. row 1 and column 1 should have the number
for e.g. 8 only once appearing and likewise you need to fill the rest of he unfilled boxes. It is the
logical number puzzle which has millions of combinations and possibilities and depending on
the quantity and arrangement of numbers you can increase or decrease the difficulty of the
game.</p>
</article>
<h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>VARIATIONS</h2>
<article className="para">
<h3 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>Alphabetical Sudoku or Worduko :</h3>
<article className="para">
    <p>Pretty much understandable by the name itself . You just
need to fill up the boxes with missing alphabets in a way that they do not spell anything.</p></article>
<h3 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>Hyper Sudoku : </h3>
<article className="para"><p>Similar to the simple game of sudoku but just to make it a bit more complicated
it has 4 inner additional regions of 3*3 outlines in which the numbers 1-9 should appear only
once.</p></article>
<h3 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>Twin Sudoku : </h3>
<article className="para"><p>It is a form of sudoku in which two overlapping similar sudoku grids have an
overlapping area of two 3*3 grids which is called the overlapping region and is shared by the
both. The numbers in the overlapping region are shared by both the grids so none of the sudoku
grids can be solved individually. You need to solve both the grids together without repeating the
numbers.</p></article>
</article>
<br/>
<br/>
    <Footer />
    </>
);
   
return content;

}

export default Sudoku;