import Vue from "vue";
import Vuex from "vuex";
import bluetooth from "../plugins/bluetooth";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    bluetooth: {
      connected: false,
      deviceName: ""
    }
  },
  mutations: {
    setBluetoothDeviceName: (state, payload) => (state.deviceName = payload),
    setBluetoothConnected: state => (state.bluetooth.connected = true),
    setBluetoothDisconnected: state => (state.bluetooth.connected = false)
  },
  actions: {
    enableBluetooth: ({ commit, state }, namePrefix) => {
      if (state.bluetooth.connected) {
        warn.log(
          "Bluetooth already connected to device: " + state.bluetooth.deviceName
        );
        return false;
      }
      bluetooth.init(namePrefix).then(bluetoothDevice => {
        if (bluetoothDevice) {
          commit("setBluetoothDeviceName", bluetoothDevice.name);
          commit("setBluetoothConnected");
        }
      });
    },
    disableBluetooth: ({ commit, state }) => {
      if (state.bluetooth.connected) {
        bluetooth.device.gatt.disconnect();
        commit("setBluetoothDisconnected");
        commit("setBluetoothDeviceName", "");
      }
    }
  }
});

export default store;
