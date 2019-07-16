import React, {useState, createContext} from 'react';


//create context ===========================================
export const MenuContext = createContext();


//create state ==============================================
export const MenuOpen = props => {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <MenuContext.Provider value = {[isOpen, setIsOpen]}>
            {props.children}
        </MenuContext.Provider>
    );
}