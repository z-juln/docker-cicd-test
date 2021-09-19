const app = new (require('koa'))()
app.use(async ctx => {
  ctx.body = "hello world. I'm juln."
})
app.listen(7001, () => {
  console.log('http://127.0.0.1:7001')
})
