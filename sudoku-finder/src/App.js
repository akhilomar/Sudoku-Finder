import React from 'react';
import Header from './components/header';
import Footer from './components/footer'
import SudokuBox from './components/box';


const App = () => {

  let content = (
    <>
      <Header />
      <SudokuBox />
      <br/>
      <br/>
      <br/>
      <Footer />
   
    </>
  );
  return content;
}
export default App;