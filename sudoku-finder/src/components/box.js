import React,{useState,useEffect} from 'react';
import "../App.css";
import { Input } from 'reactstrap';

const SudokuBox=()=>{
  
// const [r00,setr00]=useState(""); 
    const [val,setVal]=useState({
        r00:"",
        r01:"",
        r02:"",
        r03:"",
        r04:"",
        r05:"",
        r06:"",
        r07:"",
        r08:"",
        r10:"",
        r11:"",
        r12:"",
        r13:"",
        r14:"",
        r15:"",
        r16:"",
        r17:"",
        r18:"",
        r20:"",
        r21:"",
        r22:"",
        r23:"",
        r24:"",
        r25:"",
        r26:"",
        r27:"",
        r28:"",
        r30:"",
        r31:"",
        r32:"",
        r33:"",
        r34:"",
        r35:"",
        r36:"",
        r37:"",
        r38:"",
        r40:"",
        r41:"",
        r42:"",
        r43:"",
        r44:"",
        r45:"",
        r46:"",
        r47:"",
        r48:"",
        r50:"",
        r51:"",
        r52:"",
        r53:"",
        r54:"",
        r55:"",
        r56:"",
        r57:"",
        r58:"",
        r60:"",
        r61:"",
        r62:"",
        r63:"",
        r64:"",
        r65:"",
        r66:"",
        r67:"",
        r68:"",
        r70:"",
        r71:"",
        r72:"",
        r73:"",
        r74:"",
        r75:"",
        r76:"",
        r77:"",
        r78:"",
        r80:"",
        r81:"",
        r82:"",
        r83:"",
        r84:"",
        r85:"",
        r86:"",
        r87:"",
        r88:"",
    });
   
    let content=(
        <>
            
            <div className="container">
              <div className="box">
                <Input type="number" min="1" max="9" name="r00" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r01" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r02" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r03" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r04" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r05" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r06" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r07" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r08" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r10" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r11" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r12" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r13" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r14" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r15" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r16" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r17" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r18" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r20" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r21" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r22" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r23" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r24" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r25" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r26" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r27" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r28" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r30" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r31" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r32" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r33" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r34" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r35" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r36" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r37" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r38" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r40" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r41" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r42" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r43" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r44" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r45" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r46" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r47" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r48" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r50" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r51" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r52" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r53" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r54" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r55" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r56" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r57" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r58" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r60" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r61" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r62" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r63" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r64" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r65" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r66" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r67" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r68" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r70" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r71" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r72" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r73" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r74" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r75" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r76" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r77" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r78" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r80" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r81" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r82" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r83" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r84" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r85" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r86" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r87" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
              <div className="box">
                <Input type="number" min="1" max="9" name="r88" placeholder="1" onChange={(e)=>setVal({
                    [e.target.name]:e.target.value})}/>
              </div>
            </div>
        </>
    );
    useEffect((e) => console.log(val.r05), [val.r05]);

//     const handleChange=(e)=>{
//         setVal({...val,[e.target.name]:e.target.value});
// }
    return content;
}
export default SudokuBox;