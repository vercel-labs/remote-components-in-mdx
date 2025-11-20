import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { RemoteComponent } from 'remote-components/next/host';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.length > 0 ? slug : [],
  }));
}

export default async function DocsPage({
  params,
}: {
  params: { slug?: string[] };
}) {
  const slug = params.slug || [];
  const source = getPostBySlug(slug);

  if (!source) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote 
          source={source} 
          options={{
            parseFrontmatter: true,
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
          components={{
            RemoteComponent,
          }}
        />
      </article>
    </div>
  );
}

