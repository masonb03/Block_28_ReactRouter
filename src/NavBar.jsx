import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div id="navbar">
        <Link to="/home">Home</Link>
        <Link to="/blue">blue</Link>
        <Link to="/red">red</Link>
        <Link to="/grey">grey</Link>
        <Link to="/purple">purple</Link>
        
        </div>
    )
}

export default NavBar