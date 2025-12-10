import React, { useEffect, useState, useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

export default function ChartSection({ range, setRange, journeyId }) {
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (!journeyId) {
      console.log("⚠️ journeyId is missing");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(
        `/api/developer-journey/completions/journeys/${journeyId}/study-duration?range=${range}`
      );
      console.log("📦 Fetched data from backend:", res.data.data);
      setRawData(res.data.data || []);
    } catch (err) {
      console.error("❌ Failed to fetch study duration:", err);
      setRawData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [range, journeyId]);

  useEffect(() => {
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [range, journeyId]);

  const data = useMemo(() => {
    const daysLabel = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];

    // Pakai 7 titik, jika data kosong isi 0
    const sliced = rawData.length ? rawData.slice(-7) : Array(7).fill({ duration: 0 });

    const mapped = sliced.map((item, i) => ({
      index: String(i),
      value: item.duration || 0,
      dayLabel: daysLabel[i % 7],
    }));

    console.log("📊 Data for chart:", mapped);
    return mapped;
  }, [rawData]);

  return (
    <section className="max-w-6xl mx-auto bg-white p-6 rounded-xl mt-10 shadow">
      <header>
        <h2 className="font-semibold mb-1">Kegiatan Pembelajaran</h2>
        <p className="text-sm text-gray-600 mb-4">
          Aktivitas Penyelesaian Materi Per Hari
        </p>
      </header>

      <div className="flex gap-3 mb-5 justify-end">
        {[7, 14, 30].map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={`px-3 py-1 rounded-lg border transition ${
              range === r
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {r} Hari
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-500">Loading chart...</div>
      ) : (
        <figure className="w-full h-64 min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 15, left: -10 }}>
              <CartesianGrid stroke="#e5e5e5" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="index"
                type="category"
                scale="point"
                ticks={["0", "1", "2", "3", "4", "5", "6"]}
                tickFormatter={(i) => data[Number(i)]?.dayLabel || ""}
                interval={0}
                tick={{ fontSize: 12, fill: "#666", dy: 10 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis tick={{ fontSize: 12, fill: "#666" }} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0052D5"
                strokeWidth={4}
                dot={false}
                activeDot={{ r: 6, fill: "#0052D5" }}
                style={{ filter: "drop-shadow(0px 0px 5px rgba(0, 82, 213, 0.5))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </figure>
      )}
    </section>
  );
}
