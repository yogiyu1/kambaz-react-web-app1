import { useState } from 'react';
export default function BooleanStateVariables(){
    const [ done, setDone] = useState(false);
    return(
        <div id="wd-boolean-state-variables">
            <p>{done ? "Done" : "Not done"}</p>
            <label className="form-control">
                <input type="checkbox" checked={done}
                    onChange={() => setDone(!done)} />
                Done
            </label>
            {done && <div className="alert laert-success">
                Yay! You are done!</div>}
        </div>
    );}