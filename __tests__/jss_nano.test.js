
import {JSS_nano} from "../src";


describe('it returns the expected values', () => {

    const jss = JSS_nano();

    it('should return the utility as a function when invoked', () => {

        expect(typeof jss === 'function').toBe(true);
    });

    const styles = {
        container: {
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'space-between'
        },
        box: {
            background: 'white',
            height: 100,
            width: 100
        }
    };

    it('should return the classNames as the object they were defined in ', ()=>{

        const classes = jss(styles);

        expect(classes).toMatchObject({
            container: 'x0 x1 x2 x3',
            box: 'x4 x5 x6'
        });

        const styleElement = document.head.querySelector('style')

        expect(styleElement.sheet.cssRules.length).toBe(7)

    });


});