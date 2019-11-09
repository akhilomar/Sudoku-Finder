import React,{useState,useEffect} from 'react';
import "../App.css";
import { Input } from 'reactstrap';
import Solver from './logic';

const SudokuBox=()=>{
  

  const [r00,setVal1]=useState('.');
  const [r01,setVal2]=useState('.');
  const [r02,setVal3]=useState('.');
  const [r03,setVal4]=useState('.');
  const [r04,setVal5]=useState('.');
  const [r05,setVal6]=useState('.');
  const [r06,setVal7]=useState('.');
  const [r07,setVal8]=useState('.');
  const [r08,setVal9]=useState('.');
  const [r10,setVal10]=useState('.');
  const [r11,setVal11]=useState('.');
  const [r12,setVal12]=useState('.');
  const [r13,setVal13]=useState('.');
  const [r14,setVal14]=useState('.');
  const [r15,setVal15]=useState('.');
  const [r16,setVal16]=useState('.');
  const [r17,setVal17]=useState('.');
  const [r18,setVal18]=useState('.');
  const [r20,setVal19]=useState('.');
  const [r21,setVal20]=useState('.');
  const [r22,setVal21]=useState('.');
  const [r23,setVal22]=useState('.');
  const [r24,setVal23]=useState('.');
  const [r25,setVal24]=useState('.');
  const [r26,setVal25]=useState('.');
  const [r27,setVal26]=useState('.');
  const [r28,setVal27]=useState('.');
  const [r30,setVal28]=useState('.');
  const [r31,setVal29]=useState('.');
  const [r32,setVal30]=useState('.');
  const [r33,setVal31]=useState('.');
  const [r34,setVal32]=useState('.');
  const [r35,setVal33]=useState('.');
  const [r36,setVal34]=useState('.');
  const [r37,setVal35]=useState('.');
  const [r38,setVal36]=useState('.');
  const [r40,setVal37]=useState('.');
  const [r41,setVal38]=useState('.');
  const [r42,setVal39]=useState('.');
  const [r43,setVal40]=useState('.');
  const [r44,setVal41]=useState('.');
  const [r45,setVal42]=useState('.');
  const [r46,setVal43]=useState('.');
  const [r47,setVal44]=useState('.');
  const [r48,setVal45]=useState('.');
  const [r50,setVal46]=useState('.');
  const [r51,setVal47]=useState('.');
  const [r52,setVal48]=useState('.');
  const [r53,setVal49]=useState('.');
  const [r54,setVal50]=useState('.');
  const [r55,setVal51]=useState('.');
  const [r56,setVal52]=useState('.');
  const [r57,setVal53]=useState('.');
  const [r58,setVal54]=useState('.');
  const [r60,setVal55]=useState('.');
  const [r61,setVal56]=useState('.');
  const [r62,setVal57]=useState('.');
  const [r63,setVal58]=useState('.');
  const [r64,setVal59]=useState('.');
  const [r65,setVal60]=useState('.');
  const [r66,setVal61]=useState('.');
  const [r67,setVal62]=useState('.');
  const [r68,setVal63]=useState('.');
  const [r70,setVal64]=useState('.');
  const [r71,setVal65]=useState('.');
  const [r72,setVal66]=useState('.');
  const [r73,setVal67]=useState('.');
  const [r74,setVal68]=useState('.');
  const [r75,setVal69]=useState('.');
  const [r76,setVal70]=useState('.');
  const [r77,setVal71]=useState('.');
  const [r78,setVal72]=useState('.');
  const [r80,setVal73]=useState('.');
  const [r81,setVal74]=useState('.');
  const [r82,setVal75]=useState('.');
  const [r83,setVal76]=useState('.');
  const [r84,setVal77]=useState('.');
  const [r85,setVal78]=useState('.');
  const [r86,setVal79]=useState('.');
  const [r87,setVal80]=useState('.');
  const [r88,setVal81]=useState('.');
  
    // const [val,setVal]=useState({
       
    //     r02:'.',
    //     r03:'.',
    //     r04:'.',
    //     r05:'.',
    //     r06:'.',
    //     r07:'.',
    //     r08:'.',
    //     r10:'.',
    //     r11:'.',
    //     r12:'.',
    //     r13:'.',
    //     r14:'.',
    //     r15:'.',
    //     r16:'.',
    //     r17:'.',
    //     r18:'.',
    //     r20:'.',
    //     r21:'.',
    //     r22:'.',
    //     r23:'.',
    //     r24:'.',
    //     r25:'.',
    //     r26:'.',
    //     r27:'.',
    //     r28:'.',
    //     r30:'.',
    //     r31:'.',
    //     r32:'.',
    //     r33:'.',
    //     r34:'.',
    //     r35:'.',
    //     r36:'.',
    //     r37:'.',
    //     r38:'.',
    //     r40:'.',
    //     r41:'.',
    //     r42:'.',
    //     r43:'.',
    //     r44:'.',
    //     r45:'.',
    //     r46:'.',
    //     r47:'.',
    //     r48:'.',
    //     r50:'.',
    //     r51:'.',
    //     r52:'.',
    //     r53:'.',
    //     r54:'.',
    //     r55:'.',
    //     r56:'.',
    //     r57:'.',
    //     r58:'.',
    //     r60:'.',
    //     r61:'.',
    //     r62:'.',
    //     r63:'.',
    //     r64:'.',
    //     r65:'.',
    //     r66:'.',
    //     r67:'.',
    //     r68:'.',
    //     r70:'.',
    //     r71:'.',
    //     r72:'.',
    //     r73:'.',
    //     r74:'.',
    //     r75:'.',
    //     r76:'.',
    //     r77:'.',
    //     r78:'.',
    //     r80:'.',
    //     r81:'.',
    //     r82:'.',
    //     r83:'.',
    //     r84:'.',
    //     r85:'.',
    //     r86:'.',
    //     r87:'.',
    //     r88:'.',
    // });
    // useEffect(()=>{},[val]);
    const a="1-9";
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
          <Solver r00={r00} r01={r01} r02={r02} r03={r03} r04={r04} r05={r05} r06={r06} r07={r07} r08={r08}
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