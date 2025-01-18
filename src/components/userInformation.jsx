import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addName, addEmail } from '../redux/userInfoSlice';

const UserInformation = () => {
    const {name, email} = useSelector(state => state.userInfo);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>User Information</h1>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onInput={e => dispatch(addName(e.target.value))} />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onInput={e => dispatch(addEmail(e.target.value))} />

            <div className="output">
                <p>Current values in store:</p>
                <p>Name - {name}</p>
                <p>Email - {email}</p>
            </div>
        </div>
    )
}

export default UserInformation;