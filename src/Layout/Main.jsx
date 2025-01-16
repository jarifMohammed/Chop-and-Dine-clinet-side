import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Main = () => {
    const location = useLocation()
    // console.log(location);
    const hideHeader = location.pathname.includes('login') ||
    location.pathname.includes('signup')
    return (
        <div>
           { hideHeader|| <Navbar></Navbar>}
            <Outlet></Outlet>
            { hideHeader || <Footer></Footer>}
        </div>
    );
};

export default Main;