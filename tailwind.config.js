/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // html 1 //
        "blog-header-color": "#02A28F",
        "section-container-color": "#D9D9D9",
        "section-text-color": "#02A28F",
        "section-text-color-item": "#616161",
        // html 2 //
        "html-2-text-color": "[rgb(97,97,97)]",
        // html 3 //
        "html3": "#616161",
        "html3-text-color": "#02A28F",
      },
      padding: {
        "section-padding-b": "60px",
        "section-p-t": "292px",
        "section-p-l": "22px",
        "blog-p-b": "40px",
        "section-p-l-item": "12px",
        " section-text-item-link-l-r": "135px",
        "103": "103px",
        "135": "135px"
      },
      margin: {
        "2": "2px",
        "49":"49px"
      },
      maxWidth: {
        "90": "360px",
        "1128": "1128px",
        "744": "744px",
        "1044":"1044px",
        "360":"360px"
      },
      height: {
        "396": "396px",
        "191": "191",
        "309":"309px"
      },
      fontSize: {
        "20": "20px",
        "14": "14px",
        "18": "18px",
        "12": "12px",
        "103": "103px",
        "18": "18px",
        "32": "32px",
        "24": "24px",
        "135": "135px",
      },
      width: {
        "auto": "auto"
      }




    },
  },
  plugins: [],
}

