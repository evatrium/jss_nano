
import {jss_nano} from "../src";


describe('it returns the expected values', () => {


    it('should be a function', () => {

        expect(typeof jss_nano === 'function').toBe(true);
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

        const classes = jss_nano(styles);

        expect(classes).toMatchObject({
            container: 'x0 x1 x2 x3',
            box: 'x4 x5 x6'
        });

        const styleElement = document.head.querySelector('style');

        expect(styleElement.sheet.cssRules.length).toBe(7)

    });


});