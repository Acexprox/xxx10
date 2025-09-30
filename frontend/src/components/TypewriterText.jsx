import React, { useState, useEffect } from 'react';

const TypewriterText = ({ 
  lines = [], 
  speed = 80, 
  delay = 800, 
  showCursor = true,
  lineDelay = 300
}) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!lines || lines.length === 0) return;

    // إعادة تعيين الحالة
    setDisplayedLines(lines.map(() => ''));
    setCurrentLineIndex(-1);
    setCurrentCharIndex(0);
    setIsCompleted(false);

    const startTyping = setTimeout(() => {
      setCurrentLineIndex(0);
      
      let lineIndex = 0;
      let charIndex = 0;

      const typeCharacter = () => {
        if (lineIndex < lines.length) {
          const currentLine = lines[lineIndex];
          
          if (charIndex < currentLine.length) {
            // إضافة الحرف التالي
            setDisplayedLines(prev => {
              const newLines = [...prev];
              newLines[lineIndex] = currentLine.substring(0, charIndex + 1);
              return newLines;
            });
            charIndex++;
            setTimeout(typeCharacter, speed);
          } else {
            // انتهى السطر، انتقل للتالي
            lineIndex++;
            charIndex = 0;
            setCurrentLineIndex(lineIndex);
            
            if (lineIndex < lines.length) {
              setTimeout(typeCharacter, lineDelay);
            } else {
              setIsCompleted(true);
            }
          }
        }
      };

      typeCharacter();
    }, delay);

    return () => clearTimeout(startTyping);
  }, [lines, speed, delay, lineDelay]);

  return (
    <div style={{ direction: 'rtl', textAlign: 'center', width: '100%' }}>
      {lines.map((_, lineIndex) => (
        <div key={lineIndex} style={{ minHeight: '1.2em' }}>
          {displayedLines[lineIndex]}
          {/* مؤشر أثناء الكتابة */}
          {lineIndex === currentLineIndex && !isCompleted && showCursor && (
            <span 
              className="professional-cursor"
              style={{
                display: 'inline-block',
                width: '3px',
                height: '1.1em',
                marginLeft: '4px',
                verticalAlign: 'middle',
                animation: 'professionalBlink 1.2s ease-in-out infinite'
              }}
            />
          )}
          {/* مؤشر متحرك احترافي في نهاية آخر سطر بعد انتهاء الكتابة */}
          {lineIndex === lines.length - 1 && isCompleted && showCursor && (
            <span 
              className="professional-cursor final-professional"
              style={{
                display: 'inline-block',
                width: '3px',
                height: '1.1em',
                marginLeft: '4px',
                verticalAlign: 'middle',
                animation: 'professionalBlink 1.2s ease-in-out infinite'
              }}
            />
          )}
        </div>
      ))}
      <style dangerouslySetInnerHTML={{
        __html: `
          .professional-cursor {
            background: linear-gradient(180deg, 
              #1e3a8a 0%, 
              #3b82f6 50%, 
              #1e40af 100%);
            border-radius: 1px;
            position: relative;
            box-shadow: 
              0 0 8px rgba(59, 130, 246, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
            transform-origin: center;
          }
          
          .professional-cursor::before {
            content: '';
            position: absolute;
            top: 0;
            left: -1px;
            right: -1px;
            bottom: 0;
            background: linear-gradient(180deg, 
              rgba(59, 130, 246, 0.2) 0%, 
              rgba(30, 64, 175, 0.3) 50%, 
              rgba(59, 130, 246, 0.2) 100%);
            border-radius: 2px;
            z-index: -1;
            filter: blur(2px);
          }
          
          .final-professional {
            background: linear-gradient(180deg, 
              #1e3a8a 0%, 
              #3b82f6 50%, 
              #1e40af 100%);
            box-shadow: 
              0 0 10px rgba(59, 130, 246, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
          }
          
          .final-professional::before {
            background: linear-gradient(180deg, 
              rgba(59, 130, 246, 0.2) 0%, 
              rgba(30, 64, 175, 0.3) 50%, 
              rgba(59, 130, 246, 0.2) 100%);
          }
          
          @keyframes professionalBlink {
            0%, 60% { 
              opacity: 1; 
              transform: scaleY(1);
              box-shadow: 
                0 0 8px rgba(59, 130, 246, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.3);
            }
            61%, 100% { 
              opacity: 0.2; 
              transform: scaleY(0.95);
              box-shadow: 
                0 0 4px rgba(59, 130, 246, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }
          }
          
          @keyframes professionalPulse {
            0%, 100% { 
              opacity: 1; 
              transform: scaleY(1);
              box-shadow: 
                0 0 10px rgba(59, 130, 246, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.4);
            }
            50% { 
              opacity: 0.3; 
              transform: scaleY(0.9);
              box-shadow: 
                0 0 6px rgba(59, 130, 246, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
            }
          }
        `
      }} />
    </div>
  );
};

export default TypewriterText;