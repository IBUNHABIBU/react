import React from 'react'
import './App.css'
import Button from '../Button';
const App = () => {
    return (
        <div className="app">
            <div className="top">4:43</div>
            <div className="display">0</div>
            <div className="buttons">
                <Button children = "AC" />
            </div>
            <div className="bottom">-</div>
        </div>
    )
}

export default App
