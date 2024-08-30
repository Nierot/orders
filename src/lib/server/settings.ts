import { db } from '$lib/server/db'

// Source: https://github.com/ODDInvictus/ibs3/blob/main/src/lib/server/settings/settings.ts

type Settings = {
  get: (name: Setting, defaultValue?: string) => string
  getWithoutDefault: (name: Setting) => string | undefined
  getBool: (name: Setting, defaultValue?: boolean) => boolean
  getNumber: (name: Setting, defaultValue?: number) => number
  update: (settingId: number, value: string) => Promise<void>
  invalidate: () => Promise<void>
  keys: Record<Setting, string>
  unsetKeys: Setting[]
  getUnsetKeys(): Setting[]
}

export enum Setting {
  VERSION = 'VERSION',
}

export const settings = {
  /**
   * Get a setting by name
   * @param name The name of the setting
   * @param defaultValue The default value to return if the setting is not found, if no default value is provided an error is thrown
   * @returns The value of the setting
   */
  get: (name: Setting, defaultValue: string): string => {
    if (defaultValue === undefined) throw new Error(`Setting ${name} has no default value`)
    if (settings.keys[name] === undefined) return defaultValue
    return settings.keys[name] as string
  },

  getWithoutDefault: (name: Setting): string | undefined => {
    return settings.keys[name]
  },

  getBool: (name: Setting, defaultValue: boolean): boolean => {
    if (defaultValue === undefined) throw new Error(`Setting ${name} has no default value`)
    if (settings.keys[name] === undefined) return false
    return settings.keys[name] === '1'
  },

  getNumber: (name: Setting, defaultValue: number): number => {
    if (defaultValue === undefined) throw new Error(`Setting ${name} has no default value`)
    if (settings.keys[name] === undefined) return 0
    return parseInt(settings.keys[name] as string)
  },

  update: async (settingId: number, value: string) => {
    const ns = await db.setting.update({
      where: { id: settingId },
      data: { value },
    })

    settings.keys[ns.key as Setting] = value
  },

  invalidate: async () => {
    console.log('[Settings] Invalidating settings')

    // @ts-expect-error Ik wil hem resetten ja
    settings.keys = {}
    settings.unsetKeys = []

    await initSettings()
  },

  getUnsetKeys(): Setting[] {
    return settings.unsetKeys
  },
  unsetKeys: [] as Setting[],

  keys: {} as Record<Setting, string>,
} as Settings

export async function initSettings() {
  const s = await db.setting.findMany()
  // @ts-expect-error im not putting the enum in the db
  s.forEach(setting => (settings.keys[setting.key] = setting.value))

  // Check if all settings are present
  Object.values(Setting).forEach(setting => {
    if (settings.keys[setting] === undefined) {
      console.warn(`[Settings] Setting ${setting} is not present in the database`)
      settings.unsetKeys.push(setting)
    }
  })

  console.log('[Settings] Settings initialized')
}