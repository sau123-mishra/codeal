module.exports.home=function(req,res){
  console.log(req.cookies);
  res.cookie('user_id',2);
  // console.log('Signed Cookies: ', req.signedCookies);
 res.render('home',{
   title:"Home"
 }) ;
}