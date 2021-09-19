const app = new (require('koa'))()
app.use(async ctx => {
  ctx.body = `
    <h2>Hello world!!!!!!</h2>
    <h2>I'm <span style="color: red;">juln</span>.</h2>
  `
})
app.listen(7001, () => {
  console.log('http://127.0.0.1:7001')
})
