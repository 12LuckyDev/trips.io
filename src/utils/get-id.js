import { v4 as uuid } from "uuid";

const getId = () => uuid().replaceAll("-", "");

export default getId;
