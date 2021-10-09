<template>
  <div id="SignIn" class="min-h-screen flex items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <Logo/>
      <button id="google-button" class="flex items-center my-10 px-6 py-2 rounded-full border" @click="SignIn">
        <img src="@/assets/icons8-google.svg" class="w-6 mr-2"/>
        <span class="text-lg font-bold text-gray-800">
          Sign In
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import cities from '../cities.json'
import Logo from '@/components/Logo.vue'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import db from '../firebase'
export default {
  name: '',
  title: 'Sign In - La Casa de Tesoro',
  components: {
    Logo
  },
  data () {
    return {

    }
  },
  methods: {
    random (min, max) {
      const num = Math.random() * (max - min) + min
      return Math.floor(num)
    },
    SignIn () {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
        .then((result) => {
          // const credential = GoogleAuthProvider.credentialFromResult(result)
          // const token = credential.accessToken
          const user = result.user

          // get random city
          const city = cities[Math.floor(Math.random() * cities.length)]
          getDoc(doc(db, 'users', user.uid)).then((docSnap) => {
            console.log(docSnap.exists())
            if (!docSnap.exists()) {
              setDoc(doc(db, 'users', user.uid), {
                id: user.uid,
                code: city,
                name: user.displayName,
                email: user.email,
                progress: 0,
                completed: false,
                completedTime: null,
                wrongAttempts: 0
              }).then(data => {
                this.$router.push({ name: 'Home' })
              }).catch(err => {
                console.error(err)
              })
            } else this.$router.push({ name: 'Home' })
          }).catch(err => {
            console.error(err)
          })
        }).catch((error) => {
          console.error(error)
          // const errorCode = error.code
          // const errorMessage = error.message
          // const email = error.email
          // // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>

@keyframes conjure {
  from {opacity: 0;transform: translateY(10px);}
  to {opacity: 1;transform: translateY(0px);}
}
#google-button {
  animation: conjure 2s ease-in-out 0s 1 alternate;
}
</style>
