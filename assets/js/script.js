"use strict";
const body = document.querySelector("body");

// Click event icon change function.
function iconChanged(e) {
	e.stopPropagation();
	const accordionButton = e.target.closest(".accordion-button");
	if (!!accordionButton) {
		if (accordionButton.classList.contains("collapsed")) {
			accordionButton
				.querySelector(".na-collapse-icon")
				.classList.remove("show");
			accordionButton.querySelector(".na-expand-icon").classList.add("show");
		} else {
			accordionButton.querySelector(".na-expand-icon").classList.remove("show");
			accordionButton.querySelector(".na-collapse-icon").classList.add("show");
		}
	}
}
if (!body.classList.contains("block-editor-page")) {
	document.addEventListener("click", iconChanged);
}
