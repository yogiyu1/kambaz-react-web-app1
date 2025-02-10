export default function Modules() {
    return (
        <div>
            <button style={{ marginRight: "8px" }} type ="button" onClick={() => alert("button Collapse All clicked")} id="wd-button-collapse-all">
                        Collapse All
            </button>
            <button style={{ marginRight: "8px" }} type ="button" onClick={() => alert("button View Progress clicked")} id="wd-button-view-progress">
                        View Progress
            </button>
            <select style={{ marginRight: "8px" }} id="wd-select-one-genre">
                        <option selected value="PUBLISHALL">Publish All</option>
                        <option value="NUPUBLISHED">Unpublished</option>
                    </select>    
                 
            <button style={{ marginRight: "8px" }} type ="button" onClick={() => alert("button +Module clicked")} id="wd-button-add-module">
                        + Module 
            </button>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className = "wd-title">
                        Week 1
                    </div>
                    <ul className="wd-lessons">
                        <span className="wd-title">LEARNING OBJECTIVES</span>
                        <ul className="wd-content">
                            <li className="wd-content-item">Introduction to the course</li>
                            <li className="wd-content-item">Learn what is Web Development</li>
                        </ul>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className = "wd-title">
                        Week 2
                    </div>
                </li>
                <li className="wd-module">
                    <div className = "wd-title">
                        Week 3
                    </div>
                </li>
            </ul>

        </div>
    );
}