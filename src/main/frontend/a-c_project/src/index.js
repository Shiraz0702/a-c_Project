import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter} from "react-router-dom";
import ContactUs from "./Components/Home/contactUs/ContactUs";
import WhyChooseUs from "./Components/Home/whyChooseUs/WhyChooseUs";
import ContactInfo from "./Components/contactInfo/ContactInfo";
import FindUsOn from "./Components/Home/findUsOn/FindUsOn";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

