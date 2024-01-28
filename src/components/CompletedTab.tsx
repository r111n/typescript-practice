
type completedTask = {
    task: string
}

const CompletedTab = (props : completedTask) => {
  return (
    <div className="px-6 py-2 bg-slate-200 rounded-lg">
        <h5 className="text-md text-slate-600 font-poppins">{props.task}</h5>
    </div>
  )
}

export default CompletedTab