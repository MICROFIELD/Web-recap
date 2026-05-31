export type TaskPriority = 'Low' | 'Medium' | 'High';
export type TaskStatus = 'To do' | 'In progress' | 'Done';

export type Task = {
  id: string;
  title: string;
  project: string;
  priority: TaskPriority;
  status: TaskStatus;
  estimateMinutes: number;
};

export type SessionUser = {
  name: string;
  role: string;
};

export const initialTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Review launch checklist',
    project: 'Mobile release',
    priority: 'High',
    status: 'In progress',
    estimateMinutes: 45,
  },
  {
    id: 'task-2',
    title: 'Polish onboarding copy',
    project: 'Growth',
    priority: 'Medium',
    status: 'To do',
    estimateMinutes: 30,
  },
  {
    id: 'task-3',
    title: 'Sync with design QA',
    project: 'Mobile release',
    priority: 'Low',
    status: 'Done',
    estimateMinutes: 25,
  },
];

export const priorityWeight: Record<TaskPriority, number> = {
  Low: 1,
  Medium: 1.35,
  High: 1.8,
};

export function calculateFocusScore(tasks: Task[]): number {
  if (tasks.length === 0) {
    return 100;
  }

  const totalWeight = tasks.reduce((sum, task) => sum + priorityWeight[task.priority], 0);
  const doneWeight = tasks
    .filter((task) => task.status === 'Done')
    .reduce((sum, task) => sum + priorityWeight[task.priority], 0);

  return Math.round((doneWeight / totalWeight) * 100);
}

export function calculateEffortPoints(minutes: number, priority: TaskPriority): number {
  return Math.max(1, Math.round((minutes / 15) * priorityWeight[priority]));
}
