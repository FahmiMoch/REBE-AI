import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import GreetingSection from "../components/layout/GreetingSection";
import Academic from "../components/layout/Academic";
import Learning from "../components/layout/Learning";
import Other from "../components/layout/Other";
import Footer from "../components/layout/Footer";

export default function MainDashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#f2f2f2] text-[#333]">

      {/* Header */}
      <Header />
      <div className="h-[50px]"></div> 

      {/* Greeting Section */}
      <GreetingSection 
        userName="Mochamad Fahmi Fadillah" 
        subscriptionStatus="berakhir" 
      />


      {/* Konten Utama */}
      <section className="max-w-screen-xl mx-auto px-4 lg:px-6 py-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Academic loading={loading} />
          <Learning loading={loading} />
        </div>

        <Other loading={loading} />

  
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
