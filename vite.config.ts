import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 3003,
    hmr: {
      path: "/__vite_hmr",
    },
  },
  // build:{
  //   rollupOptions: {
  //     output:{
  //         manualChunks(id) {
  //             if (id.indexOf('node_modules') !== -1) {
  //                 return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //             }
  //         }
  //     }
  // }
  // }
});
