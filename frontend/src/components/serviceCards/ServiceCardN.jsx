import React from "react";
import { Shield, Activity, Gauge, Crown } from "lucide-react";

// Diagonal split header, two-column info, refined gradient
const ServiceCardN = () => {
  return (
    <div data-testid="service-card-n" className="relative w-[370px] min-w-[370px] h-[620px] rounded-3xl bg-white overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
      <div className="absolute -top-24 -right-24 w-80 h-80 rotate-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-rose-500 rounded-full blur-2xl opacity-30" aria-hidden></div>

      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-gray-900">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
        </div>

        {/* Thin diagonal divider */}
        <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full rotate-[0.3deg]" />

        {/* Two-column info */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="col-span-2 rounded-xl border border-gray-200 p-3">
            <div className="text-sm font-bold text-gray-800">فئات متعددة:</div>
            <div className="text-xs text-gray-600">مالية، العاب، تسوق</div>
          </div>
          <div className="col-span-2 rounded-xl border border-gray-200 p-3">
            <div className="text-sm font-bold text-gray-800">توافق عالمي:</div>
            <div className="text-xs text-gray-600">منصات، تطبيقات، مواقع</div>
          </div>
          <div className="col-span-2 rounded-xl border-2 border-dashed border-gray-300 p-3 text-center font-bold text-sm text-gray-900">باقات متنوعة</div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center">
          <span className="text-xs font-extrabold px-6 py-2 rounded-full bg-gray-900 text-white">المزيد</span>
        </div>

        {/* Features */}
        <div className="mt-6 grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center"><Shield size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 border border-orange-100 flex items-center justify-center"><Activity size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center"><Gauge size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 border border-rose-100 flex items-center justify-center"><Crown size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardN;