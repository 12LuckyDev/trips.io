import React from "react";

// TODO i18n here
const TextBase = ({ component: Component, children }) =>
	Component ? <Component>{children}</Component> : null;

export default TextBase;
