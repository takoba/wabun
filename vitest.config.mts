import { defineConfig } from 'vitest/dist/config'

export default defineConfig({
  test: {
    include: ['test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
})
