let toggle = document.querySelector('.slider');
let body = document.body;
let systemStorageDark =window.matchMedia("(prefers-color-scheme: dark)"); // checking the system default theme

const calculateThemeSettings = () => {
    let localStorageTheme = localStorage.getItem('theme');
    if(localStorageTheme !== null)
        return localStorageTheme;
    else{
        if(systemStorageDark.matches)
            return 'dark';
        else
            return 'light';
    }

}

const setInitialTheme = () =>{
    let newTheme = calculateThemeSettings();
    body.classList.replace('dark',newTheme);
    return newTheme;
};



let toggleTheme =setInitialTheme();
if(toggleTheme === 'light'){
    toggle.classList.add('slided');
}

let currentTheme = calculateThemeSettings();

toggle.addEventListener('click',()=>{
    currentTheme = body.classList.contains('dark') ? 'light' :'dark'; // checking for current theme
    if(currentTheme === 'light')
    toggle.classList.remove('slided');

    body.classList.replace(toggleTheme,currentTheme);
    localStorage.setItem('theme',currentTheme);

    toggleTheme = currentTheme; //updating the intial theme to be present next time when opening the file again.
})