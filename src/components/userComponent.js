import { BaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("UserComponent yüklendi")

let logger1 = new MongoLogger()

let userService = new UserService(logger1)

let user1 = new User(1,"Gamze","Babayiğit","Kocaeli")
let user2 = new User(2,"Yulaf","Babayiğit","İstanbul")
userService.add(user1)
userService.add(user2)

console.log(userService.list())


console.log(userService.getById(1))
userService.list()

let customer={id:1, fistName:"Gamze"}
//prototyping olmayan bir değeri aşağıdaki gibi sonradan ekleme
customer.lastName="Babayigit"
console.log(customer.lastName)