import React from "react";
import { Shield, Zap, BadgeCheck, Star } from "lucide-react";

// Hero title band with centered card content
const ServiceCardR = () => {
  return (
    <div data-testid="service-card-r" className="relative w-[370px] min-w-[370px] h-[620px] rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-[0_18px_50px_rgba(0,0,0,0.1)]">
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-gray-50 to-transparent" aria-hidden></div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="text-center pt-6">
          <h3 className="text-3xl font-black text-gray-900">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-xl border border-gray-200 p-3">
            <div className="text-sm font-bold text-gray-800">فئات متعددة:</div>
            <div className="text-xs text-gray-600">مالية، العاب، تسوق</div>
          </div>
          <div className="rounded-xl border border-gray-200 p-3">
            <div className="text-sm font-bold text-gray-800">توافق عالمي:</div>
            <div className="text-xs text-gray-600">منصات، تطبيقات، مواقع</div>
          </div>
          <div className="rounded-xl border-2 border-dashed border-gray-300 p-3 text-center font-bold text-sm text-gray-900">باقات متنوعة</div>
        </div>

        <div className="mt-8 flex justify-center">
          <span className="text-xs font-extrabold px-6 py-2 rounded-full bg-gray-900 text-white">المزيد</span>
        </div>

        <div className="mt-auto grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center"><Shield size={18} /></span>
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

export default ServiceCardR;