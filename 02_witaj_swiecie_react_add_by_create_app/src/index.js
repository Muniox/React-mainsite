import React from 'react';
import ReactDOM from 'react-dom/client';

//===================================================
// Tworzenie elementu bez JSX
//===================================================

// const Component = React.createElement('h1', {}, 'Witaj Świecie');
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(Component);


//===================================================
// Tworzenie elementu za pomocą JSX
//===================================================

const Component = () => {
    return <h1>Witaj Świecie</h1>
}

//StrictMode używamy tylko wtedy, jak używamy Reacta w środowisku developerskim
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Component />
  </React.StrictMode>
);

/***
 * W wersji niższej niż 17 powinniśmy używać starszej deklaracji:
 * import ReactDOM from 'react-dom'
 * ReactDOM.render(<Component />, document.getElementById('root'))
 *
 * */

/***
 * React jest frameworkiem deklaratywnym, co to oznacza:
 *
 * Napisz program robiący kanapkę (imperatywnie):
 * weź chleb, masło, szynkę, weź chleb, posmaruj chleb masłem, weź chleb z masłem,
 * nałóż szynkę na chleb z masłem, otrzymaj kanapkę
 *
 * Napisz program robiący kanapkę (deklaratywnie):
 * weź chleb, masło, szynkę i użyj metody(funkcji) "zrób kanapkę", otrzymaj kanapkę
 * */