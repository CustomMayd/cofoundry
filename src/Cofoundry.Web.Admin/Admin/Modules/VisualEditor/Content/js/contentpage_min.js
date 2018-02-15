/*! Cofoundry 2018-02-14 */
var Cofoundry=Cofoundry||{};Cofoundry.events={on:function(a,b){this._callbacks||(this._callbacks={});(this._callbacks[a]||(this._callbacks[a]=[])).push(b)},off:function(a,b){for(var c=0,d=this._callbacks[a].length;d>c;c++)this._callbacks[a][c]===b&&this._callbacks[a].splice(c,1)},trigger:function(){var a,b,c,d,e=Array.prototype.slice.call(arguments,0),f=e.shift();if(!(b=this._callbacks))return this;if(!(a=this._callbacks[f]))return this;for(c=0,d=a.length;d>c;c++)a[c].apply(this,e);return this}},Cofoundry.visualEditor=function(){var a,b,c,d,e={bindIframe:function(){function b(b){switch(b.data.type){case"MODAL_CLOSE":a.style.display="none"}}var c=document.getElementById("cofoundry-src__iFrame");document.getElementsByTagName("body")[0];a=c,a.contentWindow.postMessage({action:"config",args:[!1,"EntityNameSingular"]},document.location.origin);var d=window.addEventListener?"addEventListener":"attachEvent",e=window[d],f="attachEvent"===d?"onmessage":"message";e(f,b)},bindToolbar:function(){var a=document.getElementById("cofoundry-sv"),c=e.model.visualEditorMode;b=a,"Draft"!==c&&"Edit"!==c||!e.model.hasEntityPublishPermission?"Live"===c&&e.model.hasEntityPublishPermission?f.addButton({icon:"fa-cloud-download",title:"Unpublish",type:"primary",classNames:"publish popup",click:e.unpublish}):"SpecificVersion"===c&&e.model.hasEntityUpdatePermission&&f.addButton({icon:"fa-files-o",title:"Copy to<br />draft",type:"primary",classNames:"publish popup",click:e.copyToDraft}):f.addButton({icon:"fa-cloud-upload",title:"Publish",type:"primary",classNames:"publish popup",click:e.publish})},bindGui:function(){function b(){function a(a){G(),j(),c()}function b(a){E(a)}window.addEventListener("resize",a),document.addEventListener("scroll",b)}function c(){timer&&clearTimeout(timer),timer=setTimeout(function(){f(document)},500)}function f(a,b){function c(b,c,e,f){var j,l,m,n="data-cms-"+d+"-"+b,o=!1;for(j=a.hasAttribute&&a.hasAttribute(n)?[a]:a.querySelectorAll("["+n+"]"),l=j.length,m=0;l>m;++m){var p=j[m],q=g(p,b);if(q.name){o=q.isBlock?Boolean(p.parentNode.getAttribute("data-cms-multi-block")):Boolean(p.getAttribute("data-cms-multi-block")),q.index=m;var r=h(q);if(L.appendChild(r),o||!o&&!q.hasContent){var s=i(q);L.appendChild(s)}p.addEventListener("mouseenter",c),p.addEventListener("mouseleave",e),f&&p.addEventListener("mousemove",f),current_ui_elements.push({el:p,ui_elements:[r,s],remove:k,events:{mouseenter:c,mouseleave:e,mousemove:f}})}}}var d=e.model.isCustomEntityRoute?"custom-entity":"page";c("region",w,x,y),c("region-block",z,A)}function g(a,b){var c={},d="region-block"===b,e=d?a.parentNode:a;a.offsetWidth||(a.style.width="100%");var f=I(a);return c.idName=(c.isBlock?"block":"region")+"_ui_wrap",c.isBlock=d,c.y=f.top,c.x=f.left,c.width=a.offsetWidth,c.height=a.offsetHeight,c.el=a,c.hasContent=a.innerHTML.length>0,c.html=a.innerHTML,c.name=a.getAttribute(d?"data-cms-page-block-title":"data-cms-page-region-name"),c.regionName=e.getAttribute("data-cms-page-region-name"),c.className=d?"cofoundry-sv__ui-wrap--block":"cofoundry-sv__ui-wrap--region",C(a,c),B(e,c),c}function h(a){var b=wrap_ui_template.cloneNode(!0);return b.id=a.idName+"_"+a.index,b.className=a.className,b.style.top=a.y+"px",b.style.left=a.x+"px",b.style.width=a.width+"px",b.style.height=a.height+"px",b.firstChild.nextSibling.innerHTML=a.name,b}function i(a){console.log("data ",a);var b=J.cloneNode(!0);return a.isBlock||a.hasContent?b.style.top=(a.isBlock?a.y+a.height:a.y)+"px":(b.className+=" cofoundry-sv__btn-add-block--empty",b.style.top=a.y+a.height/2+"px"),b.style.left=a.x+a.width/2+"px",b.style.display="block",b.title="Add content block to "+a.regionName,b.addEventListener("click",function(){m(a)}),console.log("title",b.title),b}function j(){current_ui_elements.forEach(function(a,b){a.remove()}),current_ui_elements=[]}function k(){for(var a in this.events)this.events.hasOwnProperty(a)&&this.el.removeEventListener(a,this.events[a]);for(var b=0;b<this.ui_elements.length;b++)this.ui_elements[b]&&L.removeChild(this.ui_elements[b])}function l(){var a=d.querySelectorAll("#cofoundry-sv__btn-block-moveup")[0],b=d.querySelectorAll("#cofoundry-sv__btn-block-movedown")[0],c=d.querySelectorAll("#cofoundry-sv__btn-block-edit")[0],e=d.querySelectorAll("#cofoundry-sv__btn-block-add")[0],f=d.querySelectorAll("#cofoundry-sv__btn-block-delete")[0],g=d.querySelectorAll("#cofoundry-sv__btn-block-addabove")[0],h=d.querySelectorAll("#cofoundry-sv__btn-block-addbelow")[0];u(a,"moveBlockUp",n),u(b,"moveBlockDown",o),u(c,"editBlock",p),u(e,"addBlock",q),u(g,"addBlockAbove",r),u(h,"addBlockBelow",s),u(f,"deleteBlock",t)}function m(a){var b="First";a.isBlock&&(b="AfterItem"),v("addRegionBlock",{insertMode:b,pageTemplateRegionId:a.pageTemplateRegionId,permittedBlockTypes:a.permittedBlockTypes,versionBlockId:a.versionBlockId,pageBlockTypeId:a.pageBlockTypeId,isCustomEntity:e.model.isCustomEntityRoute,regionName:a.regionName})}function n(){v("moveBlockUp",{versionBlockId:scope.versionBlockId,isCustomEntity:e.model.isCustomEntityRoute,isUp:!0})}function o(){v("moveBlockDown",{versionBlockId:scope.versionBlockId,isCustomEntity:e.model.isCustomEntityRoute,isUp:!1})}function p(){v("editBlock",{versionBlockId:scope.versionBlockId,pageBlockTypeId:scope.pageBlockTypeId,isCustomEntity:e.model.isCustomEntityRoute})}function q(){v("addBlock",{insertMode:"Last",pageTemplateRegionId:scope.pageTemplateRegionId,permittedBlockTypes:scope.permittedBlockTypes,versionBlockId:scope.versionBlockId,pageBlockTypeId:scope.pageBlockTypeId,isCustomEntity:e.model.isCustomEntityRoute})}function r(){v("addBlockAbove",{insertMode:"BeforeItem",pageTemplateRegionId:scope.pageTemplateRegionId,permittedBlockTypes:scope.permittedBlockTypes,versionBlockId:scope.versionBlockId,pageBlockTypeId:scope.pageBlockTypeId,isCustomEntity:e.model.isCustomEntityRoute})}function s(){v("addBlockBelow",{insertMode:"AfterItem",pageTemplateRegionId:scope.pageTemplateRegionId,permittedBlockTypes:scope.permittedBlockTypes,versionBlockId:scope.versionBlockId,pageBlockTypeId:scope.pageBlockTypeId,isCustomEntity:e.model.isCustomEntityRoute})}function t(){v("deleteBlock",{versionBlockId:scope.versionBlockId,isCustomEntity:e.model.isCustomEntityRoute})}function u(a,b,c){a&&(scope.buttons[b]=a,a.addEventListener("click",c))}function v(b,c){scope.buttons[b],a.contentWindow.postMessage({action:b,args:[c]},document.location.origin),a.style.display="block"}function w(a){E(a,a.target)}function x(){}function y(a){E(a)}function z(a){F(a.target)}function A(){}function B(a,b){b.currentElement=a,b.pageTemplateRegionId=a.getAttribute("data-cms-page-template-region-id"),b.permittedBlockTypes=D(a.getAttribute("data-cms-page-region-permitted-block-types")),b.regionName=a.getAttribute("data-cms-page-region-name"),b.isMultiBlock=a.getAttribute("data-cms-multi-block"),b.isCustomEntity=a.hasAttribute("data-cms-custom-entity-region")}function C(a,b){b.currentBlockElement=a,b.versionBlockId=a.getAttribute("data-cms-version-block-id"),b.pageBlockTypeId=a.getAttribute("data-cms-page-block-type-id")}function D(a){return a?a.split(","):[]}function E(a,b){b&&(B(b,scope),H("addRegionBlock",scope.isMultiBlock))}function F(a){function b(){var b=I(a),e=b.top,f=b.left;c={top:e+"px",left:(f||0)+"px"},scope.startScroll=scope.currentScrollY,scope.startY=e,d.style.display="block",d.style.top=c.top,d.style.left=c.left}var c={};a&&(C(a,scope),H("addBlock",!scope.versionBlockId),H("editBlock",scope.versionBlockId),H("deleteBlock",scope.versionBlockId),H("moveBlockUp",scope.isMultiBlock),H("moveBlockDown",scope.isMultiBlock),H("addBlockAbove",scope.isMultiBlock),H("addBlockBelow",scope.isMultiBlock)),b()}function G(){d.style.display="none"}function H(a,b){var c=scope.buttons[a];c&&(c.style.display=b?"block":"none")}function I(a){if(!a)return{left:0,top:0};var b=a.getBoundingClientRect(),c=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,d=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{top:b.top+d,left:b.left+c}}var J=document.getElementById("cofoundry-sv__btn-add-block"),K=document.getElementById("cofoundry-sv__block-popover-container"),L=document.getElementsByTagName("body")[0];wrap_ui_template=document.getElementById("cofoundry-sv__ui-wrap"),current_ui_elements=[],timer=null,scope={buttons:{},regionY:-1},d=K,document.getElementsByTagName("html")[0].className=e.model.isCustomEntityRoute?"cofoundry-editmode__custom-entity":"cofoundry-editmode__page","Edit"===e.model.visualEditorMode&&(f(document),l(),b())},publish:function(b){b.preventDefault(),a.contentWindow.postMessage({action:"publish",args:[{entityId:e.model.isCustomEntityRoute?e.model.page.customEntity.customEntityId:e.model.page.page.pageId,isCustomEntity:e.model.isCustomEntityRoute,customEntityDefinition:e.model.customEntityDefinition}]},document.location.origin),a.style.display="block"},unpublish:function(b){b.preventDefault(),a.contentWindow.postMessage({action:"unpublish",args:[{entityId:e.model.isCustomEntityRoute?e.model.page.customEntity.customEntityId:e.model.page.page.pageId,isCustomEntity:e.model.isCustomEntityRoute}]},document.location.origin),a.style.display="block"},copyToDraft:function(b){b.preventDefault();var c;e.model.isCustomEntityRoute&&(c={entityNameSingular:e.model.customEntityDefinition.nameSingular,isCustomEntity:!0}),a.contentWindow.postMessage({action:"copyToDraft",args:[{entityId:e.model.isCustomEntityRoute?e.model.page.customEntity.customEntityId:e.model.page.page.pageId,versionId:e.model.version.versionId,hasDraftVersion:e.model.hasDraftVersion,dialogOptions:c}]},document.location.origin),a.style.display="block"}},f={addButton:function(a){var d=a.type||"secondary",e=document.createElement("a"),f=document.createElement("span");e.appendChild(f),e.className=("primary"===d?"cofoundry-sv__options__button":"cofoundry-sv__mode__button")+" "+a.classNames,f.innerHTML=a.title,a.click?(e.href="#",e.addEventListener("click",a.click,!1)):e.href=a.href||"#",c=b.getElementsByClassName("primary"===d?"cofoundry-sv__options":"cofoundry-sv__mode")[0],c&&c.appendChild(e)}};return window.onload=function(){e.model=Cofoundry.PageResponseData,null!=e.model&&(e.bindIframe(),e.bindGui(),e.bindToolbar())},{toolBar:f}}();