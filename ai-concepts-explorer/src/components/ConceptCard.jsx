function ConceptCard({ concept, isExpanded, onToggle }) {
  return (
    <div className="rounded-xl border border-slate-700
                    bg-slate-800 p-5 shadow-lg">

      <span className="text-xs text-blue-400">
        {concept.category}
      </span>

      <h2 className="mt-2 text-xl font-bold text-white">
        {concept.title}
      </h2>

      <p className="mt-2 text-sm text-slate-300">
        {concept.short}
      </p>

      {isExpanded && (
        <div className="mt-4 rounded-lg bg-slate-900 p-3">
          <p className="text-sm text-green-400">
            Example:
          </p>

          <p className="mt-1 text-sm text-slate-300">
            {concept.example}
          </p>
        </div>
      )}

      <button
        onClick={onToggle}
        className="mt-4 rounded-lg bg-blue-600
                   px-4 py-2 text-sm text-white
                   hover:bg-blue-700"
      >
        {isExpanded ? "Show Less" : "Learn More"}
      </button>
    </div>
  );
}

export default ConceptCard;