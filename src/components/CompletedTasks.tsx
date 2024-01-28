import { useTaskStore } from "../stores/taskStore"
import CompletedTab from "./CompletedTab"


const CompletedTasks = () => {
    const { completedTaskList } = useTaskStore()
  return (
    <div className="bg-slate-400 p-2 rounded-lg flex flex-col gap-3">
        <h2 className="font-poppins font-bold text-slate-900 tracking-tight text-xl overflow-auto">Completed Tasks:</h2>
        <div className="flex flex-col gap-2">
            {completedTaskList && completedTaskList.map((item: string, index: number) => {
                return (
                    <CompletedTab key={index} task={item} />
                )
            })}
        </div>
    </div>
  )
}

export default CompletedTasks