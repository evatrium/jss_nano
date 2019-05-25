import React from 'react';
import {jss_nano} from "../../src";
import {Nav} from "./components/Nav";

const classes = jss_nano({
    text: {
        padding: 100,
        fontSize: 30,
        [`@media (min-width: 800px)`]: {
            fontSize: 100
        }
    }
});

export const App = () => (
    <React.Fragment>
        <Nav>
            <h4>I am a styled NavBar</h4>
        </Nav>
        <div className={classes.text}>
            Hellloooo
        </div>

    </React.Fragment>
)