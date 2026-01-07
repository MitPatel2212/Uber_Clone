import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <div className='bg-cover bg-center bg-bottom h-screen pt-8 flex justify-between flex-col w-full bg-red-400 bg-[url(https://images.unsplash.com/photo-1670361747602-0272a863e3c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzMXx8fGVufDB8fHx8fA%3D%3D)] '>
                <img className="w-16 ml-8" 
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""/>
                    <div className="bg-white pb-7 py-4 px-4">
                    <h2 className="text-3xl font-bold"> Get Started with Uber </h2>
                    <Link to="/login"  className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"> Continue </Link>
                    </div>
            </div>
        </div>
    );
}
 
export default Home ;