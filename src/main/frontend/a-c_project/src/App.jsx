import './App.css';
import NavBar from "./Components/navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import Login from "./Components/login/Login";
import Home from "./Components/Home/Home";
import {AuthProvider} from "./Components/auth/Auth";
import HomeUser from "./Components/HomeUser";
import Customers from "./Components/Customers";
import Bid from "./Components/Bid";
import RequireAuth from "./Components/auth/RequireAuth";
import ContactUs from "./Components/Home/contactUs/ContactUs";

function App() {
    return (
        <>
            <AuthProvider>
                <NavBar/>
                <div style={{marginTop:"72px"}}>
                    <Routes>
                        <Route path={"*"} element={<Home/>}/>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={'/contact'} element={<ContactUs/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/users'} element={<RequireAuth><HomeUser/></RequireAuth>}/>
                        <Route path={'/customers'} element={<RequireAuth><Customers/></RequireAuth>}/>
                        <Route path={'/bid'} element={<RequireAuth><Bid/></RequireAuth>}/>
                    </Routes>
                </div>
            </AuthProvider>
        </>
    );
}

export default App;
