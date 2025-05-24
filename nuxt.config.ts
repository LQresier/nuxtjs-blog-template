import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    dir: "public",
    domains: [],
    alias: {},
    presets: {},
    inject: true,
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storage: "localStorage", // or 'sessionStorage' or 'cookie'
    storageKey: "nuxt-color-mode",
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 5,
          searchDepth: 5,
        },
        highlight: {
          langs: [
            "json",
            "js",
            "ts",
            "html",
            "css",
            "vue",
            "shell",
            "mdc",
            "md",
            "yaml",
            "sql",
            "java",
            "python",
            "go",
            "rust",
            "php",
            "ruby",
            "swift"
          ],
          theme: {
            default: "light-plus",
            dark: "dark-plus",
          },
        },
      },
    },
  },
  app: {
    head: {
      title: "demo",
      htmlAttrs: {
        lang: "zh-CN",
      },
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  runtimeConfig: {
    public: {
      siteConfig: {
        logo: "/favicon.ico",
        name: "demo",
        title: "demo",
        description: "个人总结",
        navItems: [
          { name: "首页", path: "/" },
          { name: "文章", path: "/blogs" },
          { name: "关于", path: "/about" },
        ],
        footerText: "© 2024 demo. 保留所有权利.",
      },
    },
  },
});
