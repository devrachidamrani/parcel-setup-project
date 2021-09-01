console.log('Is working !!')

const obj = {
  a: 'apple',
  i: 'ice',
  c: 'cheese',
  d: {
    cd: 'cheese danish',
  },
}

const newObj = { ...obj }

console.log(obj?.f?.fa)

if (module.hot) {
  module.hot.accept()
}
