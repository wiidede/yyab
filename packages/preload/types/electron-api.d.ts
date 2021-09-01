
interface ElectronApi {
  readonly versions: Readonly<NodeJS.ProcessVersions>
}

declare interface Window {
  electron: Readonly<ElectronApi>
  electronRequire?: NodeRequire
  darkMode: {
    light: () => Promise,
    dark: () => Promise,
    system: () => Promise,
    [func: string]: () => Promise,
  }
}
