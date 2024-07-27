import allureWriter from "@shelex/cypress-allure-plugin/writer";
import { defineConfig } from "cypress";


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
            return config;
    },
  },
});
