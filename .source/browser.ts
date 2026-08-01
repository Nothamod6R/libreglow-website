// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "glowsnap/index.mdx": () => import("../content/docs/glowsnap/index.mdx?collection=docs"), "cli/cli.mdx": () => import("../content/docs/cli/cli.mdx?collection=docs"), "glowsnap/troubleshooting/portal-code-2.mdx": () => import("../content/docs/glowsnap/troubleshooting/portal-code-2.mdx?collection=docs"), "glowsnap/troubleshooting/startup-failure.mdx": () => import("../content/docs/glowsnap/troubleshooting/startup-failure.mdx?collection=docs"), }),
};
export default browserCollections;