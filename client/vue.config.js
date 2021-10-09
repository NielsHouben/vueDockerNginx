module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'), //maybe unnecessary
        prependData: `
        @import "@/scss/main.scss";
        @import "@/scss/variables.scss";
        
        ` //think this wors cus its sasss-loader 8
      }
    }
  }
}