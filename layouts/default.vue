<template>
  <v-app light>
    <v-navigation-drawer
      :width="300"
      light
      expand-on-hover
      mini-variant
      permanent
      app
    >
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="primary"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <v-list nav>
          <div v-if="login.loggedIn !== true">
            <v-list-item
              to="/signin"
              link
              exact
              color="primary"
              @click="Signin"
            >
              <v-list-item-action>
                <v-icon>mdi-login-variant</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="'ลงชื่อเข้าใช้'" />
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/signup" router exact color="primary">
              <v-list-item-action>
                <v-icon>mdi-account-plus-outline</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="'ลงทะเบียน'" />
              </v-list-item-content>
            </v-list-item>
          </div>
          <div v-else>
            <v-list-item to="/profile" link exact color="primary">
              <v-list-item-action>
                <v-icon>mdi-account-box</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="'ข้อมูลผู้ใช้'" />
              </v-list-item-content>
            </v-list-item>
            <v-list-item link color="primary" @click="logout">
              <v-list-item-action>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="'ออกจากระบบ'" />
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    items: [{ icon: 'mdi-home-outline', title: 'Library System', to: '/' }],
  }),
  computed: {
    ...mapState({
      login: (state) => state.login,
    }),
  },
  methods: {
    logout() {
      this.$store.commit('LOGOUT')
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
