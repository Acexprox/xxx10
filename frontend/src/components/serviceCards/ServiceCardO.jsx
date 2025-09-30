import React from "react";
import { ShieldCheck, Zap, BadgeCheck, Star } from "lucide-react";

// Luxe minimal with gold accent lines
const ServiceCardO = () => {
  return (
    <div data-testid="service-card-o" className="relative w-[370px] min-w-[370px] h-[620px] rounded-2xl bg-white border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
      <div className="absolute inset-x-10 top-10 h-[2px] bg-gradient-to-r from-[#CBA135] via-[#E7C766] to-[#CBA135] rounded" aria-hidden></div>
      <div className="absolute inset-x-16 bottom-16 h-[1px] bg-gradient-to-r from-gray-200 via-[#E7C766]/40 to-gray-200 rounded" aria-hidden></div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-2xl font-extrabold text-gray-900">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-3">
          <div className="rounded-xl border border-gray-200 p-3">
            <div className="text-sm font-bold text-gray-800">فئات متعددة:</div>
            <div className="text-xs text-gray-600">مالية، العاب، تسوق</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-3">
            <div className="text-sm font-bold text-gray-800">توافق عالمي:</div>
            <div className="text-xs text-gray-600">منصات، تطبيقات، مواقع</div>
          </div>
          <div className="rounded-xl border-2 border-dashed border-[#CBA135] p-3 text-center font-extrabold text-sm text-gray-900">باقات متنوعة</div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <span className="text-xs font-extrabold px-6 py-2 rounded-full bg-[#CBA135] text-white shadow">المزيد</span>
        </div>

        {/* Features */}
        <div className="mt-auto grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center"><ShieldCheck size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 border border-orange-100 flex items-center justify-center"><Zap size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center"><BadgeCheck size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 border border-rose-100 flex items-center justify-center"><Star size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardO;