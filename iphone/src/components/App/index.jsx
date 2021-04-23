import React, { useState } from 'react'
import './App.css'
import Button from '../Button';
const App = () => {
    const [value, setValue] = useState("0")
    const [memory, setmemory] = useState(null)
    const [operator, setoperator] = useState(null)
    const handleButtonClick = children => ( ) => {
        const num = parseFloat(value)
        if(children == "AC") {
            setValue("0");
            setmemory(null)
            setoperator(null)
            return;
        }
        if(children == "+/-") {
            setValue((num * -1).toString())
            return;
        }
        if(children == "%") {
            setValue((num/100).toString())
            setmemory(null)
            setoperator(null)
            return;
        }
        if(children == "+"){
            if(!operator) return;
            if( operator === "+") {
                setmemory((memory + parseFloat(value)).toString())
            } else if (operator==="-") {
                setmemory((memory - parseFloat(value)).toString())
            } else if (operator==="*") {
                setmemory((memory * parseFloat(value)).toString())
            } else if (operator==="/") {
                setmemory((memory / parseFloat(value)).toString())
            } else {}
            setmemory(parseFloat(value))
            setValue("0")
            setoperator("+")
            return;
        }
        if(children == "-"){
            if(!operator) return;
            if( operator === "+") {
                setValue((memory + parseFloat(value)).toString())
            } else if (operator==="-") {
                setValue((memory - parseFloat(value)).toString())
            } else if (operator==="*") {
                setValue((memory * parseFloat(value)).toString())
            } else if (operator==="/") {
                setValue((memory / parseFloat(value)).toString())
            }
            setmemory(parseFloat(value))
            setValue("0")
            setoperator("-")
            return;
        }
        if(children == "*"){
            if(!operator) return;
            if( operator === "+") {
                setValue((memory + parseFloat(value)).toString())
            } else if (operator==="-") {
                setValue((memory - parseFloat(value)).toString())
            } else if (operator==="*") {
                setValue((memory * parseFloat(value)).toString())
            } else if (operator==="/") {
                setValue((memory / parseFloat(value)).toString())
            }
            setmemory(parseFloat(value))
            setValue("0")
            setoperator("*")
            return;
        }
        if(children == "/"){
            if(!operator) return;
            if( operator === "+") {
                setmemory((memory + parseFloat(value)).toString())
            } else if (operator==="-") {
                setmemory((memory - parseFloat(value)).toString())
            } else if (operator==="*") {
                setmemory((memory * parseFloat(value)).toString())
            } else if (operator==="/") {
                setmemory((memory / parseFloat(value)).toString())
            } else {
                setmemory(parseFloat(value))
            }
            setmemory(parseFloat(value))
            setValue("0")
            setoperator("/")
            return;
        }
        if(children == "="){
            if(!operator) return;
            if( operator === "+") {
                setValue((memory + parseFloat(value)).toString())
            } else if (operator==="-") {
                setValue((memory - parseFloat(value)).toString())
            } else if (operator==="*") {
                setValue((memory * parseFloat(value)).toString())
            } else if (operator==="/") {
                setValue((memory / parseFloat(value)).toString())
            }

            setmemory(null);
            setoperator(null);
            return;
        }
        setValue( (parseFloat(value) + children).toString() );
    };
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
