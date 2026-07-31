// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"glowsnap.mdx": () => import("../content/docs/glowsnap.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "cli/cli.mdx": () => import("../content/docs/cli/cli.mdx?collection=docs"), }),
};
export default browserCollections;