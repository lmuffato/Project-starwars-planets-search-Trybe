import testData from '../testData';

function getPlanetsApi() {
  const planets = testData.results.map((planet) => {
    const { residents, ...othersProps } = planet;

    return { ...othersProps };
  });
  return planets;
}

export default getPlanetsApi;
