import { isArray } from "@12luckydev/utils";
import { createImage, deleteImage } from "@services";

// TODO move to new utils lib

const getDimensions = (uri) => {
	return new Promise((resolve) => {
		const img = document.createElement("img");
		img.src = uri;
		img.onload = () => {
			const { width, height } = img;
			img.remove();
			resolve({ width, height });
		};
	});
};

const getDimensionsFromUris = async (imgs) => {
	const results = await Promise.all(
		imgs.map(({ imgUrl }) => getDimensions(imgUrl))
	);
	return results;
};

const getIdFromUri = (uri) => {
	if (uri.startsWith("blob:")) {
		const splitedUri = uri.split("/");
		if (isArray(splitedUri, false)) {
			return splitedUri[splitedUri.length - 1];
		}
	}
	return null;
};

const getUriFromId = (id) => {
	return `blob:${window.location.origin}/${id}`;
};

const revokeUriIfExist = async ({ id, imgUrl }) => {
	if (!imgUrl || id === getIdFromUri(imgUrl)) {
		window.URL.revokeObjectURL(getUriFromId(id));
		await deleteImage(id);
	}
	return;
};

const revokeUrisIfExist = async (img) => {
	await Promise.all(img.map(revokeUriIfExist));
	return;
};

const mapImageFromFile = async (file) => {
	const uri = window.URL.createObjectURL(file);
	const id = getIdFromUri(uri);
	await createImage(file, id);
	return { id, text: "" };
};

const mapImagesFromFiles = async (files) => {
	const results = await Promise.all(files.map(mapImageFromFile));
	return results;
};

const fillImagesUrls = (img = []) => {
	return img.map(({ id, imgUrl, text }) => {
		return {
			id,
			imgUrl: imgUrl || getUriFromId(id),
			text,
		};
	});
};

export {
	getUriFromId,
	getDimensionsFromUris,
	mapImagesFromFiles,
	revokeUriIfExist,
	revokeUrisIfExist,
	fillImagesUrls,
};
