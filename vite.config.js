import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'copy-resolved',
          async resolveId(id) {
            if (id.startsWith('/img')) {
              return id
            }
            return null
          },
          async load(id) {
            if (id.startsWith('/img')) {
              const file = resolve(__dirname, id.slice(1))
              const content = await fs.promises.readFile(file)
              return `export default ${JSON.stringify(content.toString())}`
            }
            return null
          }
        }
      ],
      input: {
        index: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login/index.html'),
        category: resolve(__dirname, 'category/index.html'),
        product: resolve(__dirname, 'product/index.html'),
        sebet: resolve(__dirname, 'sebet/index.html'),
        main: resolve(__dirname, 'src/main.js'),
        swiper: resolve(__dirname, 'src/swiper.js'),
        actualCategory: resolve(__dirname, 'src/actual-category.js'),
        actualTags: resolve(__dirname, 'src/actual-tags.js'),
        allPage: resolve(__dirname, 'src/AllPage.js'),
        endirimSlide: resolve(__dirname, 'src/endirim-slide.js'),
        megaEndirim: resolve(__dirname, 'src/mega-endirim.js'),
        moreSale: resolve(__dirname, 'src/more-sale.js'),
        // Diğer sayfalar ve dosyalar buraya eklenir
      },
      output: {
        entryFileNames: '[name]/assets/[name]-[hash].js',
        chunkFileNames: '[name]/assets/[name]-[hash].js',
        assetFileNames: '[name]/assets/[name]-[hash][extname]'
      }
    },
    outDir: 'dist' // Çıktı dizini
  },
  css: {
    // Ana stil dosyalarını (style.css ve input.css) ekleyin
    include: [
      './src/style.css',
      './src/input.css'
    ]
  }
})
