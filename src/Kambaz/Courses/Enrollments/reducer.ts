import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

interface EnrollmentState {
    enrollments: Enrollment[];
}

const initialState: EnrollmentState  = {
  enrollments: [],
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments:(state, action) => {
      state.enrollments = action.payload;
      console.log("setEnrollments payload", action.payload);
    },
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

export const { setEnrollments, enrollCourse, unenrollCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;