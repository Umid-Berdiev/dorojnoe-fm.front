export async function fetchBroadcastPrograms(
  params?: Record<string, string | number | boolean>
) {
  try {
    const response = await useBaseApi("/program", { params });
    return response;
  } catch (error) {
    throw error;
  }
}
