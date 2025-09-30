import React, { useRef, useEffect, useState, useCallback } from "react";

/*
  InteractiveTile (Pro Interaction)
*/

const InteractiveTile = ({
  title = "",
  value = "",
  testId = "interactive-tile",
  className = "",
  style = {},
  onClick = undefined,
  variant = "solid", // 'solid' | 'dashed'
  align = "start", // 'start' | 'center'
  showColon = true,
}) => {
  const ref = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [motionOK, setMotionOK] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    try {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setMotionOK(!mq.matches);
      const handler = () => setMotionOK(!mq.matches);
      mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
      return () => {
        mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler);
      };
    } catch (_) {
      // ignore
    }
  }, []);

  const updateGlow = useCallback((e) => {
    if (!motionOK) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width; // 0 -> 1
    const y = (e.clientY - rect.top) / rect.height; // 0 -> 1
    el.style.setProperty("--mx", x.toFixed(4));
    el.style.setProperty("--my", y.toFixed(4));
  }, [motionOK]);

  const handleKeyDown = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      setIsPressed(true);
    }
  };
  const handleKeyUp = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      setIsPressed(false);
      if (typeof onClick === "function") onClick(e);
    }
  };

  const pressDown = () => setIsPressed(true);
  const pressUp = () => setIsPressed(false);

  const isDashed = variant === "dashed";
  const baseShadow = isDashed
    ? "0 10px 24px rgba(180,83,9,0.18)"
    : "0 8px 20px rgba(120,53,15,0.10), inset 0 1px 0 rgba(255,255,255,0.95)";
  const hoverShadow = isDashed
    ? "0 14px 30px rgba(180,83,9,0.22)"
    : "0 12px 28px rgba(124,45,18,0.18), inset 0 1px 0 rgba(255,255,255,0.95)";
  const activeShadow = isDashed
    ? "0 8px 18px rgba(180,83,9,0.18)"
    : "0 6px 14px rgba(124,45,18,0.18), inset 0 2px 0 rgba(0,0,0,0.02)";

  const transformValue = isPressed
    ? "translateY(0px) scale(0.985)"
    : isHover
    ? "translateY(-2px) scale(1.03)"
    : "translateY(0px) scale(1)";

  const boxShadowValue = isPressed ? activeShadow : isHover ? hoverShadow : baseShadow;

  const bgStyle = isDashed
    ? {
        background: "linear-gradient(180deg, rgba(214,167,86,0.18), rgba(245,158,11,0.12))",
        border: "1px dashed rgba(214,167,86,0.55)",
      }
    : {
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(214,167,86,0.45)",
      };

  const textAlignClass = align === "center" ? "text-center" : "";

  return (
    <div className={`relative isolate ${className}`} style={{ ...style }}>
      <div
        ref={ref}
        data-testid={testId}
        role={typeof onClick === "function" ? "button" : "group"}
        tabIndex={0}
        aria-label={title ? `بلاطة ${title}` : "بلاطة معلومات"}
        className={`rounded-xl p-3 transition-all duration-300 ease-out will-change-transform transform-gpu select-none outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white relative overflow-hidden ${textAlignClass}`}
        style={{
          ...bgStyle,
          boxShadow: boxShadowValue,
          contain: "layout paint style",
          transform: transformValue,
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
          setIsPressed(false);
        }}
        onMouseMove={updateGlow}
        onMouseDown={pressDown}
        onMouseUp={pressUp}
        onTouchStart={pressDown}
        onTouchEnd={pressUp}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onClick={onClick}
      >
        {/* glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background: `radial-gradient(280px 180px at calc(var(--mx, 0.5) * 100%) calc(var(--my, 0.5) * 100%), rgba(214,167,86,0.18), rgba(214,167,86,0.0) 60%)`,
            transition: "opacity 220ms ease-out",
            opacity: isHover ? 1 : 0,
            mixBlendMode: "multiply",
          }}
        />

        {title ? (
          <div
            data-testid={`${testId}-title`}
            className="text-[13px] font-extrabold"
            style={{ color: "#3F2D17" }}
          >
            {title}{showColon ? ":" : ""}
          </div>
        ) : null}
        {value ? (
          <div
            data-testid={`${testId}-value`}
            className="text-[12px]"
            style={{ color: "#6B4E2E" }}
          >
            {value}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InteractiveTile;
