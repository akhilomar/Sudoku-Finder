
import React from 'react';
const Footer = () => {
    var style = {
        backgroundColor: "black",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    };
    return (
     
        <div style={style}>
           <p>All rights reserved</p>
        </div>
     
    );
}

export default Footer;