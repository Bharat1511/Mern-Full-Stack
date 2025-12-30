import {Link} from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GiLipstick } from "react-icons/gi";

 const Header= ()=>{
    return(
        <>
        <div className=" flex gap-x-100 p-2 text-black bg-red-100 h-25 justify-items-center font-bold  ">
            <h1 className="text-3xl flex"><GiLipstick /><span>Beauty Products</span></h1>
      
        <div className="flex gap-16  ">
           <Link to={"/"} className="flex gap-3 items-center" ><IoHome /><span>Home</span></Link>
           <Link to={"/about"} className="flex gap-3 items-center"  ><span>About</span></Link>
           <Link to={"/product"} className="flex gap-3 items-center"  ><MdProductionQuantityLimits />Product</Link>
           <Link to={"/contact"}className="flex gap-3 items-center"  ><IoMdContact /><span>Contact</span></Link>
           <Link to={"/login"} className="flex gap -3 items-center">Login</Link>
           <Link to={"/signup"} className="flex gap -3 items-center">Signup</Link>
        </div>
          </div>
        </>
    );


};

export default Header;