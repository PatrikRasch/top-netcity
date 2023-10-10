/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Roxborough: 'Roxborough',
        Hertical: 'Hertical',
        ArialBlack: 'Arial-Black',
        Geneva: 'Geneva',
        Helvetica: 'Helvetica',
      },
      colors: {
        purpleMain: '#6E77D1',
        purpleSoft: '#e2e5f8',
        redMain: '#e83640',
        redSoft: '#f9e5e4',
        grayMain: '#4b4b4b',
        grayMediumPlus: '#7d7d7d',
        grayMedium: '#bbbbba',
        graySoft: '#e6e6e7',
        graySoftest: '#efeeef',

        textMain: '#373736',
        textMedium: '#858485',
        textSoft: '#949495',

        grayLineThin: '#D9D9D9',
      },
      fontSize: {
        verySmall: '11px',
        smaller: '12px',
        small: '13px',
        medium: '15px',
        large: '20px',
      },
      keyframes: {
        'slide-in-and-out': {
          '0%, 15%': { transform: 'translateY(24px)', opacity: '100%' },
          '15%, 25%': { transform: 'translateY(0px)' },
          '40%, 100%': { transform: 'translateY(-24px)' },
        },
        'title-reveal': {
          '0%': { transform: 'translateX(-40px)', opacity: 0 },
          '100%': { transform: 'translateX(0px)', opacity: 1 },
        },
        'project-information': {
          '0%': { transform: 'translateX(-40px)', opacity: 0 },
          '100%': { transform: 'translateX(0px)', opacity: 1 },
        },
        logo: {
          '0%': { transform: 'translateY(80px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'slide-in-and-out1': 'slide-in-and-out 8s ease-in-out 1.5s infinite',
        'slide-in-and-out2': 'slide-in-and-out 8s ease-in-out 3.5s infinite',
        'slide-in-and-out3': 'slide-in-and-out 8s ease-in-out 5.5s infinite',
        'slide-in-and-out4': 'slide-in-and-out 8s ease-in-out 7.5s infinite',
        'title-reveal': 'title-reveal 1s ease 1s forwards',
        'project-information1': 'project-information 1s ease 1.2s forwards',
        'project-information2': 'project-information 1s ease 1.3s forwards',
        'project-information3': 'project-information 1s ease 1.4s forwards',
        'project-information4': 'project-information 1s ease 1.5s forwards',
        logo: 'logo 1s ease-in-out 0.4s both',
      },
    },
  },

  plugins: [],
}
