import React from 'react';
import './App.css';
import Test from './components/test'
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <Card date={new Date()} thumbnail="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687" title="Exemple" isShareable={true} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut ligula finibus, porta lorem id, egestas lacus. jkjaskdjs sdkjskds dsjsahdn asdkasns daskjdnasd s saks das ks sakdaksdkas dsakd d skd asdksa dsk dkasd askd askd s"/>
    </div>
  );
}

export default App;
