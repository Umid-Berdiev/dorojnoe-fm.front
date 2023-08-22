export async function fetchNewsCategories(
  params?: Record<string, string | number | boolean>
) {
  try {
    const response = await useBaseApi("/news-category", { params });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchNews(
  params?: Record<string, string | number | boolean>
) {
  try {
    const response = await useBaseApi("/news", { params });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchNewsBySlug(slug: string) {
  try {
    const response = await useBaseApi(`/news/${slug}`);
    return response;
  } catch (error) {
    throw error;
  }
}
