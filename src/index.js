import './styles/default.scss'
import styles from './styles/module-styles.css'

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

const h2 = document.querySelector('h2')

h2.classList.add(styles.heading)

if (module.hot) {
  module.hot.accept()
}
