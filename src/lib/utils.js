export const getProxiedImageUrl = (url) => {
  if (!url) return "";
  // Remove protocol
  const cleanUrl = url.replace(/^https?:\/\//, "");
  return `https://images.weserv.nl/?url=${cleanUrl}`;
};
