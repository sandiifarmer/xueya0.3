function Menu(){
	this.trigger = $(".home_resourse_select");
	this.li = '<a class="home_resourse_list" target="_blank" href=""></a>';
	this.ul = '<div class="home_resourse_ul"></div>';
	this.keyRecord = "";
	this.data = {
		course : [
			{text : "语文", url : "http://www.baidu.com"},
			{text : "数学", url : "http://www.baidu.com"},
			{text : "英语", url : "http://www.baidu.com"},
			{text : "物理", url : "http://www.baidu.com"},
			{text : "化学", url : "http://www.baidu.com"},
			{text : "生物", url : "http://www.baidu.com"},
			{text : "政治", url : "http://www.baidu.com"},
			{text : "历史", url : "http://www.baidu.com"},
			{text : "地理", url : "http://www.baidu.com"},
			{text : "科学", url : "http://www.baidu.com"}
		],
		grade : [
			{text : "语文", url : "http://www.baidu.com"},
			{text : "数学", url : "http://www.baidu.com"},
			{text : "英语", url : "http://www.baidu.com"},
			{text : "物理", url : "http://www.baidu.com"},
			{text : "化学", url : "http://www.baidu.com"},
			{text : "生物", url : "http://www.baidu.com"},
			{text : "政治", url : "http://www.baidu.com"},
			{text : "历史", url : "http://www.baidu.com"},
			{text : "地理", url : "http://www.baidu.com"},
			{text : "科学", url : "http://www.baidu.com"}
		],
		exam : [
			{text : "语文", url : "http://www.baidu.com"},
			{text : "数学", url : "http://www.baidu.com"},
			{text : "英语", url : "http://www.baidu.com"},
			{text : "物理", url : "http://www.baidu.com"},
			{text : "化学", url : "http://www.baidu.com"},
			{text : "生物", url : "http://www.baidu.com"},
			{text : "政治", url : "http://www.baidu.com"},
			{text : "历史", url : "http://www.baidu.com"},
			{text : "地理", url : "http://www.baidu.com"},
			{text : "科学", url : "http://www.baidu.com"}
		],
		region : [
			{text : "语文", url : "http://www.baidu.com"},
			{text : "数学", url : "http://www.baidu.com"},
			{text : "英语", url : "http://www.baidu.com"},
			{text : "物理", url : "http://www.baidu.com"},
			{text : "化学", url : "http://www.baidu.com"},
			{text : "生物", url : "http://www.baidu.com"},
			{text : "政治", url : "http://www.baidu.com"},
			{text : "历史", url : "http://www.baidu.com"},
			{text : "地理", url : "http://www.baidu.com"},
			{text : "科学", url : "http://www.baidu.com"}
		]
	};

	this.bindTrigger();
	this.bindClose();
}

Menu.prototype = {

	bindTrigger : function(){
		var self = this;
		self.trigger.on("click",function(e){
			var btn = $(e.currentTarget),
				key = btn.attr("data-key");

			var ul = $(".home_resourse_ul");
			if(ul.length) ul.remove();	

			if(key == self.keyRecord){
				self.keyRecord = "";
			}else{
				self.keyRecord = key;				
				self.openMenu(btn);
			}			
		});
	},

	openMenu : function(btn){
		var self = this;			
		btn.append(self.ul);

		var ul = $(".home_resourse_ul"),
			key = btn.attr("data-key"),
			data = self.data[key],
			len = data.length;
		for(var i = 0; i < len; i++){
			ul.append(self.li);
			var li = $(".home_resourse_list").last(),
				text = data[i].text,
				url = data[i].url;
			li.text(text);
			li.attr({"href" : url});
		}
	},

	bindClose : function(){
		var self = this;
		$(document).on("click",function(e){
			var target = $(e.target);
			if(target.hasClass("home_resourse_list") || 
				target.hasClass("home_resourse_ul") || 
				target.hasClass("home_resourse_select"))
				return;
			var ul = $(".home_resourse_ul");
			if(ul.length) ul.remove();
			self.keyRecord = "";
		});
	}

};