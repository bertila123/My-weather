import { auth, googleProvider, db } from ".././firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc
} from "firebase/firestore";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // User information
  const [newAuthor, setAuthor] = useState("");
  const [newLocation, setLocation] = useState("");
  const [newPost, setPost] = useState("");
  const [newTitle, setTitle] = useState("");
  // Updating user's post
  const [updatePost, setUpdatePost] = useState("");
  // State for user information
  const [userInfo, setUserInfo] = useState([]);

  const navigate = useNavigate();

  const userCollectionRef = collection(db, "User Info");

  const getUserInfo = async () => {
    try {
      const data = await getDocs(userCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      setUserInfo(filteredData);
      console.log(userInfo)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const deleteUserInfo = async (id) => {
    try {
      const userDoc = doc(db, "User Info", id);
      await deleteDoc(userDoc);
      getUserInfo(); // Refresh user information after deleting
    } catch (err) {
      console.error(err);
    }
  };
  

  const updateUserInfo = async (id) => {
    try {
      const userDoc = doc(db, "User Info", id);
      await updateDoc(userDoc, { Post: updatePost });
      getUserInfo(); // Refresh user information after updating
    } catch (err) {
      console.error(err);
    }
  };
  

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/weather");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/weather");
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = async () => {
    try {
      console.log(newAuthor,newLocation,newPost)
      await addDoc(userCollectionRef, {
        Author: newAuthor,
        Location: newLocation,
        Post: newPost,
        Title: newTitle
      });
      getUserInfo();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 className=''>My Weather App </h1>
      <p>Express your day to day musings...</p>
      <div>
        <input className="email-input" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
        <input className="password-input" placeholder="Password..." type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button onClick={signUp}> Sign Up</button>

      <button onClick={signInWithGoogle}>Continue With Google</button>
      <p>
        Already have an account?{' '}
        <NavLink to="/login">
          Sign in
        </NavLink>
      </p>

      <div>
        <input placeholder="Author: " value={newAuthor} onChange={(e) => setAuthor(e.target.value)} />
        <input placeholder="Location: " value={newLocation} onChange={(e) => setLocation(e.target.value)} />
        <input placeholder="Post: " value={newPost} onChange={(e) => setPost(e.target.value)} />
        <input placeholder="Title:" value={newTitle} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={()=>onSubmit()}>Submit Info</button>
      </div>
      
      {/* Display user information */}
      {userInfo.map((userInfoItem) => (
        <div key={userInfoItem.id}>
          <p>Author: {userInfoItem.Author}</p>
          <p>Location: {userInfoItem.Location}</p>
          <p>Post: {userInfoItem.Post}</p>
          <p>Title: {userInfoItem.Title}</p>

          <button onClick={() => deleteUserInfo(userInfoItem.id)}>Delete Info</button>
          <input placeholder="New Post:" onChange={(e) => setUpdatePost(e.target.value)} />
          <button onClick={() => updateUserInfo(userInfoItem.id)}>Update Info</button>
        </div>
      ))}
    </div>
  );
};

export default Auth;
