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
                <Button children = "+/-" />
                <Button children = "%" />
                <Button children = "/" />
                <Button children = "7" />
                <Button children = "8" />
                <Button children = "9" />
                <Button children = "*" />
                
                <Button children = "4" />
                <Button children = "5" />
                <Button children = "6" />
                <Button children = "-" />
            </div>
            <div className="bottom">-</div>
        </div>
    )
}

export default App
