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
  if (Number(a.population) < Number(b.population)) return POSITIONARRAY;
  if (Number(a.population) > Number(b.population)) return 1;
  return 0;
}

export function comparePopulationDesc(a, b) {
  const POSITIONARRAY = -1;
  if (Number(a.population) > Number(b.population)) return POSITIONARRAY;
  if (Number(a.population) < Number(b.population)) return 1;
  return 0;
}

export function compareOrbitalAsc(a, b) {
  const POSITIONARRAY = -1;
  if (Number(a.orbital_period) < Number(b.orbital_period)) return POSITIONARRAY;
  if (Number(a.orbital_period) > Number(b.orbital_period)) return 1;
  return 0;
}

export function compareOrbitalDesc(a, b) {
  const POSITIONARRAY = -1;
  if (Number(a.orbital_period) > Number(b.orbital_period)) return POSITIONARRAY;
  if (Number(a.orbital_period) < Number(b.orbital_period)) return 1;
  return 0;
}
