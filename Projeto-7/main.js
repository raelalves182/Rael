// Criação de Promessa

const myPromise = new Promise((resolve, reject) => {
  const nome = 'Israel'

  if (nome === 'Israel') {
    resolve('Usuário Israel encontrado!')
  } else {
    reject('O usuário Israel não foi encontrado!')
  }
})

myPromise.then((data) => {
  console.log(data)
})

// Encadeamento de Then's

const myPromise2 = new Promise((resolve, reject) => {
  const nome = 'Israel'

  if (nome === 'Israel') {
    resolve('Usuário Israel encontrado!')
  } else {
    reject('O usuário Israel não foi encontrado!')
  }
})

myPromise2.then((data) => {
  return data.toLowerCase()
})
.then((stringModficada) => {
  console.log(stringModficada)
})

// Retorno do catch

const myPromise3 = new Promise((resolve, reject) => {
  const nome = 'Ismael'

  if (nome === 'Israel') {
    resolve('Usuário Israel encontrado!')
  } else {
    reject('O usuário Israel não foi encontrado!')
  }
})

myPromise3.then((data) => {
  console.log(data)
})
.catch((err) => {
  console.log('Aconteceu um erro: ' + err)
})

// Resolver várias promessas com all

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P1 ok! TimeOut')
  }, 2000)
})

const p2 = new Promise((resolve, reject) => {
  resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
  resolve('P3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data)
})

// Resolver várias promessas com race

const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('P4 ok! TimeOut')
  }, 2000)
})

const p5 = new Promise((resolve, reject) => {
  resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) => {
  resolve('P6 ok!')
})

const resolveAllrace = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data)
})

// Fetch request na api do Github "Fetch API"

const userName = 'raelalves182'

fetch(`https://api.github.com/users/${userName}`, {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
})
.then((res) => {
  console.log(typeof res)
  console.log(res)
  return res.json()
})
.then((data) => {
  console.log(`O nome de usuário é: ${data.name}`)
})
.catch((err) => {
  console.log(`Houve algum erro: ${err}`)
})