"use client";

import { FormEvent } from "react";
import { NewTask } from "../types/NewTask";
import { getValueFromFormInput } from "@/utils/getValueFromFormInput";

async function createTask(event: FormEvent<HTMLFormElement>) {
	const form = event.target as HTMLFormElement;
	const title = getValueFromFormInput(form, "title");
	const description = getValueFromFormInput(form, "description");
	const task: NewTask = {
		title: title,
		description: description,
	};
	await fetch("/api/tasks", {
		method: "POST",
		body: JSON.stringify(task),
	});
}

export default function TaskForm() {
	return (
		<form onSubmit={createTask}>
			<input id="title" type="text" placeholder="Title" required></input>
			<input
				id="description"
				type="text"
				placeholder="Description"
			></input>
			<input type="submit"></input>
		</form>
	);
}
