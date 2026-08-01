import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: 'LibreGlow Docs',
        transparentMode: 'always', // 👈 لجعل الخلفية شفافة تسمح بالمرور
      }}
      containerProps={{
        className: '[&_header]:backdrop-blur-md [&_header]:backdrop-saturate-150', // 👈 تطبيق التغبيش الزجاجي على الـ Header
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
