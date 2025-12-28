import React from "react"

export default ({ title, active, Icon, onClick }) => (
  <button
    onClick={onClick}
    className={`group inline-flex items-center px-4 py-2 cursor-pointer text-sm font-medium transition-all border-b-2 ${
      active ? "text-indigo-600 border-indigo-600" : "text-gray-400 border-transparent hover:border-indigo-400 hover:text-indigo-600"
    }`}
  >
    {Icon ? <Icon className={`${active ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-500"} -ml-0.5 mr-2 h-4 w-4`} aria-hidden="true" /> : null}
    <div className="flex items-center gap-2">{title}</div>
  </button>
)
