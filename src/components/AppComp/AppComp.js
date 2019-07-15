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
    // console.log('THIS IS THE PAGE THATS IMPORTING FROM USE CONTEXT ', page )

    switch (page) {
        case 'Home':
            return(
                <Fragment>
                <Nav />
                <Home />
                </Fragment>
            )

        case 'About':
            return(
                <Fragment>
                <Nav />
                <About />
                </Fragment>
            )

        case 'Portfolio':
            return(
                <Fragment>
                <Nav />
                <Portfolio />
                </Fragment>
            )

        case 'Contact':
            return(
                <Fragment>
                <Nav />
                <Contact />
                </Fragment>
            )
    }

    return(
        <Fragment>
            <h1>{page}</h1>
        </Fragment>

    )
}

export default AppComp;