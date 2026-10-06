import {tasks} from "@/db/schema";

export interface TaskRepository {
    createTask(task: any) => Promise<any>;
    update:(id: string, task: any) => Promise<any>;
    get: (id: string) => Promise<any>;
    list: () => Promise<any[]>;
    remove: (id: string) => Promise<void>;
}

export function createTaskRepository(db: DB): TaskRepository {
    return {
        async createTask(task) {
            const result = await db.insert(tasks).values(task).returning();
            return result[0];
        }