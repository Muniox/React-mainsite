import React from "react";
import ReactDOM from "react-dom/client"


const ListItem = (props) => {
    return (
        <li>name is {props.name}</li>
    )
}

const List = () => {
    const nameTable = ['Paweł', 'Łukasz', 'Mateusz'];
    return (
        <ul>
            {nameTable.map( item => item !== 'Paweł' ? <ListItem name = {item}/> : "")}
        </ul>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <List />
)


