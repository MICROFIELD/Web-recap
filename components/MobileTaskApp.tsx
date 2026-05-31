'use client';

import { useMemo, useState } from 'react';
import { AuthCard } from '@/components/AuthCard';
import { BottomNav } from '@/components/BottomNav';
import { MetricCard } from '@/components/MetricCard';
import { TaskForm } from '@/components/TaskForm';
import { TaskList } from '@/components/TaskList';
import { calculateFocusScore, initialTasks, type SessionUser, type Task } from '@/lib/tasks';

const demoUser: SessionUser = {
  name: 'Alex',
  role: 'Product Lead',
};

export function MobileTaskApp() {
  const [user, setUser] = useState<SessionUser | null>(demoUser);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const dashboard = useMemo(() => {
    const focusScore = calculateFocusScore(tasks);
    const activeTasks = tasks.filter((task) => task.status !== 'Done').length;
    const totalMinutes = tasks.reduce((sum, task) => sum + task.estimateMinutes, 0);

    return {
      focusScore,
      activeTasks,
      totalHours: (totalMinutes / 60).toFixed(1),
    };
  }, [tasks]);

  function handleAddTask(task: Omit<Task, 'id' | 'status'>) {
    setTasks((currentTasks) => [
      {
        ...task,
        id: crypto.randomUUID(),
        status: 'To do',
      },
      ...currentTasks,
    ]);
  }

  function handleToggleStatus(id: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id !== id) {
          return task;
        }

        const nextStatus: Task['status'] = task.status === 'To do'
          ? 'In progress'
          : task.status === 'In progress'
            ? 'Done'
            : 'To do';

        return { ...task, status: nextStatus };
      }),
    );
  }

  return (
    <main id="top" className="min-h-screen bg-app-gradient px-4 pb-32 pt-5 text-ink sm:px-6">
      <div className="mx-auto flex max-w-md flex-col gap-5">
        <header className="rounded-[2rem] border border-white/70 bg-white/55 p-5 shadow-glow backdrop-blur-xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-indigo-600">Mobile TaskFlow</p>
          <h1 className="mt-3 text-4xl font-black leading-[0.95] tracking-tight text-ink">
            Run your day from your thumb.
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            A mobile-first Next.js starter with authentication state, a live dashboard, touch-friendly task controls, and an effort calculator.
          </p>
        </header>

        <AuthCard user={user} onSignIn={() => setUser(demoUser)} onSignOut={() => setUser(null)} />

        <section className="grid grid-cols-2 gap-3" aria-label="Realtime dashboard">
          <MetricCard label="Focus" value={`${dashboard.focusScore}%`} helper="Weighted completion score" trend="Live" />
          <MetricCard label="Active" value={String(dashboard.activeTasks)} helper="Open tasks in motion" />
          <div className="col-span-2">
            <MetricCard label="Capacity" value={`${dashboard.totalHours}h`} helper="Estimated work loaded for today" />
          </div>
        </section>

        <TaskForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onToggleStatus={handleToggleStatus} />
      </div>
      <BottomNav />
    </main>
  );
}
