// @ts-nocheck
import {
  createIntl,
  IntlShape,
  MessageDescriptor,
} from '/Users/thomaslwq/Desktop/ant-design-pro/node_modules/react-intl';
import { ApplyPluginsType } from 'umi';
import { event, LANG_CHANGE_EVENT } from './locale';
// @ts-ignore
import warning from '/Users/thomaslwq/Desktop/ant-design-pro/node_modules/warning/warning.js';

import { plugin } from '../core/umiExports';

export * from '/Users/thomaslwq/Desktop/ant-design-pro/node_modules/react-intl';

let g_intl: IntlShape;

const useLocalStorage = true;

export const localeInfo: {[key: string]: any} = {
  'en-US': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/account/settings/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/dashboard/analysis/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/dashboard/monitor/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/editor/flow/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/editor/koni/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/editor/mind/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/exception/500/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/form/basic-form/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/form/step-form/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/result/fail/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/result/success/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/user/login/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/user/register-result/locales/en-US.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/user/register/locales/en-US.ts')),
    },
    locale: 'en-US',
    antd: {
      ...require('antd/es/locale/en_US').default,
    },
    momentLocale: '',
  },
  'pt-BR': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/locales/pt-BR.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/dashboard/analysis/locales/pt-BR.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/dashboard/monitor/locales/pt-BR.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/exception/500/locales/pt-BR.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/form/basic-form/locales/pt-BR.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/form/step-form/locales/pt-BR.ts')),
    },
    locale: 'pt-BR',
    antd: {
      ...require('antd/es/locale/pt_BR').default,
    },
    momentLocale: 'pt-br',
  },
  'zh-CN': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/account/settings/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/dashboard/analysis/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/dashboard/monitor/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/editor/flow/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/editor/koni/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/editor/mind/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/exception/500/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/form/basic-form/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/form/step-form/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/result/fail/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/result/success/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/user/login/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/user/register-result/locales/zh-CN.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/user/register/locales/zh-CN.ts')),
    },
    locale: 'zh-CN',
    antd: {
      ...require('antd/es/locale/zh_CN').default,
    },
    momentLocale: 'zh-cn',
  },
  'zh-TW': {
    messages: {
      ...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/locales/zh-TW.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/account/settings/locales/zh-TW.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/dashboard/analysis/locales/zh-TW.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/dashboard/monitor/locales/zh-TW.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/exception/500/locales/zh-TW.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/form/basic-form/locales/zh-TW.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/form/step-form/locales/zh-TW.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/result/fail/locales/zh-TW.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/result/success/locales/zh-TW.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/user/login/locales/zh-TW.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/user/register-result/locales/zh-TW.ts')),...((locale) => locale.__esModule ? locale.default : locale)(require('/Users/thomaslwq/Desktop/ant-design-pro/src/pages/user/register/locales/zh-TW.ts')),
    },
    locale: 'zh-TW',
    antd: {
      ...require('antd/es/locale/zh_TW').default,
    },
    momentLocale: 'zh-tw',
  },
};

/**
 * ?????????????????????????????????
 * @param name ????????? key
 * @param messages ?????????????????????
 * @param extraLocale momentLocale, antd ?????????
 */
export const addLocale = (
  name: string,
  messages: Object,
  extraLocales: {
    momentLocale:string;
    antd:string
  },
) => {
  if (!name) {
    return;
  }
  // ????????????
  const mergeMessages = localeInfo[name]?.messages
    ? Object.assign({}, localeInfo[name].messages, messages)
    : messages;

  const { momentLocale, antd } = extraLocales || {};
  localeInfo[name] = {
    messages: mergeMessages,
    locale: name.split('-')?.join('-'),
    momentLocale: momentLocale,
    antd,
  };
};

/**
 * ??????????????? intl ?????????????????? node ?????????
 * @param locale ???????????????????????????
 * @param changeIntl ??????????????? g_intl
 * @returns IntlShape
 */
export const getIntl = (locale?: string, changeIntl?: boolean) => {
  // ??????????????? g_intl ?????????????????? setIntl ??????
  if (g_intl && !changeIntl && !locale) {
    return g_intl;
  }
  // ??????????????? localeInfo ???
  if (locale&&localeInfo[locale]) {
    return createIntl(localeInfo[locale]);
  }
  // ?????????????????????????????????
  warning(
    !locale||!!localeInfo[locale],
    `The current popular language does not exist, please check the locales folder!`,
  );
  // ?????? zh-CN
  if (localeInfo["zh-CN"]) return createIntl(localeInfo["zh-CN"]);

  // ????????????????????????????????????
  return createIntl({
    locale: "zh-CN",
    messages: {},
  });
};

/**
 * ??????????????? intl ?????????
 * @param locale ?????????key
 */
export const setIntl = (locale: string) => {
  g_intl = getIntl(locale, true);
};

/**
 * ???????????????????????????
 * @returns string
 */
export const getLocale = () => {
  const runtimeLocale = plugin.applyPlugins({
    key: 'locale',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  // runtime getLocale for user define
  if (typeof runtimeLocale?.getLocale === 'function') {
    return runtimeLocale.getLocale();
  }
  // please clear localStorage if you change the baseSeparator config
  // because changing will break the app
  const lang =
    typeof localStorage !== 'undefined' && useLocalStorage
      ? window.localStorage.getItem('umi_locale')
      : '';
  // support baseNavigator, default true
  let browserLang;
  const isNavigatorLanguageValid =
    typeof navigator !== 'undefined' && typeof navigator.language === 'string';
  browserLang = isNavigatorLanguageValid
    ? navigator.language.split('-').join('-')
    : '';
  return lang || browserLang || "zh-CN";
};

/**
 * ????????????
 * @param lang ????????? key
 * @param realReload ?????????????????????????????????
 * @returns string
 */
export const setLocale = (lang: string, realReload: boolean = true) => {
  const localeExp = new RegExp(`^([a-z]{2})-?([A-Z]{2})?$`);

  const runtimeLocale = plugin.applyPlugins({
    key: 'locale',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  if (typeof runtimeLocale?.setLocale === 'function') {
    runtimeLocale.setLocale({
      lang,
      realReload,
      updater: (updateLang = lang) => event.emit(LANG_CHANGE_EVENT, updateLang),
    });
    return;
  }
  if (lang !== undefined && !localeExp.test(lang)) {
    // for reset when lang === undefined
    throw new Error('setLocale lang format error');
  }
  if (getLocale() !== lang) {
    if (typeof window.localStorage !== 'undefined' && useLocalStorage) {
      window.localStorage.setItem('umi_locale', lang || '');
    }
    setIntl(lang);
    if (realReload) {
      window.location.reload();
    } else {
      event.emit(LANG_CHANGE_EVENT, lang);
      // chrome ????????????????????????????????????????????????
      if (window.dispatchEvent) {
        const event = new Event('languagechange');
        window.dispatchEvent(event);
      }
    }
  }
};

let firstWaring = true;

/**
 * intl.formatMessage ????????????
 * @deprecated ????????? api ???????????????????????????????????????????????????????????? useIntl ??? injectIntl
 * @param descriptor { id : string, defaultMessage : string }
 * @param values { [key:string] : string }
 * @returns string
 */
export const formatMessage: IntlShape['formatMessage'] = (
  descriptor: MessageDescriptor,
  values: any,
) => {
  if (firstWaring) {
    warning(
      false,
      `Using this API will cause automatic refresh when switching languages, please use useIntl or injectIntl.

????????? api ???????????????????????????????????????????????????????????? useIntl ??? injectIntl???

http://j.mp/37Fkd5Q
      `,
    );
    firstWaring = false;
  }
  return g_intl.formatMessage(descriptor, values);
};

/**
 * ??????????????????
 * @returns string[]
 */
export const getAllLocales = () => Object.keys(localeInfo);
