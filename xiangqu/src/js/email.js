const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
	port: 465, // SMTP 端口
	secureConnection: true, // 使用了 SSL
	auth: {
		user: '1158330406@qq.com', //发送者
		// smtp授权码
		pass: 'mbkeeekeshwohbci',
	}
});

function sendmail(mail, msg) {
	return new Promise((resolve,reject)=>{
		let mailOptions = {
			from: '1158330406@qq.com', // 发送者
			to: mail, // 接受者,可发送多个，用逗号隔开
			subject: 'xx管理系统注册验证码', // Subject line
			// 发送text或者html格式
			text: '验证码：'+msg+',该验证码将于5分钟后过期', // plain text body
		};
		transporter.sendMail(mailOptions, (error, info) => {
			if(error) {
				reject(error);
			}
			resolve('ok');
		});
	})
}
module.exports={sendmail};