import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWind4 } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'text-muted': 'text-neutral-600 dark:text-neutral-400',
      'header-button': 'w-5 h-5 text-muted transition hover:text-neutral-500 dark:hover:text-white',
    },
  ],
  presets: [
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWind4(),
  ],
})
