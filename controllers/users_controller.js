/*module.exports.profile=function(req,res){
  return res.end('<h1>this is User profile</h1>');
}*/

module.exports.profile=function(req,res){
  res.render('user_profile',{
    title:"Profile"
  }) ;
 }