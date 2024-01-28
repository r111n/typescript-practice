import { ChangeEvent, useState } from "react"
import TasksContainer from "./TasksContainer"

const TaskInput = () => {
    const [task, setTask] = useState<string>("")
    const [taskList, setTaskList] = useState<string[]>([])
    const [completedTask, setCompletedTask] = useState<string[]>([])
    const handleSubmit = () => {
        if(!taskList.includes(task)){
            if(task.trim() !== ""){
                setTaskList((prevState) => [...prevState, task])
                console.log("inputComp: ",taskList)
                setTask("")
            }else{
                console.log("empty")
            }
        }
        else{
            console.log("Task already created")
        }
    }

    const handleDelete = (index: number) => {
        setTaskList(prevTasks => prevTasks.filter((_, i) => i !== index))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handleCompletedTask = (index: number) => {
        const complete: any = taskList.filter((_, i) => i === index)
        setTaskList(prevTasks => prevTasks.filter((_, i) => i !== index))
        console.log(complete)
        const newArr: string[]= [...completedTask, complete]
        setCompletedTask(newArr)
    }


  return (
    <>
    <div className="h-[85%] flex flex-col gap-4">
        <div className="flex gap-3">
            <input type="text" className="p-2 appearance-none border-2 rounded-md flex-1 focus:border-indigo-500 focus:outline-none focus:bg-white" value={task} onChange={handleChange}/>
            <button onClick={handleSubmit} className="px-6 py-2 bg-indigo-600 font-poppins text-slate-300">Add Task</button>
        </div>
        <div className="flex-grow w-full bg-slate-400 rounded-lg">
            <div className="p-2">
                <h2 className="font-poppins font-bold text-slate-900 tracking-tight text-xl">Your Tasks: </h2>
            </div>
            <div className="p-4 flex flex-col gap-2 overflow-auto">
                {taskList.length > 0 && <TasksContainer taskArr={taskList} handleDelete={handleDelete} completeTask={ handleCompletedTask } />}
            </div>
        </div>
    </div>
    </>
  )
}

export default TaskInput