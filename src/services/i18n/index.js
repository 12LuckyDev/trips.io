import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./resources/en";
import pl from "./resources/pl";

i18n.use(initReactI18next).init({
	resources: { en, pl },
	lng: "pl",
	keySeparator: false,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
