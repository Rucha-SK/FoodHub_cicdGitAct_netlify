// const app = require('../routes/resRoutes'); // Import your Express app
// const request = require('supertest');
// const sinon = require('sinon');
// const Customer = require('../models/Customer');
// const Order = require('../models/Orders');

// describe('GET /api/get-all-orders/:customerId', () => {
//   it('should return customer orders when the customer exists', async () => {
//     // Prepare your test data (mock customer and orders)
//     const mockCustomer = { _id: 'fakeCustomerId', userId: 'fakeUserId' };
//     const mockOrders = [{ _id: 'order1', customer: mockCustomer._id }];

//     // Mock the required methods using a library like `sinon`
//     const customerFindOneStub = sinon.stub(Customer, 'findOne').resolves(mockCustomer);
//     const orderFindStub = sinon.stub(Order, 'find').resolves(mockOrders);

//     // Perform a request to your route using `supertest`
//     const response = await request(app)
//       .get('/api/get-all-orders/fakeCustomerId')
//       .expect(200);

//     // Assert that the response is as expected
//     expect(response.body).to.deep.equal(mockOrders);

//     // Restore the stubs
//     customerFindOneStub.restore();
//     orderFindStub.restore();
//   });

//   it('should return a 404 status when the customer is not found', async () => {
//     // Mock the findOne method to simulate a non-existent customer
//     const customerFindOneStub = sinon.stub(Customer, 'findOne').resolves(null);

//     // Perform a request to your route
//     const response = await request(app)
//       .get('/api/get-all-orders/nonExistentCustomerId')
//       .expect(404);

//     // Assert that the response contains an error message
//     expect(response.body).to.deep.equal({ message: 'Customer not found' });

//     // Restore the stub
//     customerFindOneStub.restore();
//   });

//   it('should return a 500 status when an error occurs', async () => {
//     // Mock the findOne method to simulate an error
//     const customerFindOneStub = sinon.stub(Customer, 'findOne').rejects(new Error('Fake error'));

//     // Perform a request to your route
//     const response = await request(app)
//       .get('/api/get-all-orders/errorCustomerId')
//       .expect(500);

//     // Assert that the response contains an error message
//     expect(response.body).to.deep.equal({ message: 'Error fetching customer orders' });

//     // Restore the stub
//     customerFindOneStub.restore();
//   });
// });
