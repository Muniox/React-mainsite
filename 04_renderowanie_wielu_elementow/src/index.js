import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const ItemList = () => {
    return (
    <li className="list__item">
        element
    </li>
    )
}

const App = () => {
    return (
        <ul>
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
        </ul>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);