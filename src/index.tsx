import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'
import {App} from './App';

createServer ({
  models: {
    transaction: Model,

  },

  seeds(server) {
    server.db.loadData({
      transactions: [{
        id: 1,
        title: 'Freelancer de website',
        type: 'deposit',
        category: 'dev',
        amount:6000,
        data: new Date('2021-12-11 22:31:00')

      },

      {
        id:2,
        title: 'aluguel',
        type:'withdraw',
        category:'casa',
        amount: 1100,
        data: new Date('2021-12-11 22:33:00'),
      }
    ]
    })
  },

  routes (){
    this.namespace = 'api';

    this.get('/transactions', () =>{
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



