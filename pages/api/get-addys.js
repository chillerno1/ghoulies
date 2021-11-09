import redis from "../../lib/redis";

export default async function get(req, res) {
  const baggedGhoulies = await redis.hgetall("baggedGhoulies");

  return res.status(200).json({ baggedGhoulies });
}
