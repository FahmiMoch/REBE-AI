import React, { useEffect, useState } from "react";
import axios from "axios";

function SummaryCard({ title, value, icon }) {
  return (
    <article
      className="
        w-full h-full
        bg-[#1c4465] text-white
        p-6
        rounded-xl shadow
        flex flex-col justify-between

        max-md:p-3
      "
    >
      <div className="flex items-center gap-3 max-md:gap-2">
        <div className="shrink-0 text-2xl max-md:text-lg">
          {icon}
        </div>

        <p className="text-sm opacity-90 max-md:text-xs leading-tight">
          {title}
        </p>
      </div>

      <h3 className="text-2xl font-bold mt-6 max-md:text-base max-md:mt-3">
        {value}
      </h3>
    </article>
  );
}



export default function SummarySection({ userId }) {
  // 🔥 Fallback dummy langsung ditampilkan di awal
  const fallbackSummaries = [
    { title: "Kecepatan Belajar", value: "10 Materi" },
    { title: "Konsistensi", value: "6 Hari Aktif" },
    { title: "Rata - Rata", value: "90 Menit" },
    { title: "Evaluasi", value: "90 / A" },
  ];

  const iconMap = [
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 9h18M4.5 19.5h15a1.5 1.5 0 0 0 1.5-1.5V9.75H3v8.25a1.5 1.5 0 0 0 1.5 1.5Z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M7.5 15l3-3 2.25 2.25L18 9" />
    </svg>,
  ];

  const [summaries, setSummaries] = useState(fallbackSummaries); // ⬅️ fallback langsung tampil
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;

    setLoading(true);
    axios
      .get(`/api/users/${userId}/summary`)
      .then((res) => {
        const d = res.data;

        // Pastikan data array & minimal punya title/value
        const isValid =
          Array.isArray(d) &&
          d.length === 4 &&
          d.every((i) => i.title && i.value);

        if (isValid) {
          setSummaries(d); // pakai data dari backend
        } else {
          setSummaries(fallbackSummaries); // fallback
        }
      })
      .catch(() => {
        setSummaries(fallbackSummaries); // error → fallback
      })
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading)
    return <div className="text-center py-10 text-black">Loading...</div>;

  return (
    <section className="mt-10">
      <div className="max-w-6xl mx-auto">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {summaries.map((item, idx) => (
            <li key={idx} className="w-full h-full">
              <SummaryCard
                title={item.title}
                value={item.value}
                icon={iconMap[idx]}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
  
}
