import './App.css';
import NavBar from "./Components/navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import Login from "./Components/login/Login";
import Home from "./Components/Home";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import About from "./Components/about/About";
import {AuthProvider} from "./Components/auth/Auth";
import HomeUser from "./Components/HomeUser";
import Customers from "./Components/Customers";
import Bid from "./Components/Bid";
import RequireAuth from "./Components/auth/RequireAuth";

function App() {
    return (
        <>
            <AuthProvider>
                <NavBar/>
                <Routes>
                    <Route path={"*"} element={<Home/>}/>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={'/services'} element={<Services/>}/>
                    <Route path={'/contact'} element={<ContactUs/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/users'} element={<RequireAuth><HomeUser/></RequireAuth>}/>
                    <Route path={'/customers'} element={<RequireAuth><Customers/></RequireAuth>}/>
                    <Route path={'/bid'} element={<RequireAuth><Bid/></RequireAuth>}/>
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
