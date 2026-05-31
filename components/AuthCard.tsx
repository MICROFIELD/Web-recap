import type { SessionUser } from '@/lib/tasks';

type AuthCardProps = {
  user: SessionUser | null;
  onSignIn: () => void;
  onSignOut: () => void;
};

export function AuthCard({ user, onSignIn, onSignOut }: AuthCardProps) {
  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-glow backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-indigo-600 text-xl font-black text-white shadow-lg shadow-indigo-300">
          {user ? user.name.charAt(0) : 'M'}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-slate-500">Secure workspace</p>
          <h2 className="truncate text-xl font-black text-ink">
            {user ? `Hi, ${user.name}` : 'Sign in to sync'}
          </h2>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">
        This starter uses lightweight client state for the demo. Replace the handler with your auth provider when you connect a backend.
      </p>
      <button
        className="mt-5 min-h-12 w-full rounded-2xl bg-ink px-5 py-3 text-base font-bold text-white shadow-lg shadow-slate-300 transition active:scale-[0.98]"
        onClick={user ? onSignOut : onSignIn}
        type="button"
      >
        {user ? 'Sign out' : 'Continue as demo user'}
      </button>
    </section>
  );
}
