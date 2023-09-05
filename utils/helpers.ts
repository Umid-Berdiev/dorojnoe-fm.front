export function getImageUrl(imagePath: string) {
  const imageUrl = new URL(`/assets/images/${imagePath}`, import.meta.url).href;
  return imageUrl;
}

export const getImage = async (imgName) => {
  // set the relative path to assets
  const module = await import(
    /* @vite-ignore */ `../assets/images/${imagName}`
  );
  return module.default.replace(/^\/@fs/, "");
};
