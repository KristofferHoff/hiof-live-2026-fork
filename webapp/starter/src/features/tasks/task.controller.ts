import { db } from "@/db";
import { createTaskRepository } from "./task-repository";
import { createTaskService, TaskInputError } from "./task.service";

const tasks = createTaskService(createTaskRepository(db));

async function readJson(request: Request): Promise<unknown> {
  try {
    return await request.json();
  } catch {
    throw new TaskInputError("Forespørselen må inneholde gyldig JSON.");
  }
}

function errorResponse(error: unknown): Response {
  if (error instanceof TaskInputError) {
    return Response.json({ ok: false, error: error.message }, { status: 400 });
  }
  console.error("Task request failed", error);
  return Response.json({ ok: false, error: "En intern feil oppstod." }, { status: 500 });
}

export async function listTasks(): Promise<Response> {
  try {
    return Response.json({ ok: true, tasks: await tasks.list() });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function createTask(request: Request): Promise<Response> {
  try {
    const task = await tasks.create(await readJson(request));
    return Response.json({ ok: true, task }, { status: 201 });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function getTask(id: string): Promise<Response> {
  try {
    const task = await tasks.get(id);
    return task
      ? Response.json({ ok: true, task })
      : Response.json({ ok: false, error: "Oppgaven ble ikke funnet." }, { status: 404 });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function updateTask(id: string, request: Request): Promise<Response> {
  try {
    const task = await tasks.update(id, await readJson(request));
    return task
      ? Response.json({ ok: true, task })
      : Response.json({ ok: false, error: "Oppgaven ble ikke funnet." }, { status: 404 });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function deleteTask(id: string): Promise<Response> {
  try {
    const removed = await tasks.remove(id);
    return removed
      ? new Response(null, { status: 204 })
      : Response.json({ ok: false, error: "Oppgaven ble ikke funnet." }, { status: 404 });
  } catch (error) {
    return errorResponse(error);
  }
}
