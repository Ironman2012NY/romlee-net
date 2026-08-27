import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/yt-thumb/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const id = params.id;
        if (!id || !/^[a-zA-Z0-9_-]{6,20}$/.test(id)) {
          return new Response("Bad request", { status: 400 });
        }
        const urls = [
          `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
          `https://i.ytimg.com/vi/${id}/sddefault.jpg`,
          `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        ];
        for (const url of urls) {
          const res = await fetch(url);
          if (!res.ok) continue;
          const buf = await res.arrayBuffer();
          if (buf.byteLength < 2000) continue;
          return new Response(buf, {
            headers: {
              "Content-Type": "image/jpeg",
              "Cache-Control": "public, max-age=86400",
            },
          });
        }
        return new Response("Not found", { status: 404 });
      },
    },
  },
});
