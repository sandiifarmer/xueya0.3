function Slide(tab,nav){
	this.tab = $(tab);
	this.nav = $(nav);

	this.bindTurn();
}

Slide.prototype = {

	bindTurn : function(){
		var self = this;
		self.nav.on("click",function(e){
			var newNav = $(e.currentTarget);
			if(newNav.hasClass("selected")) return;

			var index = newNav.index();
			self.doNav(newNav);
			self.doTab(index);
		});
	},

	doNav : function(newNav){
		var self = this,
			selected = self.nav.filter(".selected");		
		selected.removeClass("selected");
		newNav.addClass("selected");
	},

	doTab : function(index){
		var self = this,
			selected = self.tab.filter(".selected");
		selected.removeClass("selected");

		var newTab = $(self.tab[index]);
		newTab.css({"opacity":"0.3"}).addClass("selected");
		newTab.animate({"opacity":"1"},1000);
	}
};