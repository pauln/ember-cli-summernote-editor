"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,o){Object.defineProperty(e,"__esModule",{value:!0})
var i=Ember.Application,a=i.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:n.default});(0,t.default)(a,o.default.modulePrefix),e.default=a}),define("dummy/components/summernote-editor",["exports","ember-cli-summernote-editor/components/summernote-editor"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var o,i=n.default.exportApplicationGlobal
o="string"==typeof i?i:Ember.String.classify(n.default.modulePrefix),t[o]||(t[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Router,o=t.extend({location:n.default.locationType,rootURL:n.default.rootURL})
o.map(function(){}),e.default=o}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"OQ0dYsf+",block:'{"symbols":[],"statements":[[6,"h2"],[9,"id","title"],[7],[0,"Summer Note Editor"],[8],[0,"\\n\\n"],[6,"div"],[9,"class","container-fluid"],[7],[0,"\\n\\t"],[6,"div"],[7],[0,"\\n    "],[6,"h3"],[7],[0,"Example "],[8],[0,"\\n\\t"],[1,[25,"summernote-editor",null,[["disabled","content","onContentChange"],[[19,0,["disabled"]],[25,"readonly",[[19,0,["value"]]],null],[25,"action",[[19,0,[]],[25,"mut",[[19,0,["value"]]],null]],null]]]],false],[0,"\\n\\n\\t"],[6,"p"],[7],[0,"Disable editing "],[1,[25,"input",null,[["type","checked"],["checkbox",[19,0,["disabled"]]]]],false],[8],[0,"\\n\\t"],[8],[0,"\\n    "],[6,"div"],[9,"class","wysiwyg-preview"],[7],[0,"\\n      "],[6,"div"],[9,"class","highlight"],[7],[0,"\\n        "],[6,"pre"],[7],[1,[18,"value"],true],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n\\n      "],[6,"div"],[9,"class","highlight"],[7],[0,"\\n    "],[6,"pre"],[7],[0,"\\n    Use the following code to put a wysiwyg editor.\\n\\n    {{summernote-editor\\n      focus=false\\n      btnSize=bs-sm\\n      airMode=false\\n      header=header\\n      height=height\\n      buttons=buttons\\n      toolbar=toolbar\\n      disabled=disabled\\n      callbacks=callbacks\\n      content=(readonly value)\\n      onContentChange=(action (mut value))\\n    }}\\n    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  Example of configuring the toolbar options.\\n\\n  "],[6,"div"],[9,"class","highlight"],[7],[0,"\\n    "],[6,"pre"],[7],[0,"\\n    toolbarOptions: {\\n      style: false,\\n      insert: {\\n        picture: false\\n      },\\n      help: true\\n    }\\n    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  All callbacks except "],[6,"b"],[7],[0,"onChange"],[8],[0," are supported. The "],[6,"b"],[7],[0,"onChange"],[8],[0," callback are used internally for the "],[6,"b"],[7],[0,"onContentChange"],[8],[0," action.\\n\\n  "],[6,"div"],[9,"class","highlight"],[7],[0,"\\n    "],[6,"pre"],[7],[0,"\\n    callbackOptions: {\\n      onInit: function() {\\n        console.log(\'Summernote is launched\');\\n      },\\n      onEnter: function() {\\n        console.log(\'Enter/Return key pressed\');\\n      },\\n      onPaste: function(e) {\\n        console.log(\'Called event paste\');\\n      },\\n    },\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t=JSON.parse(unescape(n)),o={default:t}
return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})