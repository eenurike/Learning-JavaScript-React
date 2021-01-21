import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import style from'./App.module.css'
import './App';
import reportWebVitals from './reportWebVitals';
import All from './App';






  ReactDOM.render( 
    <React.StrictMode>
        <div className={style.wrapper}>
          <All/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
  );


reportWebVitals();