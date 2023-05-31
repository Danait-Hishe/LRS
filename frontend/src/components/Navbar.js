//import Amhara_Logo from './Amhara_Logo.jpg';
import "./Navbar.css";
import { Link }  from 'react-router-dom';


function Navbar(){
    return(
       <> 
        <nav className="Navbar">
            <img alt='' src={Image}/>
            <div className="nav-items">
            <Link to='/'>Home</Link>
            <Link to='/User'>Dashboard</Link>
            </div>
        </nav>    
            
        </>
    )
}
export default Navbar;