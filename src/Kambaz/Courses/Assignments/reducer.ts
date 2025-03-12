import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments } from "../../Database";



interface Assignment {
    _id: string;
    title: string;
    course: string;
    detail: {
        dueDate: string;
        points: number;
        availableFrom: string;
        description?: string;
        modules: string[];
    };
}

interface AssignmentsState {
    assignments: Assignment[];
}


const initialState: AssignmentsState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        addAssignment: (state, action: PayloadAction<Assignment>) => {
            // state.assignments.push(action.payload);
            console.log("add payload:", action.payload);
            state.assignments = [...state.assignments, action.payload];
        },
        updateAssignment: (state, action: PayloadAction<Assignment>) => {
            const index = state.assignments.findIndex(a => a._id === action.payload._id);
            if (index !== -1) {
                state.assignments[index] = action.payload;
            }
        },
        deleteAssignment: (state, action: PayloadAction<string>) => {
            state.assignments = state.assignments.filter(a => a._id !== action.payload);
            console.log("delete state:", state.assignments);
        },
    },
});


export const selectAssignment = (state: any) => state.assignments
export const { addAssignment, updateAssignment, deleteAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

// const initialState = {
//   assignments: assignments,
// };
// const assignmentsSlice = createSlice({
//     name: "assignments",
//     initialState,
//     reducers: {
//         addAssignment: (state, { payload: assignment }) => {
//             const newAssignment: any = {
//                 _id: uuidv4(),
//                 name: assignment.name,
//                 course: assignment.course,
//                 dueDate: assignment.dueDate,
//             };
//             state.assignments = [...state.assignments, newAssignment] as any;
//         },
//         deleteAssignment: (state, { payload: assignmentId }) => {
//             state.assignments = state.assignments.filter(
//                 (a: any) => a._id !== assignmentId);
//         } ,
//         updateAssignment: (state, { payload: assignment }) => {
//             state.assignments = state.assignments.map((a: any) =>
//                 a._id === assignment._id ? assignment : a
//             ) as any;
//         },
//         editAssignment: (state, { payload: assignmentId }) => {
//             state.assignments = state.assignments.map((a: any) =>
//                 a._id === assignmentId ? { ...a, editing: true } : a
//             ) as any;
//         },
//     },
// });
// export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
//     assignmentsSlice.actions;
// export default assignmentsSlice.reducer;