import './auth.css';
import {auth,googleProvider} from ".././firebase";
import{createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import{useNavigate} from "react-router-dom";
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

 const Auth=()=> {
    const[email,setEmail]= useState("");
    const[password, setPassword]=useState("");
    const navigate=useNavigate()

    const signUp=async()=>{
        try{
           console.log("Clicked")
           let eey=await createUserWithEmailAndPassword(auth, email, password);
           navigate("/weather")

        }catch(err){
            console.error(err);
        }
    };

    const signInWithGoogle=async()=>{
        try{

      await signInWithPopup(auth, googleProvider);
       navigate("/weather")
        }catch(err){
            console.error(err);
        }
    };


    return(
    <div>
    <h1 className=''>My Weather App </h1>
     
        <input placeholder="Email..." onChangeCapture={(e)=>setEmail(e.target.value)}/>
        <input placeholder="Password..."type ="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={()=>{signUp()}}> Sign Up</button>

        <button onClick={signInWithGoogle}>Continue With Google</button>
        <p>
             Already have an account?{''}
           <NavLink to="/login" >
            Sign in
           </NavLink>
        </p>

    </div>   
 );
 };
 export default Auth