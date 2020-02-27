import React from 'react';

import Toolbar from '../Components/Navigation/Toolbar/Toolbar.js';
import Footer from '../Components/Navigation/Footer/Footer.js';

const layout = (props) => {
    return (
        <React.Fragment>
            <Toolbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </React.Fragment>
    );
}

export default layout;