import React, { useState } from 'react';
import styled from 'styled-components';
import { Shield, Zap, Star, Award } from 'lucide-react';

const Card = () => {
  const [downloadBtnPressed, setDownloadBtnPressed] = useState(false);

  // وظيفة للتعامل مع الضغط على زر المزيد
  const handleDownloadClick = (e) => {
    setDownloadBtnPressed(true);
    
    // إرجاع الزر لوضعه الأصلي بعد 5 ثواني
    setTimeout(() => {
      setDownloadBtnPressed(false);
    }, 5000);
  };

  return (
    <StyledWrapper>
      <div className="card">
        {/* العنوان الرئيسي */}
        <div className="main-title">
          <h3>بطائق الكترونية</h3>
          <p className="subtitle">مسبقة الدفع</p>
        </div>
        
        {/* الخط المحفور الأفقي */}
        <div className="carved-line"></div>
        
        {/* البيانات والمعلومات */}
        <div className="card-info">
          <div className="info-item">
            <span className="info-label">فئات متعددة:</span>
            <span className="info-value">مالية، العاب، تسوق</span>
          </div>
          <div className="info-item">
            <span className="info-label">توافق عالمي:</span>
            <span className="info-value">منصات، تطبيقات، مواقع</span>
          </div>
          <div className="info-item">
            <span className="info-label">باقات متنوعة</span>
          </div>
        </div>
        
        {/* زر المزيد */}
        <div className="download-btn-container">
          <button
            aria-label="المزيد"
            className={`download-btn ${downloadBtnPressed ? 'download-btn-pressed' : ''}`}
            onClick={handleDownloadClick}
          >
            المزيد
          </button>
        </div>
        
        <div className="blue-line"></div>
        <div className="features-icons">
          <div className="feature-item">
            <div className="icon shield">
              <Shield size={20} strokeWidth={1.5} />
            </div>
            <span>أمان</span>
          </div>
          <div className="feature-item">
            <div className="icon lightning">
              <Zap size={20} strokeWidth={1.5} />
            </div>
            <span>سرعة</span>
          </div>
          <div className="feature-item">
            <div className="icon chart">
              <Star size={20} strokeWidth={1.5} />
            </div>
            <span>ثقة</span>
          </div>
          <div className="feature-item">
            <div className="icon medal">
              <Award size={20} strokeWidth={1.5} />
            </div>
            <span>جودة</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 370px;
    height: 620px;
    min-width: 370px;
    max-width: 370px;
    min-height: 620px;
    max-height: 620px;
    background: #ffffff !important;
    background-color: #ffffff !important;
    border-radius: 1rem;
    box-shadow: 
      /* تعريف الحواف المحسن */
      0 0 0 1px rgba(0, 0, 0, 0.08),
      /* الظل القريب القوي */
      0 2px 8px rgba(0, 0, 0, 0.15),
      /* الظل المتوسط العميق */
      0 8px 24px rgba(0, 0, 0, 0.12),
      /* الظل البعيد الواسع */
      0 24px 48px rgba(0, 0, 0, 0.1),
      /* الظل الخارجي الإضافي */
      0 40px 80px rgba(0, 0, 0, 0.08),
      /* إضاءة داخلية قوية */
      inset 0 1px 0 rgba(255, 255, 255, 0.9),
      inset 0 2px 4px rgba(255, 255, 255, 0.1),
      /* تأثير الهالة الخارجية */
      0 0 0 0.5px rgba(255, 255, 255, 0.3);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin: 0 auto;
    flex-shrink: 0;
    flex-grow: 0;
    position: relative;
    transform: translateY(0px) translateZ(0px);
    filter: brightness(1);
  }

  .card:hover {
    background: #ffffff !important;
    background-color: #ffffff !important;
    box-shadow: 
      /* تعريف حواف أقوى */
      0 0 0 1px rgba(0, 0, 0, 0.12),
      /* ظل قريب مكثف */
      0 4px 16px rgba(0, 0, 0, 0.25),
      /* ظل متوسط قوي */
      0 16px 48px rgba(0, 0, 0, 0.2),
      /* ظل بعيد عميق */
      0 32px 80px rgba(0, 0, 0, 0.15),
      /* ظل إضافي للعمق الكبير */
      0 48px 100px rgba(0, 0, 0, 0.12),
      /* ظل خارجي واسع جداً */
      0 64px 128px rgba(0, 0, 0, 0.1),
      /* إضاءة داخلية مميزة */
      inset 0 1px 0 rgba(255, 255, 255, 1),
      inset 0 3px 6px rgba(255, 255, 255, 0.15),
      /* هالة خارجية ساطعة */
      0 0 0 1px rgba(255, 255, 255, 0.4),
      /* تأثير الوهج */
      0 0 32px rgba(255, 255, 255, 0.1);
    transform: translateY(-8px) translateZ(20px) scale(1.02);
    filter: brightness(1.05) contrast(1.02);
  }

  /* العنوان الرئيسي */
  .main-title {
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
  }

  .main-title h3 {
    font-size: 24px;
    font-weight: 800;
    color: #1f2937;
    margin: 0;
    padding: 0;
    font-family: 'Tajawal', Arial, sans-serif;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    letter-spacing: 0.5px;
  }

  .main-title .subtitle {
    font-size: 16px;
    font-weight: 600;
    color: #6b7280;
    margin: 4px 0 0 0;
    padding: 0;
    font-family: 'Tajawal', Arial, sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    letter-spacing: 0.3px;
  }

  .card:hover .main-title h3 {
    color: #111827;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  .card:hover .main-title .subtitle {
    color: #4b5563;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  /* الخط المحفور الأفقي - بسيط ومضمون الظهور */
  .carved-line {
    position: absolute;
    top: 95px;
    left: 0;
    right: 0;
    height: 3px;
    background: #d4af37;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    box-shadow: 
      inset 0 1px 2px rgba(0, 0, 0, 0.4),
      inset 0 0 4px rgba(212, 175, 55, 0.8),
      0 1px 0 rgba(255, 255, 255, 0.6);
  }

  /* البيانات والمعلومات */
  .card-info {
    position: absolute;
    top: 120px;
    left: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    z-index: 5;
  }

  .info-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 8px 12px;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 
      0 2px 8px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
  }

  .info-item:hover {
    background: rgba(255, 255, 255, 0.85);
    transform: translateY(-1px);
    box-shadow: 
      0 4px 12px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
  }

  .info-label {
    font-size: 14px;
    font-weight: 700;
    color: #374151;
    font-family: 'Tajawal', Arial, sans-serif;
    text-align: right;
  }

  .info-value {
    font-size: 12px;
    font-weight: 500;
    color: #6b7280;
    font-family: 'Tajawal', Arial, sans-serif;
    text-align: right;
    line-height: 1.4;
  }

  /* العنصر الثالث بدون قيمة إضافية */
  .info-item:last-child {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .info-item:last-child .info-label {
    font-size: 15px;
    font-weight: 700;
    color: #1f2937;
  }

  /* زر المزيد */
  .download-btn-container {
    position: absolute;
    bottom: 80px;
    left: 20px;
    height: 40px;
    width: 40px;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  .download-btn {
    position: relative;
    background: linear-gradient(#ffffff 30%, #ffffff 30%, #d6d6d6);
    width: 40px;
    height: 40px;
    border-radius: 40px;
    border: 2px solid #ffffff;
    transition: 0.3s;
    box-shadow: 0 4.8px 4.8px rgb(18 18 18 / 35%);
    font-size: 10px;
    font-weight: 700;
    font-family: 'Tajawal', Arial, sans-serif;
    color: grey;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .download-btn::before {
    content: "";
    width: 125%;
    height: 125%;
    background: rgb(224, 224, 224);
    box-shadow: 0 3.2px 3.2px inset #808080;
    position: absolute;
    left: -12%;
    top: -12%;
    z-index: -1;
    border-radius: inherit;
    transition: 0.3s;
  }

  .download-btn::before {
    content: "";
    width: 125%;
    height: 125%;
    background: rgb(224, 224, 224);
    box-shadow: 0 3.2px 3.2px inset #808080;
    position: absolute;
    left: -12%;
    top: -12%;
    z-index: -1;
    border-radius: inherit;
    transition: 0.3s;
  }

  .download-btn:focus {
    outline: none;
    box-shadow: 0 8px 4.8px rgb(18 18 18 / 35%);
    background: linear-gradient(0deg, #ffffff 30%, #ffffff 30%, #d6d6d6);
    color: #00ff88;
  }

  .download-btn:focus svg {
    color: #00ff88;
    filter: drop-shadow(0 0 4px #00ff88) drop-shadow(0 0 8px rgba(0, 255, 136, 0.6));
    animation: iconNeonPulse 1.5s ease-in-out infinite alternate;
  }

  .download-btn:focus::before {
    box-shadow: 
      0 0 0 2px #00ff88 inset,
      0 0 8px #00ff88 inset,
      0 0 12px rgba(0, 255, 136, 0.4) inset;
    animation: neonInsetPulse 1.5s ease-in-out infinite alternate;
  }

  .download-btn:active {
    color: #00ff44;
  }

  .download-btn:active svg {
    color: #00ff44;
    filter: drop-shadow(0 0 6px #00ff44) drop-shadow(0 0 12px rgba(0, 255, 68, 0.8));
    animation: iconNeonFlash 0.3s ease-out;
  }

  .download-btn:active::before {
    box-shadow: 
      0 0 0 2px #00ff44 inset,
      0 0 12px #00ff44 inset,
      0 0 20px rgba(0, 255, 68, 0.8) inset;
    animation: neonInsetFlash 0.3s ease-out;
  }

  /* حالة الزر المضغوط لمدة 5 ثواني */
  .download-btn-pressed {
    color: #00ff44 !important;
    background: linear-gradient(#ffffff 30%, #ffffff 30%, #d6d6d6);
  }

  .download-btn-pressed::before {
    box-shadow: 
      0 0 0 2px #00ff44 inset,
      0 0 12px #00ff44 inset,
      0 0 20px rgba(0, 255, 68, 0.8) inset !important;
    animation: neonInsetPersistent 2s ease-in-out infinite alternate;
  }

  .download-btn-pressed svg {
    color: #00ff44 !important;
    filter: drop-shadow(0 0 6px #00ff44) drop-shadow(0 0 12px rgba(0, 255, 68, 0.8)) !important;
    animation: iconNeonPersistent 2s ease-in-out infinite alternate;
  }

  /* Animations للزر */
  @keyframes neonInsetPersistent {
    0% {
      box-shadow: 
        0 0 0 2px #00ff44 inset,
        0 0 12px #00ff44 inset,
        0 0 20px rgba(0, 255, 68, 0.8) inset;
    }
    100% {
      box-shadow: 
        0 0 0 2px #00ff66 inset,
        0 0 16px #00ff66 inset,
        0 0 24px rgba(0, 255, 102, 0.9) inset;
    }
  }

  @keyframes iconNeonPersistent {
    0% {
      filter: drop-shadow(0 0 6px #00ff44) drop-shadow(0 0 12px rgba(0, 255, 68, 0.8));
    }
    100% {
      filter: drop-shadow(0 0 8px #00ff66) drop-shadow(0 0 16px rgba(0, 255, 102, 0.9));
    }
  }

  @keyframes neonInsetPulse {
    0% {
      box-shadow: 
        0 0 0 2px #00ff88 inset,
        0 0 8px #00ff88 inset,
        0 0 12px rgba(0, 255, 136, 0.4) inset;
    }
    100% {
      box-shadow: 
        0 0 0 2px #00ffaa inset,
        0 0 10px #00ffaa inset,
        0 0 16px rgba(0, 255, 170, 0.6) inset;
    }
  }

  @keyframes iconNeonPulse {
    0% {
      filter: drop-shadow(0 0 4px #00ff88) drop-shadow(0 0 8px rgba(0, 255, 136, 0.6));
    }
    100% {
      filter: drop-shadow(0 0 6px #00ffaa) drop-shadow(0 0 12px rgba(0, 255, 170, 0.8));
    }
  }

  @keyframes neonInsetFlash {
    0% {
      box-shadow: 
        0 0 0 2px #00ff88 inset,
        0 0 8px #00ff88 inset,
        0 0 12px rgba(0, 255, 136, 0.4) inset;
    }
    50% {
      box-shadow: 
        0 0 0 2px #00ff44 inset,
        0 0 12px #00ff44 inset,
        0 0 20px rgba(0, 255, 68, 0.8) inset;
    }
    100% {
      box-shadow: 
        0 0 0 2px #00ff44 inset,
        0 0 12px #00ff44 inset,
        0 0 20px rgba(0, 255, 68, 0.8) inset;
    }
  }

  @keyframes iconNeonFlash {
    0% {
      filter: drop-shadow(0 0 4px #00ff88) drop-shadow(0 0 8px rgba(0, 255, 136, 0.6));
    }
    50% {
      filter: drop-shadow(0 0 8px #00ff44) drop-shadow(0 0 16px rgba(0, 255, 68, 1));
    }
    100% {
      filter: drop-shadow(0 0 6px #00ff44) drop-shadow(0 0 12px rgba(0, 255, 68, 0.8));
    }
  }

  .blue-line {
    position: absolute;
    bottom: 55px;
    left: 20px;
    right: 20px;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: visible;
  }

  .blue-line::after {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    height: 4px;
    width: 0%;
    background: linear-gradient(90deg, #00d4ff, #0099cc, #ffffff, #00d4ff);
    background-size: 300% 100%;
    border-radius: 10px;
    animation: progressLoad 15s linear forwards, laserPulse 5s ease-in-out infinite, electricFlow 12s linear infinite;
    box-shadow: 
      0 0 1px #00d4ff,
      0 0 2px #00d4ff,
      inset 0 0 5px rgba(255, 255, 255, 0.8);
    filter: brightness(1.2);
  }

  .blue-line::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    bottom: -1px;
    background: 
      radial-gradient(ellipse 3px 0.5px at 25% 50%, rgba(0, 212, 255, 0.3), transparent),
      radial-gradient(ellipse 2px 0.5px at 45% 50%, rgba(255, 255, 255, 0.4), transparent),
      radial-gradient(ellipse 3px 0.5px at 65% 50%, rgba(0, 212, 255, 0.2), transparent),
      radial-gradient(ellipse 2px 0.5px at 85% 50%, rgba(255, 255, 255, 0.3), transparent);
    border-radius: 10px;
    animation: sparkDischarge 10s ease-in-out infinite, electricSparks 8s linear infinite;
    opacity: 0.6;
  }

  .features-icons {
    position: absolute;
    bottom: 2px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    direction: rtl;
  }

  .feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
    flex: 1;
    opacity: 0;
    transform: scale(0);
  }

  .feature-item:nth-child(1) {
    animation: showIcon 0.5s ease-out forwards;
    animation-delay: 12s;
  }

  .feature-item:nth-child(2) {
    animation: showIcon 0.5s ease-out forwards;
    animation-delay: 9s;
  }

  .feature-item:nth-child(3) {
    animation: showIcon 0.5s ease-out forwards;
    animation-delay: 6s;
  }

  .feature-item:nth-child(4) {
    animation: showIcon 0.5s ease-out forwards;
    animation-delay: 3s;
  }

  .feature-item .icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    cursor: pointer;
  }

  .feature-item .icon:hover {
    filter: brightness(1.2) drop-shadow(0 0 12px currentColor);
    transform: scale(1.05);
  }

  .feature-item:nth-child(1) .icon {
    color: #10b981; /* أخضر للأمان */
  }

  .feature-item:nth-child(1) .icon:hover::before {
    background: #10b981;
  }

  .feature-item:nth-child(1) .icon:hover {
    color: #059669;
  }

  .feature-item:nth-child(2) .icon {
    color: #f59e0b; /* برتقالي للسرعة */
  }

  .feature-item:nth-child(2) .icon:hover::before {
    background: #f59e0b;
  }

  .feature-item:nth-child(2) .icon:hover {
    color: #d97706;
  }

  .feature-item:nth-child(3) .icon {
    color: #3b82f6; /* أزرق للثقة */
  }

  .feature-item:nth-child(3) .icon:hover::before {
    background: #3b82f6;
  }

  .feature-item:nth-child(3) .icon:hover {
    color: #2563eb;
  }

  .feature-item:nth-child(4) .icon {
    color: #ef4444; /* أحمر للجودة */
  }

  .feature-item:nth-child(4) .icon:hover::before {
    background: #ef4444;
  }

  .feature-item:nth-child(4) .icon:hover {
    color: #dc2626;
  }

  .feature-item span {
    font-size: 12px;
    font-weight: 700;
    color: #374151;
    text-align: center;
    white-space: nowrap;
    font-family: 'Tajawal', Arial, sans-serif;
  }

  @keyframes progressLoad {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes laserPulse {
    0%, 100% {
      box-shadow: 
        0 0 1px #00d4ff,
        0 0 2px #00d4ff,
        inset 0 0 5px rgba(255, 255, 255, 0.8);
      filter: brightness(1.2);
    }
    50% {
      box-shadow: 
        0 0 1.5px #00d4ff,
        0 0 3px #00d4ff,
        inset 0 0 10px rgba(255, 255, 255, 1);
      filter: brightness(1.8);
    }
  }

  @keyframes electricFlow {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 300% 50%;
    }
  }

  @keyframes sparkDischarge {
    0%, 70%, 100% {
      opacity: 0.7;
      transform: scale(1);
    }
    15%, 25%, 35% {
      opacity: 1;
      transform: scale(1.2);
    }
  }

  @keyframes electricSparks {
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 100% 25%;
    }
    50% {
      background-position: 0% 50%;
    }
    75% {
      background-position: 100% 75%;
    }
    100% {
      background-position: 0% 100%;
    }
  }

  @keyframes showIcon {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulseGlow {
    0%, 100% {
      box-shadow: 0 0 0 0 currentColor;
    }
    50% {
      box-shadow: 0 0 0 4px transparent;
    }
  }

  .feature-item .icon:hover {
    animation: pulseGlow 1.5s infinite;
  }

  /* تأثير اللمس على الأجهزة المحمولة */
  @media (hover: none) and (pointer: coarse) {
    .feature-item .icon:active {
      transform: scale(1.08) rotate(1deg);
    }
  }
`;

export default Card;