import { Task } from "../types/Task";

interface Props {
	task: Task;
}

export default function TaskCard(props: Props) {
	return (
		<article className="task--card" key={props.task.id}>
			<h1>{props.task.title}</h1>
			<hr />
			<p>{props.task.description}</p>
			<p>{props.task.status}</p>
		</article>
	);
}
