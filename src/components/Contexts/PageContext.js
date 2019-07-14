import React, {useState, createContext} from 'react';


//create context ===========================================
export const PageContext = createContext();


//create state ==============================================
export const PageName = props => {
    const [page, setPage] = useState('Home');



    return (
        <PageContext.Provider value = {[page, setPage]}>
            {props.children}
        </PageContext.Provider>
    );
}