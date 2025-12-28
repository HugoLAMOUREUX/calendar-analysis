export const Stepper = ({ currentStep, totalStep, parentClassName }) => {
  return (
    <ul className={`flex items-center mx-auto mt-4 ${parentClassName}`}>
      {[...Array(totalStep)].map((_, idx) => (
        <li className="flex-1 last:flex-none flex items-center" key={idx}>
          <div
            className={`w-8 text-gray-900 h-8 rounded-full border-2 flex-none flex items-center justify-center text-xs transition-all ${
              currentStep > idx + 1 ? "bg-indigo-600 border-indigo-600 text-white" : "" || currentStep == idx + 1 ? "border-indigo-600 text-indigo-600" : ""
            }`}
          >
            {idx + 1}
          </div>
          <hr className={`w-full border transition-all ${idx + 1 == 3 ? "hidden" : "" || currentStep > idx + 1 ? "border-indigo-600" : ""}`} />
        </li>
      ))}
    </ul>
  )
}
