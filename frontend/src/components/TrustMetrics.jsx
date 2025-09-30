import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Star, Zap, Download, Gauge, Truck, Package, Send } from 'lucide-react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Howl } from 'howler';

const iconMap = { Star, Zap, Download, Gauge, Truck, Package, Send };
// Use only process.env in Next.js (injected via next.config.js env)
const apiBase = process.env.REACT_APP_BACKEND_URL || "";


// Fallback data
const defaultMetrics = {
 id: 'fallback',
 updated_at: new Date().toISOString(),
 items: [
 { key: 'rating', label: 'تقييم العملاء', value: '4.9/5', icon: 'Star' },
 { key: 'shipments', label: 'عمليات الشحن', value: '120K+', icon: 'Send' },
 { key: 'downloads', label: 'عدد التحميلات', value: '85K+', icon: 'Download' },
 { key: 'uptime', label: 'زمن الاستجابة', value: '1.2s', icon: 'Gauge' },
 ],
};

// ---- Helpers for Count Up & formatting ----
function parseNumeric(targetStr) {
 if (!targetStr || typeof targetStr !== 'string') return { n: 0, decimals: 0, suffix: '' };
 const match = targetStr.trim().match(/^([0-9]+(?:\.[0-9]+)?)(.*)$/);
 if (!match) return { n: 0, decimals: 0, suffix: targetStr };
 const num = parseFloat(match[1]);
 const decimals = (match[1].split('.')[1] || '').length;
 const suffix = match[2] || '';
 return { n: isNaN(num) ? 0 : num, decimals, suffix };
}

function easeOutQuad(t) { return 1 - (1 - t) * (1 - t); }

// Normalize display like 85K+ -> +85K, 120K+ -> +120K
function normalizePlusDisplay(numText, suffix) {
 if (typeof numText !== 'string') numText = String(numText);
 if (/^(K\+|M\+|B\+)$/.test(suffix)) {
 const unit = suffix[0];
 return `+${numText}${unit}`;
 }
 return `${numText}${suffix}`;
}

function buildZeroTextFor(targetStr) {
 const { decimals, suffix } = parseNumeric(targetStr);
 const zeroStr = decimals > 0 ? (0).toFixed(decimals) : '0';
 return normalizePlusDisplay(zeroStr, suffix);
}

// Soft tick sound using Howler (low volume)
const useTickSound = () => {
 const soundRef = useRef(null);
 useEffect(() => {
 soundRef.current = new Howl({
 src: [
 'data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQAAAnEAAB9AAAACAAACcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==',
 ],
 volume: 0.06,
 preload: true,
 html5: true,
 });
 return () => { try { soundRef.current?.unload(); } catch (_) {} };
 }, []);
 // Stable callback so downstream effects don't restart
 return useCallback(() => { try { soundRef.current?.play(); } catch (_) {} }, []);
};

// Count up hook that runs once when start flips to true; stable across renders
function useCountUp(targetStr, { duration = 2000, start = false, delay = 0, onTick, allowSound = true } = {}) {
 const initialText = buildZeroTextFor(targetStr);
 const [{ text }, setState] = useState(() => ({ text: initialText }));
 const rafRef = useRef();
 const lastIntRef = useRef(-1);
 const startedRef = useRef(false);

 // keep refs stable for tick and sound flags
 const onTickRef = useRef(onTick);
 const allowSoundRef = useRef(allowSound);
 useEffect(() => { onTickRef.current = onTick; }, [onTick]);
 useEffect(() => { allowSoundRef.current = allowSound; }, [allowSound]);

 useEffect(() => {
 if (!start || startedRef.current) {
 // don't reset text if start goes false later; never regress to 0
 return;
 }
 startedRef.current = true;

 const { n, decimals, suffix } = parseNumeric(targetStr);
 const startTime = performance.now() + delay;

 const step = (now) => {
 if (now < startTime) {
 rafRef.current = requestAnimationFrame(step);
 return;
 }
 const t = Math.min(1, (now - startTime) / duration);
 const eased = easeOutQuad(t);
 const current = n * eased;

 if (decimals === 0) {
 const curInt = Math.round(current);
 if (allowSoundRef.current && curInt !== lastIntRef.current) {
 lastIntRef.current = curInt;
 onTickRef.current && onTickRef.current();
 }
 } else {
 if (allowSoundRef.current && Math.random() < 0.06) onTickRef.current && onTickRef.current();
 }

 const numText = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString();
 const formatted = normalizePlusDisplay(numText, suffix);
 setState({ text: formatted });
 if (t < 1) rafRef.current = requestAnimationFrame(step);
 };

 rafRef.current = requestAnimationFrame(step);
 return () => cancelAnimationFrame(rafRef.current);
 }, [targetStr, duration, start, delay, initialText]);

 return text;
}

// Colors for each icon
const iconColors = [
 'text-blue-600',     // للأيقونة الأولى - أزرق
 'text-green-600',    // للأيقونة الثانية - أخضر  
 'text-purple-600',   // للأيقونة الثالثة - بنفسجي
 'text-red-600'       // للأيقونة الرابعة - أحمر
];

// Card component with Framer Motion timeline syncing
const MetricCard = ({ item, idx, visible }) => {
 const Icon = iconMap[item.icon] || Star;
 const iconColor = iconColors[idx % iconColors.length] || 'text-gray-600';
 const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const allowMotion = !prefersReduced;

 // Controllers
 const cardCtrl = useAnimation();
 const iconCtrl = useAnimation();

 const playTick = useTickSound();

 const [readyToCount, setReadyToCount] = useState(false);

 useEffect(() => {
 let mounted = true;
 const run = async () => {
 if (!visible) return; // لا تبدأ قبل الظهور فعليًا
 if (!allowMotion) { setReadyToCount(true); return; }
 // dwell صغير قبل البدء ليضمن استقرار الشاشة
 await new Promise((r) => setTimeout(r, 250));
 // Card entrance: slide up + fade in (stagger by idx)
 await cardCtrl.start({ opacity: [0, 1], y: [16, 0], scale: [0.96, 1], transition: { duration: 0.5, ease: 'easeOut', delay: idx * 0.2 } });
 // Icon pop: zoom-in + bounce
 await iconCtrl.start({ scale: [0, 1.15, 1], rotate: [0, 2, 0], transition: { duration: 0.4, ease: 'easeOut' } });
 // Glow pulse across card
 await cardCtrl.start({ boxShadow: ['0 0 0 rgba(214,182,97,0)', '0 10px 28px rgba(214,182,97,0.28)', '0 0 0 rgba(214,182,97,0)'], transition: { duration: 0.9, ease: 'easeInOut' } });
 // dwell إضافي قبل العدّ ليكون الانتقال واضحًا
 await new Promise((r) => setTimeout(r, 180));
 if (mounted) setReadyToCount(true);
 };
 run();
 return () => { mounted = false; };
 }, [visible, allowMotion, idx, cardCtrl, iconCtrl]);

 const countText = useCountUp(item.value, {
 duration: 2500, // أبطأ قليلاً لوضوح التغيير
 start: readyToCount, // العد يعمل دائمًا بعد الظهور، حتى مع تقليل الحركة (لكن بدون صوت/نبض)
 delay: 0,
 onTick: playTick,
 allowSound: allowMotion, // لا صوت عند reduce-motion
 });

 const numberVariants = {
 initial: { scale: 1 },
 counting: allowMotion ? { scale: [1, 1.06, 1], transition: { repeat: Infinity, repeatDelay: 0.4, duration: 1.0 } } : { scale: 1 },
 };

 return (
 <motion.div
 initial={allowMotion ? { opacity: 0, y: 16, scale: 0.96 } : { opacity: 1, y: 0, scale: 1 }}
 animate={cardCtrl}
 className={[
 'group rounded-2xl border-2 border-gray-200/60 bg-white/90 backdrop-blur-sm px-1 py-2 sm:px-5 sm:py-5 text-center relative',
 'trust-metric-card shadow-lg hover:shadow-xl',
 'hover:scale-[1.05] hover:border-yellow-300/80 hover:bg-white',
 'transition-all duration-300 ease-out',
 'will-change-transform will-change-opacity will-change-shadow',
 'before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/30 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300',
 ].join(' ')}
 role="figure"
 aria-label={`${item.label}: ${item.value}`}
 style={{ overflow: 'hidden' }}
 >
 <motion.div
 initial={allowMotion ? { scale: 0 } : { scale: 1 }}
 animate={iconCtrl}
 className={`mx-auto mb-1 sm:mb-3 w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${iconColor}`}
 >
 <Icon 
 className="w-6 h-6 sm:w-8 sm:h-8 icon-3d-effect"
 style={{
 filter: `
 drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.5))
 drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.3))
 drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.2))
 drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.15))
 `,
 transform: 'translateZ(0)',
 textShadow: `
 1px 1px 0px rgba(255, 255, 255, 0.6),
 -1px -1px 0px rgba(0, 0, 0, 0.2)
 `
 }}
 />
 </motion.div>

 <AnimatePresence>
 <motion.div
 variants={numberVariants}
 initial="initial"
 animate={readyToCount && allowMotion ? 'counting' : 'initial'}
 className="trust-metric-number text-xs sm:text-lg font-extrabold leading-none engraved-numbers"
 dir="ltr"
 style={{
 color: '#2c3e50',
 textShadow: `
 inset 2px 2px 4px rgba(0, 0, 0, 0.4),
 inset -2px -2px 4px rgba(255, 255, 255, 0.8),
 1px 1px 2px rgba(255, 255, 255, 0.9),
 -1px -1px 2px rgba(0, 0, 0, 0.3)
 `,
 fontFamily: 'Impact, "Arial Black", "Helvetica Neue", Arial, sans-serif',
 fontWeight: '900',
 letterSpacing: '0.5px',
 background: `
 linear-gradient(145deg, 
 rgba(200, 200, 200, 0.1) 0%, 
 rgba(100, 100, 100, 0.2) 50%, 
 rgba(200, 200, 200, 0.1) 100%
 )
 `,
 WebkitBackgroundClip: 'text',
 WebkitTextFillColor: 'transparent',
 backgroundClip: 'text',
 filter: 'contrast(1.2) brightness(0.9)',
 transform: 'translateZ(0)',
 willChange: 'transform'
 }}
 >
 <span style={{
 position: 'relative',
 display: 'inline-block',
 background: `
 linear-gradient(145deg, 
 #00ffff 0%,
 #00e5ff 25%,
 #00bcd4 50%,
 #00e5ff 75%,
 #00ffff 100%
 )
 `,
 WebkitBackgroundClip: 'text',
 WebkitTextFillColor: 'transparent',
 backgroundClip: 'text',
 textShadow: `
 inset 0 2px 4px rgba(0, 0, 0, 0.6),
 inset 0 -2px 4px rgba(255, 255, 255, 0.3),
 0 1px 0 rgba(255, 255, 255, 0.4),
 0 2px 3px rgba(0, 0, 0, 0.4),
 0 0 8px rgba(0, 0, 0, 0.1)
 `,
 filter: `
 drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))
 drop-shadow(0 -1px 1px rgba(255, 255, 255, 0.2))
 saturate(1.3)
 brightness(1.1)
 `
 }}>
 {countText}
 </span>
 </motion.div>
 </AnimatePresence>

 <div className="text-[10px] sm:text-sm text-gray-700 mt-0 sm:mt-2 font-black truncate px-0">
 {item.label}
 </div>
 </motion.div>
 );
};

const TrustMetrics = () => {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [inView, setInView] = useState(false); // ملاحظة الرؤية فقط
 const [visible, setVisible] = useState(false); // يبدأ التسلسل بعد dwell
 const containerRef = useRef(null);

 useEffect(() => {
 const fetchMetrics = async () => {
 const controller = new AbortController();
 const timer = setTimeout(() => controller.abort(), 3000);
 try {
 const res = await fetch(`${apiBase}/api/metrics`, { signal: controller.signal });
 if (!res.ok) throw new Error(`HTTP ${res.status}`);
 const json = await res.json();
 if (!json || !json.items) throw new Error('Invalid payload');
 setData(json);
 } catch (e) {
 console.warn('Using fallback metrics due to error:', e?.message || e);
 setData(defaultMetrics);
 } finally {
 clearTimeout(timer);
 setLoading(false);
 }
 };
 fetchMetrics();
 }, []);

 // Visibility observer (أشد صرامة) + rootMargin لتأخير التشغيل حتى يكون أغلب المكوّن ظاهرًا
 useEffect(() => {
 const el = containerRef.current;
 if (!el) return;
 const io = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
 if (entry.isIntersecting) {
 setInView(true);
 }
 });
 }, { threshold: 0.6, rootMargin: '0px 0px -25% 0px' });
 io.observe(el);

 // Fallback بعد 3ث إذا كان داخل نافذة العرض
 const fallbackTimer = setTimeout(() => {
 if (!inView) {
 const rect = el.getBoundingClientRect();
 const inside = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
 if (inside) setInView(true);
 }
 }, 3000);

 return () => { io.disconnect(); clearTimeout(fallbackTimer); };
 }, [inView]);

 // Dwell بعد تحقق الرؤية قبل بدء التسلسل
 useEffect(() => {
 if (!inView || visible) return;
 const t = setTimeout(() => setVisible(true), 250);
 return () => clearTimeout(t);
 }, [inView, visible]);

 if (loading) {
 return (
 <div className="mt-4 w-full" ref={containerRef}>
 <div className="grid grid-cols-4 gap-2 sm:gap-3">
 {[...Array(4)].map((_, i) => (
 <div key={i} className="h-16 rounded-2xl bg-gray-200" />
 ))}
 </div>
 </div>
 );
 }

 const items = (data && Array.isArray(data.items) ? data.items : defaultMetrics.items).slice(0, 4);

 return (
 <div className="mt-4 w-full" ref={containerRef}>
 {/* Direct grid without container wrapper */}
 <div className="grid grid-cols-4 gap-2 sm:gap-3">
 {items.map((item, idx) => (
 <MetricCard key={item.key || idx} item={item} idx={idx} visible={visible} />
 ))}
 </div>
 </div>
 );
};

export default TrustMetrics;