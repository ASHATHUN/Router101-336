// import AppRouter from './AppRouter';
// function App() {
//   return (
//     <div>
//       <AppRouter />
//     </div>
//   );
// }
// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppRouter from './AppRouter';

function App() {
  return (
    <Provider store={store}> 
      <AppRouter />
    </Provider>
  );
}

export default App;


// ผูกเป็น Provider แล้วเราจะเป็นแอพลิเคชันแล้วก็เราทำ store ได้หมดเลย
