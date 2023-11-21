// const { JSDOM } = require('jsdom');
// const chai = require('chai');
// const axios = require('axios');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');
// const Restaurants = require('../models/Restaurant');
// const { window } = new JSDOM('<!doctype html><html><body></body></html>');
// global.window = window;
// global.document = window.document;

// // Attach window and document to global
// global.window = window;
// global.document = window.document;

// global.localStorage = {
//     getItem: sinon.stub(),
//     setItem: sinon.stub(),
//     removeItem: sinon.stub(),
// };

// // Attach sinon to global
// global.sinon = sinon;
// chai.use(sinonChai);

// describe('Restaurants', () => {
//   describe('addToCart', () => {
//     let alertStub, postStub, getItemStub;

//     beforeEach(() => {
//         // Set up stubs before each test
//         alertStub = sinon.stub(window, 'alert');
//         postStub = sinon.stub(axios, 'post');
//         getItemStub = sinon.stub(global.localStorage, 'getItem').callsFake(() => 'mocked-customer-id');
//       });
      
//       afterEach(() => {
//         // Clean up stubs after each test
//         alertStub.restore();
//         postStub.restore();
//         getItemStub.restore();
//       });
      

//     it('should add item to cart and display alert on success', async () => {
//       // Arrange
//       postStub.resolves({ data: { message: 'Item added to the cart' } });
//       getItemStub.returns('mocked-customer-id');

//       // Act
//       await Restaurants.addToCart({ name: 'Mock fooditem', pic: 'Mock pic', price: '50' });

//       // Assert
//       expect(postStub.calledOnce).to.be.true;
//       expect(postStub.firstCall.args[0]).to.equal('http://localhost:5000/cart/add-to-cart/mocked-customer-id');
//       expect(alertStub.calledOnce).to.be.true;
//       expect(alertStub.firstCall.args[0]).to.equal('Item added to the cart');
//     });

//     // Add more test cases for different scenarios
//   });
// });
