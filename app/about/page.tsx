// app/about/page.tsx
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif', color: '#333', lineHeight: '1.6' }}>
      <div style={{ marginBottom: '15px', color: '#666', fontSize: '13px' }}>
        <Link href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</Link> &gt; About Us
      </div>
      
      {/* Editorial Header with Bob's Circular Journalist Avatar */}
      <header style={{ borderBottom: '2px solid #eee', paddingBottom: '20px', marginBottom: '30px', display: 'flex', gap: '20px', alignItems: 'center' }}>
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" 
          alt="Bob Slider" 
          style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #eee', flexShrink: 0 }} 
        />
        <div>
          <span style={{ fontSize: '12px', color: '#e11d48', fontWeight: 'bold', textTransform: 'uppercase' }}>Chief Editor</span>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111', margin: '2px 0' }}>Bob Slider</h1>
        </div>
      </header>
      
      <p>Welcome to <strong>Bob's Daily Insights</strong>. I am <strong>Bob Slider</strong>, a veteran investigative journalist and trend analyst with over 15 years of experience covering global markets, technology shifts, and digital culture.</p>
      <p>In today's fast-paced world, raw search data and automated trending topics can feel overwhelming and disconnected from reality. My mission here is simple: to cut through the noise, analyze the daily global search streams, and craft detailed, human-centric columns that explain exactly who, what, and why these topics are shaping our future.</p>
      <p>Thank you for stopping by, and I hope my daily insights bring clarity and analytical depth to your day.</p>
    </div>
  );
}
