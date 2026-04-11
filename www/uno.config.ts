import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWind4 } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'container': 'max-w-3xl mx-auto py-4 px-4',
      'text-muted': 'text-gray-600 dark:text-gray-300',
    },
  ],
  presets: [
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWind4(),
  ],
})
