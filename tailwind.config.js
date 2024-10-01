module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		screens: {
  			'769': '769px'
  		},
  		gridTemplateRows: {
  			'8': 'repeat(8, minmax(0, 1fr))'
  		},
  		backgroundImage: {
  			bgcc: "url('/images/bg-clouds.jpg')",
  			bgoval: "url('/images/oval.png')"
  		},
  		colors: {
  			bgColor: '#FCF9F6',
  			textBlack: '#3B3A40',
  			black: '#171722',
  			lightGray: '#B6BABE',
  			lightOrange: '#FDF7ED',
  			brandOrange: '#FF7C5C',
  			brandSolidOrange: '#FF7246',
  			lightBrown: '#FFF3DE',
  			gradientOne: 'rgba(255, 255, 255, 0)',
  			gradientTwo: 'rgba(255, 248, 237, 1)',
  			brandBlue: '#81CFE3',
  			gray: {
  				'100': '#FBFBFB',
  				'200': '#EAEAEA',
  				'300': '#DFDFDF',
  				'400': '#999999',
  				'500': '#7F7F7F',
  				'600': '#666666',
  				'700': '#4C4C4C',
  				'800': '#333333',
  				'900': '#191919'
  			},
  			blue: {
  				'100': '#E6F0FD',
  				'200': '#CCE2FC',
  				'300': '#99C5FA',
  				'400': '#66A9F7',
  				'500': '#338CF5',
  				'600': '#0070F4',
  				'700': '#0064DA',
  				'800': '#0059C2',
  				'900': '#004391'
  			},
  			teal: {
  				'100': '#E6FFFA',
  				'200': '#B2F5EA',
  				'300': '#81E6D9',
  				'400': '#4FD1C5',
  				'500': '#3ABAB4',
  				'600': '#319795',
  				'700': '#2C7A7B',
  				'800': '#285E61',
  				'900': '#234E52'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			xs: '0 0 0 1px rgba(0, 0, 0, 0.16)',
  			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.16)',
  			default: '0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
  			md: '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
  			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
  			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
  			'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  			inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
  			outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  			none: 'none'
  		},
  		spacing: {
  			'9/16': '56.25%',
  			'3/4': '75%',
  			'1/1': '100%'
  		},
  		fontFamily: {
  			sans: ['Anek Bangla', 'sans-serif']
  		},
  		fontSize: {
  			xxs: '0.55rem',
  			xs: '0.75rem',
  			sm: '0.875rem',
  			base: '1rem',
  			lg: '1.125rem',
  			xl: '1.25rem',
  			'2xl': '1.5rem',
  			'3xl': '2rem',
  			'4xl': '2.625rem',
  			'5xl': '3.25rem',
  			'6xl': '5.5rem',
  			'7xl': '6rem',
  			'8xl': '8rem'
  		},
  		inset: {
  			'1/2': '50%',
  			full: '100%'
  		},
  		letterSpacing: {
  			tighter: '-0.02em',
  			tight: '-0.01em',
  			normal: '0',
  			wide: '0.01em',
  			wider: '0.02em',
  			widest: '0.4em'
  		},
  		lineHeight: {
  			'3': '.75rem',
  			'4': '1rem',
  			'5': '1.2rem',
  			'6': '1.5rem',
  			'7': '1.75rem',
  			'8': '2rem',
  			'9': '2.25rem',
  			'10': '2.5rem',
  			none: '1',
  			tighter: '1.125',
  			tight: '1.25',
  			snug: '1.375',
  			normal: '1.5',
  			relaxed: '1.625',
  			loose: '2'
  		},
  		minWidth: {
  			'10': '2.5rem',
  			'48': '12rem'
  		},
  		opacity: {
  			'90': '0.9'
  		},
  		scale: {
  			'98': '.98'
  		},
  		animation: {
  			float: 'float 3s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-5%)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		zIndex: {
  			'30': '30',
  			'40': '40',
  			'50': '50',
  			'100': '100',
  			'-1': '-1'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
}
