/* 
* @Author: Sze Ka Wai Raymond (FakeC)
* @Date:   2016-01-01 03:43:46
* @Last Modified by:   Sze Ka Wai Raymond (FakeC)
* @Last Modified time: 2016-01-17 23:15:46
*/

import users from '../controllers/users';
export default [
	{method: 'POST', path: '/users', config: users.createOne},
	{method: 'GET', path: '/users/{userId}', config: users.readOne},
	{method: 'PUT', path: '/users/{userId}', config: users.updateOne},
	{method: 'DELETE', path: '/users/{userId}', config: users.deleteOne},

	{method: 'GET', path: '/users', config: users.read}
];
