import type { Task } from '@/lib/tasks';

const statusStyles: Record<Task['status'], string> = {
  'To do': 'bg-slate-100 text-slate-700',
  'In progress': 'bg-indigo-100 text-indigo-700',
  Done: 'bg-emerald-100 text-emerald-700',
};

type TaskListProps = {
  tasks: Task[];
  onToggleStatus: (id: string) => void;
};

export function TaskList({ tasks, onToggleStatus }: TaskListProps) {
  return (
    <section className="space-y-3" aria-label="Task list">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-lg font-black text-ink">Today&apos;s flow</h2>
        <span className="text-sm font-semibold text-slate-500">{tasks.length} tasks</span>
      </div>
      {tasks.map((task) => (
        <button
          className="flex min-h-20 w-full items-center gap-4 rounded-[1.5rem] border border-white/70 bg-white/75 p-4 text-left shadow-sm backdrop-blur-xl transition active:scale-[0.99]"
          key={task.id}
          onClick={() => onToggleStatus(task.id)}
          type="button"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-slate-900 text-sm font-black text-white">
            {task.estimateMinutes}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-base font-bold text-ink">{task.title}</span>
            <span className="mt-1 block truncate text-sm text-slate-500">{task.project} · {task.priority}</span>
          </span>
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyles[task.status]}`}>
            {task.status}
          </span>
        </button>
      ))}
    </section>
  );
}
