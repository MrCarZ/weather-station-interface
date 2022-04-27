export const checkValidLocalStorage = (localStorageKey) => {
    const currentLocalStorageData = JSON.parse(localStorage.getItem(localStorageKey));
    
    const localStorageDate = new Date(currentLocalStorageData?.date);
    const currentDate = new Date();
    
    return localStorageDate?.toDateString() === currentDate?.toDateString();
}