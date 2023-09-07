import {body,header,headerLeftContainer,headerRightContainer,logoImg,headerUl,headerProducts,headerMarketplace,headerPricing,headerDocumentation,headerSupport,headerMore,wrapper,inputSearchElements,btnSearchElements,iconBtn,RightlabelSearch,logIn,spanOr,aSignup,navPredHeader,imgSky,spanSales,spanDash,spanHeroku,linkLogo,sectionAfterHeader,logo} from "./variables.js"

export {appends};

function appends (){
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
}




