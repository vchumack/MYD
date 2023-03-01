export const removeScroll = (shouldRemove) => {
	document.body.style.overflow = shouldRemove ? "hidden" : "visible";
};
