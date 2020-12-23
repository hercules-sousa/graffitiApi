/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import User from 'App/Models/User'
import { UserFactory } from 'Database/factories'

const users = async () => {
  const temp = await User.all()
  console.log('teste')
  temp.map((user) => {
    console.log(user['$attributes'])
  })
}

const dummyData = async () => {
  const users = await UserFactory.createMany(5)
  console.log(users)
}

users()

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
