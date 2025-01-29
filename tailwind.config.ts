import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#181818",
        "main-text": "#f1f1f1",
        "primary": "#efc004fa",
        "primary-darker": "#c7a004"
      },
      backgroundImage: {
				"radial-faded": "radial-gradient(ellipse 60% 30% at 40% -5%,#6b5603,transparent 60%)",
    	},
      keyframes: {
				"fade-in": {
    				from: {
						opacity: "0",
						transform: "translateY(10px)"
    				},
    				to: {
						opacity: "1",
						transform: "none"
    				}
    			},
				"move-y": {
					"0%": {
						transform: "translateY(0px)"
    				},
    				"50%": {
						transform: "translateY(15px)",
            color:"#c7a004"
    				},
					"100%": {
						transform: "translateY(0px)"
    				}
    			},
    		},
    		animation: {
    			"fade-in": "fade-in var(--animation-ms) ease forwards",
    			"move-y": "move-y 1200ms ease infinite",
    		}
    },
  },
  plugins: [],
} satisfies Config;
