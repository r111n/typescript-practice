import { create } from "zustand";

type TaskStore = {
    taskList: string[];
    completedTaskList: string[];
    deletedTaskList: string[];
    addTask: (task: string) => void;
    deleteTask: (index: number) => void;
    completeTask: (index: number) => void;
};

export const useTaskStore = create<TaskStore>((set) => ({
    taskList: [],
    completedTaskList: [],
    deletedTaskList: [],
    addTask: (task) => set((state) => ({ taskList: [...state.taskList, task] })),
    deleteTask: (index: number) => set((state) => {
        const deletedTask = state.taskList[index] 
        return {
            taskList: state.taskList.filter((_, i: number) => i !== index),
            deletedTaskList: [...state.deletedTaskList, deletedTask]
        }
    }),
    completeTask: (index) => set((state) => {
        const completedTask = state.taskList[index];
        return {
            taskList: state.taskList.filter((_, i: number) => i !== index),
            completedTaskList: [...state.completedTaskList, completedTask]
        };
    })
}));
