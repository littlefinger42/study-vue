<template>
  <div>
    <h1>{{ msg }}</h1>
    <v-text-field v-model="prefix" label="Bluetooth SSID Prefix" v-if="connected"></v-text-field>
    <v-switch
      v-model="connected"
      v-on:click="toggleBluetooth"
      label="Enable bluetooth control"
    ></v-switch>
  </div>
</template>

<script>
export default {
  name: "Settings",
  prop: ["prefix"],
  data () {
    return {
      msg: "Settings",
      prefix: this.prefix
    };
  },
  methods: {
    toggleBluetooth () {
      if (!this.connected) {
        this.$store.dispatch("enableBluetooth", this.prefix);
      } else {
        this.$store.dispatch("disableBluetooth");
      }
    },
  },
  computed: {
    connected () {
      return this.$store.state.bluetooth.connected
    }
  }
};
</script>