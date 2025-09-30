export type FilterDuration = { start: number; end: number };

export function buildFiltersQuery({
  filterRating,
  filterLevel,
  filterDuration,
  filterIsFree,
}: {
  filterRating: string;
  filterLevel: string[];
  filterDuration: FilterDuration[];
  filterIsFree: boolean | null;
}) {
  const params = new URLSearchParams();

  if (filterRating) params.set("rating", filterRating);
  if (filterLevel.length > 0) params.set("level", filterLevel.join(","));
  if (filterDuration.length > 0)
    params.set(
      "duration",
      filterDuration.map((d) => `${d.start}-${d.end}`).join(",")
    );
  if (filterIsFree !== null) params.set("free", filterIsFree ? "1" : "0");

  return params.toString();
}