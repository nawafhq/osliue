import React from 'react';

export default function BrandsComponent() {
  return (
    <div className="relative overflow-hidden w-full max-w-[1500px] mx-auto lg:my-12 my-6">
      <div className="brands-container">
        <img src="/brands/alrajhi.svg" alt="alrajhi" width={2160} height={1080} className="brand-item" />
        <img src="/brands/auth0.svg" alt="auth0" width={2160} height={1080} className="brand-item" />
        <img src="/brands/moyasar.svg" alt="moyasar" width={2160} height={1080} className="brand-item" />
        <img src="/brands/intercom.svg" alt="intercom" width={2160} height={1080} className="brand-item" />
        <img src="/brands/stc.svg" alt="stc" width={2160} height={1080} className="brand-item" />
        <img src="/brands/microsoft.svg" alt="microsoft" width={2160} height={1080} className="brand-item" />
        <img src="/brands/supabase.svg" alt="supabase" width={2160} height={1080} className="brand-item" />
        <img src="/brands/vercel.svg" alt="vercel" width={2160} height={1080} className="brand-item" />

        {/* Duplicate the images to create a continuous loop */}
        <img src="/brands/alrajhi.svg" alt="alrajhi" width={2160} height={1080} className="brand-item" />
        <img src="/brands/auth0.svg" alt="auth0" width={2160} height={1080} className="brand-item" />
        <img src="/brands/moyasar.svg" alt="moyasar" width={2160} height={1080} className="brand-item" />
        <img src="/brands/intercom.svg" alt="intercom" width={2160} height={1080} className="brand-item" />
        <img src="/brands/stc.svg" alt="stc" width={2160} height={1080} className="brand-item" />
        <img src="/brands/microsoft.svg" alt="microsoft" width={2160} height={1080} className="brand-item" />
        <img src="/brands/supabase.svg" alt="supabase" width={2160} height={1080} className="brand-item" />
        <img src="/brands/vercel.svg" alt="vercel" width={2160} height={1080} className="brand-item" />
      </div>
    </div>
  );
}
