import TaskInput from "../components/TaskInput"
import TodoHeader from "../components/TodoHeader"


const TodoLayout = () => {
  return (
    <div className="w-[900px] h-[600px] bg-slate-700 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-2">
        <div className="h-full">
          <TodoHeader />
          <TaskInput/>
        </div>
        <div className="h-full">
            
        </div>
    </div>
  )
}

export default TodoLayout