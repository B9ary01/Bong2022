import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';


export default function SigninScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // sign in action
  dispatch(signin(email,password));
  };

  return (

    <div>

      <form className="form" onSubmit={submitHandler}>

        <div>

          <h1>Sign In</h1>

        </div>

        <div>

          <label htmlFor="email">Email address</label>

          <input

            type="email"

            id="email"

            placeholder="Enter email"

            required

            onChange={(e) => setEmail(e.target.value)}

          ></input>

        </div>

        <div>

          <label htmlFor="password">Password</label>

          <input

            type="password"

            id="password"

            placeholder="Enter password"

            required

            onChange={(e) => setPassword(e.target.value)}

          ></input>

        </div>

        <div>

          <label />

          <button className="primary" type="submit">

            Sign In

          </button>

        </div>

        <div>

          <label />

          <div>

            New customer? <Link to="/register">Create your account</Link>

          </div>

        </div>

      </form>

    </div>

  );

}