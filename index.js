const app = new (require('koa'))()
app.use(async ctx => {
  ctx.body = "<h1>hello world! I'm juln.</h1>"
})
app.listen(7001, () => {
  console.log('http://127.0.0.1:7001')
})
