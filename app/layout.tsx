// app/layout.tsx
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" />
        <link rel="apple-touch-icon" href="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" />
        <meta property="og:title" content="Bob's Daily Insights" />
        <meta property="og:description" content="Global search trends and breaking stories, analytically curated by Bob." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6901281127037715" crossOrigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
