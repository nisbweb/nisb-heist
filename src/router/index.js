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
  store.commit('SET_LOADING', true)
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const user = await getCurrentUser()
  if (requiresAuth) {
    if (!user) {
      next('Sign-In')
    } else {
      const userRef = doc(db, 'users', user.uid)
      const userDoc = await getDoc(userRef)
      store.commit('SET_USER', userDoc.data())
      next()
    }
  } else {
    next()
  }
  store.commit('SET_LOADING', false)
})

export default router
