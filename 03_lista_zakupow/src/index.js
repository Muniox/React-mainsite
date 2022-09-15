import React from "react";
import ReactDOM from "react-dom/client";

// stworzone element z JSX
const List = () => {
    return (
    <ul>
        <li>
            chleb
        </li>
        <li>
            masło
        </li>
        <li>
            szynka
        </li>
    </ul>
    )
}

//stworzony element bez JSX
const list2 = React.createElement('div', {},
    [
        React.createElement('li', {}, 'Chleb'),
        React.createElement('li', {}, 'masło'),
        React.createElement('li', {}, 'szynka')
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<List />) //jako JSX
root.render(list2) //jako zwyczajna funkcja React.create()





