import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Updated to match your application's URL
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    env: {
      // Update to match your application's environment
      TRENDING_URL: 'http://localhost:3000/api/series/trending',
      RECHERCHE_URL: 'http://localhost:3000/api/series/search?q=$a',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
