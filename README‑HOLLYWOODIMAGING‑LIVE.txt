HOLLYWOODIMAGING.STUDIO • LIVE NETWORK
======================================

This folder is your full front‑end live network for free hosting
(GitHub Pages, Cloudflare Pages).

WHAT THIS SETUP IS
-------------------
A complete cinematic broadcast front‑end for the INFINITY‑CORE‑ENGINE,
including:

- Landing page (index.html)
- Live page with embedded studio‑grade live backend (live.html)
- On‑Demand / VOD page (vod.html)
- About / network overview (about.html)
- Shared styling (assets/css/style.css)
- Shared behavior + live UI logic (assets/js/*.js)

HOW THE LIVE SYSTEM WORKS (FREE + ALWAYS‑ON)
--------------------------------------------
GitHub Pages / Cloudflare Pages cannot run RTMP or HLS servers.
So the architecture uses:

**Your domain (HOLLYWOODIMAGING.STUDIO)**  
→ hosts the cinematic front‑end  
→ 100% free, always online

**External live backend (YouTube Live)**  
→ handles RTMP ingest  
→ handles transcoding  
→ handles HLS delivery  
→ handles global CDN  
→ handles scaling  
→ 100% free

Your domain becomes the **broadcast hub**, while the heavy lifting is done
by a free, global, studio‑grade backend.

HOW TO GO LIVE
--------------
1. Create or use an existing YouTube channel.
2. Enable "Live" on your channel.
3. Start a YouTube Live stream using OBS / Streamlabs / hardware encoder.
4. Copy your channel ID or stream ID.
5. Open live.html and replace:

   YOUR_CHANNEL_OR_STREAM_ID

   Example:
   src="https://www.youtube.com/embed/live_stream?channel=UC1234567890ABCDEF&autoplay=1"

6. Upload this entire folder to your GitHub repo configured for GitHub Pages
   OR upload to Cloudflare Pages.

7. Point your domain (HOLLYWOODIMAGING.STUDIO) DNS to your hosting provider.

RESULT
------
Your domain becomes a cinematic, sovereign broadcast network:

- Live page shows your real‑time stream
- VOD page links to past broadcasts
- Engine‑driven visuals and protocol‑based identity
- Studio‑grade pipeline using free infrastructure
- Zero hosting cost
- Zero server maintenance
- Infinite scalability

NOTES
-----
- This setup is 100% free.
- YouTube Live provides RTMP ingest, HLS output, and global CDN.
- Your domain provides the cinematic front‑end.
- When you want your own RTMP/HLS server, this front‑end can be wired to it.

YOU ALREADY BUILT THE ENGINE.
THIS IS THE STAGE.
