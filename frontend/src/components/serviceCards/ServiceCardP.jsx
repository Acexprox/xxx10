import React from "react";
import { Shield, Zap, Check, Award } from "lucide-react";

// Vertical timeline motif, content blocks with markers
const ServiceCardP = () => {
  return (
    <div data-testid="service-card-p" className="relative w-[370px] min-w-[370px] h-[620px] rounded-3xl bg-white border border-gray-200 shadow-[0_16px_40px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gray-200" aria-hidden></div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-gray-900">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
        </div>

        {/* Info with timeline dots */}
        <div className="mt-5 space-y-4">
          <div className="relative pl-8">
            <span className="absolute left-6 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-900"></span>
            <div className="rounded-xl border border-gray-200 p-3 bg-gray-50">
              <div className="text-sm font-bold text-gray-800">فئات متعددة:</div>
              <div className="text-xs text-gray-600">مالية، العاب، تسوق</div>
            </div>
          </div>
          <div className="relative pl-8">
            <span className="absolute left-6 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-900"></span>
            <div className="rounded-xl border border-gray-200 p-3 bg-gray-50">
              <div className="text-sm font-bold text-gray-800">توافق عالمي:</div>
              <div className="text-xs text-gray-600">منصات، تطبيقات، مواقع</div>
            </div>
          </div>
          <div className="relative pl-8">
            <span className="absolute left-6 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-900"></span>
            <div className="rounded-xl border-2 border-dashed border-gray-300 p-3 text-center font-bold text-sm text-gray-900 bg-white">باقات متنوعة</div>
          </div>
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
            <span className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 border border-orange-100 flex items-center justify-center"><Zap size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center"><Check size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 border border-rose-100 flex items-center justify-center"><Award size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardP;