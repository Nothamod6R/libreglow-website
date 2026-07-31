import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'LibreGlow Docs',
      }}
      links={[
        {
          text: 'GitHub',
          url: 'https://github.com/libreglow',
          external: true,
        },
        
      ]}
      githubUrl="https://github.com/libreglow"
    >
      {children}
    </DocsLayout>
  );
}