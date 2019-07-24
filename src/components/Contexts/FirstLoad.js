import React, {useState, createContext} from 'react';


//create context ===========================================
export const FirstLoadContext = createContext();


//create state ==============================================
export const FirstLoad = props => {
    const [loaded, setLoaded] = useState(false);



    return (
        <FirstLoadContext.Provider value = {[loaded, setLoaded]}>
            {props.children}
        </FirstLoadContext.Provider>
    );
}