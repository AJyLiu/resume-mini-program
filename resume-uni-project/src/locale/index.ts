import en from './en.json'
import zh from './zh.json'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: uni.getLocale(),
  legacy: false,
  globalInjection: true,
  messages: {
	'zh-Hans': {
      ...zh
	},
	en: {
      ...en
	}
  }
})

export { i18n }