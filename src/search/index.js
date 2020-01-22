"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import logo from './image/logo.png';

class Index extends React.Component {
    render() {
        return <div className = "search-text" >
            Search Text热更新 热更新一些内容 < img src = { logo }/>
        </div > ;
    }
}

ReactDOM.render( <
    Index /> ,
    document.getElementById('root')
)