import React from 'react'
import reactDom from 'react-dom'
import App from './App.jsx'
import Router from './router/index.js'
import 'antd/dist/antd.css';
import '../src/css/style.css'
reactDom.render(<Router />,document.getElementById('app'))