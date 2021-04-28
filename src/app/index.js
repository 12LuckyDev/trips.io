import React from "react";
import { Global, ThemeWrapper, THEME_NAMES } from "@styles";
import { PageRouter } from "@components";
import { PAGES_CONFIG } from "@consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@services";
import { useTranslation } from "react-i18next";

const App = () => {
	const [user] = useAuthState(auth);
	const { t, i18n } = useTranslation();

	return (
		<ThemeWrapper themeName={THEME_NAMES.DARK}>
			<Global />
			<PageRouter isUserSignedIn={!!user} config={PAGES_CONFIG}></PageRouter>
		</ThemeWrapper>
	);
};

export default App;
