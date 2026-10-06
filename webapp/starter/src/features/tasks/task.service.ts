import { z } from "zod";
import type { CreateTask, Task, UpdateTask } from "@/db/schema";
import type { TaskRepository } from "./task-repository";

const createTaskInput = z.object({
  title: z.string().trim().min(1).max(200),
  userId: z.number().int().positive(),
  completed: z.boolean().optional(),
  dueDate: z.coerce.date().nullable().optional(),
});

const updateTaskInput = z.object({
  title: z.string().trim().min(1).max(200).optional(),
  completed: z.boolean().optional(),
  dueDate: z.coerce.date().nullable().optional(),
}).refine((task) => Object.keys(task).length > 0, "Minst ett felt må oppgis.");

export class TaskInputError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TaskInputError";
  }
}

export function createTaskService(repository: TaskRepository) {
  return {
    async create(input: unknown): Promise<Task> {
      const parsed = createTaskInput.safeParse(input);
      if (!parsed.success) throw new TaskInputError(parsed.error.message);
      return repository.createTask(parsed.data satisfies CreateTask);
    },

    list(): Promise<Task[]> {
      return repository.list();
    },

    get(id: string): Promise<Task | undefined> {
      return repository.get(id);
    },

    async update(id: string, input: unknown): Promise<Task | undefined> {
      const parsed = updateTaskInput.safeParse(input);
      if (!parsed.success) throw new TaskInputError(parsed.error.message);
      return repository.update(id, parsed.data satisfies UpdateTask);
    },

    remove(id: string): Promise<boolean> {
      return repository.remove(id);
    },
  };
}
