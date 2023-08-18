export const useApi: typeof useFetch = (request: any, options: any = {}) => {
  const config = useRuntimeConfig();
  options.baseURL = config.public.baseUrl;

  return useFetch(request, options);
};
