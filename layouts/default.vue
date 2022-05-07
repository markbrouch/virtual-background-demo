<template>
  <v-app dark>
    <v-main>
      <v-container>
        <GithubCorner />
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import GithubCorner from '~/components/GithubCorner.vue'

export default {
  name: 'DefaultLayout',
  components: { GithubCorner },
}
</script>
