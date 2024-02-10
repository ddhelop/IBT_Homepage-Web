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
        fadeInDown: {
          from: {
            opacity: '0' /* 시작: 투명도 0 (완전히 투명) */,
            transform: 'translateY(-50px)' /* 위에서 50px 아래로 이동 시작 */,
          },
          to: {
            opacity: '1' /* 끝: 투명도 1 (완전히 불투명) */,
            transform: 'translateY(0)' /* 원래 위치로 이동 완료 */,
          },
        },
      },

      animation: {
        // FadeInDown
      },
      colors: {
        'primary-green': '#79AD4B',
        'footer-black': '#1C1C1C',
        'category-back': '#C3C3C3',
        'battery-back': '#EAEAEA',
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
