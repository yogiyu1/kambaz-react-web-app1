import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  return data;
}

export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(COURSES_API, course);
    return data;
   };
   
export const deleteCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}`);
    return data;
}

export const updateCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    console.log("updated courses", data);
    return data;
  };

export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/modules`, module);
    console.log("createModuleForCourse response:", response.data);
    return response.data;
}

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
}

export const createAssignment = async (courseId: string, assignment: any): Promise<any> => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};
  