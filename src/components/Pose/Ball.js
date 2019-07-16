import React, {useState, useEffect} from 'react';
import posed from 'react-pose';

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

const Example = () => {
    const [isVisible, setIsVisible] = useState(true);


    useEffect(() => {
        setInterval(() => {
            setIsVisible(!isVisible);
          }, 1000);
    })

    return <Box className="box" pose={isVisible ? 'visible' : 'hidden'} />;
  
}

export default Example;
