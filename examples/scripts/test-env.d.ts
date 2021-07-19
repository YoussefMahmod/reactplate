import { Page } from "playwright-chromium";
import { RollupWatcher } from "rollup";

declare global {
  // injected by the custom jest env in ./scripts/jest-env.js
  const page: Page;

  // injected in ./scripts/test-setup.ts
  const browserLogs: string[];
  let viteTestUrl: string;
  let watcher: RollupWatcher;
}
