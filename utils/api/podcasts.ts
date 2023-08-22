export async function fetchRadioPrograms(
  params?: Record<string, string | number | boolean>
) {
  try {
    const response = await useBaseApi("/program", { params });
    return response;
  } catch (error) {
    throw error;
  }
}

export async function fetchRadioProgramBySlug(slug: string) {
  try {
    const response = await useBaseApi(`/program/${slug}`);
    return response;
  } catch (error) {
    throw error;
  }
}
