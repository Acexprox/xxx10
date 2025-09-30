import React from "react";
import { Cpu, Wallet, ShieldAlert, Star, ChevronLeft } from "lucide-react";

/*
  ServiceCardE – Pearl Opaline + Platinum Filigree (Card 5/21)
  Distinct luxury direction vs A (onyx+gold), B (porcelain+foil), C (midnight sapphire), D (emerald velvet).
  Palette: pearl white, opaline frost, cool platinum accents, mother‑of‑pearl iridescence.
  Dimensions locked 370x620. Static visuals only. RTL preserved.
  Preserves: title, subtitle, info blocks, CTA, 4 feature icons + Arabic labels.
*/

const ServiceCardE = () => {
  return (
    <div
      data-testid="service-card-e"
      className="relative w-[370px] min-w-[370px] max-w-[370px] h-[620px] min-h-[620px] max-h-[620px] rounded-[26px] overflow-hidden"
      dir="rtl"
      style={{
        background:
          "radial-gradient(1200px 420px at 110% -20%, rgba(191,217,255,0.10) 0%, rgba(240,244,255,0.10) 30%, transparent 70%), linear-gradient(135deg, #FFFFFF 0%, #FBFBFE 55%, #F4F6FB 100%)",
        boxShadow:
          "0 18px 48px rgba(45,55,72,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",
      }}
    >
      {/* Platinum perimeter with opaline bevel */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[26px]"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(209,213,219,0.55), inset 0 0 0 2px rgba(255,255,255,0.85), 0 10px 34px rgba(0,0,0,0.06)",
        }}
      />

      {/* Iridescent vertical ribbon (left) */}
      <div
        aria-hidden
        className="absolute top-4 bottom-4 left-5 w-[7px] rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(230,241,255,1), rgba(210,222,242,1))",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,1), 0 12px 24px rgba(59,130,246,0.18)",
        }}
      />

      {/* Crest: subtitle pill + micro tag + headline */}
      <div className="relative z-10 px-6 pt-6">
        <div className="flex items-center justify-between">
          <span
            data-testid="service-card-e-subtitle"
            className="inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#1F2937",
              background:
                "linear-gradient(180deg, #F6FAFF 0%, #E6F1FF 100%)",
              boxShadow:
                "0 2px 6px rgba(31,41,55,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            مسبقة الدفع
          </span>
          <span className="text-[11px] font-semibold" style={{ color: "#9AA7BF" }}>CARD E</span>
        </div>

        <h3
          data-testid="service-card-e-title"
          className="mt-4 text-[26px] leading-tight font-black tracking-tight"
          style={{ color: "#0F172A", textShadow: "0 1px 0 rgba(255,255,255,0.65)" }}
        >
          بطائق الكترونية
        </h3>
      </div>

      {/* Body: center opaline panel + right info rail */}
      <div className="relative z-10 grid grid-cols-[1.05fr_1fr] gap-4 px-6 mt-5">
        {/* Center opaline panel (decorative only) */}
        <div className="relative rounded-[18px]" aria-hidden>
          <div
            className="absolute inset-0 rounded-[18px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.55)), conic-gradient(from 30deg, rgba(191,219,254,0.15), rgba(167,139,250,0.12), rgba(203,213,225,0.12), rgba(191,219,254,0.15))",
              border: "1px solid rgba(209,213,219,0.55)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.95), 0 12px 24px rgba(15,23,42,0.08)",
            }}
          />
          <div className="relative h-[210px]" />
        </div>

        {/* Info rail */}
        <div data-testid="service-card-e-info" className="flex flex-col gap-3">
          <div
            className="rounded-xl p-3"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(209,213,219,0.65)",
              boxShadow: "0 8px 20px rgba(2,6,23,0.05), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#111827" }}>فئات متعددة:</div>
            <div className="text-[12px]" style={{ color: "#4B5563" }}>مالية، العاب، تسوق</div>
          </div>
          <div
            className="rounded-xl p-3"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(209,213,219,0.65)",
              boxShadow: "0 8px 20px rgba(2,6,23,0.05), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#111827" }}>توافق عالمي:</div>
            <div className="text-[12px]" style={{ color: "#4B5563" }}>منصات، تطبيقات، مواقع</div>
          </div>
          <div
            className="rounded-xl p-3 text-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(230,241,255,0.60), rgba(230,241,255,0.35))",
              border: "1px dashed rgba(156,163,175,0.85)",
              boxShadow: "0 10px 24px rgba(59,130,246,0.10)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#1F2937" }}>باقات متنوعة</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 mt-5" aria-hidden>
        <div
          className="h-[2px] w-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(203,213,225,0.9), rgba(191,219,254,0.85), rgba(203,213,225,0.9), transparent)",
          }}
        />
      </div>

      {/* CTA */}
      <div className="px-6 pt-3 flex items-center justify-center">
        <button
          type="button"
          data-testid="service-card-e-cta-button"
          className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-[12px] font-extrabold"
          style={{
            color: "#0B1220",
            background: "linear-gradient(180deg, #F6FAFF 0%, #E6F1FF 100%)",
            boxShadow: "0 12px 28px rgba(2,6,23,0.10), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          المزيد
          <ChevronLeft size={14} className="opacity-70" />
        </button>
      </div>

      {/* Features (platinum rings) */}
      <div data-testid="service-card-e-features" className="px-6 pt-4 pb-2">
        <div className="grid grid-cols-4 gap-2 text-center">
          {/* Security */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                color: "#0EA5E9",
                background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))",
                border: "1px solid rgba(203,213,225,0.95)",
                boxShadow: "inset 0 0 0 3px rgba(236,245,255,0.75), 0 8px 18px rgba(2,6,23,0.08)",
              }}
              data-testid="service-card-e-feature-security"
            >
              <ShieldAlert size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#111827" }}>أمان</span>
          </div>

          {/* Speed */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                color: "#6366F1",
                background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))",
                border: "1px solid rgba(203,213,225,0.95)",
                boxShadow: "inset 0 0 0 3px rgba(236,245,255,0.75), 0 8px 18px rgba(2,6,23,0.08)",
              }}
              data-testid="service-card-e-feature-speed"
            >
              <Cpu size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#111827" }}>سرعة</span>
          </div>

          {/* Trust */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                color: "#14B8A6",
                background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))",
                border: "1px solid rgba(203,213,225,0.95)",
                boxShadow: "inset 0 0 0 3px rgba(236,245,255,0.75), 0 8px 18px rgba(2,6,23,0.08)",
              }}
              data-testid="service-card-e-feature-trust"
            >
              <Wallet size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#111827" }}>ثقة</span>
          </div>

          {/* Quality */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                color: "#F59E0B",
                background: "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.55))",
                border: "1px solid rgba(203,213,225,0.95)",
                boxShadow: "inset 0 0 0 3px rgba(236,245,255,0.75), 0 8px 18px rgba(2,6,23,0.08)",
              }}
              data-testid="service-card-e-feature-quality"
            >
              <Star size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#111827" }}>جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardE;