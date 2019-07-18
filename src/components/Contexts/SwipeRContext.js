import React, {useState, createContext} from 'react';


//create context ===========================================
export const SwipeRContext = createContext();


//create state ==============================================
export const SwipeR = props => {
    const [swipeRight, setSwipeRight] = useState(true);
    


    return (
        <SwipeRContext.Provider value = {[swipeRight, setSwipeRight]}>
            {props.children}
        </SwipeRContext.Provider>
    );
}