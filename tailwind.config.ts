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
        "main-black": "#131313",
        "main-text": "#f1f1f1",
        "primary": "#efc004fa",
        "primary-darker": "#c7a004"
      },
      backgroundImage: {
				"radial-faded": "radial-gradient(ellipse 60% 30% at 40% -5%,#6b5603,transparent 60%)"
    		},
    },
  },
  plugins: [],
} satisfies Config;
