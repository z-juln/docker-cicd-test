const app = new (require('koa'))()
app.use(async ctx => {
  ctx.body = "<h2>hello world.</h2> <h2>I'm juln.</h2>"
})
app.listen(7001, () => {
  console.log('http://127.0.0.1:7001')
})
