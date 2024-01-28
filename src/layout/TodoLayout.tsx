import CompletedTasks from "../components/CompletedTasks"
import DeletedTasks from "../components/DeletedTasks"
import TaskInput from "../components/TaskInput"
import TodoHeader from "../components/TodoHeader"


const TodoLayout = () => {
  return (
    <div className="w-[900px] h-auto bg-slate-700 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2">
        <div className="h-full">
          <TodoHeader />
          <TaskInput/>
        </div>
        <div className="h-full grid grid-cols-1 gap-4 p-2">
            <CompletedTasks />
            <DeletedTasks />
        </div>
    </div>
  )
}

export default TodoLayout