const { resolve } = require('path')
const { defineConfig } = require('vite')
module.exports = defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'geneticAlgo.html'),
        nested: resolve(__dirname, 'waterbug.html')
      },
    },
  }
})
