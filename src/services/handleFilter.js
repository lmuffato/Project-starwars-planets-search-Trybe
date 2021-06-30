/* Usa um reduce() pra encadear uma quantidade indefinida de filtros, seja um, dois, vinte...

  Recebe um array de objetos(arrayOfObjects) a serem filtrados, e também um objeto(method) do qual as chaves
representam as chaves dos objetos no array que será comparada e os valore são os dados para as comparações.
  O default do switch é o filtro mais básico, o de string, que verifica se a string de comparação está
inclusa na string que é o valor da chave do objeto atual do array que o filter está iterando.
  E para comparação numérica coloca se o comparador na frente do número em forma de string, por isso no
switch tem cases de currFilter[0], que foi a forma precisa de saber qual método será usado para filtrar
visto que é uma função de filtro genérica.
  Exemplo filtrar por cidade e idade maior que: method = {city: 'belo', age: '>18'} retorna uma array
apenas com objetos cuja chave city includes('belo') e age > 18

Hash index:
#1 -> Cria dois arrays com os dados de method
#2 -> O reduce() é aplicado no array de filtros, para o primeiro filtro (currFilter) o acc.filter() retorna
um array já filtrado por aquele primeiro filtro, e isso vai pro acumulador, e logo em seguida o reduce()
itera para o próximo filtro e assim por diante o filter() é aplicado no array anterior filtrando o novamente.
#3 -> Retira o comparador '>', '<' ou '=' e trasforma a string (ex: '>18') em number 18
#4 -> Trata o erro de valor undefined porque undefined.toLoweCase() is not a function e quebra nossa querida apliqueition
*/

const handleFilter = (arrayOfObjects, method) => {
  if (typeof method !== 'object' || method.length === 0) return arrayOfObjects;

  const filters = Object.values(method); /* #1 */
  const key = Object.keys(method);

  return filters.reduce((acc, currFilter, index) => acc.filter((object) => { /* #2 */
    const objectValue = parseInt(object[key[index]], 10);
    const numberToCompare = parseInt(currFilter.slice(1), 10); /* #3 */

    switch (currFilter[0]) {
    case '>':
      return objectValue > numberToCompare;
    case '<':
      return objectValue < numberToCompare;
    case '=': {
      return objectValue === numberToCompare;
    }
    default: {
      if (!object[key[index]]) return false; /* #4 */
      return (object[key[index]].toLowerCase().includes(currFilter.toLowerCase()));
    }
    }
  }), arrayOfObjects);
};

export default handleFilter;
