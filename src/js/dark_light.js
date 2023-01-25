let checkbox = document.querySelector('input[name=theme]');

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
document.body.classList.add(theme.LIGHT);
checkbox.addEventListener('change', onCheckboxChange);


function onCheckboxChange() {
  document.body.classList.toggle(theme.DARK);
  document.body.classList.toggle(theme.LIGHT);

  setThemeInfoToLocalStorage();
}

function setThemeInfoToLocalStorage() {
  if (document.body.classList.contains(theme.LIGHT)) {
    checkbox.setAttribute('checked', false);
    localStorage.setItem('active-theme', theme.LIGHT);
  } else if (document.body.classList.contains(theme.DARK)) {
    checkbox.setAttribute('checked', true);
    localStorage.setItem('active-theme', theme.DARK);
  }
}

getThemeInfoFromLocalStorage();

function getThemeInfoFromLocalStorage() {
  if (localStorage.getItem('active-theme') === theme.DARK) {
    onCheckboxChange();
  }
}

//         checkbox.addEventListener('change', function() {
//             if(this.checked) {
//                 trans()
//                 document.documentElement.setAttribute('data-theme', 'dark');
//                 localStorage.setItem('data-theme', 'dark');
//             } else {
//                 trans()
//                 document.documentElement.setAttribute('data-theme', 'light');
//                 localStorage.setItem('data-theme', 'light');
//             }
            
//         })

//         let trans = () => {
//             document.documentElement.classList.add('transition');
//             window.setTimeout(() => {
//                 document.documentElement.classList.remove('transition')
//             }, 1000)
// }
        





