// set data layer

import React, { createContext, useContext, useReducer } from "react";


// data layer
export const StateContext = createContext();

// BUILD A PROVIDER 
export const StatProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>   
);


// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
     