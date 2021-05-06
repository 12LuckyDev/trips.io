import { useTranslation } from "react-i18next";

const useTranslatedLabel = (
	name,
	namespace,
	{ labelText = null, returnNameToo = true } = {}
) => {
	const { t } = useTranslation();
	const translated = labelText
		? t(labelText)
		: namespace && name
		? t(`${namespace}:${name}`)
		: name
		? t(`${name}`)
		: null;
	return returnNameToo
		? {
				name,
				labelText: translated,
		  }
		: translated;
};

export default useTranslatedLabel;
