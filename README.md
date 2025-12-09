# starlight-github-stats

A Starlight plugin to display GitHub repository statistics (stars, forks, and latest version) in the header of your documentation site.

## Features

- ⭐ Display repository star count
- 🔀 Display repository fork count
- 🏷️ Display latest release version
- Automatically fetches live data from GitHub API
- Graceful fallback if API is unavailable
- Responsive design that integrates with Starlight's header

## Installation

```bash
npm install starlight-github-stats
# or
pnpm add starlight-github-stats
# or
yarn add starlight-github-stats
```

## Usage

1. Add the plugin to your `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { githubStats } from "starlight-github-stats";

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        githubStats({
          repo: "your-username/your-repo", // e.g., "databricks/unity-catalog"
        }),
      ],
    }),
  ],
});
```

2. The plugin will automatically:
   - Inject the GitHub stats script
   - Add the required CSS styles
   - Display stats in the header next to social icons

## Configuration

### Options

- `repo` (required): The GitHub repository in the format `owner/repo`

## How it works

The plugin:

1. Fetches repository data from the GitHub API
2. Fetches the latest release version
3. Formats numbers (e.g., 3100 → 3.1k)
4. Injects the stats into the Starlight header
5. Falls back to static data if the API is unavailable

## Requirements

- Astro ^5.0.0
- @astrojs/starlight ^0.36.0
- Node.js >= 18.0.0

## License

Apache-2.0
