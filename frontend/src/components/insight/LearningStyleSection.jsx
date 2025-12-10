import React, { useEffect, useState } from "react";
import axios from "axios";

function TypeCard({ title, icon, desc }) {
  return (
    <article className="bg-white p-4 rounded-xl shadow flex gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </article>
  );
}

export default function LearningStyleSection({ userId }) {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLearningStyles = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const res = await axios.get(`/api/users/${userId}/learning-style`);
      console.log("📦 Learning style data:", res.data);
      setTypes(res.data || []);
    } catch (err) {
      console.error("❌ Failed to fetch learning styles:", err);
      setTypes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLearningStyles();
  }, [userId]);

  if (loading) return <div className="text-center py-10">Loading learning styles...</div>;
  if (!types.length) return <div className="text-center py-10 text-gray-500">No learning style data found.</div>;

  return (
    <section className="max-w-6xl mx-auto mt-10 px-6 space-y-4">
      {types.map((t, idx) => (
        <TypeCard key={idx} {...t} />
      ))}
    </section>
  );
}
