import { createContext } from "react";
import { doctors } from "../assets/assets";

// FIRSTLY creting the appcontext by using cereatecontext
export const AppContext=createContext();

// after that creating provider

const AppContextProvider=(props)=>{

    const value={
        doctors

    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;

