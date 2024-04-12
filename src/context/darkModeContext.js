// import React, { createContext, useReducer } from "react"
// import DarkModeReducer from "./darkModeReducer"

// const INITIAL_STATE = {
//     darkMode: false
// }

// // const INITIAL_STATE = ()=>{darkMode: false};

// export const DarkModeContext = createContext(INITIAL_STATE)

// export const DarkModeContextProvider = ({children}) => {
//     const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

//     return (
//         <DarkModeContextProvider value={{darkMode: state.darkMode, dispatch}}>
//             {children}
//         </DarkModeContextProvider>
//     )
// }

import React, { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
    darkMode: false
}

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

    return (
        <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
            {children}
        </DarkModeContext.Provider>
    )
}
