// plugins/aos.js
import AOS from 'aos'
import 'aos/dist/aos.css'
export default ({ app }) => {
  app.AOS = new AOS.init({
    disable: function () {
      var maxWidth = 800
      return window.innerWidth < maxWidth
    },
  }) // or any other options you need
}
