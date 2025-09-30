import React from "react";
import { Shield, Zap, ThumbsUp, Award } from "lucide-react";

// Brutalist: thick borders, strong blocks, utilitarian aesthetic
const ServiceCardM = () => {
  return (
    <div data-testid="service-card-m" className="relative w-[370px] min-w-[370px] h-[620px] bg-white rounded-xl border-2 border-gray-900 shadow-[6px_6px_0_#111]">
      <div className="p-6">
        {/* Header */}
        <div className="text-right border-b-2 border-gray-900 pb-3">
          <h3 className="text-2xl font-black">بطائق الكترونية</h3>
          <p className="text-xs font-extrabold text-gray-600 mt-1">مسبقة الدفع</p>
        </div>

        {/* Info Blocks */}
        <div className="mt-4 space-y-3">
          <div className="border-2 border-gray-900 rounded-lg p-3">
            <div className="text-sm font-black">فئات متعددة:</div>
            <div className="text-xs text-gray-700">مالية، العاب، تسوق</div>
          </div>
          <div className="border-2 border-gray-900 rounded-lg p-3">
            <div className="text-sm font-black">توافق عالمي:</div>
            <div className="text-xs text-gray-700">منصات، تطبيقات، مواقع</div>
          </div>
          <div className="border-2 border-dashed border-gray-900 rounded-lg p-3 text-center text-sm font-black">باقات متنوعة</div>
        </div>

        {/* CTA */}
        <div className="mt-5 flex justify-center">
          <span className="inline-flex items-center px-6 py-2 rounded text-xs font-black bg-gray-900 text-white border-2 border-gray-900">المزيد</span>
        </div>

        {/* Feature Row */}
        <div className="mt-6 grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 border-2 border-gray-900 rounded bg-gray-100 flex items-center justify-center"><Shield size={18} /></span>
            <span className="text-[11px] font-black">أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 border-2 border-gray-900 rounded bg-gray-100 flex items-center justify-center"><Zap size={18} /></span>
            <span className="text-[11px] font-black">سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 border-2 border-gray-900 rounded bg-gray-100 flex items-center justify-center"><ThumbsUp size={18} /></span>
            <span className="text-[11px] font-black">ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="w-10 h-10 border-2 border-gray-900 rounded bg-gray-100 flex items-center justify-center"><Award size={18} /></span>
            <span className="text-[11px] font-black">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardM;