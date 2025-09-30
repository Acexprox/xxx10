import React from "react";
import { Lock, Flashlight, BadgeCheck, Award, ChevronLeft } from "lucide-react";

/*
  ServiceCardH – Arctic Frost + Silver Aurora (Card 8/21)
  Ultra-clean, glacial minimalism with aurora sweep; radically different from prior cards.
  Static visuals only. Dimensions fixed 370x620. RTL preserved.
  Preserves: title, subtitle, 3 info blocks, CTA, 4 feature icons + Arabic labels.
*/

const ServiceCardH = () => {
  return (
    <div
      data-testid="service-card-h"
      className="relative w-[370px] min-w-[370px] max-w-[370px] h-[620px] min-h-[620px] max-h-[620px] rounded-[26px] overflow-hidden"
      dir="rtl"
      style={{
        background:
          "radial-gradient(1000px 360px at -10% -10%, rgba(125,211,252,0.18) 0%, rgba(240,249,255,0.18) 28%, transparent 65%), linear-gradient(135deg, #FFFFFF 0%, #F7FAFF 55%, #F1F5FB 100%)",
        boxShadow: "0 18px 48px rgba(2,6,23,0.08), inset 0 1px 0 rgba(255,255,255,0.95)",
      }}
    >
      {/* Aurora sweep rail (left) */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-5 w-[9px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, #A7F3D0 0%, #5EEAD4 35%, #22D3EE 70%, #93C5FD 100%)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.95), 0 12px 28px rgba(14,165,233,0.20)",
        }}
      />

      {/* Frosted perimeter */}
      <div aria-hidden className="absolute inset-0 rounded-[26px]" style={{ boxShadow: "inset 0 0 0 1px rgba(203,213,225,0.65)" }} />

      {/* Header */}
      <div className="relative z-10 px-6 pt-6">
        <div className="flex items-center justify-between">
          <span
            data-testid="service-card-h-subtitle"
            className="inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#0F172A",
              background: "linear-gradient(180deg, #ECFEFF 0%, #E6F1FF 100%)",
              boxShadow: "0 2px 6px rgba(2,6,23,0.10), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            مسبقة الدفع
          </span>
          <span className="text-[11px] font-semibold" style={{ color: "#94A3B8" }}>CARD H</span>
        </div>
        <h3
          data-testid="service-card-h-title"
          className="mt-4 text-[26px] leading-tight font-black tracking-tight"
          style={{ color: "#0F172A", textShadow: "0 1px 0 rgba(255,255,255,0.65)" }}
        >
          بطائق الكترونية
        </h3>
      </div>

      {/* Info rail (crystal blocks) */}
      <div className="relative z-10 px-6 mt-5 flex flex-col gap-3" data-testid="service-card-h-info">
        <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(203,213,225,0.85)", boxShadow: "0 8px 20px rgba(2,6,23,0.06), inset 0 1px 0 rgba(255,255,255,0.95)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#0F172A" }}>فئات متعددة:</div>
          <div className="text-[12px]" style={{ color: "#475569" }}>مالية، العاب، تسوق</div>
        </div>
        <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(203,213,225,0.85)", boxShadow: "0 8px 20px rgba(2,6,23,0.06), inset 0 1px 0 rgba(255,255,255,0.95)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#0F172A" }}>توافق عالمي:</div>
          <div className="text-[12px]" style={{ color: "#475569" }}>منصات، تطبيقات، مواقع</div>
        </div>
        <div className="rounded-xl p-3 text-center" style={{ background: "linear-gradient(180deg, rgba(186,230,253,0.55), rgba(186,230,253,0.35))", border: "1px dashed rgba(148,163,184,0.95)", boxShadow: "0 10px 24px rgba(59,130,246,0.12)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#0F172A" }}>باقات متنوعة</div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 mt-5" aria-hidden>
        <div className="h-[2px] w-full rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(186,230,253,0.95), rgba(203,213,225,0.85), rgba(186,230,253,0.95), transparent)" }} />
      </div>

      {/* CTA */}
      <div className="px-6 pt-3 flex items-center justify-center">
        <button
          type="button"
          data-testid="service-card-h-cta-button"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-2 text-[12px] font-extrabold"
          style={{
            color: "#0F172A",
            background: "linear-gradient(180deg, #ECFEFF 0%, #E6F1FF 100%)",
            boxShadow: "0 12px 28px rgba(2,6,23,0.10), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          المزيد
          <ChevronLeft size={14} className="opacity-70 group-hover:opacity-100" />
        </button>
      </div>

      {/* Features (frost rings) */}
      <div data-testid="service-card-h-features" className="px-6 pt-4 pb-2">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{ color: "#06B6D4", background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))", border: "1px solid rgba(203,213,225,0.95)", boxShadow: "inset 0 0 0 3px rgba(236,245,255,0.75), 0 8px 18px rgba(2,6,23,0.08)" }}>
              <Lock size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#0F172A" }}>أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{ color: "#3B82F6", background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))", border: "1px solid rgba(203,213,225,0.95)", boxShadow: "inset 0 0 0 3px rgba(236,245,255,0.75), 0 8px 18px rgba(2,6,23,0.08)" }}>
              <Flashlight size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#0F172A" }}>سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{ color: "#14B8A6", background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))", border: "1px solid rgba(203,213,225,0.95)", boxShadow: "inset 0 0 0 3px rgba(236,245,255,0.75), 0 8px 18px rgba(2,6,23,0.08)" }}>
              <BadgeCheck size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#0F172A" }}>ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full" style={{ color: "#8B5CF6", background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))", border: "1px solid rgba(203,213,225,0.95)", boxShadow: "inset 0 0 0 3px rgba(236,245,255,0.75), 0 8px 18px rgba(2,6,23,0.08)" }}>
              <Award size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#0F172A" }}>جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardH;