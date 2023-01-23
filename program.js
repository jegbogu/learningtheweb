// alert('hello world')
// prompt('your name')
// confirm('do you ant to quit game?')

// console.log('hello console.log')
// console.error('i am error')
// console.warn('this is a warning')
// console.info('i am an in info')

// let x = 2
// let y = 4
// let z = x+y
// console.log(z)

//random number generation

// let rand = Math.random()
// console.log(rand)
// let res = Math.pow(2,3)
// console.log(res)
// how to generate random whole numbers from 1-10
// let randNum = Math.floor(Math.random()*10)+1 
// console.log(randNum)

//decison making in javascript
//if statement, else statement, else if statement 
// if(4<3){
//     alert('correct')
// }else if(3>6){
//     alert('very correct')
// }else if (8<5){
//     alert('very very correct')
// }else{
//     alert('none of the conditions is correct')
// }
//the else statement runs when all the conditions are not correct
// if(4<3){
//     alert('correct')
// }else if(3>6){
//     alert('very correct')
// }else if (3<5){
//     alert('very very correct')
// }else{
//     alert('none of the conditions is correct')
// }
//username length example
// let username = prompt('Username')

// if(username.length<4){
//     alert('Username charaters must be greater than four')
// }else{
//     alert(`Welcome ${username.toUpperCase()}!`)
// }
//write a code that can accept users and give them a ticket number with the first three characters of their name in uppercase. the code should only accept those that their username has more than 3 charcters. ticket random number should be between 1000 - 2000

// eg
//joseph
//welcome JOSEPH your ticket number is JOE1223

// let email = prompt('enter your email')
// let password = prompt('enter your password')

// if( (email.includes('@')&&email.length>7) && (password.length>8) ){
//     alert(`welcome ${email}`)
// }else{
//     alert('email must contain @, and must have at least 7 character, and password must be greater than 8 characters')
// }

//OR
//write a program that can take graduates that studied any engineering course or computer science with at least 3 years of web development experience to work in our facility

// let course = prompt('Enter course of Study')
// let experience = Number(prompt('Enter Years of Experience'))

 

// if( ((course.trim().toLowerCase().includes('engineering') ) || (course.trim().toLowerCase()=='computer science')) && experience>=3){
//     alert('Qualified Credentials, we will get back to you Shortly')
// }else{
//     alert('Unqualified Credential')
// }

//NOT
// let course = prompt('Enter course of Study')

// if(!course){
//     alert('field cannot be empty')
// }else{
//     alert('credentials recieved')
// }

//Arrays

// const cars = ['volvo','benz','mazda']
// const newCars = []

// newCars.push(cars,'camry','corolla')
// console.log(cars)
// console.log(newCars)

// cars.pop()
// console.log(cars)
// console.log(newCars)
// console.log(cars)
//arrays are indexed
//because arrays are indexed we can acsess array values through the indecies
//volvo 
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
//arrays have length
// console.log(cars.length)
//push and pop
//the push can help us add to the array, it adds the new element to last part of the array. You can push more than one element
// const newCars = cars.push('camry', 'corolla')
// console.log(cars)
//pop removes the last element from the array
// const newCars = cars.pop()
// console.log(cars)
// console.log(newCars)
//shift and unshift
// the shift removes the first element , and the unshift method adds ie as the first element in the array


// const cars = ['volvo','benz','mazda']
// cars.shift()


// cars.unshift('VIP')
// console.log(cars)

//how to replace an element with another element in an array

// const cars = ['volvo','benz','mazda']
//i want to replace volvo with corolla
// cars[0] = 'corolla'
// console.log(cars)

//concat method
// const computers = ['HP','Lonovo','Dell']
// const newComputers = ['Samsung','Mac']

// const allComputers = computers.concat(newComputers)
// console.log(allComputers)
// console.log(computers)
// console.log(newComputers)

//includes
// const computers = ['HP','Lonovo','Dell']
// const res = computers.includes('Hp')
// console.log(res)

//indexOf
// const computers = ['HP','Lonovo','Dell']
// const res = computers.indexOf('Mac')

// console.log(res)

//join
// const computers = ['HP','Lonovo','Dell']
// const emt = []
// const res = computers.join(' ')
// emt.push(res)
//console.log(emt)

//reverse
//  const computers = ['HP','Lonovo','Dell']
//  const res = computers.reverse()
// console.log(res)

//slice
//  const computers = ['HP','Lonovo','Dell','Mac','Toshiba']
// const res = computers.slice(1,2)
// console.log(res)

//splice
 const computers = ['HP','Lonovo','Dell','Mac','Toshiba']
 const res = computers.splice(1,2,'SAMSUNG')
 console.log(computers) //updated version
 console.log(res) // the elements that were replaced


