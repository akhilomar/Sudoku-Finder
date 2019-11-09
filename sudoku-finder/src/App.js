import React,{useState} from 'react'; 
import Header from './components/header';
import Footer from './components/footer';
import SudokuBox from './components/box';


const App=()=>{

let content=(
  <>
    <Header />
      <SudokuBox />
    {/* <Footer /> */}
  </>
);
return content;
}
export default App;