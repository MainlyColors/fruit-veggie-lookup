import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const { PORT = 3001 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: 'localhost',
  //   port: PORT,
  //   open: '/public/index.html',
  // },
  build: {
    outDir: 'dist/app',
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      // input: './src/app/main.jsx',
      // input: './src/app/main.jsx', // this doesn't grab the index.html
    },
  },
});

// build: {
// server: {
//   proxy: {
//     '/api': {
//       target: `http://localhost:${PORT}`,
//       changeOrigin: true,
//     },
//   },
// },
// starter
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })
