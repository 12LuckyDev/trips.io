import * as PATHS from "./paths";
import * as PAGE_TYPES from "./page-types";

import { HomePage, LoginPage, TripsPage, NewTripPage } from "@pages";

const PAGES_CONFIG = [
  {
    path: PATHS.LANDING,
    type: PAGE_TYPES.ONLY_FOR_LOGGED_IN,
    component: HomePage,
    redirectPath: PATHS.LOGIN,
    exact: true,
  },
  {
    path: PATHS.LOGIN,
    type: PAGE_TYPES.ONLY_FOR_UNLOGGED_IN,
    component: LoginPage,
    redirectPath: PATHS.LANDING,
  },
  {
    path: PATHS.NEW_TRIP,
    type: PAGE_TYPES.ONLY_FOR_LOGGED_IN,
    component: NewTripPage,
    redirectPath: PATHS.LOGIN,
  },
  {
    path: PATHS.TRIPS,
    type: PAGE_TYPES.ONLY_FOR_LOGGED_IN,
    component: TripsPage,
    redirectPath: PATHS.LOGIN,
  },
];

export default PAGES_CONFIG;
