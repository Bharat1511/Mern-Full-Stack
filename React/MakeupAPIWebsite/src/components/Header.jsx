import {Link} from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

 const Header= ()=>{
    return(
        <>
        <div className=" flex gap-x-100 p-2 text-black bg-green-400 justify-items-center font-bold  ">
            <h1 className="text-3xl">My Website</h1>
      
        <div className="flex gap-16  ">
           <Link to={"/"} className="flex gap-3 items-center" ><IoHome /><span>Home</span></Link>
           <Link to={"/about"} className="flex gap-3 items-center"  ><span>About</span></Link>
           <Link to={"/product"} className="flex gap-3 items-center"  ><MdProductionQuantityLimits />Product</Link>
           <Link to={"/contact"}className="flex gap-3 items-center"  ><IoMdContact /><span>Contact</span></Link>
        </div>
          </div>
        </>
    );


};

export default Header;