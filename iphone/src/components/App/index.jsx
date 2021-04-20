import React, { useState } from 'react'
import './App.css'
import Button from '../Button';
const App = () => {
    const [value, setValue] = useState("0")
    const handleButtonClick = ( children ) => {
        setValue( (parseFloat(value) + children).toString() );
    }
    return (
        <div className="app">
            <div className="top">4:43</div>
            <div className="display"> { value } </div>
            <div className="buttons">
                <Button onButtonClick = { handleButtonClick } children = "AC" type ="function" />
                <Button onButtonClick = { handleButtonClick } children = "+/-" type ="function" />
                <Button onButtonClick = { handleButtonClick } children = "%" type ="function" />
                <Button onButtonClick = { handleButtonClick } children = "/" type ="operator" />
                <Button onButtonClick = { handleButtonClick } children = "7" />
                <Button onButtonClick = { handleButtonClick } children = "8" />
                <Button onButtonClick = { handleButtonClick } children = "9" />
                <Button onButtonClick = { handleButtonClick } children = "*" type ="operator" />
                
                <Button onButtonClick = { handleButtonClick } children = "4" />
                <Button onButtonClick = { handleButtonClick } children = "5" />
                <Button onButtonClick = { handleButtonClick } children = "6" />
                <Button onButtonClick = { handleButtonClick } children = "-" type = "operator" />

                <Button onButtonClick = { handleButtonClick } children = "1" />
                <Button onButtonClick = { handleButtonClick } children = "2" />
                <Button onButtonClick = { handleButtonClick } children = "3" />
                <Button onButtonClick = { handleButtonClick } children = "+" type ="operator" />
                
                
                <Button onButtonClick = { handleButtonClick } children = "0" />
                <Button onButtonClick = { handleButtonClick } children = "." />
                <Button onButtonClick = { handleButtonClick } children = "=" type ="operator" />
            
            </div>
            <div className="bottom">-</div>
        </div>
    )
}

export default App
