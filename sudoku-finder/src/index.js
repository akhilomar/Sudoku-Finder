import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import About from "./components/headercomponent/about";
import Contribute from "./components/headercomponent/contribute";
import PrivacyPolicies from "./components/headercomponent/privacypolicy";
import Disclaimer from "./components/headercomponent/disclaimer";
import TermsofService from "./components/headercomponent/termsofservice";
import ContactUs from "./components/headercomponent/contactus";


const Root=()=>(
    <Router>
        <div>
        <Route path="/" exact component={App}/>
        <Route path="/Home" exact component={App}/>
        <Route path="/About" exact component={About}/>
        <Route path="/Contribute" exact component={Contribute}/>
        <Route path="/PrivacyPolicies" exact component={PrivacyPolicies}/>
        <Route path="/Disclaimer" exact component={Disclaimer}/>
        <Route path="/TermsofService" exact component={TermsofService}/>
        <Route path="/ContactUs" exact component={ContactUs}/>
        </div>
    </Router>
   );

   ReactDOM.render(<Root />, document.getElementById('root'));


serviceWorker.unregister();
