// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '../../../lib/supabase';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { data: post } = await supabase.from('posts').select('*').eq('slug', slug).single();
  if (!post) notFound();

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>{post.title}</h1>
      <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '20px' }}>{post.summary}</p>
      {post.cover_image_url && <img src={post.cover_image_url} alt="" style={{ width: '100%', borderRadius: '8px', marginBottom: '20px' }} />}
      <div style={{ whiteSpace: 'pre-line', lineHeight: '1.6', fontSize: '18px', borderTop: '1px solid #ddd', paddingTop: '20px', marginBottom: '40px' }}>{post.content}</div>
      
      {/* Dynamic Styled "Back to Home" Link */}
      <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>← Back to Home</Link>
      </div>
    </div>
  );
}
