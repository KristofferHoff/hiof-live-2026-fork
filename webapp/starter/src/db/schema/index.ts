// Samlet eksport av skjemaet. drizzle.config.ts peker hit, og resten av appen
// kan importere tabeller og typer fra `@/db/schema`.
export { users } from "./user-schema";
export type { User, CreateUser } from "./user-schema";

export { tasks } from "./task-schema";
export type { Task, CreateTask, UpdateTask } from "./task-schema";
