// consultado método de comparação em https://www.w3schools.com/jsref/jsref_sort.asp

export function compareNameAsc(a, b) {
  const POSITIONARRAY = -1;
  if (a.name < b.name) return POSITIONARRAY;
  if (a.name > b.name) return 1;
  return 0;
}

export function compareNameDesc(a, b) {
  const POSITIONARRAY = -1;
  if (a.name > b.name) return POSITIONARRAY;
  if (a.name < b.name) return 1;
  return 0;
}

export function comparePopulationAsc(a, b) {
  const POSITIONARRAY = -1;
  if (a.population < b.population) return POSITIONARRAY;
  if (a.population > b.population) return 1;
  return 0;
}

export function comparePopulationDesc(a, b) {
  const POSITIONARRAY = -1;
  if (a.population > b.population) return POSITIONARRAY;
  if (a.population < b.population) return 1;
  return 0;
}
