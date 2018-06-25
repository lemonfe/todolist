export default {
  updateCountAsync (store, data) {
    setTimeout(() => {
      store.commit('updateCount', data)
    }, data.time)
  }
}
