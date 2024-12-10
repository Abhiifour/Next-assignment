import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bannerText:"rgba(189, 162, 176, 1)",
        blackText:'rgba(57, 57, 57, 1)',
        primaryText:"rgba(17, 25, 40, 1)",
        secondary:"rgba(93, 93, 93, 1)",
        primary :"rgba(156, 156, 156, 1)",
        inputText : "rgba(102, 116, 130, 1)",
        textblue: "rgba(92, 210, 221, 1)",
        brownText : "#7C5368",
        gradientPink : "rgba(255, 243, 249, 1)",
        gradientWhite : "#FFFFFF",
        quantityText: '#546A7D',
        quantitybg :  '#F1F4F6',
        corouselbg: "#FBF9F899",
        buttonbg : "#5CD2DD",
      
        profilebg : "#EAEDEE",
        bgblue : "#0093D0",
        borderblue:"#007AAD",
        searchText:"#667482",
        bggrey : "rgba(249, 250, 251, 1)",
        productbg:"#F8F6F4",
        cardbg:"#F9F7F5",
      },
      fontFamily:{
        poppins :['Poppins','serif'],
        inter : ['Inter'],
        playfair:['Playfair'],
        cabinet: ['"Cabinet Grotesk"'],
        geist :['Geist']
      },
      screens:{
        'lg': { max: '1023px' }, // Tablet and smaller
        'md': { max: '767px' },  // Small tablets and phones
        'sm': { max: '639px' },  // Phones
      }
    },
  },
  plugins: [],
} satisfies Config;
