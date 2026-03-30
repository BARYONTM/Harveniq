import React from 'react';
import { useTheme } from './ThemeContext';

const Logo = ({ className = "" }) => {
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? '#ffffff' : '#23395d'; // Dark blue in light mode, white in dark mode
  const lightBlue = '#3b82f6';
  const darkBlue = '#23395d';

  return (
    <div className={`brand-logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <svg width="240" height="40" viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text 
          x="0" 
          y="28" 
          fontFamily="'Inter', sans-serif" 
          fontWeight="700" 
          fontSize="30" 
          fill={textColor} 
          letterSpacing="2"
        >
          HARVENIQ
        </text>
        
        <g transform="translate(185, 4)">
          {/* Bottom Left - Dark Blue */}
          <rect x="0" y="12" width="8" height="8" fill={theme === 'dark' ? lightBlue : darkBlue} opacity={theme === 'dark' ? 0.8 : 1} />
          
          {/* Top Left - Light Blue */}
          <rect x="4" y="0" width="8" height="8" fill={lightBlue} />
          
          {/* Bottom Right - Light Blue */}
          <rect x="14" y="12" width="8" height="8" fill={lightBlue} />
          
          {/* Top Right - Light Blue (Smaller) */}
          <rect x="18" y="2" width="6" height="6" fill={lightBlue} />
          
          {/* Far Top Right - Light Blue (Tiny) */}
          <rect x="28" y="0" width="4" height="4" fill={lightBlue} />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
