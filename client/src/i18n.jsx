/**@Author: Rodrigo Vega
 * @Description: Este componente es utilizado para la traducción de la página
 * en español e inglés.
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
	en: {
		translation: {
			welcome: 'Welcome!',
			button: 'Change language to Spanish',
		},
	},
	es: {
		translation: {
			welcome: '¡Bienvenido!',
			button: 'Cambiar idioma a inglés',
		},
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
