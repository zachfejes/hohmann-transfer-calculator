import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
