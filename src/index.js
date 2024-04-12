import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
// import {}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        // <DarkModeContextProvider value={{darkMode: state.darkMode, dispatch}}>
                        <App />
        // </DarkModeContextProvider> 


        // Doubt:
        // Do we need to wrap this in DarkModeContextProvider?
        // Its working without the wrap...  difference???


        // onClick dark theme is not working.
);
