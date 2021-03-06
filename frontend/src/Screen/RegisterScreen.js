import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props) {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();
    useEffect(() => {
        if(userInfo){
            console.log(userInfo, props.history)
            props.history.push("/");
        }
        return() => {
            // 
        }
    },[userInfo])
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    }
    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Create Account</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>error</div>}
                    </li>
                    <li>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" name="name" id="name" onChange={(e) => setname(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="rePassword">
                            Re-Enter Password
                        </label>
                        <input type="password" name="rePassword" id="rePassword" onChange={(e) => setPassword(e.target.value)}></input>
                    </li>
                    <li>
                        <button type="submit" className="button primary">Sign In</button>
                    </li>
                    <li>
                        Already have an account? <Link to="/sigin">Sign In</Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default RegisterScreen;