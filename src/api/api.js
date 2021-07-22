export const getCapsules = async() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('https://api.spacexdata.com/v3/capsules', requestOptions);
    const data = await response.json();
    return data;
}

export const getCapsule = async(id) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`https://api.spacexdata.com/v3/capsules/${id}`, requestOptions);
    const data = await response.json();
    return data;
}

export const getCores = async() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('https://api.spacexdata.com/v3/cores', requestOptions);
    const data = await response.json();
    return data;
}

export const getCore = async(id) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`https://api.spacexdata.com/v3/cores/${id}`, requestOptions);
    const data = await response.json();
    return data;
}

export const getDragons = async() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('https://api.spacexdata.com/v3/dragons', requestOptions);
    const data = await response.json();
    return data;
}

export const getDragon = async(id) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`https://api.spacexdata.com/v3/dragons/${id}`, requestOptions);
    const data = await response.json();
    return data;
}

export const getLandPads = async() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('https://api.spacexdata.com/v3/landpads', requestOptions);
    const data = await response.json();
    return data;
}

export const getLandPad = async(id) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`https://api.spacexdata.com/v3/landpads${id}`, requestOptions);
    const data = await response.json();
    return data;
}

export const getUserRole = async() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('https://run.mocky.io/v3/47997ee1-a2d4-4eb5-911e-0cf8045f23bc', requestOptions);
    const data = await response.json();
    return data.role;
}

export const getUserDetails = async() => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('https://run.mocky.io/v3/47997ee1-a2d4-4eb5-911e-0cf8045f23bc', requestOptions);
    const data = await response.json();
    return data;
}