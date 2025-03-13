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
