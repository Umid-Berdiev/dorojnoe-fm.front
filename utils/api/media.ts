export async function fetchAllMedia(
  params?: Record<string, string | number | boolean | null>
) {
  try {
    const response = await useBaseApi(`/media`, { params });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchMediaPhotos(
  params?: Record<string, string | number | boolean | null>
) {
  try {
    const response = await useBaseApi("/media/photos", { params });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchMediaPhotoBySlug(slug: string) {
  try {
    const response = await useBaseApi(`/media/photos/${slug}`);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchMediaVideos(
  params?: Record<string, string | number | boolean | null>
) {
  try {
    const response = await useBaseApi("/media/videos", { params });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchMediaVideoBySlug(slug: string) {
  try {
    const response = await useBaseApi(`/media/videos/${slug}`);
    return response;
  } catch (error) {
    throw error;
  }
}
