const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/'

const requestAPI = async () => {    
    try {
        const requestData = await fetch(endpoint);
        const response = await requestData.json();
        return response;
    } catch {
        console.log('Error')
    }
}

export default requestAPI;