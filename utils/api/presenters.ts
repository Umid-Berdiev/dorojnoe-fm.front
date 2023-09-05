export async function fetchPresenters(
  params?: Record<string, string | number | boolean>
) {
  try {
    const response = await useBaseApi("/djs", { params });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchPresenterBySlug(slug: string) {
  try {
    const response = await useBaseApi(`/djs/${slug}`);
    return response;
  } catch (error) {
    throw error;
  }
}
