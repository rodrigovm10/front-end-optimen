/**@Author: Rodrigo Vega
 * @Description: Este componente es el principal, donde se llama al componente App
 * siendo el de las rutas, además de que se utiliza, para usar el almacenamiento
 * de los datos, además de lo necesario para la traducción.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { store } from './app/store';
import { Provider } from 'react-redux';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

if (process.env.NODE_ENV === 'production') disableReactDevTools();

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'en',
	resources: {
		es: {
			global: global_es,
		},
		en: {
			global: global_en,
		},
	},
});

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<Provider store={store}>
				<App />
			</Provider>
		</I18nextProvider>
	</React.StrictMode>
);
