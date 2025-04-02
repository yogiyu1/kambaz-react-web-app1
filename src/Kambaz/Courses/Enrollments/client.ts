import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollments`;

export const enroll = async (userId: string, courseId: string) => {
    const response = await axios.post(`${ENROLLMENT_API}/${userId}/${courseId}`);
    console.log("enroll response:", response);
    return response.data;
}


export const unenroll = async (userId: string, courseId: string) => {
    const response = await axios.delete(`${ENROLLMENT_API}/${userId}/${courseId}`);
    console.log("unenroll response:", response);
}

export const getEnrollments = async () => {
    console.log("gettingg all enrollments response");
    const response = await axios.get(`${REMOTE_SERVER}/api/allEnrollments`);
    console.log("get all enrollments response:", response);
    return response.data;
}