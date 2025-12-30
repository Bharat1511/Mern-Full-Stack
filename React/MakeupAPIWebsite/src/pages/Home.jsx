import React from "react";
import logo from "../assets/istockphoto-517742444-612x612.jpg";
import makeup from "../assets/Partner-In-Shine-Transferproof-Lip-Gloss-11_4c0fa934.webp"
import makeup1 from "../assets/Dream-Cover-SPF15-Mattifying-Compact-Powder-8.webp"
import makeup2 from "../assets/Limited-Edition-La-La-Love-18HR-Liquid-Lipstick-Kit-4.webp"

const Home = () => {
  return (
    <>
      <main>
      
          <h1 className="flex justify-between text-fuchsia-500 font-bold text-4xl p-8 m-4 -mt-1 ">
            Welcome to Shopping Kart
          </h1>
            <div className="flex justify-start">
          <p className="text-black -mt-7 p-4 flex justify-start text-1xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellat fugit mollitia itaque. Cum, sint. Expedita, unde esse
            inventore asperiores modi ex error nesciunt nostrum enim suscipit,
            adipisci aut maxime. Enim, sed adipisci, quam possimus provident
            similiqu Consequatur aut officia possimus iste temporibus
            laudantium, ex, animi odio quas labore maxime provident unde hic
            consectetur harum tenetur eveniet quaerat nulla quis debitis
            nostrum? Delectus dolorem blanditiis est sunt. Cum, commodi libero!
            Laudantium sunt commodi explicabo fuga harum veritatis delectus,
            quasi iste tempore? Perspiciatis ipsum aspernatur eligendi quis!
            Dolorum non magnam dolores! Esse, et magnam. Voluptates vitae illum
            quisquam. Vel nesciunt alias aliquid eaque cupiditate asperiores quo
            totam, iste labore, vero itaque quasi modi laudantium enim explicabo
            dignissimos perferendis officiis maxime placeat? Quidem dicta
            voluptas laudantium nihil minus enim.Lorem ipsum dolor sit
            amet,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            libero ad ipsa maiores obcaecati vel, dolorum ullam, exercitationem
            asperiores sed reiciendis, ex temporibus laboriosam facere eligendi
            quidem assumenda quod quasi. consectetur adipisicing elit. Nostrum
            voluptatem molestiae voluptates obcaecati repellendus qui nisi fuga
            tenetur consequatur nesciunt pariatur atque reprehenderit in, ullam
            reiciendis maxime, dolorum earum blanditiis. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Eaque, a rerum. Veritatis odit
            repellendus culpa assumenda corporis, recusandae aut quia fugiat
            consequatur cumque hic quidem. Voluptatem veritatis eius unde omnis?
          </p>

        
          <img src={logo} alt="logo" className="rounded-2xl shadow-2xl hover:bg-purple-400 -mt-8 m-5" />
       

        
         </div>

        <div className="flex justify-start -mt-10 m-8 ">
          <a href="/product">
            <button className="border border-blue-700 rounded bg-blue-500 text-red-100 px-3 py-1 hover:bg-amber-700">
              <span>Start Shopping</span>
            </button>
          </a>
        </div>

       <div className="flex  gap-4 grid-rows-3-3 justify-items-center">
         <div className="">
          <img src={makeup} alt="makeup" className="rounded " />
        </div>

        <div>
            <img src={makeup1} alt="makeup1" className="rounded" />
        </div>

        <div>
            <img src={makeup2} alt="makeup2" className="rounded" />
        </div>
        

       </div>
      
      </main>
    </>
  );
};

export default Home;
