/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			LimeGreen: 'hsl(136, 65%, 51%)',
  			Cyan: 'hsl(192, 70%, 51%)',
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
  		backgroundColor: {
  			DarkBlue: 'hsl(233, 26%, 24%)',
  			GrayBlue: 'hsl(233, 8%, 62%)',
  			LightGrayBlue: ' hsl(220, 16%, 96%)',
  			LightGray: 'hsl(0, 0%, 98%)'
  		},
  		textColor: {
  			DarkBlue: 'hsl(233, 26%, 24%)',
  			GrayBlue: 'hsl(233, 8%, 62%)',
  			LimeGreen: 'hsl(136, 65%, 51%)',
  			LightGray: 'hsl(0, 0%, 98%)',
  			LightGrayBlue: ' hsl(220, 16%, 96%)'
  		},
  		backgroundImage: {
  			desktop: "url('/src/assets/images/bg-intro-desktop.svg')",
  			mobile: "url('/src/assets/images/bg-intro-mobile.svg')"
  		},
  		fontFamily: {
  			sans: [
  				'Public Sans',
  				'ui-sans-serif',
  				'system-ui'
  			]
  		},
  		borderColor: {
  			imeGreen: 'hsl(136, 65%, 51%)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
