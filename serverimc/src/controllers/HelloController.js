class HelloController {
  async index(req, res){
    return res.json({ hello: `foi porra!!!`});
  }
}

export default new HelloController();