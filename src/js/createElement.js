const createElement = ({tag = "div", classList = "", content = "", attrs = []}) => {
    const element = document.createElement(tag);
    element.className = classList;
    element.innerHTML = content;
    attrs.forEach(({name, value}) => {
        element[name] = value;
    })
    return element;
}

export default createElement;

// const errorMessageProps = {
//     tag: "p",
//     classList: "error-message",
//     content: "Search result not successful. Enter the correct movie name",
//     attrs: [
//         {
//             name: "href",
//             value: "/"
//         }
//     ]
// };

// const errorMessage = createElement(errorMessageProps)