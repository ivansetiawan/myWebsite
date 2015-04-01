(function($){
	var defaults = {
		waitTime: 800
	};
	
	function lsAdvancedSlider(element, settings){
		this.options = {};
		this.element = element;
		$.extend(this.options, defaults, settings);

		this.carouselOuter = 
			this.element;

		this.autoSlide = this.options.autoSlide;

		this.carouselInner = 
			$(this.options.carouselInner);				

		this.wrapper = 
			$(this.options.wrapper);
		
		this.leftTransparentElement = 
			$(this.options.leftTransparentElement);
		
		this.rightTransparentElement = 
			$(this.options.rightTransparentElement);

		this.transparentWidth = 
			this.rightTransparentElement.width();

		this.customHeight = 
			this.options.customHeight;

		this.carouselItem = 
			this.options.carouselItem;

		this.singleImageWidth = this.carouselOuter.width() - 
			(this.leftTransparentElement.width() + 
				this.rightTransparentElement.width());

		this.leftLink = $(this.options.leftLink);

		this.rightLink = $(this.options.rightLink);

		this.scrollButtonsContainer = $(this.options.scrollButtonsContainer);

		this.scrollButtonClass = this.options.scrollButtonClass;

		this.init();
	};
	
	lsAdvancedSlider.prototype.init = function(){
		var parent = this,
			totalNumberOfImages = $(parent.carouselItem).length;

			$(parent.carouselItem).width(parent.singleImageWidth);
			parent.wrapper.width(totalNumberOfImages * parent.singleImageWidth);

			parent.carouselInner.height(parent.customHeight).width(parent.singleImageWidth);
			parent.leftTransparentElement.height(parent.customHeight);
			parent.rightTransparentElement.height(parent.customHeight);
			$(parent.carouselItem).height(parent.customHeight);
	};
	
	$.fn.advancedCarousel = function(settings){
		var $this = this;
		new lsAdvancedSlider(this, settings);
		return $this;
	};
});


