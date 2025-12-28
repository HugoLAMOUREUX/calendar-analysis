import React from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export default function Pagination({ total, per_page = 10, currentPage = 1, onChange = () => {} }) {
  const totalPages = Math.ceil(total / per_page)

  const getPages = () => {
    const pages = []
    const range = 2 // Number of pages to show around current page

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > range + 2) pages.push("...")

      const start = Math.max(2, currentPage - range)
      const end = Math.min(totalPages - 1, currentPage + range)

      for (let i = start; i <= end; i++) pages.push(i)

      if (currentPage < totalPages - (range + 1)) pages.push("...")
      pages.push(totalPages)
    }
    return pages
  }

  if (total <= 0) return <div className="flex items-center justify-center p-8 text-gray-500 bg-white rounded-xl border border-gray-200">No results found</div>

  return (
    <div className="flex items-center justify-center py-4">
      <nav className="flex items-center gap-2" aria-label="Pagination">
        <button disabled={currentPage <= 1} onClick={() => onChange(currentPage - 1)} className="p-2 text-gray-400 hover:text-indigo-600 disabled:opacity-30 transition-colors">
          <IoIosArrowBack className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-1">
          {getPages().map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="px-3 py-2 text-gray-400">...</span>
              ) : (
                <button
                  onClick={() => onChange(page)}
                  className={`
                    min-w-[40px] h-10 flex items-center justify-center rounded-full text-sm font-medium transition-all
                    ${currentPage === page ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"}
                  `}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>

        <button
          disabled={currentPage >= totalPages}
          onClick={() => onChange(currentPage + 1)}
          className="p-2 text-gray-400 hover:text-indigo-600 disabled:opacity-30 transition-colors"
        >
          <IoIosArrowForward className="h-5 w-5" />
        </button>
      </nav>
    </div>
  )
}
