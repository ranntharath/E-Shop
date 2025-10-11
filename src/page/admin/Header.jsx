

export default function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 lg:px-8 h-16">
        <div className="flex items-center gap-4">
          <select className="bg-amber-500 text-foreground px-3 py-1.5 rounded-lg text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Production</option>
            <option>Development</option>
            <option>Staging</option>
          </select>

          <select className="bg-amber-500 text-foreground px-3 py-1.5 rounded-lg text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Last 12 hours</option>
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Feedback
          </button>
          <button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Help
          </button>
          <button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Docs
          </button>
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-primary-foreground text-sm font-medium">
            JD
          </div>
        </div>
      </div>
    </header>
  )
}
