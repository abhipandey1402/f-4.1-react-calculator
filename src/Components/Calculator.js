
import { useState } from "react";
import style from "./Calculator.module.css";

function Calculator() {

    let [number1, setNumber1] = useState('');
    let [number2, setNumber2] = useState('');
    let [result, setResult] = useState('');
    let [message, setMessage] = useState('');
    let [success, setSuccess] = useState(false);

    let validation = () => {
        try {
            if (number1 === '' || number2 === '') {
                setMessage('Please enter a number');
                return false;
            }

            if (isNaN(Number(number1)) || isNaN(Number(number2))) {
                setMessage('Please enter a valid number')
                return false;
            }
            return true;
        }catch(e) {
            setMessage('Please enter a number');
            return false;
        }
    }

    let add = () => {
        if (!validation()) {
            setSuccess(false);
            return;
        }
        setResult(Number(number1) + Number(number2));
        setMessage('Success : Your result is shown above!');
        setSuccess(true);
    }
    let sub = () => {
        if (!validation()) {
            return;
        }
        setResult(Number(number1) - Number(number2));
        setMessage('Success : Your result is shown above!');
        setSuccess(true);
    }
    let mul = () => {
        if (!validation()) {
            return;
        }
        setResult(Number(number1) * Number(number2));
        setMessage('Success : Your result is shown above!');
        setSuccess(true);
    }
    let div = () => {
        if (!validation()) {
            return;
        }
        if (Number(number2) === 0) {
            setMessage('Cant divide by 0');
            setResult('');
            setSuccess(false);
            return;
        }
        setResult(Number(number1) / Number(number2));
        setMessage('Success : Your result is shown above!');
        setSuccess(true);
    }

    return (
        <div id={style.calculator}>
            <p id={style.heading}>React Calculator</p>
            <input id={style.num1} placeholder="Num 1" type="text" onChange={(e) => setNumber1(e.target.value)}></input>
            <input id={style.num2} placeholder="Num 2" type="text" onChange={(e) => setNumber2(e.target.value)}></input>

            <div id={style.button}>
                <button id={style.add} onClick={add}>+</button>
                <button id={style.sub} onClick={sub}>-</button>
                <button id={style.mul} onClick={mul}>*</button>
                <button id={style.div} onClick={div}>/</button>
            </div>

            <span id={style.result}>Result = {result}</span>
            <span style={{ color: success ? 'green' : 'red' }}>{message}</span>
        </div>
    )
}

export default Calculator;

