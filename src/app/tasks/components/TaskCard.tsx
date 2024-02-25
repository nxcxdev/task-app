import { Task } from "../types/Task";
interface Props {
	task: Task;
}

export default function TaskCard(props: Props) {
	return (
		<article>
			<h1>{props.task.title}</h1>
			<p>{props.task.id}</p>
			<p>{props.task.description}</p>
			<p>{props.task.status}</p>
		</article>
	);
}
