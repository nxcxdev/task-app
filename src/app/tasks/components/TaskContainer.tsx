import { Task } from "../types/Task";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

interface Props {
	tasks: Task[];
}

export default function TaskContainer(props: Props) {
	return (
		<section className="task--container">
			{props.tasks.map((task) => (
				<TaskCard task={task} key={task.id} />
			))}
		</section>
	);
}
