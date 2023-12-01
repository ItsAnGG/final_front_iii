import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../reducers/reducer";

const ContextGlobal = createContext();

const Context = ({ children }) => {
  const initialState = {
    data: [],
    favs: JSON.parse(localStorage.getItem("favs")) || [],
    theme: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState); 

  const url = "https://jsonplaceholder.typicode.com/users/";

  useEffect(() => {
    axios(url).then((res) =>
      dispatch({ type: "GET_DENTISTAS", payload: res.data })
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default Context;

export const useContextGlobal = () => useContext(ContextGlobal);
