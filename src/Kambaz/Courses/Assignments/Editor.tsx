export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br /><br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" cols={40} rows={10}>
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">
                            Points
                        </label>
                    </td>
                    <td>
                        <input id="wd-point" value={100} /> 
                    </td>
                </tr>
                <br />
                <tr>

                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-group"> Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-select-assignments">
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="PROJECT">PROJECT</option>
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="EXAMS">EXAMS</option>
                        </select>  
                    </td>
                </tr>
                <br />
                <tr>

                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade"> Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-select-grade-display">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option value="GRADE">Grade</option>
                        </select>  
                    </td>
                </tr>
                <br />
                <tr>

                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type"> Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission">
                            <option selected value="ONLINE">Online</option>
                            <option value="INPERSOn">In-person</option> 
                        </select>  
                        <br />
                        <br />
                        <label>Online Entry Options</label><br/>

                        <input type="checkbox" name="online-entry-options" id="wd-text-entry"/>
                        <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br/>

                        <input type="checkbox" name="online-entry-options" id="wd-chkbox-website-url"/>  
                        <label htmlFor="wd-chkbox-website-url">Website URL</label><br/>

                        <input type="checkbox" name="online-entry-options" id="wd-chkbox-medrecord"/>  
                        <label htmlFor="wd-chkbox-medrecord">Media Recordings     </label><br/>

                        <input type="checkbox" name="online-entry-options" id="wd-chkbox-file-uploads"/>                    
                        <label htmlFor="wd-chkbox-file-uploads">File Uploads    </label><br/>     

                        <input type="checkbox" name="online-entry-options" id="wd-chkbox-student-annotation"/>                    
                        <label htmlFor="wd-chkbox-student-annotation">Student Annotation    </label><br/>  
                    </td>
                </tr>
                <br />
   
                <tr>

                    <td align="right" valign="top">
                        <label htmlFor="wd-assign"> Assign</label>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to"> Assign to</label>
                        <br />
                        <input placeholder="Everyone" id="wd-text-fields-target" /> <br />
                        <br />
                        <label htmlFor="wd-due-day"> Due</label>
                        <br />
                        <input type="date"
                        value="2024-05-13"
                        id="wd-text-fields-due"/><br/>
                        <br/>  

                        <label style={{ marginRight: "28px" }} htmlFor="wd-due-day"> Available from</label><label htmlFor="wd-due-day"> Until</label>
                        <br />
                        <input type="date" value="2024-05-06" id="wd-text-fields-available" style={{ marginRight: "8px" }}/>
                        <input type="date"
                        value="2024-05-13"
                        id="wd-text-fields-due"/>
                    
                    </td>
                    
                
                </tr>
            </table>
            <hr />
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button style={{ marginRight: "8px" }}>Cancel</button>
                <button>Save</button>
            </div>
        </div>
);}