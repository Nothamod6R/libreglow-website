// @ts-nocheck
import * as __fd_glob_7 from "../content/docs/glowsnap/troubleshooting/startup-failure.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/glowsnap/troubleshooting/portal-code-2.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/cli/cli.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/glowsnap/index.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/glowsnap/troubleshooting/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/glowsnap/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "glowsnap/meta.json": __fd_glob_1, "glowsnap/troubleshooting/meta.json": __fd_glob_2, }, {"index.mdx": __fd_glob_3, "glowsnap/index.mdx": __fd_glob_4, "cli/cli.mdx": __fd_glob_5, "glowsnap/troubleshooting/portal-code-2.mdx": __fd_glob_6, "glowsnap/troubleshooting/startup-failure.mdx": __fd_glob_7, });