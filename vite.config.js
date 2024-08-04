const { resolve } = require('path')
const { defineConfig } = require('vite')

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        portfolio: resolve(__dirname, 'index.html'),
        genetic: resolve(__dirname, './GeneticAlgorithmJS/geneticAlgo3d/index.html'),
        bugpage: resolve(__dirname, 'waterbug.html'),
        robots: resolve(__dirname, './public/robots.txt')
      },
    },
  }
})