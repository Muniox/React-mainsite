import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



const Clock = () => {
    const [time, setTime] = useState({date: new Date()});

    const tick = () => {
        setTime({date: new Date()});
        console.log('działa')
    }

    useEffect(()=> {
        const timerID = setInterval(
            () => tick(),
            1000
        );

        return () => {
            clearInterval(timerID)
        }
    },[time]);

    return (
        <div>
            <h1>Witaj, świecie!</h1>
            <h2>Aktualny czas: {time.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
