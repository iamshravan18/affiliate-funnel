import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // A parent-level lockfile exists at /Users/apple; pin the workspace root to
  // this project so Turbopack infers the correct root.
  turbopack: {
    root: path.resolve(),
  },

  // Clean public PDF URLs — map short paths to the actual files under
  // /downloads/ without duplicating assets.
  async rewrites() {
    return [
      {
        source: "/7-minute-morning-clarity-reset.pdf",
        destination: "/downloads/the-7-minute-morning-clarity-reset.pdf",
      },
    ];
  },
};

export default nextConfig;
