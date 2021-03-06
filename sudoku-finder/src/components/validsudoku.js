import React from 'react';
import { Alert } from 'reactstrap';
import Solver from './logic';


const Validsudoku = props => {

    let matrix = [[props.r00.r00, props.r01.r01, props.r02.r02, props.r03.r03, props.r04.r04, props.r05.r05, props.r06.r06, props.r07.r07, props.r08.r08],
    [props.r10.r10, props.r11.r11, props.r12.r12, props.r13.r13, props.r14.r14, props.r15.r15, props.r16.r16, props.r17.r17, props.r18.r18],
    [props.r20.r20, props.r21.r21, props.r22.r22, props.r23.r23, props.r24.r24, props.r25.r25, props.r26.r26, props.r27.r27, props.r28.r28],
    [props.r30.r30, props.r31.r31, props.r32.r32, props.r33.r33, props.r34.r34, props.r35.r35, props.r36.r36, props.r37.r37, props.r38.r38],
    [props.r40.r40, props.r41.r41, props.r42.r42, props.r43.r43, props.r44.r44, props.r45.r45, props.r46.r46, props.r47.r47, props.r48.r48],
    [props.r50.r50, props.r51.r51, props.r52.r52, props.r53.r53, props.r54.r54, props.r55.r55, props.r56.r56, props.r57.r57, props.r58.r58],
    [props.r60.r60, props.r61.r61, props.r62.r62, props.r63.r63, props.r64.r64, props.r65.r65, props.r66.r66, props.r67.r67, props.r68.r68],
    [props.r70.r70, props.r71.r71, props.r72.r72, props.r73.r73, props.r74.r74, props.r75.r75, props.r76.r76, props.r77.r77, props.r78.r78],
    [props.r80.r80, props.r81.r81, props.r82.r82, props.r83.r83, props.r84.r84, props.r85.r85, props.r86.r86, props.r87.r87, props.r88.r88]
    ];

    var Check = (board) => {
        for (let i = 0; i < board.length; i++) {
            let row = {}, col = {}, sq = {};
            for (let j = 0; j < board[0].length; j++) {
                let rowIndex = (3 * (i / 3 | 0)) + (j / 3 | 0);
                let colIndex = (3 * (i % 3)) + (j % 3);
                if (board[i][j] !== '.' && row[board[i][j]])
                    return false;
                else
                    row[board[i][j]] = true;
                if (board[j][i] !== '.' && col[board[j][i]])
                    return false;
                else
                    col[board[j][i]] = true;
                if (board[rowIndex][colIndex] !== '.' && sq[board[rowIndex][colIndex]])
                    return false;
                else
                    sq[board[rowIndex][colIndex]] = true;

            }
        }
        return true;
    }
    let answer = Check(matrix);
    const printErr = () => (
        <Alert color="danger">
            Invalid Inputs !!
    </Alert>
    )
    let content = (
        <>
            {answer === true ? <Solver r00={props.r00} r01={props.r01} r02={props.r02} r03={props.r03} r04={props.r04} r05={props.r05} r06={props.r06} r07={props.r07} r08={props.r08}
                r10={props.r10} r11={props.r11} r12={props.r12} r13={props.r13} r14={props.r14} r15={props.r15} r16={props.r16} r17={props.r17} r18={props.r18}
                r20={props.r20} r21={props.r21} r22={props.r22} r23={props.r23} r24={props.r24} r25={props.r25} r26={props.r26} r27={props.r27} r28={props.r28}
                r30={props.r30} r31={props.r31} r32={props.r32} r33={props.r33} r34={props.r34} r35={props.r35} r36={props.r36} r37={props.r37} r38={props.r38}
                r40={props.r40} r41={props.r41} r42={props.r42} r43={props.r43} r44={props.r44} r45={props.r45} r46={props.r46} r47={props.r47} r48={props.r48}
                r50={props.r50} r51={props.r51} r52={props.r52} r53={props.r53} r54={props.r54} r55={props.r55} r56={props.r56} r57={props.r57} r58={props.r58}
                r60={props.r60} r61={props.r61} r62={props.r62} r63={props.r63} r64={props.r64} r65={props.r65} r66={props.r66} r67={props.r67} r68={props.r68}
                r70={props.r70} r71={props.r71} r72={props.r72} r73={props.r73} r74={props.r74} r75={props.r75} r76={props.r76} r77={props.r77} r78={props.r78}
                r80={props.r80} r81={props.r81} r82={props.r82} r83={props.r83} r84={props.r84} r85={props.r85} r86={props.r86} r87={props.r87} r88={props.r88} /> : printErr()}
        </>
    );
    return content;
}
export default Validsudoku;