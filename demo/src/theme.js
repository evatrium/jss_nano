import {jss_nano} from "../../src";
import {ThemedClasses} from "../../src/ThemedClasses";

const color = {
    primary: '#29e7ff'
};

const zIndex = {
    highest: 10000,
    drawer: 8000,
    nav: 7000,
    fab: 6000,
    pickers: 5000,
    overlay: 4000,
};

const nav = {
    zIndex: zIndex.nav,
    height: 56,

};

const mixins = {
    nav
}


export const theme = {
    color,
    zIndex,
    mixins
};

export const withClasses = ThemedClasses(theme, jss_nano);

