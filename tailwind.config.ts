/** @type {import('tailwindcss').Config} */
import {type Config} from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'selector',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9'
      },
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif'],
        'helvetica': ['Helvetica', 'sans-serif'],
        'astric': ['Astric', 'sans-serif'],
        'time': ['Times New Roman', 'serif'],
        'banana': ['Banana', 'cursive'],
        'tahoma': ['Tahoma', 'sans-serif'],
        'trebuchet': ['Trebuchet MS', 'sans-serif'],
        'aktive': ['aktiv-grotesk', 'sans-serif'],
        'arial': ['Arial', 'sans-serif'],
        'verdana': ['Verdana', 'sans-serif'],
        'georgia': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
