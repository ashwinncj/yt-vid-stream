module.exports = {
  packagerConfig: {
    appCategoryType: "public.app-category.developer-tools",
  },
  makers: [
    {
      name: "@electron-forge/maker-deb",
      config: {}
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {}
    }
  ]
};