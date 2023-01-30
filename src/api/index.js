let api = {};
const req = require.context("@/api/apiFile", false, /\.js$/);
console.dir(req);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const moduleList = requireAll(req);
moduleList.forEach((item) => {
  if (item.default) {
    api = { ...api, ...item.default };
  }
});
export default api;
