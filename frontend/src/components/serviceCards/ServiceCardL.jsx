import React from "react";
import { ShieldCheck, Activity, BadgeCheck, Gem } from "lucide-react";

// Gradient mesh + glass tiles, soft premium feel
const ServiceCardL = () => {
  return (
    <div data-testid="service-card-l" className="relative w-[370px] min-w-[370px] h-[620px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_110%_-10%,#f59e0b33,transparent),radial-gradient(80%_80%_at_0%_100%,#0ea5e922,transparent),radial-gradient(100%_100%_at_100%_0%,#ef444422,transparent)]" aria-hidden></div>
      <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden></div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="text-center">
          <h3 className="text-2xl font-black text-gray-900">بطائق الكترونية</h3>
          <p className="text-sm font-semibold text-gray-600 mt-1">مسبقة الدفع</p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3">
          <div className="rounded-2xl border border-white/60 bg-white/60 backdrop-blur p-3">
            <div className="text-sm font-bold text-gray-800">فئات متعددة:</div>
            <div className="text-xs text-gray-600">مالية، العاب، تسوق</div>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/60 backdrop-blur p-3">
            <div className="text-sm font-bold text-gray-800">توافق عالمي:</div>
            <div className="text-xs text-gray-600">منصات، تطبيقات، مواقع</div>
          </div>
          <div className="rounded-2xl border-2 border-dashed border-white/70 bg-white/50 backdrop-blur p-3 text-center font-bold text-sm text-gray-900">باقات متنوعة</div>
        </div>

        <div className="mt-6 flex justify-center">
          <span className="text-xs font-extrabold px-6 py-2 rounded-full bg-gray-900 text-white shadow">المزيد</span>
        </div>

        <div className="mt-auto grid grid-cols-4 gap-2 text-center pb-1">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-white/70 text-emerald-700 border border-white flex items-center justify-center"><ShieldCheck size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-white/70 text-orange-700 border border-white flex items-center justify-center"><Activity size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-white/70 text-sky-700 border border-white flex items-center justify-center"><BadgeCheck size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 rounded-xl bg-white/70 text-rose-700 border border-white flex items-center justify-center"><Gem size={18} /></span>
            <span className="text-[11px] font-bold text-gray-800">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardL;