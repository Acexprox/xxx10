import React from "react";
import { Shield, Rocket, Check, Star, ChevronLeft } from "lucide-react";

/*
  ServiceCardJ – Royal Amethyst + Opal Edge (Card 10/21)
  Deep royal purple velvet with opalescent edge and lilac CTA; grand, opulent.
  Static visuals only. Dimensions 370x620. RTL preserved.
  Preserves core components (title, subtitle, info, CTA, 4 features).
*/

const ServiceCardJ = () => {
  return (
    <div
      data-testid="service-card-j"
      className="relative w-[370px] min-w-[370px] max-w-[370px] h-[620px] min-h-[620px] max-h-[620px] rounded-[26px] overflow-hidden"
      dir="rtl"
      style={{
        background:
          "radial-gradient(1000px 360px at -10% -10%, rgba(192,132,252,0.14) 0%, rgba(217,180,255,0.10) 28%, transparent 65%), linear-gradient(135deg, #1A0B2E 0%, #2B0F4F 55%, #210C3F 100%)",
        boxShadow: "0 22px 64px rgba(49,7,107,0.45), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      {/* Opal edge */}
      <div aria-hidden className="absolute inset-0 rounded-[26px]" style={{ boxShadow: "inset 0 0 0 1px rgba(233,213,255,0.18), inset 0 0 0 2px rgba(255,255,255,0.06)" }} />

      {/* Header */}
      <div className="relative z-10 px-6 pt-6">
        <div className="flex items-center justify-between">
          <span
            data-testid="service-card-j-subtitle"
            className="inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#210C3F",
              background: "linear-gradient(180deg, #F5E1FF 0%, #E9D5FF 100%)",
              boxShadow: "0 2px 6px rgba(76,29,149,0.28), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            مسبقة الدفع
          </span>
          <span className="text-[11px] font-semibold" style={{ color: "#E9D5FF" }}>CARD J</span>
        </div>
        <h3
          data-testid="service-card-j-title"
          className="mt-4 text-[26px] leading-tight font-black tracking-tight"
          style={{ color: "#F3E8FF", textShadow: "0 1px 0 rgba(255,255,255,0.04)" }}
        >
          بطائق الكترونية
        </h3>
      </div>

      {/* Info rail */}
      <div className="relative z-10 px-6 mt-5 flex flex-col gap-3" data-testid="service-card-j-info">
        <div className="rounded-xl p-3" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))", border: "1px solid rgba(233,213,255,0.28)", boxShadow: "0 8px 22px rgba(76,29,149,0.45), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#F3E8FF" }}>فئات متعددة:</div>
          <div className="text-[12px]" style={{ color: "#E9D5FF" }}>مالية، العاب، تسوق</div>
        </div>
        <div className="rounded-xl p-3" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))", border: "1px solid rgba(233,213,255,0.28)", boxShadow: "0 8px 22px rgba(76,29,149,0.45), inset 0 1px 0 rgba(255,255,255,0.06)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#F3E8FF" }}>توافق عالمي:</div>
          <div className="text-[12px]" style={{ color: "#E9D5FF" }}>منصات، تطبيقات، مواقع</div>
        </div>
        <div className="rounded-xl p-3 text-center" style={{ background: "linear-gradient(180deg, rgba(233,213,255,0.20), rgba(192,132,252,0.12))", border: "1px dashed rgba(233,213,255,0.55)", boxShadow: "0 10px 24px rgba(76,29,149,0.35)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#F3E8FF" }}>باقات متنوعة</div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 mt-5" aria-hidden>
        <div className="h-[2px] w-full rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(233,213,255,0.55), rgba(192,132,252,0.45), rgba(233,213,255,0.55), transparent)" }} />
      </div>

      {/* CTA */}
      <div className="px-6 pt-3 flex items-center justify-center">
        <button
          type="button"
          data-testid="service-card-j-cta-button"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-2 text-[12px] font-extrabold"
          style={{
            color: "#210C3F",
            background: "linear-gradient(180deg, #F5E1FF 0%, #E9D5FF 100%)",
            boxShadow: "0 12px 28px rgba(76,29,149,0.28), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          المزيد
          <ChevronLeft size={14} className="opacity-70 group-hover:opacity-100" />
        </button>
      </div>

      {/* Features */}
      <div data-testid="service-card-j-features" className="px-6 pt-4 pb-2">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]" style={{ color: "#A78BFA", background: "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))", border: "1px solid rgba(233,213,255,0.55)", boxShadow: "0 8px 18px rgba(76,29,149,0.35), inset 0 1px 0 rgba(255,255,255,0.10)" }}>
              <Shield size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#F3E8FF" }}>أمان</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]" style={{ color: "#C084FC", background: "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))", border: "1px solid rgba(233,213,255,0.55)", boxShadow: "0 8px 18px rgba(76,29,149,0.35), inset 0 1px 0 rgba(255,255,255,0.10)" }}>
              <Rocket size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#F3E8FF" }}>سرعة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]" style={{ color: "#E9D5FF", background: "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))", border: "1px solid rgba(233,213,255,0.55)", boxShadow: "0 8px 18px rgba(76,29,149,0.35), inset 0 1px 0 rgba(255,255,255,0.10)" }}>
              <Check size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#F3E8FF" }}>ثقة</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]" style={{ color: "#F0ABFC", background: "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))", border: "1px solid rgba(233,213,255,0.55)", boxShadow: "0 8px 18px rgba(76,29,149,0.35), inset 0 1px 0 rgba(255,255,255,0.10)" }}>
              <Star size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#F3E8FF" }}>جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardJ;