<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-text class="px-4">
            <h1 class="title">
              Device Status
              <span
                class="subheading green--text"
                v-if="$store.state.bluetooth.connected"
              >Connected</span>
              <span
                class="subheading red--text"
                v-if="!$store.state.bluetooth.connected"
              >Disconnected</span>
            </h1>
            <p v-if="!$store.state.bluetooth.connected">You must be connected to a BLE device to control it.</p>
            <p v-if="$store.state.bluetooth.connected">You are connected to the device: {{$store.state.bluetooth.deviceName}}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>