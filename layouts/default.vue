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
          color="primary"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <div v-if="login.type === 'Admin'">
          <v-list-group
            v-for="item in lgnd"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <template #activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in item.items"
              :key="child.title"
              :to="child.to"
              router
              exact
            >
              <v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
        </div>
        <v-list-item v-if="login.loggedIn" to="" router exact color="primary">
          <v-list-item-action>
            <v-icon>mdi-truck-fast-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="'สถานะการจัดส่ง'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template #append>
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
            <v-list-item to="/profile" link color="primary">
              <v-list-item-action>
                <v-icon>mdi-account-box-outline</v-icon>
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
    items: [
      {
        icon: 'mdi-home-outline',
        title: 'Library System',
        to: '/',
      },
      { icon: 'mdi-format-list-checkbox', title: 'กฎการยืม', to: '/ruler' },
    ],
    lgnd: [
      {
        action: 'mdi-book-open-outline',
        items: [
          { title: 'เพิ่มหนังสือ', to: '/addbook' },
          { title: 'ยืม', to: '/borrow' },
          { title: 'คืน', to: '/return' },
        ],
        title: 'จัดการหนังสือ',
      },
      {
        action: 'mdi-account-multiple-outline',
        items: [
          { title: 'ค้นหาสมาชิก', to: '/searchmember' },
          { title: 'รายการจอง', to: '' },
          { title: 'รายการยืม', to: '/borrowlist' },
          { title: 'ประวัติการยืม', to: '' },
           { title: 'ตรวจสอบผู้ใช้', to: '' },
        ],
        title: 'จัดการสมาชิก',
      },
    ],
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
