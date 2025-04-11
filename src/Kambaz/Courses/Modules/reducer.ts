import { createSlice } from "@reduxjs/toolkit";
// import { modules } from "../../Database";
// import { v4 as uuidv4 } from "uuid";
const initialState = {
  modules: [],
};
const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, { payload: modules }) => {
      state.modules = modules;
    },
 

    addModule: (state, { payload: module }) => {
      const newModule: any = {
        _id: module._id,
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule] as any;
      console.log("all modules after add", state.modules);
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter(
        (m: any) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addModule, deleteModule, updateModule, editModule, setModules } =
  modulesSlice.actions;
export default modulesSlice.reducer;