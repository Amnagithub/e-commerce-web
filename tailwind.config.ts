import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      
      backgroundImage: {
        'hero': "url('/background.png')"
        
      }, 
    
      letterSpacing:{
        '3pct':'3%'
      },
      fontFamily:{
        poppins:['Poppins','Inter']
      },
     colors:{
      'posterbg':'#FBEBB5',
      'chairbg':'#FAF4F4',
      'text':'#9F9F9F',
      'bgpink':'#FFF9E5',
      'bgblue':'#816DFA',
      'bggold':'#CDBA7B',
     
       
              
    
  },
    },
  },
  plugins: [],
};
export default config;
