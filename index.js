const app = new (require('koa'))()
app.use(async ctx => {
  ctx.body = "hello world. now time: " + new Date()
})
app.listen(7001, () => {
  console.log('http://127.0.0.1:7001')
})
