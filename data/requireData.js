const requireData = async () => {
    const requestJson = await fetch('./data.json')
    let response = await requestJson.json()
    return await response;            
}

export default requireData