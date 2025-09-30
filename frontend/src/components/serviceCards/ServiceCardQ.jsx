import React from "react";
import { ShieldCheck, Gauge, ThumbsUp, Gem } from "lucide-react";

// Sidebar metadata, dense contents, editorial grey scale
const ServiceCardQ = () => {
  return (
    <div data-testid="service-card-q" className="relative w-[370px] min-w-[370px] h-[620px] rounded-xl bg-white border border-gray-200 shadow-sm overflow-hidden">
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gray-50 border-l border-gray-200" aria-hidden></div>

      <div className="relative z-10 h-full p-6 grid grid-cols-12 gap-4">
        {/* Header */}
        <div className="col-span-9 text-right">
          <h3 className="text-2xl font-extrabold text-gray-900">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
        </div>
        <div className="col-span-3 flex items-start justify-end">
          <span className="h-6 px-2 rounded-lg text-[10px] font-bold bg-gray-200 text-gray-700 border border-gray-300">PREM</span>
        </div>

        {/* Info */}
        <div className="col-span-12 space-y-3">
          <div className="rounded-xl border border-gray-200 p-3 bg-white">
            <div className="text-sm font-bold text-gray-800">فئات متعددة:</div>
            <div className="text-xs text-gray-600">مالية، العاب، تسوق</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-3 bg-white">
            <div className="text-sm font-bold text-gray-800">توافق عالمي:</div>
            <div className="text-xs text-gray-600">منصات، تطبيقات، مواقع</div>
          </div>
          <div className="rounded-xl border-2 border-dashed border-gray-300 p-3 text-center font-bold text-sm text-gray-900">باقات متنوعة</div>
        </div>

        {/* CTA */}
        <div className="col-span-12 flex justify-center">
          <span className="text-xs font-extrabold px-6 py-2 rounded-full bg-gray-900 text-white">المزيد</span>
        </div>

        {/* Features */}
        <div className="col-span-12 grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center"><ShieldCheck size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 border border-orange-100 flex items-center justify-center"><Gauge size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center"><ThumbsUp size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 border border-rose-100 flex items-center justify-center"><Gem size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardQ;