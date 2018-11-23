function fn(min, max){
	var r = Math.random()*(max-min)  // 8999以内的数
	return parseInt(r+min) // 大于1000的数，并且小于9999
}
Router.post('/getCode',(req,res)=>{
    let {email}=req.body;
    let RNum=fn(100000, 999999);
    let RandomNum=RNum.toString();
    console.log(RandomNum);
    mail.sendmail(email,RandomNum)
    .then((data)=>{
        // obj[email]=RandomNum; //保存验证码信息
        setTimeout(function(){obj[email]=null},30000)
        res.send('验证码已发送')
    })
    .catch((err)=>{
        console.log(err);
        res.send('验证码发送失败')
    })

})