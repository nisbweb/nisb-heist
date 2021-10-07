import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import db from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: () => import('../views/Lobby.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/sign-in',
    name: 'Sign-In',
    component: () => import('../views/SignIn.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

var getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(
      auth,
      user => {
        unsubscribe()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  console.log(to.name, from.name)
  store.commit('SET_LOADING', true)
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const user = await getCurrentUser()
  if (requiresAuth) {
    if (!user) {
      next('Sign-In')
    } else {
      const promises = [
        getDoc(doc(db, 'admin', 'admin')),
        getDoc(doc(db, 'users', user.uid))
      ]
      // const userDoc = await getDoc(userRef)
      const results = await Promise.all(promises)
      store.commit('SET_USER', results[1].data())

      if (results[1].data().admin === true) next()
      else if (!results[0].data().started) {
        if (to.name === 'Lobby') next()
        else next('Lobby')
      } else if (results[1].data().completed !== true) {
        if (to.name === 'Home') next()
        else next('Home')
      } else {
        if (to.name === 'Result') next()
        else next('Result')
      }
    }
  } else {
    next()
  }
  store.commit('SET_LOADING', false)
})

export default router
