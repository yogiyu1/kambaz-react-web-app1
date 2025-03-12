import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Assignment {
    _id: string;
    title: string;
    detail: {
        dueDate: string;
        description: string;
        availableFrom: string;
        moduels: string[];
        points: number;
    }
    course: string;
}

interface AssignmentsState {
    assignments: Assignment[];
}

const initialState: AssignmentsState = {
    assignments: [],
};

const assignmentsSlice = createSlice({
    name: 'assignments',
    initialState,
    reducers: {
        addAssignment: (state, action: PayloadAction<Assignment>) => {
            state.assignments.push(action.payload);
        },
        updateAssignment: (state, action: PayloadAction<Assignment>) => {
            const index = state.assignments.findIndex(a => a._id === action.payload._id);
            if (index !== -1) {
                state.assignments[index] = action.payload;
            }
        },
        deleteAssignment: (state, action: PayloadAction<string>) => {
            state.assignments = state.assignments.filter(a => a._id !== action.payload);
        },
    },
});

export const { addAssignment, updateAssignment, deleteAssignment} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;