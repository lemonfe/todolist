import '../assets/styles/footer.styl'

export default {
  data () {
    return {
      author: 'lemon'
    }
  },
  render () {
    return (
      <div id="footer">
        <span>作者： {this.author}</span>
      </div>
    )
  }
}