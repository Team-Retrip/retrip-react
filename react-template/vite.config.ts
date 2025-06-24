import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import fs from 'fs'

const resolve = (p: string) => path.resolve(__dirname, p)

function getComponentImports() {
  const autoImportFiles = ['./.eslintrc-auto-import.json', './src/auto-imports.d.ts']
  autoImportFiles.map((importFile) => {
    const isExist = fs.existsSync(importFile)
    if (isExist) {
      fs.rm(importFile, (err) => {
        if (err) {
          console.log(err)
        }
      })
    }
  })

  return []
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    AutoImport({
      // eslintrc: {
      //   enabled: true,
      //   filepath: resolve('./.eslintrc-auto-import.json') // 명시적으로 설정
      // },
      dts: resolve('./src/auto-imports.d.ts'),
      imports: [...getComponentImports(), 'react', 'react-router-dom'],
      include: [/\.[tj]sx?$/]
    })
  ]
})
