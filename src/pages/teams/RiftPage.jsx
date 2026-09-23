import { useEffect } from "react";

// ==================== RIFT PAGE ====================
// Redirects to the Rift application form. The black background renders first
// so there's no white flash while the destination loads. To turn this into a
// real page later, replace the redirect with actual content (see other team
// pages such as OutreachPage.jsx for the structure used across the site).

const RIFT_APPLY_URL =
  "https://utra.notion.site/3d747514ebfe80de97bde8e87b96631c?pvs=105";

export default function RiftPage() {
  useEffect(() => {
    window.location.replace(RIFT_APPLY_URL);
  }, []);

  return <div className="min-h-[calc(100vh-84px)] w-full bg-black" />;
}
