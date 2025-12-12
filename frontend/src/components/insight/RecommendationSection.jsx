import React, { useEffect, useState } from "react";
import axios from "axios";

function RecoCard({ title, desc }) {
  return (
    <article className="bg-white p-5 rounded-xl shadow mb-10">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
      <button className="mt-3 text-blue-600 text-sm hover:underline">
        Lihat detail
      </button>
    </article>
  );
}

export default function RecommendationSection({ userId }) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fallback static recommendations
  const fallbackRecommendations = [
    {
      title: "Konsistensi Mingguan Sangat Baik",
      desc: "Durasinya sudah ideal untuk terus fokus maksimal. Pertahankan ritme ini dan pastikan kamu istirahat 5-10 menit setiap sesi.",
    },
    {
      title: "Durasi Belajar Sudah Optimal",
      desc: "6 hari aktif menunjukkan dedikasi yang tinggi. Luangkan 1 hari istirahat penuh agar bisa tetap produktif.",
    },
  ];

  useEffect(() => {
    if (!userId) {
      setRecommendations(fallbackRecommendations);
      return;
    }

    setLoading(true);

    axios
      .get(`/api/users/${userId}/recommendations`)
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setRecommendations(fallbackRecommendations);
        } else {
          setRecommendations(res.data);
        }
      })
      .catch(() => {
        setRecommendations(fallbackRecommendations);
      })
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading)
    return <div className="text-center py-10">Loading...</div>;

  return (
    <section className="max-w-6xl mx-auto mt-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      {recommendations.map((r, idx) => (
        <RecoCard key={idx} {...r} />
      ))}
    </section>
  );
}
