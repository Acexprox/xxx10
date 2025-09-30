import React from "react";
import { Shield, Activity, Gauge, Crown, ChevronLeft } from "lucide-react";

/*
  ServiceCardC – Midnight Sapphire Edition (Card 3/21)
  A radical, ultra-luxurious direction distinct from Card A (onyx+gold) and Card B (porcelain+foil).
  Palette: deep midnight sapphire with iridescent accents and beveled crystal edges.
  Preserves required components: title, subtitle, info blocks, CTA, and 4 feature icons with Arabic labels.
  Static visual only (no interactions), 370x620 locked for grid.
*/

const ServiceCardC = () => {
  return (
    <div
      data-testid="service-card-c"
      className="relative w-[370px] min-w-[370px] max-w-[370px] h-[620px] min-h-[620px] max-h-[620px] rounded-[24px] overflow-hidden"
      dir="rtl"
      style={{
        background:
          "radial-gradient(1200px 420px at 120% -20%, rgba(96,165,250,0.10) 0%, rgba(14,23,52,0.10) 36%, transparent 70%), linear-gradient(135deg, #061427 0%, #0B1F3A 58%, #091A31 100%)",
        boxShadow:
          "0 18px 48px rgba(5,12,23,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Iridescent perimeter frame */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[24px]"
        style={{
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.05), inset 0 0 0 2px rgba(99,102,241,0.10), 0 10px 34px rgba(2,8,23,0.55)",
        }}
      />

      {/* Top crest: subtitle pill, micro tag, headline */}
      <div className="relative z-10 px-6 pt-6">
        <div className="flex items-center justify-between">
          <span
            data-testid="service-card-c-subtitle"
            className="inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#061427",
              background:
                "linear-gradient(180deg, #E6F1FF 0%, #BFD9FF 100%)",
              boxShadow:
                "0 2px 6px rgba(6,20,39,0.25), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            مسبقة الدفع
          </span>
          <span className="text-[11px] font-semibold" style={{ color: "#9DB6DA" }}>CARD C</span>
        </div>

        <h3
          data-testid="service-card-c-title"
          className="mt-4 text-[26px] leading-tight font-black tracking-tight"
          style={{ color: "#E9F2FF", textShadow: "0 1px 0 rgba(255,255,255,0.04)" }}
        >
          بطائق الكترونية
        </h3>
      </div>

      {/* Split body: left crystalline field + right info rail */}
      <div className="relative z-10 grid grid-cols-[1.05fr_1fr] gap-4 px-6 mt-5">
        {/* Left: crystalline field (purely decorative) */}
        <div className="relative rounded-[18px]" aria-hidden>
          <div
            className="absolute inset-0 rounded-[18px]"
            style={{
              background:
                "conic-gradient(from 10deg, rgba(59,130,246,0.12), rgba(2,132,199,0.10), rgba(168,85,247,0.10), rgba(59,130,246,0.12))",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.06), 0 12px 28px rgba(6,20,39,0.45)",
              border: "1px solid rgba(147,197,253,0.16)",
            }}
          />
          <div className="relative h-[210px]" />
        </div>

        {/* Right: info rail */}
        <div data-testid="service-card-c-info" className="flex flex-col gap-3">
          <div
            className="rounded-xl p-3"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
              border: "1px solid rgba(147,197,253,0.18)",
              boxShadow: "0 8px 22px rgba(7,16,31,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#D9E9FF" }}>فئات متعددة:</div>
            <div className="text-[12px]" style={{ color: "#B6CFEE" }}>مالية، العاب، تسوق</div>
          </div>
          <div
            className="rounded-xl p-3"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
              border: "1px solid rgba(147,197,253,0.18)",
              boxShadow: "0 8px 22px rgba(7,16,31,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#D9E9FF" }}>توافق عالمي:</div>
            <div className="text-[12px]" style={{ color: "#B6CFEE" }}>منصات، تطبيقات، مواقع</div>
          </div>
          <div
            className="rounded-xl p-3 text-center"
            style={{
              background:
                "linear-gradient(180deg, rgba(99,102,241,0.18), rgba(59,130,246,0.12))",
              border: "1px dashed rgba(147,197,253,0.55)",
              boxShadow: "0 10px 24px rgba(46,109,187,0.25)",
            }}
          >
            <div className="text-[13px] font-extrabold" style={{ color: "#D9E9FF" }}>باقات متنوعة</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 mt-5" aria-hidden>
        <div
          className="h-[2px] w-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(147,197,253,0.45), rgba(99,102,241,0.55), rgba(147,197,253,0.45), transparent)",
          }}
        />
      </div>

      {/* CTA */}
      <div className="px-6 pt-3 flex items-center justify-center">
        <button
          type="button"
          data-testid="service-card-c-cta-button"
          className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-[12px] font-extrabold"
          style={{
            color: "#081225",
            background: "linear-gradient(180deg, #E6F1FF 0%, #BFD9FF 100%)",
            boxShadow: "0 12px 28px rgba(59,130,246,0.28), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          المزيد
          <ChevronLeft size={14} className="opacity-70" />
        </button>
      </div>

      {/* Features row */}
      <div
        data-testid="service-card-c-features"
        className="px-6 pt-4"
      >
        <div className="grid grid-cols-4 gap-2 text-center">
          {/* Security */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                color: "#93C5FD",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                border: "1px solid rgba(147,197,253,0.45)",
                boxShadow: "0 8px 18px rgba(5,12,23,0.45), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
              data-testid="service-card-c-feature-security"
            >
              <Shield size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#D9E9FF" }}>أمان</span>
          </div>

          {/* Speed */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                color: "#60A5FA",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                border: "1px solid rgba(96,165,250,0.50)",
                boxShadow: "0 8px 18px rgba(5,12,23,0.45), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
              data-testid="service-card-c-feature-speed"
            >
              <Activity size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#D9E9FF" }}>سرعة</span>
          </div>

          {/* Trust */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                color: "#6EE7B7",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                border: "1px solid rgba(110,231,183,0.45)",
                boxShadow: "0 8px 18px rgba(5,12,23,0.45), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
              data-testid="service-card-c-feature-trust"
            >
              <Gauge size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#D9E9FF" }}>ثقة</span>
          </div>

          {/* Quality */}
          <div className="flex flex-col items-center gap-1">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full"
              style={{
                color: "#FCA5A5",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.04))",
                border: "1px solid rgba(252,165,165,0.45)",
                boxShadow: "0 8px 18px rgba(5,12,23,0.45), inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
              data-testid="service-card-c-feature-quality"
            >
              <Crown size={18} />
            </span>
            <span className="text-[11px] font-extrabold" style={{ color: "#D9E9FF" }}>جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardC;