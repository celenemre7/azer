// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scroll-wheel': 'scroll 2.2s cubic-bezier(0.65,0.05,0.36,1) infinite',
        'gradient-pulse': 'pulse 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'text-glow': 'textGlow 2.5s ease-in-out infinite',
        'zoom-in': 'zoomIn 20s ease forwards',
        'underline-expand': 'underlineExpand 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(12px)', opacity: '0.4' },
        },
        textGlow: {
          '0%, 100%': { textShadow: '0 0 8px rgba(110, 231, 183, 0)' },
          '50%': { textShadow: '0 0 8px rgba(110, 231, 183, 0.4)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        underlineExpand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'noise': "url('/assets/noise.png')",
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to))',
      }
    },
  },
  plugins: [],
}

export default config