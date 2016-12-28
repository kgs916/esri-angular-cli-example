webpackJsonp([0,3],{814:function(e,t,r){"use strict";var o=r(0),n=r(17),i=r(817),a=r(820),c=r(815),p=(r.n(c),r(819));r.d(t,"EsriMapModule",function(){return u});var f=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(){}return e=f([r.i(o.NgModule)({imports:[n.g,p.a,a.a],declarations:[i.a],providers:[c.EsriLoaderService],exports:[i.a]}),s("design:paramtypes",[])],e)}()},815:function(e,t,r){"use strict";var o=r(818);t.EsriLoaderService=o.EsriLoaderService},816:function(e,t,r){"use strict";var o=r(0),n=r(815);r.n(n);r.d(t,"a",function(){return c});var i=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.esriLoader=e,this.mapViewProperties={},this.mapInit=new o.EventEmitter}return e.prototype.ngOnInit=function(){this.map||this._loadMap()},e.prototype._loadMap=function(){var e=this;this.esriLoader.load({url:"//js.arcgis.com/4.1"}).then(function(){e.esriLoader.loadModules(["esri/Map","esri/views/MapView","esri/WebMap"]).then(function(t){var r=t[0],o=t[1],n=t[2];if(e.portalItemId){var i=Object.assign({portalItem:{id:e.portalItemId}},e.mapProperties);e.map=new n(i)}else e.map=new r(e.mapProperties);e.mapViewProperties.container||(e.mapViewProperties.container=e.mapEl.nativeElement.id),e.mapViewProperties.map||(e.mapViewProperties.map=e.map),e.mapView=new o(e.mapViewProperties),e.mapInit.emit({map:e.map,mapView:e.mapView}),e.mapInit.complete()})})},i([r.i(o.ViewChild)("map"),a("design:type",o.ElementRef)],e.prototype,"mapEl",void 0),i([r.i(o.Input)(),a("design:type",Object)],e.prototype,"mapProperties",void 0),i([r.i(o.Input)(),a("design:type",Object)],e.prototype,"mapViewProperties",void 0),i([r.i(o.Input)(),a("design:type",String)],e.prototype,"portalItemId",void 0),i([r.i(o.Output)(),a("design:type",o.EventEmitter)],e.prototype,"mapInit",void 0),e=i([r.i(o.Component)({selector:"esri4-map",template:'\n    <div class="map" id="esri4-map" #map></div>\n  ',styles:["\n    .map {\n      height: 100%;\n      width: 100%;\n      margin: 0;\n      padding: 0;\n    }\n  "]}),a("design:paramtypes",[n.EsriLoaderService])],e)}()},817:function(e,t,r){"use strict";var o=r(0);r.d(t,"a",function(){return a});var n=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){this.mapProperties={basemap:"dark-gray"},this.portalItemId="ad5759bf407c4554b748356ebe1886e5"}return e.prototype.ngOnInit=function(){},e.prototype.onMapInit=function(e){this.map=e.map,this.mapView=e.mapView},e=n([r.i(o.Component)({selector:"app-esri-map",template:r(823),styles:[r(822)]}),i("design:paramtypes",[])],e)}()},818:function(e,t,r){"use strict";var o=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=r(0),a=r(821),c=function(){function e(){}return e.prototype.isLoaded=function(){return a.isLoaded()},e.prototype.load=function(e){return new Promise(function(t,r){a.isLoaded()&&t(a.dojoRequire),a.bootstrap(function(e){e?r(e):t(a.dojoRequire)},e)})},e.prototype.loadModules=function(e){return new Promise(function(t){a.dojoRequire(e,function(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];t(e)})})},e.prototype.require=function(e,t){return a.dojoRequire(e,t)},e=o([i.Injectable(),n("design:paramtypes",[])],e)}();t.EsriLoaderService=c},819:function(e,t,r){"use strict";var o=r(0),n=r(17),i=r(816),a=r(815);r.n(a);r.d(t,"a",function(){return f});var c=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},p=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(){}return e=c([r.i(o.NgModule)({imports:[n.g],declarations:[i.a],exports:[i.a],providers:[a.EsriLoaderService]}),p("design:paramtypes",[])],e)}()},820:function(e,t,r){"use strict";var o=r(0),n=r(468),i=r(817);r.d(t,"a",function(){return f});var a=this&&this.__decorate||function(e,t,r,o){var n,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(i<3?n(a):i>3?n(t,r,a):n(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=[{path:"",component:i.a}],f=function(){function e(){}return e=a([r.i(o.NgModule)({imports:[n.a.forChild(p)],exports:[n.a]}),c("design:paramtypes",[])],e)}()},821:function(e,t){"use strict";function r(){return"undefined"!=typeof window.require}function o(e,t){if(void 0===t&&(t={}),t.url||(t.url="https://js.arcgis.com/4.2/"),r())return void e(new Error("The ArcGIS API for JavaScript is already loaded."));var o=document.createElement("script");o.type="text/javascript",o.src=t.url,o.onload=function(){var t=window.require;e(null,t)},document.body.appendChild(o)}function n(e,t){if(!r())throw new Error("The ArcGIS API for JavaScript has not been loaded. You must first call esriLoader.bootstrap()");window.require(e,t)}t.isLoaded=r,t.bootstrap=o,t.dojoRequire=n},822:function(e,t){e.exports=".map{\r\n    height:calc(100% - 64px);\r\n}\r\n"},823:function(e,t){e.exports='<div class="map">\r\n  <esri4-map [mapProperties]="mapProperties" (mapInit)="onMapInit($event)" [portalItemId]="portalItemId"></esri4-map>\r\n</div>'}});
//# sourceMappingURL=0.85187b8cc40787166d29.bundle.map