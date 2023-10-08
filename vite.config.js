const { resolve } = require('path')
const { defineConfig } = require('vite')
module.exports = defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        portfolio: resolve(__dirname, 'index.html'),
        genetic: resolve(__dirname, 'geneticAlgo.html'),
        bugpage: resolve(__dirname, 'waterbug.html')
      },
    },
  }
})