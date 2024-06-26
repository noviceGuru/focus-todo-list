/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  },
  resolve: {
    alias: {
        "components": path.resolve(__dirname, "src/components"),
        "assets": path.resolve(__dirname, "src/assets"),
        "features": path.resolve(__dirname, "src/features"),
    },
  },
  base: '/focus-todo-list'
})
