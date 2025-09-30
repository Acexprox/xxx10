import React from "react";
import { ShieldAlert, Zap, BadgeCheck, Crown, ChevronLeft } from "lucide-react";

/*
  ServiceCardI – Desert Sand + Burnished Bronze (Card 9/21)
  Warm, sandy gradients with bronze ribs and a copper CTA; radically unique layout.
  Static visuals only. Dimensions fixed 370x620. RTL preserved.
  Preserves core components.
*/

const ServiceCardI = () => {
  return (
    <div
      data-testid="service-card-i"
      className="relative w-[370px] min-w-[370px] max-w-[370px] h-[620px] min-h-[620px] max-h-[620px] rounded-[26px] overflow-hidden"
      dir="rtl"
      style={{
        background:
          "radial-gradient(1000px 360px at 120% -10%, rgba(245,158,11,0.12) 0%, rgba(253,230,138,0.10) 28%, transparent 65%), linear-gradient(135deg, #FFF8ED 0%, #FCEFDA 55%, #F6E5CB 100%)",
        boxShadow: "0 18px 48px rgba(124,45,18,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",
      }}
    >
      {/* Bronze vertical ribs */}
      <div aria-hidden className="absolute top-0 bottom-0 left-8 w-[2px]" style={{ background: "linear-gradient(180deg, #D6A756, #B5812E)" }} />
      <div aria-hidden className="absolute top-0 bottom-0 left-14 w-[1px]" style={{ background: "linear-gradient(180deg, rgba(181,129,46,0.65), rgba(214,167,86,0.35))" }} />

      {/* Perimeter */}
      <div aria-hidden className="absolute inset-0 rounded-[26px]" style={{ boxShadow: "inset 0 0 0 1px rgba(181,129,46,0.28)" }} />

      {/* Header */}
      <div className="relative z-10 px-6 pt-6">
        <div className="flex items-center justify-between">
          <span
            data-testid="service-card-i-subtitle"
            className="inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#3F2D17",
              background: "linear-gradient(180deg, #FFE9C2 0%, #F8DDA6 100%)",
              boxShadow: "0 2px 6px rgba(120,53,15,0.18), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            مسبقة الدفع
          </span>
          <span className="text-[11px] font-semibold" style={{ color: "#A5742A" }}>CARD I</span>
        </div>
        <h3
          data-testid="service-card-i-title"
          className="mt-4 text-[26px] leading-tight font-black tracking-tight"
          style={{ color: "#3F2D17", textShadow: "0 1px 0 rgba(255,255,255,0.65)" }}
        >
          بطائق الكترونية
        </h3>
      </div>

      {/* Info rail */}
      <div className="relative z-10 px-6 mt-5 flex flex-col gap-3" data-testid="service-card-i-info">
        <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(214,167,86,0.45)", boxShadow: "0 8px 20px rgba(120,53,15,0.10), inset 0 1px 0 rgba(255,255,255,0.95)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#3F2D17" }}>فئات متعددة:</div>
          <div className="text-[12px]" style={{ color: "#6B4E2E" }}>مالية، العاب، تسوق</div>
        </div>
        <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(214,167,86,0.45)", boxShadow: "0 8px 20px rgba(120,53,15,0.10), inset 0 1px 0 rgba(255,255,255,0.95)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#3F2D17" }}>توافق عالمي:</div>
          <div className="text-[12px]" style={{ color: "#6B4E2E" }}>منصات، تطبيقات، مواقع</div>
        </div>
        <div className="rounded-xl p-3 text-center" style={{ background: "linear-gradient(180deg, rgba(214,167,86,0.18), rgba(245,158,11,0.12))", border: "1px dashed rgba(214,167,86,0.55)", boxShadow: "0 10px 24px rgba(180,83,9,0.18)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#3F2D17" }}>باقات متنوعة</div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 mt-5" aria-hidden>
        <div className="h-[2px] w-full rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(214,167,86,0.55), rgba(245,158,11,0.45), rgba(214,167,86,0.55), transparent)" }} />
      </div>

      {/* CTA */}
      <div className="px-6 pt-3 flex items-center justify-center">
        <button
          type="button"
          data-testid="service-card-i-cta-button"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-2 text-[12px] font-extrabold"
          style={{
            color: "#3F2D17",
            background: "linear-gradient(180deg, #FFE9C2 0%, #F8DDA6 100%)",
            boxShadow: "0 12px 28px rgba(180,83,9,0.22), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          المزيد
          <ChevronLeft size={14} className="opacity-70 group-hover:opacity-100" />
        </button>
      </div>

      {/* Features on bronze rail */}
      <div data-testid="service-card-i-features" className="px-6 pt-4 pb-2">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]" style={{ color: "#B5812E", background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))", border: "1px solid rgba(214,167,86,0.65)", boxShadow: "0 8px 18px rgba(180,83,9,0.15), inset 0 1px 0 rgba(255,255,255,0.95)" }}>
              <ShieldAlert size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#3F2D17" }}>أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]" style={{ color: "#B45309", background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))", border: "1px solid rgba(214,167,86,0.65)", boxShadow: "0 8px 18px rgba(180,83,9,0.15), inset 0 1px 0 rgba(255,255,255,0.95)" }}>
              <Zap size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#3F2D17" }}>سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]" style={{ color: "#CA8A04", background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))", border: "1px solid rgba(214,167,86,0.65)", boxShadow: "0 8px 18px rgba(180,83,9,0.15), inset 0 1px 0 rgba(255,255,255,0.95)" }}>
              <BadgeCheck size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#3F2D17" }}>ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]" style={{ color: "#A16207", background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))", border: "1px solid rgba(214,167,86,0.65)", boxShadow: "0 8px 18px rgba(180,83,9,0.15), inset 0 1px 0 rgba(255,255,255,0.95)" }}>
              <Crown size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#3F2D17" }}>جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardI;