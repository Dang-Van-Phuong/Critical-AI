// 🔥 Backend production URL
const BASE_URL = "https://critical-ai-bvb1.onrender.com";

const originalFetch = window.fetch;

window.fetch = function (url, options = {}) {
  const token = localStorage.getItem("token");

  // Nếu là relative URL thì nối với backend
  if (!url.startsWith("http")) {
    url = BASE_URL + url;
  }

  options.headers = {
    ...(options.headers || {}),
    ...(token ? { Authorization: "Bearer " + token } : {})
  };

  return originalFetch(url, options);
};