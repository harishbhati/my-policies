import { useEffect, useState } from "react";
import CardList from "./components/CardList"
import type { IPolicy } from "./types/Policy";
import { policies as mockPolicies } from "./data/policies";

function App() {
  const [policies, setPolicies] = useState<IPolicy[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const filtered = mockPolicies
        .filter((p) => p.status === "Active")
        .sort((a, b) => a.policyStart.localeCompare(b.policyStart));
      setPolicies(filtered);
      setLoading(false);
    }, 500);
  }, []);
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="w-full max-w-4xl mx-auto">
            {loading ? (
              <p>Loading policies...</p>
            ) : (
            <CardList policies={policies} />
            )}
        </div>
    </main>
  )
}

export default App
