import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Assignment {
    _id: string;
    name: string;
    description: string;
    points: number;
    dueDate: string;
    availableFrom: string;
    availableUntil: string;
    assignmentGroup: string;
    displayGradeAs: string;
    submissionType: string;
    onlineEntryOptions: {
        textEntry: boolean;
        websiteURL: boolean;
        mediaRecordings: boolean;
        studentAnnotation: boolean;
    };
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
    },
});

export const { addAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;