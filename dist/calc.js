"use strict";
const display = document.getElementById("input-box");

const appendToDisplay = (value) => {
    display.value += value;
};
const calculateResult = () => {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
};
const clearDisplay = () => {
    display.value = "";
};
const addButtonClickListener = (id, handler) => {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener("click", handler);
    }
    else {
        console.error(`Button with id ${id} not found`);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    addButtonClickListener("btn1", () => appendToDisplay("1"));
    addButtonClickListener("btn2", () => appendToDisplay("2"));
    addButtonClickListener("btn3", () => appendToDisplay("3"));
    addButtonClickListener("btnAdd", () => appendToDisplay("+"));
    addButtonClickListener("btn4", () => appendToDisplay("4"));
    addButtonClickListener("btn5", () => appendToDisplay("5"));
    addButtonClickListener("btn6", () => appendToDisplay("6"));
    addButtonClickListener("btnSubtract", () => appendToDisplay("-"));
    addButtonClickListener("btn7", () => appendToDisplay("7"));
    addButtonClickListener("btn8", () => appendToDisplay("8"));
    addButtonClickListener("btn9", () => appendToDisplay("9"));
    addButtonClickListener("btnMultiply", () => appendToDisplay("*"));
    addButtonClickListener("btn0", () => appendToDisplay("0"));
    addButtonClickListener("btnDot", () => appendToDisplay("."));
    addButtonClickListener("btnDivide", () => appendToDisplay("/"));
    addButtonClickListener("btnEqual", calculateResult);
    addButtonClickListener("btnClear", clearDisplay);
});
