const body = document.querySelector("body");
const header = document.createElement("header");
const headerLeftContainer = document.createElement("div");
const headerRightContainer = document.createElement("div");
const logoImg = document.createElement("img");
const headerUl =  document.createElement("ul");
const headerProducts = document.createElement("a");
const headerMarketplace = document.createElement("a");
const headerPricing = document.createElement("a");
const headerDocumentation = document.createElement("a");
const headerSupport = document.createElement("a");
const headerMore = document.createElement("a");
const wrapper = document.createElement("div");
const inputSearchElements = document.createElement("input");
const btnSearchElements = document.createElement("button");
const iconBtn = document.createElement("img");
const RightlabelSearch = document.createElement("label");
const logIn = document.createElement("a");
const spanOr = document.createElement("span");
const aSignup = document.createElement("a");
const navPredHeader = document.createElement("nav");
const imgSky = document.createElement("img");
const spanSales = document.createElement("span");
const spanDash = document.createElement("span");
const spanHeroku = document.createElement("span");
const linkLogo = document.createElement("a");
const sectionAfterHeader = document.createElement("section");
const logo = document.createElement("img");



body.style.margin = "0";
body.style.padding = "0";
header.style.height = "40px";
header.style.backgroundColor = "#3B2F63";
header.style.backgroundImage = "radial-gradient(circle at 50% top, rgba(84,90,182,0.6) 0%, rgba(84,90,182,0) 75%),radial-gradient(circle at right top, #794aa2 0%, rgba(121,74,162,0) 57%)"
logoImg.src = "logo-9ddfa622029bcad4fd1709b8045bb897b207d4d8c3005ee5e360abd5745341b2.svg";
headerProducts.innerText = "Products";
headerMarketplace.innerText = "Marketplace";
headerPricing.innerText = "Pricing";
headerDocumentation.innerText = "Documentation";
headerSupport.innerText = "Support";
headerMore.innerText = "More";
headerUl.style.color = "rgba(242,238,255,0.6)";
headerUl.style.listStyleType = "none";
headerLeftContainer.style.display = "flex";
headerUl.style.display = "flex";
header.style.display = "flex";
headerLeftContainer.setAttribute("class", "headerLeftContainer");
headerRightContainer.setAttribute("class", "headerRightContainer");
inputSearchElements.placeholder = "Search Elements";
inputSearchElements.style.width = "150px";
inputSearchElements.style.textAlign = "center";
inputSearchElements.style.borderRadius = "5px";
inputSearchElements.style.padding = "5px";
wrapper.setAttribute("class", "wrapper");
wrapper.style.width = "700px";
btnSearchElements.setAttribute("type", "submit");
iconBtn.src = "btnSearch.png";
iconBtn.style.width = "14px";
iconBtn.style.height = "14px";
iconBtn.style.background = "green";
logIn.innerText = "Log in";
logIn.setAttribute("href","https://id.heroku.com/login");
logIn.style.color = "rgba(242, 238, 255, 0.6)"
logIn.style.textDecoration = "none";
spanOr.innerText = "or";
spanOr.style.fontSize = "13px";
aSignup.innerText = "Sign up";
aSignup.setAttribute("href","https://signup.heroku.com/");
aSignup.style.color = "rgba(242, 238, 255, 0.6)"
aSignup.style.textDecoration = "none";
aSignup.style.padding = "5px";
aSignup.style.backgroundColor = "rgba(0,0,0,0.2)";
aSignup.style.borderRadius = "4px";
aSignup.style.padding = "6px 12px";
aSignup.style.color = "white";
header.style.padding = "20px";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.justifyContent = "space-between";
imgSky.src = "sky.svg"
navPredHeader.style.padding = "4px 15px";
navPredHeader.style.display = "flex";
navPredHeader.style.alignItems = "center";
navPredHeader.style.backgroundColor = "#EAF5FE";
imgSky.style.width = "18px";
imgSky.style.height = "20px";
spanSales.innerText = "Salesforce Developers"
imgSky.style.padding ="2px 15px 2px 2px";
spanDash.innerText = "/"
spanDash.style.margin = "0 10px";
spanHeroku.innerText = "Heroku"
navPredHeader.style.fontSize = "11px";
navPredHeader.style.fontFamily = "Roboto, sans-serif";
header.style.fontFamily = "Roboto, sans-serif";
header.style.fontSize = "15px"
headerUl.style.gap = "20px";
inputSearchElements.style.outline = "none";
inputSearchElements.style.backgroundColor = "#3B2F63";
inputSearchElements.style.backgroundImage = "radial-gradient(circle at 50% top";
inputSearchElements.style.border = "none";
inputSearchElements.style.background = "sky.svg";
headerRightContainer.style.display = "flex";
headerRightContainer.style.gap = "10px";
headerRightContainer.style.alignItems = "center";
headerRightContainer.style.color = "rgba(242, 238, 255, 0.6";
linkLogo.style.display = "flex";
linkLogo.setAttribute("href","https://www.heroku.com/home");
headerProducts.setAttribute("href","https://www.heroku.com/products");
headerProducts.style.textDecoration = "none";
headerProducts.style.color = "rgba(242, 238, 255, 0.6)";
headerMarketplace.setAttribute("href","https://elements.heroku.com/");
headerMarketplace.style.textDecoration = "none";
headerMarketplace.style.color = "rgba(242, 238, 255, 0.6)";
headerPricing.setAttribute("href","https://www.heroku.com/pricing");
headerPricing.style.textDecoration = "none";
headerPricing.style.color = "rgba(242, 238, 255, 0.6)";
headerDocumentation.setAttribute("href","https://devcenter.heroku.com/");
headerDocumentation.style.textDecoration = "none";
headerDocumentation.style.color = "rgba(242, 238, 255, 0.6)";
headerSupport.setAttribute("href","https://www.heroku.com/support");
headerSupport.style.textDecoration = "none";
headerSupport.style.color = "rgba(242, 238, 255, 0.6)";
headerMore.setAttribute("href","https://www.heroku.com/support#");
headerMore.style.textDecoration = "none";
headerMore.style.color = "rgba(242, 238, 255, 0.6)";
logo.src = "button_icon.svg";
sectionAfterHeader.style.backgroundColor ="#3B2F63";
sectionAfterHeader.style.backgroundImage = "radial-gradient(circle at 50% top, rgba(84,90,182,0.6) 0%, rgba(84,90,182,0) 75%),radial-gradient(circle at right top, #794aa2 0%, rgba(121,74,162,0) 57%)"
headerLeftContainer.style.flex = "flex";






headerLeftContainer.append(linkLogo);
body.append(navPredHeader);
body.append(wrapper);
headerLeftContainer.append(logoImg);
header.append(headerLeftContainer);
header.append(headerRightContainer);
body.append(header);
headerLeftContainer.append(headerUl);
headerUl.append(headerProducts,headerMarketplace,headerPricing,headerDocumentation,headerSupport,headerMore);
inputSearchElements.append(btnSearchElements);
headerRightContainer.append(RightlabelSearch);
RightlabelSearch.append(inputSearchElements);
RightlabelSearch.append(iconBtn);
headerRightContainer.append(logIn);
headerRightContainer.append(spanOr);
headerRightContainer.append(aSignup)
navPredHeader.append(imgSky);
navPredHeader.append(spanSales);
navPredHeader.append(spanDash);
navPredHeader.append(spanHeroku);
linkLogo.append(logoImg);
body.append(sectionAfterHeader);
sectionAfterHeader.append(wrapper);
wrapper.append(logo);

