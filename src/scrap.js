// import {prefixPV} from "./prefixPV";
//
// export const inline = (style)=>{
//     let out = {};
//     Object.keys(style).forEach((p)=>{
//         let prefixed = prefixPV(p, style[p]);
//         out[prefixed.property] = prefixed.value;
//     });
//     return out;
// };
//
// export const inlineGroup = (styles) =>{
//     let out = {};
//     Object.keys(styles).forEach((name)=>{
//         out[name] = inline(styles[name]);
//     });
//     return out;
// };
//
//
// export const ThemedInlineGroup = (theme)=>{
//     const theme_ = theme;
//     return (group)=>inlineGroup(typeof group === 'function' ? group(theme_): group)
// };