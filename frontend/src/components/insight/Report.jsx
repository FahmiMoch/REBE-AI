import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Report({ userId }) {
  const fallbackReport = {
    name: "Mochamad Fahmi",
    learningStyle: "Fast Learner",
    advice: "Belajarmu sangat cepat, jangan lupa dibaca ulang ya!",
    totalStudyHours: 12,
  };

  const [report, setReport] = useState(fallbackReport); // ⬅️ langsung pakai fallback dulu
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;

    setLoading(true);
    axios
      .get(`/api/users/${userId}/weekly-report`)
      .then((res) => {
        const d = res.data;

        const isValid =
          d &&
          typeof d === "object" &&
          d.name &&
          d.learningStyle &&
          d.advice &&
          d.totalStudyHours;

        if (isValid) {
          setReport(d); // data valid
        } else {
          setReport(fallbackReport); // fallback
        }
      })
      .catch(() => {
        setReport(fallbackReport); // backend error → fallback
      })
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <section className="bg-gradient-to-r from-[#003b63] to-[#005a94] text-white p-8 rounded-b-xl">
      <header className="max-w-6xl mx-auto border border-white/30 rounded-xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Info User */}
        <article>
          <h1 className="text-3xl font-semibold">Laporan Mingguan</h1>
          <p className="mt-2 text-lg">Halo, {report.name}</p>

          <p className="mt-1 flex items-center gap-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
            <span>{report.learningStyle}</span>
          </p>

          <p className="mt-3 text-sm opacity-90">{report.advice}</p>
        </article>

        {/* Statistik */}
        <aside className="bg-white/20 backdrop-blur p-4 rounded-xl w-40 text-center border border-white/30">
          <p className="text-sm">{report.totalStudyHours} jam belajar</p>
        </aside>

      </header>
    </section>
  );
}
