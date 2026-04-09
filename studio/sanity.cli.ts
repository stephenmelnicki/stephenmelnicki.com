import { defineCliConfig } from "sanity/cli";

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || "my-projectId";
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const appId = process.env.SANITY_STUDIO_APP_ID || "my-appId";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  deployment: {
    appId,
    autoUpdates: false,
  },
});
