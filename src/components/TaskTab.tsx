import { MdDelete } from "react-icons/md"
import { FaCheck } from "react-icons/fa"

type myString={
  task: String;
  onDelete: () => void;
  onComplete: () => void;
}

const TaskTab = (props: myString) => {
  return (
        <div className="flex py-3 px-6 w-full bg-slate-300 rounded-md justify-between items-center">
            <h5 className="text-md text-slate-800 font-poppins">{props.task}</h5>
            <div className="flex items-center">
            <MdDelete className="text-lg text-slate-700 hover:cursor-pointer" onClick={() => props.onDelete()} />
            <FaCheck className="text-lg text-slate-700 hover:cursor-pointer" onClick={() => props.onComplete()} />
            </div>
        </div>
  )
}

export default TaskTab