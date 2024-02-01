import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        Pretendard: 'Pretendard',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        black: {
          '000000': '#000000',
          '171717': '#171717',
          '333236': '#333236',
          '4B4B4B': '#4B4B4B',
        },
        gray: {
          '787486': '#787486',
          '9FA6B2': '#9FA6B2',
          'D9D9D9': '#D9D9D9',
          'EEEEEE': '#EEEEEE',
          'FAFAFA': '#FAFAFA',
        },
        violet: {
          '5534DA': '#5534DA',
          '8%': '#F1EFFD',
        },
        green: {
          '7AC555': '#7AC555',
          'A3C4A2': '#A3C4A2',
        },
        pink: {
          'E876EA': '#E876EA',
          'F4D7DA': '#F4D7DA',

        },
        orange: {
          'FFA500': '#FFA500',
          'FFC85A': '#FFC85A'
        },
        blue: {
          '76A5EA': '#76A5EA',
          '9DD7ED': '#9DD7ED',
        },
        'red-D6173A': '#D6173A',
        'purple-760DDE': '#760DDE',
        'yellow-FDD446': '#FDD446',
        'brown-C4B1A2': '#C4B1A2',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundColor: {
        'pink-f4d7da': '#F4D7DA',
        'orange-ffc85a': '#FFC85A',
        'yellow-fdd446': '#FDD446',
        'blue-9dd7ed': '#9DD7ED',
        'brown-c4b1a2': '#C4B1A2',
        'green-a3c4a2': '#A3C4A2',
        'gray-fafafa': '#FAFAFA',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;