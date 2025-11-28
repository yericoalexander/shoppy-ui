/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-out-right': 'slideOutRight 0.3s ease-in',
        'bounce-in': 'bounceIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shrink': 'shrink 4s linear forwards',
        'celebratory': 'celebratory 2s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'flip-card': 'flipCard 0.6s ease-in-out',
        'rubber-band': 'rubber-band 0.8s',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 12s linear infinite reverse',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shrink: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
        celebratory: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '1'
          },
          '25%': { 
            transform: 'translateY(-10px) rotate(5deg)',
            opacity: '0.8'
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(-5deg)',
            opacity: '1'
          },
          '75%': { 
            transform: 'translateY(-10px) rotate(3deg)',
            opacity: '0.9'
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        glow: {
          'from': {
            'text-shadow': '0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0ff',
          },
          'to': {
            'text-shadow': '0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6',
          },
        },
        shimmer: {
          '0%': {
            'background-position': '-468px 0'
          },
          '100%': {
            'background-position': '468px 0'
          },
        },
        morph: {
          '0%': { 'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { 'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%' },
          '100%': { 'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%' }
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        flipCard: {
          '0%': { transform: 'rotateY(0)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        rubberBand: {
          'from': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
          'to': { transform: 'scale3d(1, 1, 1)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};
