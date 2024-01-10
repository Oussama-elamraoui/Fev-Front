// module.exports = function (api) {
//     return {
//       plugins: ['macros'],
//     }
//   }
export default function (api) {
  // Cache the returned value forever and don't call this function again.
  api.cache(true);

  const presets = [
    // your presets here
  ];

  const plugins = [
    'macros'
  ];

  return {
    presets,
    plugins,
  };
};