import { useState } from "react";
import { concepts } from "./data/concepts";
import ConceptCard from "./components/ConceptCard";

function App() {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-3xl font-bold text-white md:text-4xl">
          AI Concepts Explorer
        </h1>

        <p className="mt-3 text-center text-slate-400">
          Learn the fundamentals of Artificial Intelligence
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <ConceptCard
              key={concept.id}
              concept={concept}
              isExpanded={expandedId === concept.id}
              onToggle={() => handleToggle(concept.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
