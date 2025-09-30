import React from "react";
import { ShieldCheck, Gauge, Handshake, Gem, ChevronLeft } from "lucide-react";

/*
  ServiceCardG – Noir Lacquer + Crimson Inlays (Card 7/21)
  Radically different from previous cards: piano-black lacquer base with deep crimson inlays,
  metallic micro-accents, asymmetric split composition.
  Static visuals only. Dimensions locked (370x620). RTL preserved.
  Required components preserved: title, subtitle, 3 info blocks, CTA, 4 feature icons + Arabic labels.
*/

const ServiceCardG = () => {
  return (
    <div
      data-testid="service-card-g"
      className="relative w-[370px] min-w-[370px] max-w-[370px] h-[620px] min-h-[620px] max-h-[620px] rounded-[24px] overflow-hidden"
      dir="rtl"
      style={{
        background:
          "radial-gradient(1200px 420px at 120% -20%, rgba(185,28,28,0.12) 0%, rgba(23,23,23,0.10) 36%, transparent 70%), linear-gradient(135deg, #070707 0%, #0C0C0C 55%, #090909 100%)",
        boxShadow: "0 22px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.03)",
      }}
    >
      {/* Piano lacquer perimeter */}
      <div aria-hidden className="absolute inset-0 rounded-[24px]" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }} />

      {/* Crimson inlay panel (left) */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-0 w-[118px]"
        style={{
          background:
            "linear-gradient(180deg, #991B1B 0%, #7F1D1D 45%, #7C0A0A 100%)",
          boxShadow: "inset -1px 0 0 rgba(255,255,255,0.06), 8px 0 40px rgba(153,27,27,0.25)",
        }}
      />

      {/* Fine metallic ribs */}
      <div aria-hidden className="absolute top-0 bottom-0 left-[118px] w-[2px]" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))" }} />
      <div aria-hidden className="absolute top-0 bottom-0 left-[124px] w-[1px]" style={{ background: "rgba(255,255,255,0.06)" }} />

      {/* Header */}
      <div className="relative z-10 px-6 pt-6 pl-[138px]">
        <div className="flex items-center justify-between">
          <span
            data-testid="service-card-g-subtitle"
            className="inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#0A0A0A",
              background: "linear-gradient(180deg, #FEE2E2 0%, #FCA5A5 100%)",
              boxShadow: "0 2px 6px rgba(153,27,27,0.28), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            مسبقة الدفع
          </span>
          <span className="text-[11px] font-semibold" style={{ color: "#D1D5DB" }}>CARD G</span>
        </div>
        <h3
          data-testid="service-card-g-title"
          className="mt-4 text-[26px] leading-tight font-black tracking-tight"
          style={{ color: "#FAFAFA", textShadow: "0 1px 0 rgba(255,255,255,0.04)" }}
        >
          بطائق الكترونية
        </h3>
      </div>

      {/* Feature totems stacked in crimson panel */}
      <div data-testid="service-card-g-features" className="absolute bottom-6 left-0 w-[118px] px-3">
        <div className="grid grid-cols-1 gap-3 text-center">
          {/* Security */}
          <div className="flex flex-col items-center gap-[6px]">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px]"
              style={{
                color: "#FEE2E2",
                background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 18px rgba(153,27,27,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
              data-testid="service-card-g-feature-security"
            >
              <ShieldCheck size={18} />
            </span>
            <span className="text-[10px] font-extrabold" style={{ color: "#FEE2E2" }}>أمان</span>
          </div>
          {/* Speed */}
          <div className="flex flex-col items-center gap-[6px]">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px]"
              style={{
                color: "#FCA5A5",
                background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 18px rgba(153,27,27,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
              data-testid="service-card-g-feature-speed"
            >
              <Gauge size={18} />
            </span>
            <span className="text-[10px] font-extrabold" style={{ color: "#FEE2E2" }}>سرعة</span>
          </div>
          {/* Trust */}
          <div className="flex flex-col items-center gap-[6px]">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px]"
              style={{
                color: "#FCA5A5",
                background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 18px rgba(153,27,27,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
              data-testid="service-card-g-feature-trust"
            >
              <Handshake size={18} />
            </span>
            <span className="text-[10px] font-extrabold" style={{ color: "#FEE2E2" }}>ثقة</span>
          </div>
          {/* Quality */}
          <div className="flex flex-col items-center gap-[6px]">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[10px]"
              style={{
                color: "#FEE2E2",
                background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 18px rgba(153,27,27,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
              data-testid="service-card-g-feature-quality"
            >
              <Gem size={18} />
            </span>
            <span className="text-[10px] font-extrabold" style={{ color: "#FEE2E2" }}>جودة</span>
          </div>
        </div>
      </div>

      {/* Info rail (right of crimson panel) */}
      <div className="relative z-10 px-6 mt-5 pl-[138px] flex flex-col gap-3" data-testid="service-card-g-info">
        <div className="rounded-xl p-3" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 22px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#F3F4F6" }}>فئات متعددة:</div>
          <div className="text-[12px]" style={{ color: "#D1D5DB" }}>مالية، العاب، تسوق</div>
        </div>
        <div className="rounded-xl p-3" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 8px 22px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#F3F4F6" }}>توافق عالمي:</div>
          <div className="text-[12px]" style={{ color: "#D1D5DB" }}>منصات، تطبيقات، مواقع</div>
        </div>
        <div className="rounded-xl p-3 text-center" style={{ background: "linear-gradient(180deg, rgba(153,27,27,0.18), rgba(239,68,68,0.12))", border: "1px dashed rgba(248,113,113,0.55)", boxShadow: "0 10px 24px rgba(153,27,27,0.25)" }}>
          <div className="text-[13px] font-extrabold" style={{ color: "#FEE2E2" }}>باقات متنوعة</div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 mt-5 pl-[138px]" aria-hidden>
        <div className="h-[2px] w-full rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(252,165,165,0.55), rgba(255,255,255,0.12), rgba(252,165,165,0.55), transparent)" }} />
      </div>

      {/* CTA */}
      <div className="px-6 pt-3 pl-[138px] flex items-center justify-center">
        <button
          type="button"
          data-testid="service-card-g-cta-button"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-2 text-[12px] font-extrabold"
          style={{
            color: "#0A0A0A",
            background: "linear-gradient(180deg, #FEE2E2 0%, #FCA5A5 100%)",
            boxShadow: "0 12px 28px rgba(153,27,27,0.28), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          المزيد
          <ChevronLeft size={14} className="opacity-70 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCardG;