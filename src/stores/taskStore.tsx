import { create } from "zustand"

type TaskStore = {
    task: String
}

export const useTaskStore = create<TaskStore>(() => ({
    task: "asdas"
}))