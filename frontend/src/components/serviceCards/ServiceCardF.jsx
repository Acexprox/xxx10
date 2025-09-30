import React from "react";
import { KeyRound, Zap, ThumbsUp, Trophy, ChevronLeft } from "lucide-react";

/*
  ServiceCardF – Monochrome Editorial Brut (Card 6/21)
  A radical departure: high-contrast couture black/white with editorial typography,
  asymmetric layout, numbered info strips, diamond features.
  Preserves: title, subtitle, info blocks, CTA, 4 feature icons with Arabic labels.
  Static visuals only. Dimensions locked to 370x620. RTL preserved.
*/

const ServiceCardF = () => {
  return (
    <div
      data-testid="service-card-f"
      className="relative w-[370px] min-w-[370px] max-w-[370px] h-[620px] min-h-[620px] max-h-[620px] overflow-hidden rounded-[22px]"
      dir="rtl"
      style={{
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #111111 55%, #0B0B0B 100%)",
        boxShadow:
          "0 22px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      {/* Split column: ivory rail on the right */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 right-0 w-[86px]"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 70%, #EFEFEF 100%)",
          boxShadow:
            "inset 1px 0 0 rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.6)",
        }}
      />

      {/* Perimeter rules */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-[22px]"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
      />

      {/* Header block (title, subtitle) */}
      <div className="relative z-10 px-6 pt-6 pr-[92px]">
        <div className="flex items-center justify-between">
          <span
            data-testid="service-card-f-subtitle"
            className="inline-flex items-center gap-1 px-3 py-[6px] rounded-full text-[12px] font-extrabold tracking-wide"
            style={{
              color: "#0B0B0B",
              background: "linear-gradient(180deg, #FFFFFF 0%, #EDEDED 100%)",
              boxShadow: "0 2px 6px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            مسبقة الدفع
          </span>
          <span className="text-[11px] font-semibold" style={{ color: "#D4D4D4" }}>CARD F</span>
        </div>
        <h3
          data-testid="service-card-f-title"
          className="mt-4 text-[26px] leading-tight font-black tracking-tight"
          style={{ color: "#FAFAFA", textShadow: "0 1px 0 rgba(255,255,255,0.04)" }}
        >
          بطائق الكترونية
        </h3>
      </div>

      {/* Right rail legend */}
      <div className="absolute top-6 right-0 w-[86px] flex items-center justify-center">
        <span
          className="text-[10px] font-extrabold tracking-[0.2em]"
          style={{ color: "#7A7A7A" }}
        >
          EDITION
        </span>
      </div>

      {/* Watermark numerals */}
      <div aria-hidden className="absolute left-[-6px] top-[112px] text-[96px] font-black tracking-tight" style={{ color: "#0D0D0D" }}>06</div>

      {/* Info strips (numbered) */}
      <div className="relative z-10 px-6 mt-6 pr-[92px] flex flex-col gap-3" data-testid="service-card-f-info">
        {/* Strip 1 */}
        <div className="relative rounded-[14px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 22px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          />
          <div className="relative z-10 flex items-center gap-3 p-3">
            <span className="text-[10px] font-black text-white/50">01</span>
            <div className="flex-1">
              <div className="text-[13px] font-extrabold text-[#F5F5F5]">فئات متعددة:</div>
              <div className="text-[12px] text-[#D4D4D4]">مالية، العاب، تسوق</div>
            </div>
          </div>
        </div>
        {/* Strip 2 */}
        <div className="relative rounded-[14px] overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 22px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          />
          <div className="relative z-10 flex items-center gap-3 p-3">
            <span className="text-[10px] font-black text-white/50">02</span>
            <div className="flex-1">
              <div className="text-[13px] font-extrabold text-[#F5F5F5]">توافق عالمي:</div>
              <div className="text-[12px] text-[#D4D4D4]">منصات، تطبيقات، مواقع</div>
            </div>
          </div>
        </div>
        {/* Strip 3 */}
        <div className="relative rounded-[14px] overflow-hidden text-center">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
              border: "1px dashed rgba(255,255,255,0.18)",
              boxShadow: "0 8px 22px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          />
          <div className="relative z-10 p-3 text-[13px] font-extrabold" style={{ color: "#F5F5F5" }}>باقات متنوعة</div>
        </div>
      </div>

      {/* Divider rule */}
      <div className="px-6 mt-5 pr-[92px]" aria-hidden>
        <div className="h-[2px] w-full rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }} />
      </div>

      {/* CTA */}
      <div className="px-6 pt-3 pr-[92px] flex items-center justify-center">
        <button
          type="button"
          data-testid="service-card-f-cta-button"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-2 text-[12px] font-extrabold"
          style={{
            color: "#0B0B0B",
            background: "linear-gradient(180deg, #FFFFFF 0%, #EDEDED 100%)",
            boxShadow: "0 12px 28px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          المزيد
          <ChevronLeft size={14} className="opacity-70 group-hover:opacity-100" />
        </button>
      </div>

      {/* Feature diamonds on the ivory rail */}
      <div data-testid="service-card-f-features" className="absolute bottom-4 right-0 w-[86px] px-[10px]">
        <div className="grid grid-cols-1 gap-3 text-center">
          {/* Security */}
          <div className="flex flex-col items-center gap-[6px]">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[8px] rotate-45"
              style={{
                color: "#0B0B0B",
                background: "linear-gradient(180deg, #FFFFFF, #EDEDED)",
                boxShadow: "0 8px 18px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
              data-testid="service-card-f-feature-security"
            >
              <span className="-rotate-45"><KeyRound size={18} /></span>
            </span>
            <span className="text-[10px] font-extrabold" style={{ color: "#0B0B0B" }}>أمان</span>
          </div>

          {/* Speed */}
          <div className="flex flex-col items-center gap-[6px]">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[8px] rotate-45"
              style={{
                color: "#0B0B0B",
                background: "linear-gradient(180deg, #FFFFFF, #EDEDED)",
                boxShadow: "0 8px 18px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
              data-testid="service-card-f-feature-speed"
            >
              <span className="-rotate-45"><Zap size={18} /></span>
            </span>
            <span className="text-[10px] font-extrabold" style={{ color: "#0B0B0B" }}>سرعة</span>
          </div>

          {/* Trust */}
          <div className="flex flex-col items-center gap-[6px]">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[8px] rotate-45"
              style={{
                color: "#0B0B0B",
                background: "linear-gradient(180deg, #FFFFFF, #EDEDED)",
                boxShadow: "0 8px 18px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
              data-testid="service-card-f-feature-trust"
            >
              <span className="-rotate-45"><ThumbsUp size={18} /></span>
            </span>
            <span className="text-[10px] font-extrabold" style={{ color: "#0B0B0B" }}>ثقة</span>
          </div>

          {/* Quality */}
          <div className="flex flex-col items-center gap-[6px]">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-[8px] rotate-45"
              style={{
                color: "#0B0B0B",
                background: "linear-gradient(180deg, #FFFFFF, #EDEDED)",
                boxShadow: "0 8px 18px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
              data-testid="service-card-f-feature-quality"
            >
              <span className="-rotate-45"><Trophy size={18} /></span>
            </span>
            <span className="text-[10px] font-extrabold" style={{ color: "#0B0B0B" }}>جودة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardF;