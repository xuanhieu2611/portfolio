const ALLOWED_HOSTNAME = "ufxktgfscrokbupiyqko.supabase.co";

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing url parameter" });
  }

  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return res.status(400).json({ error: "Malformed url parameter" });
  }

  if (parsed.hostname !== ALLOWED_HOSTNAME) {
    return res.status(403).json({ error: "URL hostname not allowed" });
  }

  const upstream = await fetch(parsed.toString());

  const contentType =
    upstream.headers.get("content-type") || "image/jpeg";

  res.setHeader("Content-Type", contentType);
  res.setHeader("Cache-Control", "public, max-age=600");

  const buffer = await upstream.arrayBuffer();
  return res.status(upstream.status).send(Buffer.from(buffer));
}
