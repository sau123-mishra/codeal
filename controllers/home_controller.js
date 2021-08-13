module.exports.home=function(req,res){
  return res.end('<h1>This is express for codeal</h1>');
}

module.exports.funny=function(req,res){

  return res.end('<p>Hahaha how funny this joke is...</p>')
}