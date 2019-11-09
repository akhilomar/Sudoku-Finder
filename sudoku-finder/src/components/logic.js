import React,{useState,useEffect} from 'react';
import { cpus } from 'os';



const Solver=props=>{
    // let R00=props.r00;
    // let R11=props.r01;

    // let R00=props.r00.r00
    let matrix=[[props.r00.r00, props.r01.r01, props.r02.r02, props.r03.r03,props.r04.r04, props.r05.r05, props.r06.r06, props.r07.r07, props.r08.r08],
    [props.r10.r10, props.r11.r11, props.r12.r12, props.r13.r13, props.r14.r14, props.r15.r15, props.r16.r16, props.r17.r17, props.r18.r18],
    [props.r20.r20, props.r21.r21, props.r22.r22, props.r23.r23, props.r24.r24, props.r25.r25, props.r26.r26, props.r27.r27, props.r28.r28],
    [props.r30.r30, props.r31.r31, props.r32.r32, props.r33.r33, props.r34.r34, props.r35.r35, props.r36.r36, props.r37.r37, props.r38.r38],
    [props.r40.r40, props.r41.r41, props.r42.r42, props.r43.r43, props.r44.r44, props.r45.r45, props.r46.r46, props.r47.r47, props.r48.r48],
    [props.r50.r50, props.r51.r51, props.r52.r52, props.r53.r53, props.r54.r54, props.r55.r55, props.r56.r56, props.r57.r57, props.r58.r58],
    [props.r60.r60, props.r61.r61, props.r62.r62, props.r63.r63, props.r64.r64, props.r65.r65, props.r66.r66, props.r67.r67, props.r68.r68],
    [props.r70.r70, props.r71.r71, props.r72.r72, props.r73.r73, props.r74.r74, props.r75.r75, props.r76.r76, props.r77.r77, props.r78.r78],
    [props.r80.r80, props.r81.r81, props.r82.r82, props.r83.r83, props.r84.r84, props.r85.r85, props.r86.r86, props.r87.r87, props.r88.r88]             
    ];

    useEffect(()=>{
        solveSudoku(matrix);
    },[])
    
//    useEffect(()=>{
//     console.log(matrix)
//    },[matrix]
//    )
    var nextIndex=(board)=>{    
    for(let i=0;i<board.length;i++)
    {
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]==='.')
            return [i,j];
        }
    }
    return false;
    }

    var isValidNum=(board,row,col,num)=>{
        for(let j=0;j<board[0].length;j++)
            if(board[row][j]===num && j!==col)
                return false;
        for(let i=0;i<board.length; i++)
            if(board[i][col]===num && i!=col){
                return false;
            }
    let boxRow=parseInt(row/3)*3;
    let boxCol=parseInt(col/3)*3;
    for(let i=boxRow;i<boxRow+3;i++){
        for(let j=boxCol;j<boxCol+3;j++){
            if(board[i][j]===num && (i!==row && j!==col)){
                return false;
            }
        }
    }
        return true;
    }

    var solveSudoku=function(board){
        if(!nextIndex(board))
            return true;
        let boardIndexes=nextIndex(board);
        let row=boardIndexes[0];
        let col=boardIndexes[1];
        for(let num=1;num<10;num++)
            if(isValidNum(board,row,col,num)){
                board[row][col]=num+"";
                if(solveSudoku(board)){
                    return true;
                }
                board[row][col]='.';
            }
    }
    


console.log(matrix[0][0]) 
let content=(
    
    <>
    {}
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
        <div>
            {matrix[1][0]}
        </div>
        <div>
            {matrix[1][1]}
        </div>
        <div>
            {matrix[1][2]}
        </div>
        <div>
            {matrix[1][3]}
        </div>
        <div>
            {matrix[1][4]}
        </div>
        <div>
            {matrix[1][5]}
        </div>
        <div>
            {matrix[1][6]}
        </div>
        <div>
            {matrix[1][7]}
        </div>
        <div>
            {matrix[1][8]}
        </div>
        <div>
            {matrix[2][0]}
        </div>
        <div>
            {matrix[2][1]}
        </div>
        <div>
            {matrix[2][2]}
        </div>
        <div>
            {matrix[2][3]}
        </div>
        <div>
            {matrix[2][4]}
        </div>
        <div>
            {matrix[2][5]}
        </div>
        <div>
            {matrix[2][6]}
        </div>
        <div>
            {matrix[2][7]}
        </div>
        <div>
            {matrix[2][8]}
        </div>
        <div>
            {matrix[3][0]}
        </div>
        <div>
            {matrix[3][1]}
        </div>
        <div>
            {matrix[3][2]}
        </div>
        <div>
            {matrix[3][3]}
        </div>
        <div>
            {matrix[3][4]}
        </div>
        <div>
            {matrix[3][5]}
        </div>
        <div>
            {matrix[3][6]}
        </div>
        <div>
            {matrix[3][7]}
        </div>
        <div>
            {matrix[3][8]}
        </div>
        <div>
            {matrix[4][0]}
        </div>
        <div>
            {matrix[4][1]}
        </div>
        <div>
            {matrix[4][2]}
        </div>
        <div>
            {matrix[4][3]}
        </div>
        <div>
            {matrix[4][4]}
        </div>
        <div>
            {matrix[4][5]}
        </div>
        <div>
            {matrix[4][6]}
        </div>
        <div>
            {matrix[4][7]}
        </div>
        <div>
            {matrix[4][8]}
        </div>
        <div>
            {matrix[5][0]}
        </div>
        <div>
            {matrix[5][1]}
        </div>
        <div>
            {matrix[5][2]}
        </div>
        <div>
            {matrix[5][3]}
        </div>
        <div>
            {matrix[5][4]}
        </div>
        <div>
            {matrix[5][5]}
        </div>
        <div>
            {matrix[5][6]}
        </div>
        <div>
            {matrix[5][7]}
        </div>
        <div>
            {matrix[5][8]}
        </div>
        <div>
            {matrix[6][0]}
        </div>
        <div>
            {matrix[6][1]}
        </div>
        <div>
            {matrix[6][2]}
        </div>
        <div>
            {matrix[6][3]}
        </div>
        <div>
            {matrix[6][4]}
        </div>
        <div>
            {matrix[6][5]}
        </div>
        <div>
            {matrix[6][6]}
        </div>
        <div>
            {matrix[6][7]}
        </div>
        <div>
            {matrix[6][8]}
        </div>
        <div>
            {matrix[7][0]}
        </div>
        <div>
            {matrix[7][1]}
        </div>
        <div>
            {matrix[7][2]}
        </div>
        <div>
            {matrix[7][3]}
        </div>
        <div>
            {matrix[7][4]}
        </div>
        <div>
            {matrix[7][5]}
        </div>
        <div>
            {matrix[7][6]}
        </div>
        <div>
            {matrix[7][7]}
        </div>
        <div>
            {matrix[7][8]}
        </div>
        <div>
            {matrix[8][0]}
        </div>
        <div>
            {matrix[8][1]}
        </div>
        <div>
            {matrix[8][2]}
        </div>
        <div>
            {matrix[8][3]}
        </div>
        <div>
            {matrix[8][4]}
        </div>
        <div>
            {matrix[8][5]}
        </div>
        <div>
            {matrix[8][6]}
        </div>
        <div>
            {matrix[8][7]}
        </div>
        <div>
            {matrix[8][8]}
        </div>
    </div>

    </>
);
return content;
};
export default Solver;
