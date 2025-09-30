"use client";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">الأسئلة الشائعة</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            صفحة أسئلة شائعة مؤقتة لتجنّب 404. سيتم ملؤها لاحقاً بالمحتوى الكامل.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
