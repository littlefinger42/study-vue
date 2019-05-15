<template>
  <v-app>
    <v-navigation-drawer app>
      <v-toolbar>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Application</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-tile v-for="route in this.$router.options.routes" :key="route.name">
          <v-list-tile-action>
            <v-icon>{{route.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="title">
              <router-link :to="route.path">{{route.name}}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>BLUETOOTH CONTROL SYSTEM</span>
        <span class="font-weight-light"> THE ORCHESTRA</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-alert v-if="$store.state.bluetooth.connected" :value="true" color="success" icon="check_circle" outline>Connected</v-alert>
      <v-alert v-if="!$store.state.bluetooth.connected" :value="true" color="error" icon="error" outline>Disconnected</v-alert>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      //
    };
  }
};
</script>
