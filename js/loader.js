
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("main").style.visibility = "hidden";
    document.querySelector(".loader").style.visibility = "visible";
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("main").style.visibility = "visible";
  }
};


function googleTranslateElementInit() {
	new google.translate.TranslateElement(
		{
			pageLanguage: "en",
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
		},
		"google_translate_element"
	);
}