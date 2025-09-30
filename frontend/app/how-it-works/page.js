"use client";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">كيف تعمل المنصة</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            شرح مبسّط لآلية العمل وخطوات استخدام الأسطورة أونلاين. هذه صفحة مؤقتة لتجنّب 404.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
