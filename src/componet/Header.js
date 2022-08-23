import { NavLink } from "react-router-dom";

function Header(){
    return (
        <div className="container-md bg-green-600 py-3">
             <div className="container w-10/12 mx-auto">
                <NavLink to="/" className="text-white px-3 py-2 text-xl font-medium">Home</NavLink>
             </div>
        </div>
    )
} 

export default Header;