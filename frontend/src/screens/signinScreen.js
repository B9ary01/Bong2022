import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

import LoadingPage from '../components/LoadingPage';
import MessagePage from '../components/MessagePage';

export default function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const dispatch = useDispatch();


const {search} =useLocation();
const qtyInUrl = new URLSearchParams(search).get('qty'); 
const redirect= qtyInUrl?Number(qtyInUrl):1;
//const redirect= props.location.search ? props.location.search.split('=')[1] : '/';



const userSignin = useSelector ((state)=>state.userSignin);
const {userInfo,loading,error}=userSignin;
const navigate=useNavigate();

  
const submitHandler = (e) => { 
    e.preventDefault(); dispatch(signin(email, password));
     if (!e) { navigate("/"); } };

  useEffect(()=>{
    if(userInfo){
      navigate('/');
    }
  }, [ props.history, redirect , userInfo]);

  return (

    <div>

      <form className="form" onSubmit={submitHandler}>

        <div>

          <h1>Sign In</h1>

        </div>

        {loading && <LoadingPage></LoadingPage>}
        {error && <MessagePage variant="danger">{error}</MessagePage>}
        <div>

          <label htmlFor="email">Email address</label>

          <input type="email" id="email" placeholder="Enter email" required
                 onChange={(e) => setEmail(e.target.value)}

          ></input>

        </div>

        <div>

          <label htmlFor="password">Password</label>

          <input type="password" id="password" placeholder="Enter password" required 
               onChange={(e) => setPassword(e.target.value)}

          ></input>

        </div>

        <div>

          <label />

          <button className="primary" type="submit"> Sign In

          </button>

        </div>

        <div>

          <label />

          <div> New customer? <Link to="/register">Create your account</Link>

          </div>

        </div>

      </form>

    </div>

  );

}