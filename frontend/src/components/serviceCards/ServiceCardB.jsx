import React from "react";
import { Lock, Zap, ThumbsUp, Award, ChevronLeft } from "lucide-react";

/*
  ServiceCardB – Premium Porcelain Edition (Card 2/21)
  Distinct from Card A (dark/onyx + gold). Here: luminous porcelain/ivory with embossed foils.
  Preserves required elements:
  - Title: بطائق الكترونية
  - Subtitle: مسبقة الدفع
  - Info blocks: فئات متعددة / توافق عالمي / باقات متنوعة
  - CTA: المزيد
  - 4 features with Arabic labels: أمان / سرعة / ثقة / جودة
  Size locked to 370x620 to match grid.
*/

const ServiceCardB = () => {
  return (
    <div
      data-testid="service-card-b"
      className="relative w-[370px] min-w-[370px] h-[620px] rounded-[22px] overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 420px at -20% -10%, rgba(232,163,23,0.08) 0%, rgba(232,163,23,0.03) 30%, transparent 70%), linear-gradient(180deg, #FFFCF6 0%, #F8F3EA 60%, #F4EEE4 100%)",
        boxShadow:
          "0 14px 44px rgba(157,132,84,0.15), 0 2px 0 rgba(255,255,255,0.9) inset, 0 -2px 0 rgba(0,0,0,0.04) inset",
      }}
      dir="rtl"
    >
      {/* Embossed frame */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[22px]"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(170,140,80,0.10), inset 0 0 0 2px rgba(255,255,255,0.75), 0 18px 40px rgba(0,0,0,0.06)",
        }}
      />

      {/* Vertical foil spine */}
      <div
        aria-hidden
        className="absolute top-4 bottom-4 right-5 w-[6px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(247,229,183,0.9), rgba(212,175,55,0.75))",
          boxShadow: "0 10px 20px rgba(212,175,55,0.25), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      />

      {/* Top cap with subtitle pill and micro-tag */}
      <div className="px-6 pt-6">
        <div className="flex items-center justify-between">
          <span
            data-testid="service-card-b-subtitle"
            className="inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#5B4B1F",
              background:
                "linear-gradient(180deg, #FFF5DE 0%, #F7E5B7 100%)",
              boxShadow:
                "0 2px 4px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
            }}
          >
            مسبقة الدفع
          </span>
          <span className="text-[11px] text-amber-700/70 font-semibold">CARD B</span>
        </div>

        <h3
          data-testid="service-card-b-title"
          className="mt-4 text-[26px] leading-tight font-black tracking-tight"
          style={{ color: "#1F2937", textShadow: "0 1px 0 rgba(255,255,255,0.65)" }}
        >
          بطائق الكترونية
        </h3>
      </div>

      {/* Middle panel: glass info rail and decorative arch */}
      <div className="relative px-6 mt-4 grid grid-cols-1 gap-4">
        {/* Soft arch panel */}
        <div
          aria-hidden
          className="rounded-[18px] h-[130px]"
          style={{
            background:
              "radial-gradient(240px 140px at 20% 0%, rgba(232,163,23,0.25), rgba(232,163,23,0.05) 60%, transparent 70%), linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.35))",
            boxShadow:
              "0 10px 28px rgba(157,132,84,0.16), inset 0 1px 0 rgba(255,255,255,0.85)",
            border: "1px solid rgba(232,163,23,0.18)",
          }}
        />

        {/* Info blocks rail */}
        <div data-testid="service-card-b-info" className="grid grid-cols-1 gap-3">
          <div
            className="rounded-xl p-3"
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 6px 14px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)",
              border: "1px solid rgba(170,140,80,0.18)",
            }}
          >
            <div className="text-[13px] font-extrabold text-gray-800">فئات متعددة:</div>
            <div className="text-[12px] text-gray-600">مالية، العاب، تسوق</div>
          </div>
          <div
            className="rounded-xl p-3"
            style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 6px 14px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.85)",
              border: "1px solid rgba(170,140,80,0.18)"
            }}
          >
            <div className="text-[13px] font-extrabold text-gray-800">توافق عالمي:</div>
            <div className="text-[12px] text-gray-600">منصات، تطبيقات، مواقع</div>
          </div>
          <div
            className="rounded-xl p-3 text-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(247,229,183,0.25), rgba(247,229,183,0.12))",
              border: "1px dashed rgba(232,163,23,0.55)",
              boxShadow: "0 8px 16px rgba(232,163,23,0.15)",
            }}
          >
            <div className="text-[13px] font-extrabold text-amber-800">باقات متنوعة</div>
          </div>
        </div>
      </div>

      {/* CTA centered at bottom */}
      <div className="px-6 mt-3">
        <div
          aria-hidden
          className="h-[2px] w-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(232,163,23,0.45), transparent)",
          }}
        />
      </div>

      <div className="px-6 pt-3 flex items-center justify-center">
        <button
          type="button"
          data-testid="service-card-b-cta-button"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-2 text-[12px] font-extrabold"
          style={{
            color: "#3A2F12",
            background: "linear-gradient(180deg, #FFF3CC 0%, #F7E0A1 100%)",
            boxShadow:
              "0 10px 24px rgba(232,163,23,0.25), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          المزيد
          <ChevronLeft size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Feature dock */}
      <div
        data-testid="service-card-b-features"
        className="absolute left-0 right-0 bottom-3 px-6"
      >
        <div className="grid grid-cols-4 gap-3 text-center">
          {/* Security */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] rotate-45"
              style={{
                color: "#6B5A24",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.55))",
                boxShadow:
                  "0 10px 18px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                border: "1px solid rgba(170,140,80,0.25)",
              }}
              data-testid="service-card-b-feature-security"
            >
              <span className="-rotate-45"><Lock size={18} /></span>
            </span>
            <span className="text-[11px] font-extrabold text-gray-800">أمان</span>
          </div>

          {/* Speed */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] rotate-45"
              style={{
                color: "#A77412",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.55))",
                boxShadow:
                  "0 10px 18px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                border: "1px solid rgba(232,163,23,0.35)",
              }}
              data-testid="service-card-b-feature-speed"
            >
              <span className="-rotate-45"><Zap size={18} /></span>
            </span>
            <span className="text-[11px] font-extrabold text-gray-800">سرعة</span>
          </div>

          {/* Trust */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] rotate-45"
              style={{
                color: "#8E6D2A",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.55))",
                boxShadow:
                  "0 10px 18px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                border: "1px solid rgba(214,182,97,0.35)",
              }}
              data-testid="service-card-b-feature-trust"
            >
              <span className="-rotate-45"><ThumbsUp size={18} /></span>
            </span>
            <span className="text-[11px] font-extrabold text-gray-800">ثقة</span>
          </div>

          {/* Quality */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] rotate-45"
              style={{
                color: "#B4903A",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.55))",
                boxShadow:
                  "0 10px 18px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                border: "1px solid rgba(230,201,139,0.35)",
              }}
              data-testid="service-card-b-feature-quality"
            >
              <span className="-rotate-45"><Award size={18} /></span>
            </span>
            <span className="text-[11px] font-extrabold text-gray-800">جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardB;