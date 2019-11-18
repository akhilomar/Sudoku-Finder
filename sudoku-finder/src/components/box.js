import React,{useState,useEffect} from 'react';
import "../App.css";
import { Input,Button } from 'reactstrap';
import Solver from './logic';
import Validsudoku from './validsudoku';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { tsPropertySignature } from '@babel/types';

const SudokuBox=()=>{
 
  let a=".";
 
  // let buttonClick=()=>{
  //   if(props.answer)
  //   {
      
  //   }
  //   else
  //   {
  //     <div>
  //       Recheck Inputs
  //     </div>
  //   }
  // }
  
  const ResetFunc=(forceUpdate)=>{
    // useEffect(()=>{});
     window.location.reload();
     console.log(r00.r00);
    // console.log("check");
  }
 
  const [clicked,setClick]=useState(false);  
  const [r00,setVal1]=useState({r00:'.'});
  const [r01,setVal2]=useState({r01:'.'});
  const [r02,setVal3]=useState({r02:'.'});
  const [r03,setVal4]=useState({r03:'.'});
  const [r04,setVal5]=useState({r04:'.'});
  const [r05,setVal6]=useState({r05:'.'});
  const [r06,setVal7]=useState({r06:'.'});
  const [r07,setVal8]=useState({r07:'.'});
  const [r08,setVal9]=useState({r08:'.'});
  const [r10,setVal10]=useState({r10:'.'});
  const [r11,setVal11]=useState({r11:'.'});
  const [r12,setVal12]=useState({r12:'.'});
  const [r13,setVal13]=useState({r13:'.'});
  const [r14,setVal14]=useState({r14:'.'});
  const [r15,setVal15]=useState({r15:'.'});
  const [r16,setVal16]=useState({r16:'.'});
  const [r17,setVal17]=useState({r17:'.'});
  const [r18,setVal18]=useState({r18:'.'});
  const [r20,setVal19]=useState({r20:'.'});
  const [r21,setVal20]=useState({r21:'.'});
  const [r22,setVal21]=useState({r22:'.'});
  const [r23,setVal22]=useState({r23:'.'});
  const [r24,setVal23]=useState({r24:'.'});
  const [r25,setVal24]=useState({r25:'.'});
  const [r26,setVal25]=useState({r26:'.'});
  const [r27,setVal26]=useState({r27:'.'});
  const [r28,setVal27]=useState({r28:'.'});
  const [r30,setVal28]=useState({r30:'.'});
  const [r31,setVal29]=useState({r31:'.'});
  const [r32,setVal30]=useState({r32:'.'});
  const [r33,setVal31]=useState({r33:'.'});
  const [r34,setVal32]=useState({r34:'.'});
  const [r35,setVal33]=useState({r35:'.'});
  const [r36,setVal34]=useState({r36:'.'});
  const [r37,setVal35]=useState({r37:'.'});
  const [r38,setVal36]=useState({r38:'.'});
  const [r40,setVal37]=useState({r40:'.'});
  const [r41,setVal38]=useState({r41:'.'});
  const [r42,setVal39]=useState({r42:'.'});
  const [r43,setVal40]=useState({r43:'.'});
  const [r44,setVal41]=useState({r44:'.'});
  const [r45,setVal42]=useState({r45:'.'});
  const [r46,setVal43]=useState({r46:'.'});
  const [r47,setVal44]=useState({r47:'.'});
  const [r48,setVal45]=useState({r48:'.'});
  const [r50,setVal46]=useState({r50:'.'});
  const [r51,setVal47]=useState({r51:'.'});
  const [r52,setVal48]=useState({r52:'.'});
  const [r53,setVal49]=useState({r53:'.'});
  const [r54,setVal50]=useState({r54:'.'});
  const [r55,setVal51]=useState({r55:'.'});
  const [r56,setVal52]=useState({r56:'.'});
  const [r57,setVal53]=useState({r57:'.'});
  const [r58,setVal54]=useState({r58:'.'});
  const [r60,setVal55]=useState({r60:'.'});
  const [r61,setVal56]=useState({r61:'.'});
  const [r62,setVal57]=useState({r62:'.'});
  const [r63,setVal58]=useState({r63:'.'});
  const [r64,setVal59]=useState({r64:'.'});
  const [r65,setVal60]=useState({r65:'.'});
  const [r66,setVal61]=useState({r66:'.'});
  const [r67,setVal62]=useState({r67:'.'});
  const [r68,setVal63]=useState({r68:'.'});
  const [r70,setVal64]=useState({r70:'.'});
  const [r71,setVal65]=useState({r71:'.'});
  const [r72,setVal66]=useState({r72:'.'});
  const [r73,setVal67]=useState({r73:'.'});
  const [r74,setVal68]=useState({r74:'.'});
  const [r75,setVal69]=useState({r75:'.'});
  const [r76,setVal70]=useState({r76:'.'});
  const [r77,setVal71]=useState({r77:'.'});
  const [r78,setVal72]=useState({r78:'.'});
  const [r80,setVal73]=useState({r80:'.'});
  const [r81,setVal74]=useState({r81:'.'});
  const [r82,setVal75]=useState({r82:'.'});
  const [r83,setVal76]=useState({r83:'.'});
  const [r84,setVal77]=useState({r84:'.'});
  const [r85,setVal78]=useState({r85:'.'});
  const [r86,setVal79]=useState({r86:'.'});
  const [r87,setVal80]=useState({r87:'.'});
  const [r88,setVal81]=useState({r88:'.'});

 
  
    // const [val,setVal]=useState({
       
    //     r02:{r00:'.'},
    //     r03:{r00:'.'},
    //     r04:{r00:'.'},
    //     r05:{r00:'.'},
    //     r06:{r00:'.'},
    //     r07:{r00:'.'},
    //     r08:{r00:'.'},
    //     r10:{r00:'.'},
    //     r11:{r00:'.'},
    //     r12:{r00:'.'},
    //     r13:{r00:'.'},
    //     r14:{r00:'.'},
    //     r15:{r00:'.'},
    //     r16:{r00:'.'},
    //     r17:{r00:'.'},
    //     r18:{r00:'.'},
    //     r20:{r00:'.'},
    //     r21:{r00:'.'},
    //     r22:{r00:'.'},
    //     r23:{r00:'.'},
    //     r24:{r00:'.'},
    //     r25:{r00:'.'},
    //     r26:{r00:'.'},
    //     r27:{r00:'.'},
    //     r28:{r00:'.'},
    //     r30:{r00:'.'},
    //     r31:{r00:'.'},
    //     r32:{r00:'.'},
    //     r33:{r00:'.'},
    //     r34:{r00:'.'},
    //     r35:{r00:'.'},
    //     r36:{r00:'.'},
    //     r37:{r00:'.'},
    //     r38:{r00:'.'},
    //     r40:{r00:'.'},
    //     r41:{r00:'.'},
    //     r42:{r00:'.'},
    //     r43:{r00:'.'},
    //     r44:{r00:'.'},
    //     r45:{r00:'.'},
    //     r46:{r00:'.'},
    //     r47:{r00:'.'},
    //     r48:{r00:'.'},
    //     r50:{r00:'.'},
    //     r51:{r00:'.'},
    //     r52:{r00:'.'},
    //     r53:{r00:'.'},
    //     r54:{r00:'.'},
    //     r55:{r00:'.'},
    //     r56:{r00:'.'},
    //     r57:{r00:'.'},
    //     r58:{r00:'.'},
    //     r60:{r00:'.'},
    //     r61:{r00:'.'},
    //     r62:{r00:'.'},
    //     r63:{r00:'.'},
    //     r64:{r00:'.'},
    //     r65:{r00:'.'},
    //     r66:{r00:'.'},
    //     r67:{r00:'.'},
    //     r68:{r00:'.'},
    //     r70:{r00:'.'},
    //     r71:{r00:'.'},
    //     r72:{r00:'.'},
    //     r73:{r00:'.'},
    //     r74:{r00:'.'},
    //     r75:{r00:'.'},
    //     r76:{r00:'.'},
    //     r77:{r00:'.'},
    //     r78:{r00:'.'},
    //     r80:{r00:'.'},
    //     r81:{r00:'.'},
    //     r82:{r00:'.'},
    //     r83:{r00:'.'},
    //     r84:{r00:'.'},
    //     r85:{r00:'.'},
    //     r86:{r00:'.'},
    //     r87:{r00:'.'},
    //     r88:{r00:'.'},
    // });
    // useEffect(()=>{},[val]);
    

    // console.log({r00});
    // console.log({r01});
    // console.log({r02});
    // console.log({r03});
    // console.log({r04});
    // console.log({r05});
    // console.log({r06});
    // console.log({r07});
    // console.log({r08});

   

    let content=(
        <>
            <div className="container">
              <div className="box">
                <Input type="number" min="1" max="9" name="r00" placeholder={a} onChange={(e)=>setVal1({
                    r00:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r01" placeholder={a} onChange={(e)=>setVal2({
                    r01:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r02" placeholder={a} onChange={(e)=>setVal3({
                  r02:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r03" placeholder={a} onChange={(e)=>setVal4({
                    r03:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r04" placeholder={a} onChange={(e)=>setVal5({
                    r04:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r05" placeholder={a} onChange={(e)=>setVal6({
                    r05:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r06" placeholder={a} onChange={(e)=>setVal7({
                    r06:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r07" placeholder={a} onChange={(e)=>setVal8({
                    r07:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r08" placeholder={a} onChange={(e)=>setVal9({
                    r08:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r10" placeholder={a} onChange={(e)=>setVal10({
                    r10:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r11" placeholder={a} onChange={(e)=>setVal11({
                    r11:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r12" placeholder={a} onChange={(e)=>setVal12({
                    r12:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r13" placeholder={a} onChange={(e)=>setVal13({
                    r13:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r15" placeholder={a} onChange={(e)=>setVal14({
                    r14:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r16" placeholder={a} onChange={(e)=>setVal15({
                    r15:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r17" placeholder={a} onChange={(e)=>setVal16({
                    r16:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r18" placeholder={a} onChange={(e)=>setVal17({
                    r17:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r20" placeholder={a} onChange={(e)=>setVal18({
                    r18:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r21" placeholder={a} onChange={(e)=>setVal19({
                    r20:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r22" placeholder={a} onChange={(e)=>setVal20({
                    r21:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r23" placeholder={a} onChange={(e)=>setVal21({
                    r22:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r24" placeholder={a} onChange={(e)=>setVal22({
                    r23:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r25" placeholder={a} onChange={(e)=>setVal23({
                    r24:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r26" placeholder={a} onChange={(e)=>setVal24({
                    r25:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r27" placeholder={a} onChange={(e)=>setVal25({
                    r26:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r28" placeholder={a} onChange={(e)=>setVal26({
                    r27:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r30" placeholder={a} onChange={(e)=>setVal27({
                    r28:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r31" placeholder={a} onChange={(e)=>setVal28({
                    r30:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r32" placeholder={a} onChange={(e)=>setVal29({
                    r31:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r33" placeholder={a} onChange={(e)=>setVal30({
                    r32:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r34" placeholder={a} onChange={(e)=>setVal31({
                    r33:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r35" placeholder={a} onChange={(e)=>setVal32({
                    r34:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r36" placeholder={a} onChange={(e)=>setVal33({
                    r35:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r37" placeholder={a} onChange={(e)=>setVal34({
                    r36:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r38" placeholder={a} onChange={(e)=>setVal35({
                    r37:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r40" placeholder={a} onChange={(e)=>setVal36({
                    r38:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r41" placeholder={a} onChange={(e)=>setVal37({
                    r40:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r42" placeholder={a} onChange={(e)=>setVal38({
                    r41:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r43" placeholder={a} onChange={(e)=>setVal39({
                    r42:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r44" placeholder={a} onChange={(e)=>setVal40({
                    r43:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r45" placeholder={a} onChange={(e)=>setVal41({
                    r44:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r46" placeholder={a} onChange={(e)=>setVal42({
                    r45:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r47" placeholder={a} onChange={(e)=>setVal43({
                    r46:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r48" placeholder={a} onChange={(e)=>setVal44({
                    r47:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r50" placeholder={a} onChange={(e)=>setVal45({
                    r48:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r51" placeholder={a} onChange={(e)=>setVal46({
                    r50:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r52" placeholder={a} onChange={(e)=>setVal47({
                    r51:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r53" placeholder={a} onChange={(e)=>setVal48({
                    r52:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r54" placeholder={a} onChange={(e)=>setVal49({
                    r53:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r55" placeholder={a} onChange={(e)=>setVal50({
                    r54:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r56" placeholder={a} onChange={(e)=>setVal51({
                    r55:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r57" placeholder={a} onChange={(e)=>setVal52({
                    r56:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r58" placeholder={a} onChange={(e)=>setVal53({
                    r57:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r60" placeholder={a} onChange={(e)=>setVal54({
                    r58:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r61" placeholder={a} onChange={(e)=>setVal55({
                    r60:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r62" placeholder={a} onChange={(e)=>setVal56({
                    r61:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r63" placeholder={a} onChange={(e)=>setVal57({
                    r62:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r64" placeholder={a} onChange={(e)=>setVal58({
                    r63:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r65" placeholder={a} onChange={(e)=>setVal59({
                    r64:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r67" placeholder={a} onChange={(e)=>setVal60({
                    r65:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r68" placeholder={a} onChange={(e)=>setVal61({
                    r66:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r70" placeholder={a} onChange={(e)=>setVal62({
                    r67:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r71" placeholder={a} onChange={(e)=>setVal63({
                    r68:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r72" placeholder={a} onChange={(e)=>setVal64({
                    r70:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r73" placeholder={a} onChange={(e)=>setVal65({
                    r71:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r74" placeholder={a} onChange={(e)=>setVal66({
                    r72:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r75" placeholder={a} onChange={(e)=>setVal67({
                    r73:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r76" placeholder={a} onChange={(e)=>setVal68({
                    r74:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r77" placeholder={a} onChange={(e)=>setVal69({
                    r75:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r78" placeholder={a} onChange={(e)=>setVal70({
                    r76:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r80" placeholder={a} onChange={(e)=>setVal71({
                    r77:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r81" placeholder={a} onChange={(e)=>setVal72({
                    r78:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r82" placeholder={a} onChange={(e)=>setVal73({
                    r80:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r83" placeholder={a} onChange={(e)=>setVal74({
                    r81:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r84" placeholder={a} onChange={(e)=>setVal75({
                    r82:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r85" placeholder={a} onChange={(e)=>setVal76({
                    r83:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r86" placeholder={a} onChange={(e)=>setVal77({
                    r84:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r87" placeholder={a} onChange={(e)=>setVal78({
                    r85:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r88" placeholder={a} onChange={(e)=>setVal79({
                    r86:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r88" placeholder={a} onChange={(e)=>setVal80({
                    r87:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r88" placeholder={a} onChange={(e)=>setVal81({
                    r88:e.target.value})}/>
              </div>
            </div>
            <div className="button1"> 
              <div className="button1">
                <Button color="success" onClick={()=>setClick(true)} >SOLVE</Button>
              </div>
              <div className="button1">
                <Button color="primary" onClick={ResetFunc}>RESET</Button>
              </div>
            </div>
          {clicked?<Solver r00={r00} r01={r01} r02={r02} r03={r03} r04={r04} r05={r05} r06={r06} r07={r07} r08={r08}
                  r10={r10} r11={r11} r12={r12} r13={r13} r14={r14} r15={r15} r16={r16} r17={r17} r18={r18}
                  r20={r20} r21={r21} r22={r22} r23={r23} r24={r24} r25={r25} r26={r26} r27={r27} r28={r28}  
                  r30={r30} r31={r31} r32={r32} r33={r33} r34={r34} r35={r35} r36={r36} r37={r37} r38={r38}
                  r40={r40} r41={r41} r42={r42} r43={r43} r44={r44} r45={r45} r46={r46} r47={r47} r48={r48} 
                  r50={r50} r51={r51} r52={r52} r53={r53} r54={r54} r55={r55} r56={r56} r57={r57} r58={r58}
                  r60={r60} r61={r61} r62={r62} r63={r63} r64={r64} r65={r65} r66={r66} r67={r67} r68={r68}
                  r70={r70} r71={r71} r72={r72} r73={r73} r74={r74} r75={r75} r76={r76} r77={r77} r78={r78}
                  r80={r80} r81={r81} r82={r82} r83={r83} r84={r84} r85={r85} r86={r86} r87={r87} r88={r88}
            />:''}
            <Validsudoku  
            r00={r00} r01={r01} r02={r02} r03={r03} r04={r04} r05={r05} r06={r06} r07={r07} r08={r08}
            r10={r10} r11={r11} r12={r12} r13={r13} r14={r14} r15={r15} r16={r16} r17={r17} r18={r18}
            r20={r20} r21={r21} r22={r22} r23={r23} r24={r24} r25={r25} r26={r26} r27={r27} r28={r28}  
            r30={r30} r31={r31} r32={r32} r33={r33} r34={r34} r35={r35} r36={r36} r37={r37} r38={r38}
            r40={r40} r41={r41} r42={r42} r43={r43} r44={r44} r45={r45} r46={r46} r47={r47} r48={r48} 
            r50={r50} r51={r51} r52={r52} r53={r53} r54={r54} r55={r55} r56={r56} r57={r57} r58={r58}
            r60={r60} r61={r61} r62={r62} r63={r63} r64={r64} r65={r65} r66={r66} r67={r67} r68={r68}
            r70={r70} r71={r71} r72={r72} r73={r73} r74={r74} r75={r75} r76={r76} r77={r77} r78={r78}
            r80={r80} r81={r81} r82={r82} r83={r83} r84={r84} r85={r85} r86={r86} r87={r87} r88={r88}
            />
        </>
    );
   // useEffect((e) => console.log(val.r05), [val.r05]);

//     const handleChange=(e)=>{
//         setVal({...val,r00:e.target.value});
// }
    return content;
}
export default SudokuBox;