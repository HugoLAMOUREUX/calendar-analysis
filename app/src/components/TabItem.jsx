export default function TabItem({ tab, title, setTab, active, Icon, Badge }) {
  return (
    <button
      onClick={() => setTab(tab)}
      className={`group rounded-t-lg inline-flex items-center px-3 py-2 text-sm font-medium cursor-pointer transition-colors ${
        active ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30" : "text-gray-800 hover:bg-gray-200 bg-gray-100"
      }`}
    >
      {Icon && <Icon className={`${active ? "text-white" : "text-gray-800 group-hover:text-gray-500"} mr-2 h-4 w-4`} />}
      <div className="flex items-center gap-2">{title}</div>
      {Badge && Badge}
    </button>
  )
}
