import LazyLoad from "vanilla-lazyload";

const lazyMedia = new LazyLoad({
	elements_selector: '[data-src],[data-srcset]',
	class_loaded: '_lazy-loaded',
	use_native: false
});


// Оновити модуль
//lazyMedia.update();