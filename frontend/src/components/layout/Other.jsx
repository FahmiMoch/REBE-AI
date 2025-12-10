import React from "react";

export default function Other({ loading }) {
  return (
    <article className="bg-white p-4 rounded-xl shadow-md min-h-[400px]">
      <h2 className="font-semibold mb-3 flex items-center gap-2 text-base md:text-lg">
        <span className="w-5 h-5 bg-gray-200 rounded-md inline-block"></span>
        Aktivitas Lain
      </h2>
      <div className="h-px bg-gray-200 w-full mb-4"></div>

      {loading ? (
        <div className="animate-pulse h-16 bg-gray-300 rounded-md mb-6"></div>
      ) : (
        <p className="mb-6">Belum ada aktivitas.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="w-full bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer text-left h-24 flex flex-col items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6h13M9 6L4 3v16h16"/>
          </svg>
          Telusuri event dari Dicoding
        </button>

        <button className="w-full bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer text-left h-24 flex flex-col items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3"/>
          </svg>
          Telusuri challenge dari Dicoding
        </button>

        <button className="w-full bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer md:col-span-2 text-left h-24 flex flex-col items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 01-8 0 4 4 0 018 0zM12 14v7"/>
          </svg>
          Telusuri daftar pekerjaan perusahaan ternama
        </button>
      </div>
    </article>
  );
}
