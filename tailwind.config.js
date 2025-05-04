/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],  // HTML/JS内のクラスを対象にする
  darkMode: 'class',  // class ベースのダークモードを有効化
  theme: {
    extend: {
      colors: {
        'top-color': '#006888',
        'heading': '#fcfbfc',
      },
    },
  },
  plugins: [],
}

