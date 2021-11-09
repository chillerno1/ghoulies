import redis from "../../lib/redis";

export default async function set(req, res) {
  const { id, mintedFree, allowedToMint } = req.body;

  await redis.hset(
    "baggedGhoulies",
    id,
    JSON.stringify({
      mintedFree: mintedFree,
      allowedToMint: allowedToMint,
    })
  );

  return res.status(200).json({ id });
}
