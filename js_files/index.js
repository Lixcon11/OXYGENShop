//import { setAttributesByArray as easySet, divWithImages } from "./helper.js";
import sliderBuilder from "./sliderBuilder.js";
import eventFromButtons from "./bottomsCurrency.js";
import getUp from "./upButton.js";

//create Slider
const showCaseImages = ["https://talkingstuff.net/wp-content/uploads/2019/06/blue-gradient-abstract-hd-wallpaper-1920x1200-4430-300x100.jpg",
"https://mrwallpaper.com/images/thumbnail/synthwave-grid-mountains-1qxfiiabdb5qle2q.webp",
"https://s.turbifycdn.com/aah/yhst-68986320726817/find-your-joy-purple-blue-wallpaper-border-bp8124bd-57.gif"];

sliderBuilder("slider", "main", "main__questions", showCaseImages);

//Botton Currency
eventFromButtons();

//Up Button
getUp();