// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  );
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export const ShowProviderPage = async ({
  providerId,
}: {
  providerId: string;
}) => {
  return (
    <div>
      <h1>Provider {providerId}</h1>
    </div>
  );
};
