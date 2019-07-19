import React, {useState, createContext} from 'react';


//create context ===========================================
export const ModalContext = createContext();


//create state ==============================================
export const Modal = props => {
    const [misOpen, setMisOpen] = useState(false);



    return (
        <ModalContext.Provider value = {[misOpen, setMisOpen]}>
            {props.children}
        </ModalContext.Provider>
    );
}