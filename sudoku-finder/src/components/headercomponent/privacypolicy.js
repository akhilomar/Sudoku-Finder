import React from 'react';
import Header from '../header';
import Footer from '../footer';

const PrivacyPolicies=()=>{

let content=(
    <>
    <Header />
    <br/>
    <h2 style={{color:"white",paddingLeft:"3rem",paddingRight:"3rem",fontWeight:"600"}}>PRIVACY POLICY</h2>
    <article className="para">
        <p>We respect your privacy and we dont use your any data or misuse it. We dont collect anytype of your personal data.
Personal data is basically information that we take from you before starting this game. We make sure that your identification is
safe with Us.</p>
    </article>
    <br/>
    <br/>
    <Footer />
    </>
);
   
return content;

}

export default PrivacyPolicies;