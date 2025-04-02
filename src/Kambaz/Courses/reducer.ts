import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courses } from "../Database";

console.log("courses:", courses);
interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    department: string;
    credits: number;
    description: string;
    author?: string;
}

interface CoursesState {
    courses: Course[];
}


const initialState: CoursesState = {
    courses: courses,
};

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        addCourse: (state, action: PayloadAction<any>) => {
            // state.assignments.push(action.payload);
            console.log("add payload:", action.payload);
            const newCourse = { ...action.payload, 
                number: '',
                startDate: '',
                endDate: '',
                department: '',
                credits: 0,
                 };
            state.courses = [...state.courses, newCourse];
        },
        updateCourse: (state, action: PayloadAction<Course>) => {
            const index = state.courses.findIndex(a => a._id === action.payload._id);
            if (index !== -1) {
                state.courses[index] = action.payload;
            }
        },
        deleteCourse: (state, { payload }) => {
            console.log("delete course payload:", payload);
            state.courses = state.courses.filter(a => a._id !== payload);
            console.log("delete state:", state.courses);
        },
    },
});


export const { addCourse, updateCourse, deleteCourse} = coursesSlice.actions;
export default coursesSlice.reducer;
