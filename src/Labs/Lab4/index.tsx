import ClickEvent from "./ClickEvent";
import PassingDataEvent from "./PassingDataEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
export default function Lab4() {
    function sayHello() {
        alert("Hello World!");}
    return (
        <>
        <ClickEvent />
        <PassingDataEvent />
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
        <ReduxExamples />                     
        </>
        
    );}