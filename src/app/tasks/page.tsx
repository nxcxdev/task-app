import TaskCard from "./components/TaskCard";
import TaskContainer from "./components/TaskContainer";
import TaskForm from "./components/TaskForm";
import styles from "./page.module.css";
import { Task } from "./types/Task";

async function getTasks(): Promise<Task[]> {
	const res = await fetch("http://localhost:8000/tasks", {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

export default async function Page() {
	const tasks = await getTasks();
	return (
		<main>
			<TaskForm />
			<TaskContainer tasks={tasks} />
		</main>
	);
}
