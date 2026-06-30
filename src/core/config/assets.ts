export const brandAssets = {
  logo: {
    primary: '/webblox-logo-primary.svg',
    dark: '/webblox-logo-dark.svg',
    stacked: '/webblox-logo-stacked.svg',
    icon: '/webblox-icon.svg',
  },
  appIcon: {
    blue: '/webblox-app-blue.svg',
    white: '/webblox-app-white.svg',
    navy: '/webblox-app-navy.svg',
  },
} as const

export type LogoVariant = keyof typeof brandAssets.logo
