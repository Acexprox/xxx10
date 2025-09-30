import React from "react";
import { Fingerprint, Timer, Medal, CheckCircle2, ChevronLeft } from "lucide-react";

/*
  ServiceCardD – Emerald Velvet Edition (Card 4/21)
  Radical, ultra‑luxury direction distinct from A (onyx+gold), B (porcelain+foil), C (midnight sapphire).
  Palette: deep emerald velvet with brushed brass accents and Art‑Deco geometry.
  Static visual only. Dimensions locked 370x620. RTL preserved.
  Preserves: title, subtitle, info blocks, CTA, 4 feature icons with Arabic labels.
*/

const ServiceCardD = () => {
  return (
    <div
      data-testid="service-card-d"
      className="relative w-[370px] min-w-[370px] max-w-[370px] h-[620px] min-h-[620px] max-h-[620px] rounded-[24px] overflow-hidden"
      dir="rtl"
      style={{
        background:
          "radial-gradient(1200px 420px at -10% -10%, rgba(16,185,129,0.10) 0%, rgba(6,78,59,0.10) 35%, transparent 70%), linear-gradient(135deg, #06231B 0%, #093328 55%, #072A21 100%)",
        boxShadow:
          "0 18px 48px rgba(3,20,16,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {/* Brass perimeter frame */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[24px]"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 0 2px rgba(214,182,97,0.12), 0 12px 36px rgba(0,0,0,0.55)",
        }}
      />

      {/* Deco corner plates */}
      <div aria-hidden className="absolute inset-0">
        {[
          "top-0 left-0",
          "top-0 right-0",
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute ${pos} m-[12px] w-6 h-[6px] rounded-[2px]`}
            style={{
              background:
                "linear-gradient(180deg, rgba(214,182,97,0.95), rgba(232,163,23,0.65))",
              boxShadow:
                "0 6px 14px rgba(214,182,97,0.28), inset 0 1px 0 rgba(255,255,255,0.7)",
            }}
          />
        ))}
      </div>

      {/* Header: subtitle pill + micro tag + title */}
      <div className="relative z-10 px-6 pt-6">
        <div className="flex items-center justify-between">
          <span
            data-testid="service-card-d-subtitle"
            className="inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#072A21",
              background:
                "linear-gradient(180deg, #FDF7E6 0%, #F1E2B3 100%)",
              boxShadow:
                "0 2px 6px rgba(7,42,33,0.25), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            مسبقة الدفع
          </span>
          <span className="text-[11px] font-semibold" style={{ color: "#C8B272" }}>CARD D</span>
        </div>

        <h3
          data-testid="service-card-d-title"
          className="mt-4 text-[26px] leading-tight font-black tracking-tight"
          style={{ color: "#F4F0E6", textShadow: "0 1px 0 rgba(255,255,255,0.05)" }}
        >
          بطائق الكترونية
        </h3>
      </div>

      {/* Body: left deco panel + right info rail */}
      <div className="relative z-10 grid grid-cols-[1.05fr_1fr] gap-4 px-6 mt-5">
        {/* Left: Art‑Deco emerald panel */}
        <div className="relative rounded-[18px]" aria-hidden>
          <div
            className="absolute inset-0 rounded-[18px]"
            style={{
              background:
                "repeating-linear-gradient(135deg, rgba(16,185,129,0.10) 0 10px, rgba(6,78,59,0.08) 10px 20px)",
              border: "1px solid rgba(214,182,97,0.18)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.06), 0 12px 28px rgba(3,20,16,0.45)",
            }}
          />
          {/* Brass chevrons */}
          <div className="relative h-[210px] flex items-end justify-end p-4">
            <div className="flex gap-2">
              {[0,1,2].map((i) => (
                <span
                  key={i}
                  className="w-10 h-[3px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(232,163,23,0.85), rgba(214,182,97,0.65))",
                    boxShadow: "0 4px 10px rgba(214,182,97,0.28)",
                    opacity: 1 - i * 0.25,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: info rail */}
        <div data-testid="service-card-d-info" className="flex flex-col gap-3">
          <div
            className="rounded-xl p-3"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
              border: "1px solid rgba(214,182,97,0.20)",
              boxShadow: "0 8px 22px rgba(3,20,16,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#F1E9D1" }}>فئات متعددة:</div>
            <div className="text-[12px]" style={{ color: "#D7C99B" }}>مالية، العاب، تسوق</div>
          </div>
          <div
            className="rounded-xl p-3"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
              border: "1px solid rgba(214,182,97,0.20)",
              boxShadow: "0 8px 22px rgba(3,20,16,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#F1E9D1" }}>توافق عالمي:</div>
            <div className="text-[12px]" style={{ color: "#D7C99B" }}>منصات، تطبيقات، مواقع</div>
          </div>
          <div
            className="rounded-xl p-3 text-center"
            style={{
              background: "linear-gradient(180deg, rgba(214,182,97,0.18), rgba(16,185,129,0.10))",
              border: "1px dashed rgba(214,182,97,0.55)",
              boxShadow: "0 10px 24px rgba(12,74,61,0.28)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#F1E9D1" }}>باقات متنوعة</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 mt-5" aria-hidden>
        <div
          className="h-[2px] w-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(214,182,97,0.45), rgba(16,185,129,0.55), rgba(214,182,97,0.45), transparent)",
          }}
        />
      </div>

      {/* CTA */}
      <div className="px-6 pt-3 flex items-center justify-center">
        <button
          type="button"
          data-testid="service-card-d-cta-button"
          className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-[12px] font-extrabold"
          style={{
            color: "#072A21",
            background: "linear-gradient(180deg, #FDF7E6 0%, #F1E2B3 100%)",
            boxShadow: "0 12px 28px rgba(214,182,97,0.28), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          المزيد
          <ChevronLeft size={14} className="opacity-70" />
        </button>
      </div>

      {/* Features */}
      <div data-testid="service-card-d-features" className="px-6 pt-4 pb-2">
        <div className="grid grid-cols-4 gap-2 text-center">
          {/* Security */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]"
              style={{
                color: "#E8D79D",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                border: "1px solid rgba(214,182,97,0.45)",
                boxShadow: "0 8px 18px rgba(3,20,16,0.45), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
              data-testid="service-card-d-feature-security"
            >
              <Fingerprint size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#F1E9D1" }}>أمان</span>
          </div>

          {/* Speed */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]"
              style={{
                color: "#B7E4C7",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                border: "1px solid rgba(16,185,129,0.45)",
                boxShadow: "0 8px 18px rgba(3,20,16,0.45), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
              data-testid="service-card-d-feature-speed"
            >
              <Timer size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#F1E9D1" }}>سرعة</span>
          </div>

          {/* Trust */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]"
              style={{
                color: "#98F5E1",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                border: "1px solid rgba(45,212,191,0.45)",
                boxShadow: "0 8px 18px rgba(3,20,16,0.45), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
              data-testid="service-card-d-feature-trust"
            >
              <Medal size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#F1E9D1" }}>ثقة</span>
          </div>

          {/* Quality */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[12px]"
              style={{
                color: "#F1E2B3",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                border: "1px solid rgba(214,182,97,0.45)",
                boxShadow: "0 8px 18px rgba(3,20,16,0.45), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
              data-testid="service-card-d-feature-quality"
            >
              <CheckCircle2 size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#F1E9D1" }}>جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardD;