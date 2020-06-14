
export const saveData = (key, content) => {
    localStorage.setItem(key, JSON.stringify(content));
}

export const getData = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return (data) ? data : [];
}
