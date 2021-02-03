import React from "react";
import { Redirect } from "react-router-dom";
import { PATHS } from "@consts";

const HomePage = () => <Redirect to={PATHS.TRIPS} />;

export default HomePage;
