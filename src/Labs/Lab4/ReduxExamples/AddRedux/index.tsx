import {useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import { add } from "./addreducer";
import { FormControl, Button } from "react-bootstrap";
export default function AddRedux(){
    const { sum } = useSelector((state : any) => state.add);
    const dispatch = useDispatch();
    const [num1, setNum1] = useState(12);
    const [num2, setNum2] = useState(23);
    return (
        <div className="w-25" id="wd-add-redux">
            <h1>Add Redux</h1>
            <h2>{num1} + {num2} = { sum }</h2>
            <FormControl type="number" defaultValue={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
            <FormControl type="number" defaultValue={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
            <Button id="wd-add-redux-click" onClick={() => dispatch(add({num1, num2}))}>Add</Button>
            <hr />
        </div>
    )
}