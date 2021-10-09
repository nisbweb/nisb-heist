<template>
  <div id="Home" class="min-h-screen pt-20 2xl:pt-32">
    <nav class="flex items-center justify-between fixed top-0 left-0 w-full py-2">
      <Logo :animate="false" class="transform scale-50 -translate-x-16"/>
    </nav>

    <h2 class="text-center font-bold text-3xl mb-10">Leaderboard</h2>
    <table id="result-table" class="border-collapse w-full">
    <thead>
        <tr>
            <th class="border-b-2">Email</th>
            <th class="border-b-2 py-2">Code</th>
            <th class="border-b-2">Name</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td class="border-b text-center py-2">{{user.email}}</td>
          <td class="border-b text-center py-2">{{user.code}}</td>
          <td class="border-b text-center py-2">{{user.name}}</td>
        </tr>
    </tbody>
</table>

  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import { mapGetters } from 'vuex'
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore'
import db from '../firebase.js'

export default {
  name: 'Home',
  components: {
    Logo
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
  },
  mounted () {
    const q = query(collection(db, 'users'), where('completed', '==', true), orderBy('completedTime'))
    onSnapshot(q, (querySnapshot) => {
      this.users = []
      querySnapshot.forEach((doc) => {
        this.users.push(doc.data())
      })
    })
  },
  computed: {
    ...mapGetters({
    })
  }
}
</script>
<style lang="scss" scoped>
#phone-screen {
  border-radius: 2.2rem;
}
.height-phone {
  height: 666px !important;
}
.width-phone {
  width: 330px !important;
}
</style>
