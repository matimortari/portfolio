const HEIGHTS = [1920, 1680, 2100, 1800, 2000, 1560, 1920, 2200, 1740, 2040]

/** Curated Unsplash photo IDs */
const UNSPLASH_IDS = [
  "1506905925346-21bda4d32df4",
  "1469474968028-56623f02e42e",
  "1441974231531-c6227db76b6e",
  "1470071459604-3b5ec3a7fe05",
  "1426604966848-d7adac402bff",
  "1472214103451-9374bd1c798e",
  "1501785888041-af3ef285b470",
  "1464822759023-fed622ff2c3b",
  "1519681393784-d120267933ba",
  "1475924156734-496f6cac6ec1",
  "1500530855697-b586d89ba3ee",
  "1493246507139-91e8fad9978e",
  "1507525428034-b723cf961d3e",
  "1470770841072-f978cf4d019e",
  "1500534314209-a25ddb2bd429",
  "1439066615861-d1af74d74000",
  "1492691527719-9d1e07e534b4",
  "1516483638261-f4dbaf036963",
  "1523906834658-6e24ef2386f9",
  "1506744038136-46273834b3fb",
  "1447752875215-b2761acb3c5d",
  "1465146633011-14f8e0781093",
  "1518837695005-2083093ee35b",
  "1476514525535-07fb3b4ae5f1",
]

export const PHOTOS: Photo[] = Array.from({ length: 24 }, (_, i) => {
  const height = HEIGHTS[i % HEIGHTS.length]!
  const id = UNSPLASH_IDS[i]!
  return { id: i + 1, url: `https://images.unsplash.com/photo-${id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=${height}&q=80`, width: 1080, height }
})
