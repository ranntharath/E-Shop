export default function Sidebar() {
  const menuItems = [
    { icon: "📊", label: "Analytics", active: false },
    { icon: "⚡", label: "Functions", active: false },
    { icon: "🔐", label: "Authentication", active: false },
    { icon: "💾", label: "Storage", active: false },
  ]
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-primary-foreground font-bold">
            h
          </div>
          <div>
            <h2 className="font-semibold text-sidebar-foreground">Dashboard</h2>
            <p className="text-xs text-muted-foreground">Enterprise</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
              item.active
                ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

     
    </aside>
  )
}
