export async function fetchBanners() {
  try {
    const response = await useBaseApi(`/banners`);
    return response;
  } catch (error) {
    throw error;
  }
}
