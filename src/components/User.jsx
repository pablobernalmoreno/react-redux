import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUsersName, changeUsersAge } from "../redux/actions/actions";
import { useState } from "react";

export const User = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [state, setState] = useState({ name: user.name, age: user.age });

  const handleChange = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(changeUsersName(state.name));
    dispatch(changeUsersAge(state.age));
  };

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          id="name"
          placeholder="Change name"
        ></input>
        <input
          onChange={handleChange}
          id="age"
          placeholder="Change age"
        ></input>
        <input type="submit" value="Change user details" />
      </form>
    </div>
  );
};
