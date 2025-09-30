import React, { useRef, useState, useEffect, useCallback } from "react";

/*
  InteractiveContainer
  - حاوية عامة لتمكين تأثير hover/press/glow لأي محتوى يتم تمريره كأطفال
  - لا تغيّر التخطيط لأنها تعتمد على transform فقط
  - معزولة باستخدام contain/transform-gpu/will-change
*/

const InteractiveContainer = ({
  children,
  className = "",
  style = {},
  testId = "interactive-container",
  glow = true,
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
    } catch (_) {}
  }, []);

  const updateGlow = useCallback((e) => {
    if (!motionOK || !glow) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", x.toFixed(4));
    el.style.setProperty("--my", y.toFixed(4));
  }, [motionOK, glow]);

  const baseShadow = "0 10px 28px rgba(124,45,18,0.18)";
  const hoverShadow = "0 16px 38px rgba(124,45,18,0.22)";
  const activeShadow = "0 8px 20px rgba(124,45,18,0.20)";

  const transformValue = isPressed
    ? "translateY(0px) scale(0.988)"
    : isHover
    ? "translateY(-3px) scale(1.02)"
    : "translateY(0px) scale(1)";

  const shadowValue = isPressed ? activeShadow : isHover ? hoverShadow : baseShadow;

  return (
    <div
      ref={ref}
      data-testid={testId}
      className={`relative isolate rounded-xl transition-all duration-300 ease-out transform-gpu will-change-transform ${className}`}
      style={{
        ...style,
        transform: transformValue,
        boxShadow: shadowValue,
        contain: "layout paint style",
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => { setIsHover(false); setIsPressed(false); }}
      onMouseMove={updateGlow}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      {/* طبقة الإضاءة */}
      {glow && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background: motionOK
              ? `radial-gradient(360px 240px at calc(var(--mx, 0.5) * 100%) calc(var(--my, 0.5) * 100%), rgba(214,167,86,0.14), rgba(214,167,86,0.0) 60%)`
              : "transparent",
            transition: "opacity 220ms ease-out",
            opacity: isHover ? 1 : 0,
            mixBlendMode: "multiply",
            zIndex: 0,
          }}
        />
      )}
      {/* محتوى المستخدم */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default InteractiveContainer;
