import React, {Fragment, useContext} from 'react';

//Page Import ============================================================================
import Home from '../Pages/Home';
import About from '../Pages/About';
import Portfolio from '../Pages/Portfolio';
import Contact from '../Pages/Contact';

//Other Import ==========================================================================
import Nav from '../Nav/Nav';
import {PageContext} from '../Contexts/PageContext';


const AppComp = () => {

    const [page, setPage] = useContext(PageContext);
    console.log('THIS IS THE PAGE THATS IMPORTING FROM USE CONTEXT ', page )

    switch (page) {
        case 'Home':
            return(
                <Fragment>
                <Nav />
                <Home />
                </Fragment>
            )
            break;
        case 'About':
            return(
                <Fragment>
                <Nav />
                <About />
                </Fragment>
            )
            break;
        case 'Portfolio':
            return(
                <Fragment>
                <Nav />
                <Portfolio />
                </Fragment>
            )
            break;
        case 'Contact':
            return(
                <Fragment>
                <Nav />
                <Contact />
                </Fragment>
            )
                break;


        default:
            break;
    }


    return(
        <div>
            <h1>{page}</h1>
        </div>

    )
}

export default AppComp;