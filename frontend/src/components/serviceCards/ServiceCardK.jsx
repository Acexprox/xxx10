import React from "react";
import { Shield, Zap, CheckCircle2, Star } from "lucide-react";

// Editorial Monochrome: bold typography, clear rhythm, black/white with a single accent
const ServiceCardK = () => {
  return (
    <div data-testid="service-card-k" className="relative w-[370px] min-w-[370px] h-[620px] bg-white text-gray-900 rounded-2xl border border-black/10 shadow-[0_6px_30px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-7 pb-4 border-b border-black/10">
        <div className="text-right">
          <h3 className="text-3xl font-black tracking-tight">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-500 mt-1">مسبقة الدفع</p>
        </div>
      </div>

      {/* Vertical columns rhythm */}
      <div className="px-6 py-5 grid grid-cols-12 gap-4">
        <div className="col-span-12 space-y-3">
          <div className="flex justify-between items-start border-b border-dotted border-gray-300 pb-3">
            <div className="text-right">
              <div className="text-sm font-extrabold">فئات متعددة:</div>
              <div className="text-xs text-gray-600">مالية، العاب، تسوق</div>
            </div>
            <span className="inline-flex items-center justify-center h-6 px-2 rounded-full text-[10px] font-black bg-gray-100 border border-gray-300">A</span>
          </div>
          <div className="flex justify-between items-start border-b border-dotted border-gray-300 pb-3">
            <div className="text-right">
              <div className="text-sm font-extrabold">توافق عالمي:</div>
              <div className="text-xs text-gray-600">منصات، تطبيقات، مواقع</div>
            </div>
            <span className="inline-flex items-center justify-center h-6 px-2 rounded-full text-[10px] font-black bg-gray-100 border border-gray-300">G</span>
          </div>
          <div className="text-center font-extrabold text-sm py-3 border border-black/10 rounded-lg">باقات متنوعة</div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 mt-2">
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-black px-6 py-2 text-xs font-black bg-white">المزيد</span>
        </div>
      </div>

      {/* Feature strip */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"><Shield size={18} /></span>
            <span className="text-[11px] font-bold">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center"><Zap size={18} /></span>
            <span className="text-[11px] font-bold">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center"><CheckCircle2 size={18} /></span>
            <span className="text-[11px] font-bold">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center"><Star size={18} /></span>
            <span className="text-[11px] font-bold">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardK;