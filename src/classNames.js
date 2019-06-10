/**
 * primarily used for joining classNames together into one string
 * @param args - array of strings
 * @returns {string} - the joined classNames
 */
export const cn = (...args) => [...args].filter(Boolean).join(' ');
export default cn;