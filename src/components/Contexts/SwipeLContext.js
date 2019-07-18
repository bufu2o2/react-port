import React, {useState, createContext} from 'react';


//create context ===========================================
export const SwipeLContext = createContext();


//create state ==============================================
export const SwipeL = props => {
    const [swipeLeft, setSwipeLeft] = useState(true);



    return (
        <SwipeLContext.Provider value = {[swipeLeft, setSwipeLeft]}>
            {props.children}
        </SwipeLContext.Provider>
    );
}


