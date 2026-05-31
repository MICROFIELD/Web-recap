const navItems = [
  { label: 'Home', icon: '⌂' },
  { label: 'Tasks', icon: '✓' },
  { label: 'Stats', icon: '◌' },
];

export function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 mx-auto max-w-md px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]" aria-label="Primary">
      <div className="grid grid-cols-3 rounded-[1.75rem] border border-white/80 bg-white/85 p-2 shadow-glow backdrop-blur-xl">
        {navItems.map((item) => (
          <a
            className="flex min-h-14 flex-col items-center justify-center rounded-2xl text-xs font-black text-slate-500 transition first:bg-ink first:text-white active:scale-[0.98]"
            href="#top"
            key={item.label}
          >
            <span className="text-lg leading-none" aria-hidden="true">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
