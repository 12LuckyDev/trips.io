import localforage from "localforage";
import { getId } from "@utils";

export const localImageDB = localforage.createInstance({
	name: "images",
});

export const createImage = async (file, id = null) => {
	const fileId = id ?? getId();
	await localImageDB.setItem(fileId, file);
	return fileId;
};

export const deleteImage = async (id) => {
	await localImageDB.removeItem(id);
};

export default localImageDB;
