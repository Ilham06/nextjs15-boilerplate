const { default: axiosInstance } = require("./axios");
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params, headers, body }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
        body,
      });
      // return Promise.resolve(result);
      return { data: result.data };
    } catch (axiosError) {
      // return Promise.reject(axiosError?.response);
      return { error: axiosError.response?.data || axiosError.message };
    }
  };

export default axiosBaseQuery;
