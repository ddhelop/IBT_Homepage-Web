import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // 폰트패밀리
        roboto: ['var(--roboto)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      // animation library
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // 다른 애니메이션 키 프레임을 여기에 추가
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        infiniteScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        infiniteScrollLeft: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0%)' },
        },
      },

      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        infiniteScroll: 'infiniteScroll 50s linear infinite',
        infiniteScrollLeft: 'infiniteScrollLeft 50s linear infinite',
        // 다른 애니메이션 이름을 여기에 추가
        pulse: 'pulse 3s infinite',
      },
      colors: {
        'primary-green': '#79AD4B',
        'footer-black': '#1C1C1C',
        'category-back': '#C3C3C3',
      },
      lineHeight: {
        'extra-loose': '2.5',
      },
    },
  },

  plugins: [],
  darkMode: 'class',
}
export default config
