import { useTaskStore } from "../stores/taskStore"
import CompletedTab from "./CompletedTab";


const DeletedTasks = () => {
    const { deletedTaskList } = useTaskStore();
  return (
    <div className="p-2 bg-slate-400 rounded-lg">
            <h2 className="font-poppins font-bold text-slate-900 tracking-tight text-xl">Deleted Tasks:</h2>
            <div className="flex flex-col gap-2">
                {deletedTaskList && deletedTaskList.map((item, index) => {
                  return(
                    <CompletedTab key={index} task={item} />
                  )
                })}
            </div>
    </div>
  )
}

export default DeletedTasks