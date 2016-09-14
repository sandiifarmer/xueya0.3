function Login(){
	this.template = {
		start : '<div class="cover" id="cover"><div class="login">',
		title : '<div class="login_title">会员登录</div>',
		textName : '<div class="login_text name">帐号</div>',
		textPwd : '<div class="login_text pwd">密码</div>',
		inputName : '<input type="text" class="login_input name">',
		inputPwd : '<input type="password" class="login_input pwd">',
		submit : '<div class="login_submit" id="login_submit">登录</div>',
		register : '<div class="login_btn register">免费注册</div>',
		regain : '<div class="login_btn regain">找回密码</div>',
		cross : '<div class="login-cross"></div>',
		end : '</div></div>',
		filter : '<div class="filter" id="filter"></div>'
	};

	this.bindShow();
	this.bindHide();
}

Login.prototype = {

	bindShow : function(){
		var self = this;
		$("#login").on("click",function(){
			var template = self.assembleTemplate();
			$("#body").append(template);

			var pageHeight = $("#body").height();
			$("#cover").height(pageHeight);
			$("#filter").height(pageHeight);
		});
	},

	assembleTemplate : function(){
		var self = this,
			template = "";
		for(var i in self.template){
			template += self.template[i];
		}
		return template;
	},

	bindHide : function(){
		var self = this;
		$(document).delegate("#login_submit","click",function(){
			$("#cover").remove();
			$("#filter").remove();
		});
		$(document).delegate("#cover","click",function(e){
			if( $(e.target).hasClass('cover') ){
				$("#cover").remove();
				$("#filter").remove();
			}
		});
		$(document.body).delegate('.login-cross', 'click', function(){
			$("#cover").remove();
			$("#filter").remove();
		});
	}

};

