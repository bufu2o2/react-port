import React from 'react';







const Home = () => {

    const styles = {
        div1: {
            animation: '2s rollLeft',
            animationDelay: '0',
            transition: 'opacity 8s ease-in-out',
        },
        div2: {

            animation: '5s fallDown',
            // animationDelay: '1s',
        }
    }



    return(
        <div className = 'pageTransition'>
            <div className = 'pageTitle'>
                <div id = 'hiIntro' style={styles.div1}>
                    Hi! My Name is Jake Huang.
                </div>
                <div id = 'welcomeIntro' style={styles.div2}>
                    Welcome! 
                </div>
            </div>
        </div>
    )
}

export default Home;