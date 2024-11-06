import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.tsx",
            refresh: true,
        }),
        react(),
    ],
});

// mix.js("resources/js/app.js", "public/js")
//     .vue()
//     .sass("resources/sass/app.scss", "public/css")
//     .sourceMaps()
//     .version()
//     .options({
//         processCssUrls: false,
//     });

// mix.browserSync("your-local-dev-url.test");
// mix.webpackConfig({
//     resolve: {
//         alias: {
//             "@": path.resolve("resources/js"),
//         },
//     },
// });
