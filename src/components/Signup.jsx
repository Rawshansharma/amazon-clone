import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import { Link} from 'react-router-dom';

 
const Signup = () => {
    const navigate = useNavigate();
    const [values,setValues] = useState({
        name:"",
        email:"",
        pass:"",
    })
    const [error,setError] = useState("")
 
    const onSubmit = () => {
        if(!values.name || !values.email || !values.password){
            setError("Fill all fields")
            return ;
        }
        setError("");
         createUserWithEmailAndPassword(auth, values.name, values.email, values.pass).then((res) => {
            console.log(res);

        }).catch((err) => {
            console.log( "Error-", err);
        })
     
   
    }
 
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="//" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img width={150} height={30} className="p-2 mt-2" src="https://links.papareact.com/f90" alt="logo"/>
             
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 space-y-2 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign Up
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input onChange={(event) => setValues((prev) => ({...prev , name:event.target.value}))} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Raushan Sharma" required=""/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input onChange={(event) => setValues((prev) => ({...prev , email:event.target.value}))} type="email" name="email" id="email" placeholder="raushan@gmail.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input onChange={(event) => setValues((prev) => ({...prev , password:event.target.value}))} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                      <p className='text-red-700 text-center'>{error}</p>
                    <button onClick={onSubmit} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}
 
export default Signup


