import React,{useState,useEffect} from 'react';
import { cpus } from 'os';



const Solver=props=>{
    let R00=props.values.r00;
    let R11=props.values.r01;

   
    let matrix=[[props.values.r00, props.values.r01, props.values.r02, props.values.r03,props.values.r04, props.values.r05, props.values.r06, props.values.r07, props.values.r08],
    [props.values.r10, props.values.r11, props.values.r12, props.values.r13, props.values.r14, props.values.r15, props.values.r16, props.values.r17, props.values.r18],
    [props.values.r20, props.values.r21, props.values.r22, props.values.r23, props.values.r24, props.values.r25, props.values.r26, props.values.r27, props.values.r28],
    [props.values.r30, props.values.r31, props.values.r32, props.values.r33, props.values.r34, props.values.r35, props.values.r36, props.values.r37, props.values.r38],
    [props.values.r40, props.values.r41, props.values.r42, props.values.r43, props.values.r44, props.values.r45, props.values.r46, props.values.r47, props.values.r48],
    [props.values.r50, props.values.r51, props.values.r52, props.values.r53, props.values.r54, props.values.r55, props.values.r56, props.values.r57, props.values.r58],
    [props.values.r60, props.values.r61, props.values.r62, props.values.r63, props.values.r64, props.values.r65, props.values.r66, props.values.r67, props.values.r68],
    [props.values.r70, props.values.r71, props.values.r72, props.values.r73, props.values.r74, props.values.r75, props.values.r76, props.values.r77, props.values.r78],
    [props.values.r80, props.values.r81, props.values.r82, props.values.r83, props.values.r84, props.values.r85, props.values.r86, props.values.r87, props.values.r88]];             
   
    

    
   useEffect(()=>{
    console.log(matrix)
   }
   )
    // var nextIndex=(board)=>{    
    // for(let i=0;i<board.length;i++)
    // {
    //     for(let j=0;j<board[0].length;j++){
    //         if(board[i][j]==="")
    //         return [i,j];
    //     }
    // }
    // return false;
    // }

    // var isValidNum=(board,row,col,num)=>{
    //     for(let j=0;j<board[0].length;j++)
    //         if(board[row][j]===num && j!==col)
    //             return false;
    //     for(let i=0;i<board.length; i++)
    //         if(board[i][col]===num && i!=col){
    //             return false;
    //         }
    // let boxRow=parseInt(row/3)*3;
    // let boxCol=parseInt(col/3)*3;
    // for(let i=boxRow;i<boxRow+3;i++){
    //     for(let j=boxCol;j<boxCol+3;j++){
    //         if(board[i][j]===num && (i!==row && j!==col)){
    //             return false;
    //         }
    //     }
    // }
    //     return true;
    // }

    // var solveSudoku=(board)=>{
    //     if(!nextIndex(board))
    //         return true;
    //     let boardIndexes=nextIndex(board);
    //     let row=boardIndexes[0];
    //     let col=boardIndexes[1];
    //     for(let num=1;num<10;num++)
    //         if(isValidNum(board,row,col,num)){
    //             board[row][col]=num+'';
    //             if(solveSudoku(board)){
    //                 return true;
    //             }
    //         }
    // }

    // solveSudoku(matrix);

    
let content=(
    
    <>
    <div className="container">
        
        <div>
            {matrix[0][0]}
        </div>
        <div>
            {matrix[0][1]}
        </div>
        <div>
            {matrix[0][2]}
        </div>
        <div>
            {matrix[0][3]}
        </div>
        <div>
            {matrix[0][4]}
        </div>
        <div>
            {matrix[0][5]}
        </div>
        <div>
            {matrix[0][6]}
        </div>
        <div>
            {matrix[0][7]}
        </div>
        <div>
            {matrix[0][8]}
        </div>
    </div>

    </>
);
return content;
};
export default Solver;
