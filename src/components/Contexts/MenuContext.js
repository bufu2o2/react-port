import React, {useState, createContext} from 'react';


//create context ===========================================
export const MenuContext = createContext();


//create state ==============================================
export const MenuSide = props => {
    const [side, setSide] = useState(true);



    return (
        <MenuContext.Provider value = {[side, setSide]}>
            {props.children}
        </MenuContext.Provider>
    );
}