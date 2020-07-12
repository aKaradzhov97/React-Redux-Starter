// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import jestFetchMock from 'jest-fetch-mock';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

jestFetchMock.enableMocks();

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: { en: { translations: {} } },
});
