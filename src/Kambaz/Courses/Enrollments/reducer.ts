import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../../Database";

interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

interface EnrollmentState {
    enrollments: Enrollment[];
}

const initialState: EnrollmentState  = {
  enrollments: enrollments, 
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload }) => {
        console.log("add payload:", payload);
        state.enrollments = [...state.enrollments, payload];
        console.log("add state:", state.enrollments);
    },
    unenrollCourse: (state, { payload }) => {
        console.log("delete payload:", payload);
        state.enrollments = state.enrollments.filter(a => !(a.user === payload.user && a.course === payload.course));
        console.log("delete state:", state.enrollments);
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;