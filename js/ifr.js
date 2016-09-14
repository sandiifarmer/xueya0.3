function Ifr(){
	this.btn = $(".admin_banner_btn");
	this.iframe = $("#admin_iframe");
	this.main = $("#admin_main");
	this.data = {
		user : {url : "./ifr_user.html", height : 310},
		resource : {url : "./ifr_resource.html", height : 560},
		download : {url : "./ifr_download.html", height : 640},
		upload : {url : "./ifr_upload.html", height : 640}
	};
	this.bind();
}

Ifr.prototype = {

	bind : function(){
		var self = this;
		self.btn.on("click", function(e){
			var _self = $(e.currentTarget);
			if(_self.hasClass("selected")) return;
			var selected = self.btn.filter(".selected");
			selected.removeClass("selected");
			_self.addClass("selected");
			var key = _self.attr("data-key");
			self.main.css({height : self.data[key].height});
			self.iframe.attr({src : self.data[key].url});
		});
	}

};

