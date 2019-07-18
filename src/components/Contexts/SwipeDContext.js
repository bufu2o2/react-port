import React, {useState, createContext} from 'react';


//create context ===========================================
export const SwipeDContext = createContext();


//create state ==============================================
export const SwipeD = props => {
    const [swipeDown, setSwipeDown] = useState(true);



    return (
        <SwipeDContext.Provider value = {[swipeDown, setSwipeDown]}>
            {props.children}
        </SwipeDContext.Provider>
    );
}