import TaskTab from "./TaskTab"

type ComponentProps = {
    taskArr: string[];
    handleDelete: (index: number) => void;
    completeTask: (index: number) => void;
}

const TasksContainer = (props: ComponentProps) => {
  return (
    <>
            {props.taskArr.map((item: string, index: number) => {
                return (
                  <TaskTab task={item} key={index} onDelete={() => props.handleDelete(index)} onComplete={() => props.completeTask(index)} />
                )
            })}
    </>
  )
}

export default TasksContainer