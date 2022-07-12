import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [first, setFirst] = useState([]);
  const [last, setLast] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    // if (password -== repeatPassword) {
      const data = await dispatch(signUp(first, last, username, email, password, repeatPassword));
      if (data) {
        console.log('data', data)
        // setErrors(data)
        if (password !== repeatPassword) {
          data.push('Password: Passwords must match')
          // setPassword("")
          // setRepeatPassword("")
        }console.log('newdata', data)
        setErrors(data)
      }
    // }
  };
  const updateFirst = (e) => {
    setFirst(e.target.value)
  };
  const updateLast = (e) => {
    setLast(e.target.value)
  };
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <h1>Welcome to Luxbnb</h1>
      <div>
        {errors.length>0 && errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
            <div>
        <input 
        type='text'
        name='first'
        onChange={updateFirst}
        value={first}
        // required={true}
        placeholder='First name'
        />
      </div>
      <div>
        <input 
        type='text'
        name='last'
        onChange={updateLast}
        value={last}
        // required={true}
        placeholder='Last name'
        />
      </div>
      <div>
        {/* <label>User Name</label> */}
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          placeholder='Username'
        ></input>
      </div>
      <div>
        {/* <label>Email</label> */}
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          placeholder='Email Address'
        ></input>
      </div>
      <div>
        {/* <label>Password</label> */}
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          placeholder='Password'
        ></input>
      </div>
      <div>
        {/* <label>Repeat Password</label> */}
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder='Confirm Password'
        ></input>
      </div>
      <button type='submit'>Agree and continue</button>
    </form>
  );
};

export default SignUpForm;