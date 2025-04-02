import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/courses`;

export const createAssignment = async (courseId: string, assignemnt: any) => {
    const response = await axios.post(`${ASSIGNMENT_API}/${courseId}/assignments`, assignemnt);
    console.log("createAssignment response:", response);
    return response.data;

}


export const updateAssignment = async (courseId: string, assignmentId: string, assignment: any) => {
    const  response  = await axios.put(`${ASSIGNMENT_API}/${courseId}/assignment/${assignmentId}`, assignment);
    console.log("updateAssignment response:", response);
    return response.data;
};


export const deleteAssignment = async (courseId: string, assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENT_API}/${courseId}/assignment/${assignmentId}`);
    return response.data; 
};
