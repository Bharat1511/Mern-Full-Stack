import React from "react";
 const Contact= ()=>{
    return(
        <>
       <div className="text-center">
        <h1>Contact US</h1>
        <div>
           <form>
            <div>
                <label htmlFor="fullname">Fullname:</label>
                <input type="text" />
            </div>
             <div>
                <label htmlFor="email">Email:</label>
                <input type="email" />
            </div>
             <div>
                <label htmlFor="message">Message:</label>
               <textarea name="message"></textarea>
            </div>
           </form>
        </div>
       </div>
        </>
    );


};

export default Contact;