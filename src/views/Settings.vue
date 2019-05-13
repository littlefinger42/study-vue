<template>
  <div>
    <h1>{{ msg }}</h1>
    <v-switch
      v-model="switch1"
      v-on:click="requestBluetooth"
      :label="`Enable bluetooth control: ${switch1.toString()}`"
    ></v-switch>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data: function() {
    return {
      msg: "Settings",
      switch1: false
    };
  },
  methods: {
    requestBluetooth: () => {
      navigator.bluetooth
        .requestDevice({ filters: [{ namePrefix: ["NAMEPREFIX"] }], optionalServices: [0xFFE0] })
        // .then(device => {
        //   /* ... */
        // })
        // .catch(error => {
        //   console.log(error);
        // });
    }
  }
  // props: {
  //   msg: String
  // }
};
</script>