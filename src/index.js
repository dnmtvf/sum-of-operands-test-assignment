import React from 'react';
import ReactDOM from 'react-dom';
import SumOfOperands from './SumOfOperands';
import registerServiceWorker from './registerServiceWorker';
import getNewExerсize from './helpers/getNewExerсize';
import './bootstrap-reboot.min.css';

ReactDOM.render(<SumOfOperands exercise={getNewExerсize()} />, document.getElementById('root'));
registerServiceWorker();
