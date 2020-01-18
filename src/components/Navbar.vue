<template>
<nav>
    <v-toolbar flat v-app-bar>
        <v-app-bar-nav-icon class="grey--text teal dark"  @click="drawer = !drawer"   ></v-app-bar-nav-icon>
         
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Task</span>
            <span>Assignment</span>
        </v-toolbar-title>
            <v-spacer></v-spacer>
           
           <router-link to="/" tag="button">
           
            <v-btn flat  >
                <span>Sign Out</span>
                <v-icon>exit_to_app</v-icon> 
            </v-btn>
        </router-link>
    </v-toolbar>
     <v-navigation-drawer app v-model="drawer"   color="white">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          router :to="item.route"
        >
          <v-list-item-icon>
            <v-icon color="teal">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</nav>
   
</template>

<script>
export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
          { title: 'Customer', icon: 'people' , route: '/customer' },
          { title: 'Chart', icon: 'pie_chart' , route: '/chart' },
          { title: 'Settings', icon: 'settings_applications' , route: '/settings' },
        ],
      }
    },
  }
</script>



