import { CHANGEUSERAGE, CHANGEUSERNAME } from "../types/types";

export const changeUsersName = (name) => {
  return {
    type: CHANGEUSERNAME,
    payload: name,
  };
};


export const changeUsersAge = (age) => {
  return {
    type: CHANGEUSERAGE,
    payload: age,
  };
};  