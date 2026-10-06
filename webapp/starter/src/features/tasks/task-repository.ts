import { eq } from "drizzle-orm";
import type { DB } from "@/db";
import { tasks, type CreateTask, type Task, type UpdateTask } from "@/db/schema";

export interface TaskRepository {
  createTask(task: CreateTask): Promise<Task>;
  update(id: string, task: UpdateTask): Promise<Task | undefined>;
  get(id: string): Promise<Task | undefined>;
  list(): Promise<Task[]>;
  remove(id: string): Promise<boolean>;
}

export function createTaskRepository(db: DB): TaskRepository {
  return {
    async createTask(task) {
      const [created] = await db.insert(tasks).values(task).returning();
      return (0);
    }}}