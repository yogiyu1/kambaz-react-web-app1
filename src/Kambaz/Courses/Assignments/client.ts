import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });
export const createAssignment = async (courseId: string, assignemnt: any) => {
    const response = await axiosWithCredentials.post(`${ASSIGNMENT_API}/${courseId}/assignments`, assignemnt);
    console.log("createAssignment response:", response);
    return response.data;

}


export const updateAssignment = async (courseId: string, assignmentId: string, assignment: any) => {
    console.log("updateAssignment assignmentId:", assignmentId);
    const  response  = axiosWithCredentials.put(`${ASSIGNMENT_API}/${courseId}/assignment/${assignmentId}`, assignment);
    return response;
};


export const deleteAssignment = async (courseId: string, assignmentId: string) => {
    const response = await axiosWithCredentials.delete(`${ASSIGNMENT_API}/${courseId}/assignment/${assignmentId}`);
    console.log("deleteAssignment response:", response);
    return response.data; 
};
