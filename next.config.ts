import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // A parent-level lockfile exists at /Users/apple; pin the workspace root to
  // this project so Turbopack infers the correct root.
  turbopack: {
    root: path.resolve(),
  },
};

export default nextConfig;
