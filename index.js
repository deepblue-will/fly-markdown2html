export default function () {
  this.filter("markdown2html", (data, options) => {
    return {
      code: require("markdown-it")(options).render(data.toString()),
      ext: ".html"
    }
  })
}
