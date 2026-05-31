'use client';

import { useMemo, useState } from 'react';
import { calculateEffortPoints, type Task, type TaskPriority } from '@/lib/tasks';

type TaskFormProps = {
  onAddTask: (task: Omit<Task, 'id' | 'status'>) => void;
};

const priorities: TaskPriority[] = ['Low', 'Medium', 'High'];

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('Operations');
  const [priority, setPriority] = useState<TaskPriority>('Medium');
  const [estimateMinutes, setEstimateMinutes] = useState(30);

  const effortPoints = useMemo(
    () => calculateEffortPoints(estimateMinutes, priority),
    [estimateMinutes, priority],
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedTitle = title.trim();
    const normalizedProject = project.trim() || 'General';

    if (!normalizedTitle) {
      return;
    }

    onAddTask({
      title: normalizedTitle,
      project: normalizedProject,
      priority,
      estimateMinutes,
    });
    setTitle('');
    setEstimateMinutes(30);
  }

  return (
    <form className="rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-glow backdrop-blur-xl" onSubmit={handleSubmit}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Calculator</p>
          <h2 className="mt-1 text-xl font-black text-ink">Add a task</h2>
        </div>
        <output className="rounded-2xl bg-indigo-600 px-4 py-2 text-center text-white" htmlFor="estimate priority">
          <span className="block text-lg font-black">{effortPoints}</span>
          <span className="block text-[0.65rem] font-bold uppercase tracking-wider">pts</span>
        </output>
      </div>

      <label className="mt-5 block text-sm font-bold text-slate-700" htmlFor="title">
        Task title
      </label>
      <input
        className="mt-2 min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base outline-none ring-indigo-500/20 transition focus:ring-4"
        id="title"
        onChange={(event) => setTitle(event.target.value)}
        placeholder="e.g. Draft sprint notes"
        value={title}
      />

      <label className="mt-4 block text-sm font-bold text-slate-700" htmlFor="project">
        Project
      </label>
      <input
        className="mt-2 min-h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-base outline-none ring-indigo-500/20 transition focus:ring-4"
        id="project"
        onChange={(event) => setProject(event.target.value)}
        value={project}
      />

      <div className="mt-4 grid grid-cols-3 gap-2" role="radiogroup" aria-label="Task priority">
        {priorities.map((item) => (
          <button
            className={`min-h-12 rounded-2xl border px-3 text-sm font-bold transition active:scale-[0.98] ${
              priority === item
                ? 'border-indigo-600 bg-indigo-600 text-white'
                : 'border-slate-200 bg-white text-slate-600'
            }`}
            key={item}
            onClick={() => setPriority(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>

      <label className="mt-4 block text-sm font-bold text-slate-700" htmlFor="estimate">
        Estimate: {estimateMinutes} minutes
      </label>
      <input
        className="mt-3 w-full accent-indigo-600"
        id="estimate"
        max="120"
        min="15"
        onChange={(event) => setEstimateMinutes(Number(event.target.value))}
        step="15"
        type="range"
        value={estimateMinutes}
      />

      <button className="mt-5 min-h-12 w-full rounded-2xl bg-coral px-5 py-3 text-base font-black text-white shadow-lg shadow-rose-200 transition active:scale-[0.98]" type="submit">
        Add to today
      </button>
    </form>
  );
}
