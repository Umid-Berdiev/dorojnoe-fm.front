export async function fetchPodcasts(
  params?: Record<string, string | number | boolean>
) {
  try {
    const response = await useBaseApi("/podcasts", { params });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchPodcastEpisodes(
  params?: Record<string, string | number | boolean>
) {
  try {
    const response = await useBaseApi("/podcast_episodes", { params });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchPodcastBySlug(slug: string) {
  try {
    const response = await useBaseApi(`/podcasts/${slug}`);
    return response;
  } catch (error) {
    throw error;
  }
}
