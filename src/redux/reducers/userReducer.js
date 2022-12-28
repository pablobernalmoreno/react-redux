import { CHANGEUSERAGE, CHANGEUSERNAME } from "../types/types";

const inititalState = { name: "User Name", age: 23 };
const addUserReducer = (state = inititalState, action) => {
  switch (action.type) {
    case CHANGEUSERNAME: {
      return { ...state, name: action.payload };
    }
    case CHANGEUSERAGE: {
      return { ...state, age: action.payload };
    }
    default:
      return state;
  }
};
export default addUserReducer;