import {
  DomSanitizer
} from "./chunk-DVCXGO2A.js";
import {
  NgClass
} from "./chunk-2ZLRKTML.js";
import {
  Component,
  Directive,
  ElementRef,
  Injectable,
  NgModule,
  Optional,
  Renderer2,
  SkipSelf,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  viewChild,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵviewQuerySignal
} from "./chunk-5SQEDC4B.js";
import {
  __privateAdd,
  __privateGet,
  __privateSet
} from "./chunk-6WCCERUZ.js";

// node_modules/@coreui/icons-angular/fesm2022/coreui-icons-angular.mjs
var _c0 = ["svgElement"];
function IconComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 1, 0);
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("innerHtml", ctx_r0.innerHtml(), ɵɵsanitizeHtml)("ngClass", ctx_r0.computedClasses())("cHtmlAttr", ctx_r0.attributes());
    ɵɵattribute("width", ctx_r0.width())("height", ctx_r0.height() || ctx_r0.width())("viewBox", (tmp_7_0 = ctx_r0.viewBox()) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : ctx_r0.scale());
  }
}
function IconComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 2, 0);
    ɵɵelement(2, "use");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.computedClasses())("cHtmlAttr", ctx_r0.attributes());
    ɵɵattribute("width", ctx_r0.width())("height", ctx_r0.height() || ctx_r0.width());
    ɵɵadvance(2);
    ɵɵattribute("href", ctx_r0.use());
  }
}
var _iconNames, _icons;
var _IconSetService = class _IconSetService {
  constructor() {
    __privateAdd(this, _iconNames, {});
    __privateAdd(this, _icons, {});
  }
  get iconNames() {
    return __privateGet(this, _iconNames);
  }
  get icons() {
    return __privateGet(this, _icons);
  }
  set icons(iconSet) {
    for (const iconsKey in iconSet) {
      __privateGet(this, _iconNames)[iconsKey] = iconsKey;
    }
    __privateSet(this, _icons, iconSet);
  }
  getIcon(name) {
    const icon = this.icons[name];
    if (!icon) {
      console.warn(`CoreUI WARN: Icon ${name} is not registered in IconService`);
    }
    return this.icons[name];
  }
};
_iconNames = new WeakMap();
_icons = new WeakMap();
_IconSetService.ɵfac = function IconSetService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconSetService)();
};
_IconSetService.ɵprov = ɵɵdefineInjectable({
  token: _IconSetService,
  factory: _IconSetService.ɵfac,
  providedIn: "root"
});
var IconSetService = _IconSetService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSetService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _IconSetModule = class _IconSetModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error("CoreUI IconSetModule is already loaded. Import it in the AppModule only");
    }
  }
  static forRoot() {
    return {
      ngModule: _IconSetModule,
      providers: [{
        provide: IconSetService
      }]
    };
  }
};
_IconSetModule.ɵfac = function IconSetModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconSetModule)(ɵɵinject(_IconSetModule, 12));
};
_IconSetModule.ɵmod = ɵɵdefineNgModule({
  type: _IconSetModule
});
_IconSetModule.ɵinj = ɵɵdefineInjector({
  providers: [IconSetService]
});
var IconSetModule = _IconSetModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconSetModule, [{
    type: NgModule,
    args: [{
      providers: [IconSetService]
    }]
  }], () => [{
    type: IconSetModule,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }], null);
})();
function toCamelCase(value) {
  return value.replace(/([-_][a-z0-9])/ig, ($1) => {
    return $1.toUpperCase().replace("-", "");
  });
}
function transformName(value) {
  return value && value.includes("-") ? toCamelCase(value) : value;
}
var _sanitizer, _iconSet, _titleCode;
var _IconDirective = class _IconDirective {
  constructor() {
    __privateAdd(this, _sanitizer);
    __privateAdd(this, _iconSet);
    __privateAdd(this, _titleCode);
    __privateSet(this, _sanitizer, inject(DomSanitizer));
    __privateSet(this, _iconSet, inject(IconSetService));
    this.content = input(void 0, {
      alias: "cIcon"
    });
    this.customClasses = input();
    this.size = input("");
    this.title = input();
    this.height = input();
    this.width = input();
    this.name = input("", {
      transform: transformName
    });
    this.viewBoxInput = input(void 0, {
      alias: "viewBox"
    });
    this.xmlns = input("http://www.w3.org/2000/svg");
    this.pointerEvents = input("none", {
      alias: "pointer-events"
    });
    this.role = input("img");
    this.hostClasses = computed(() => {
      const computedSize = this.computedSize();
      const classes = {
        icon: true,
        [`icon-${computedSize}`]: !!computedSize
      };
      return this.customClasses() ?? classes;
    });
    this.viewBox = computed(() => {
      return this.viewBoxInput() ?? this.scale();
    });
    this.innerHtml = computed(() => {
      const codeVal = this.code();
      const code = Array.isArray(codeVal) ? codeVal?.[1] ?? codeVal?.[0] ?? "" : codeVal || "";
      return __privateGet(this, _sanitizer).bypassSecurityTrustHtml(__privateGet(this, _titleCode).call(this) + code || "");
    });
    __privateSet(this, _titleCode, computed(() => {
      return this.title() ? `<title>${this.title()}</title>` : "";
    }));
    this.code = computed(() => {
      const content = this.content();
      if (content) {
        return content;
      }
      const name = this.name();
      if (__privateGet(this, _iconSet) && name) {
        return __privateGet(this, _iconSet).getIcon(name);
      }
      if (name && !__privateGet(this, _iconSet)?.icons[name]) {
        console.warn(`cIcon directive: The '${name}' icon not found. Add it to the IconSet service for use with the 'name' property. 
`, name);
      }
      return "";
    });
    this.scale = computed(() => {
      return Array.isArray(this.code()) && (this.code()?.length ?? 0) > 1 ? `0 0 ${this.code()?.[0]}` : "0 0 64 64";
    });
    this.computedSize = computed(() => {
      const addCustom = !this.size() && (this.width() || this.height());
      return this.size() === "custom" || addCustom ? "custom-size" : this.size();
    });
  }
};
_sanitizer = new WeakMap();
_iconSet = new WeakMap();
_titleCode = new WeakMap();
_IconDirective.ɵfac = function IconDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconDirective)();
};
_IconDirective.ɵdir = ɵɵdefineDirective({
  type: _IconDirective,
  selectors: [["svg", "cIcon", ""]],
  hostAttrs: ["ngSkipHydration", "true"],
  hostVars: 8,
  hostBindings: function IconDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("innerHtml", ctx.innerHtml(), ɵɵsanitizeHtml);
      ɵɵattribute("viewBox", ctx.viewBox())("xmlns", ctx.xmlns())("pointer-events", ctx.pointerEvents())("role", ctx.role())("aria-hidden", true);
      ɵɵclassMap(ctx.hostClasses());
    }
  },
  inputs: {
    content: [1, "cIcon", "content"],
    customClasses: [1, "customClasses"],
    size: [1, "size"],
    title: [1, "title"],
    height: [1, "height"],
    width: [1, "width"],
    name: [1, "name"],
    viewBoxInput: [1, "viewBox", "viewBoxInput"],
    xmlns: [1, "xmlns"],
    pointerEvents: [1, "pointer-events", "pointerEvents"],
    role: [1, "role"]
  },
  exportAs: ["cIcon"],
  standalone: true
});
var IconDirective = _IconDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconDirective, [{
    type: Directive,
    args: [{
      exportAs: "cIcon",
      selector: "svg[cIcon]",
      standalone: true,
      host: {
        ngSkipHydration: "true",
        "[innerHtml]": "innerHtml()",
        "[class]": "hostClasses()",
        "[attr.viewBox]": "viewBox()",
        "[attr.xmlns]": "xmlns()",
        "[attr.pointer-events]": "pointerEvents()",
        "[attr.role]": "role()",
        "[attr.aria-hidden]": "true"
      }
    }]
  }], null, null);
})();
var _renderer, _elementRef;
var _HtmlAttributesDirective = class _HtmlAttributesDirective {
  constructor() {
    __privateAdd(this, _renderer);
    __privateAdd(this, _elementRef);
    this.cHtmlAttr = input();
    __privateSet(this, _renderer, inject(Renderer2));
    __privateSet(this, _elementRef, inject(ElementRef));
    this.attrEffect = effect(() => {
      const attribs = this.cHtmlAttr();
      for (const attr in attribs) {
        if (attr === "style" && typeof attribs[attr] === "object") {
          this.setStyle(attribs[attr]);
        } else if (attr === "class") {
          this.addClass(attribs[attr]);
        } else {
          this.setAttrib(attr, attribs[attr]);
        }
      }
    });
  }
  setStyle(styles) {
    for (const style in styles) {
      if (style) {
        __privateGet(this, _renderer).setStyle(__privateGet(this, _elementRef).nativeElement, style, styles[style]);
      }
    }
  }
  addClass(classes) {
    const classArray = Array.isArray(classes) ? classes : classes.split(" ");
    classArray.filter((element) => element.length > 0).forEach((element) => {
      __privateGet(this, _renderer).addClass(__privateGet(this, _elementRef).nativeElement, element);
    });
  }
  setAttrib(key, value) {
    value !== null ? __privateGet(this, _renderer).setAttribute(__privateGet(this, _elementRef).nativeElement, key, value) : __privateGet(this, _renderer).removeAttribute(__privateGet(this, _elementRef).nativeElement, key);
  }
};
_renderer = new WeakMap();
_elementRef = new WeakMap();
_HtmlAttributesDirective.ɵfac = function HtmlAttributesDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HtmlAttributesDirective)();
};
_HtmlAttributesDirective.ɵdir = ɵɵdefineDirective({
  type: _HtmlAttributesDirective,
  selectors: [["", "cHtmlAttr", ""]],
  inputs: {
    cHtmlAttr: [1, "cHtmlAttr"]
  },
  exportAs: ["cHtmlAttr"],
  standalone: true
});
var HtmlAttributesDirective = _HtmlAttributesDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HtmlAttributesDirective, [{
    type: Directive,
    args: [{
      selector: "[cHtmlAttr]",
      exportAs: "cHtmlAttr",
      standalone: true
    }]
  }], null, null);
})();
var _renderer2, _elementRef2, _sanitizer2, _iconSet2, _hostElement, _titleCode2;
var _IconComponent = class _IconComponent {
  constructor() {
    __privateAdd(this, _renderer2);
    __privateAdd(this, _elementRef2);
    __privateAdd(this, _sanitizer2);
    __privateAdd(this, _iconSet2);
    __privateAdd(this, _hostElement);
    __privateAdd(this, _titleCode2);
    __privateSet(this, _renderer2, inject(Renderer2));
    __privateSet(this, _elementRef2, inject(ElementRef));
    __privateSet(this, _sanitizer2, inject(DomSanitizer));
    __privateSet(this, _iconSet2, inject(IconSetService));
    __privateSet(this, _hostElement, signal(void 0));
    this.content = input();
    this.attributes = input({
      role: "img"
    });
    this.customClasses = input();
    this.size = input("");
    this.title = input();
    this.use = input("");
    this.height = input();
    this.width = input();
    this.name = input("", {
      transform: transformName
    });
    this.viewBoxInput = input(void 0, {
      alias: "viewBox"
    });
    this.svgElementRef = viewChild("svgElement");
    this.svgElementEffect = effect(() => {
      const svgElementRef = this.svgElementRef();
      const hostElement = __privateGet(this, _hostElement).call(this)?.nativeElement;
      if (svgElementRef && hostElement) {
        const svgElement = svgElementRef.nativeElement;
        hostElement.classList?.values()?.forEach((item) => {
          __privateGet(this, _renderer2).addClass(svgElement, item);
        });
        const parentElement = __privateGet(this, _renderer2).parentNode(hostElement);
        __privateGet(this, _renderer2).insertBefore(parentElement, svgElement, hostElement);
        __privateGet(this, _renderer2).removeChild(parentElement, hostElement);
      }
    });
    this.viewBox = computed(() => {
      return this.viewBoxInput() ?? this.scale();
    });
    this.innerHtml = computed(() => {
      const codeVal = this.code();
      const code = Array.isArray(codeVal) ? codeVal?.[1] ?? codeVal?.[0] ?? "" : codeVal || "";
      return __privateGet(this, _sanitizer2).bypassSecurityTrustHtml(__privateGet(this, _titleCode2).call(this) + code || "");
    });
    __privateSet(this, _titleCode2, computed(() => {
      return this.title() ? `<title>${this.title()}</title>` : "";
    }));
    this.code = computed(() => {
      const content = this.content();
      if (content) {
        return content;
      }
      const name = this.name();
      if (__privateGet(this, _iconSet2) && name) {
        return __privateGet(this, _iconSet2).getIcon(name);
      }
      if (name && !__privateGet(this, _iconSet2)?.icons[name]) {
        console.warn(`c-icon component: The '${name}' icon not found. Add it to the IconSet service for use with the 'name' property. 
`, name);
      }
      return "";
    });
    this.scale = computed(() => {
      return Array.isArray(this.code()) && (this.code()?.length ?? 0) > 1 ? `0 0 ${this.code()?.[0]}` : "0 0 64 64";
    });
    this.computedSize = computed(() => {
      const addCustom = !this.size() && (this.width() || this.height());
      return this.size() === "custom" || addCustom ? "custom-size" : this.size();
    });
    this.computedClasses = computed(() => {
      const classes = {
        icon: true,
        [`icon-${this.computedSize()}`]: !!this.computedSize()
      };
      return this.customClasses() ?? classes;
    });
    afterNextRender(() => {
      __privateGet(this, _hostElement).set(__privateGet(this, _elementRef2));
    });
  }
};
_renderer2 = new WeakMap();
_elementRef2 = new WeakMap();
_sanitizer2 = new WeakMap();
_iconSet2 = new WeakMap();
_hostElement = new WeakMap();
_titleCode2 = new WeakMap();
_IconComponent.ɵfac = function IconComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconComponent)();
};
_IconComponent.ɵcmp = ɵɵdefineComponent({
  type: _IconComponent,
  selectors: [["c-icon"]],
  viewQuery: function IconComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuerySignal(ctx.svgElementRef, _c0, 5);
    }
    if (rf & 2) {
      ɵɵqueryAdvance();
    }
  },
  hostAttrs: ["ngSkipHydration", "true", 2, "display", "none"],
  inputs: {
    content: [1, "content"],
    attributes: [1, "attributes"],
    customClasses: [1, "customClasses"],
    size: [1, "size"],
    title: [1, "title"],
    use: [1, "use"],
    height: [1, "height"],
    width: [1, "width"],
    name: [1, "name"],
    viewBoxInput: [1, "viewBox", "viewBoxInput"]
  },
  exportAs: ["cIconComponent"],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 1,
  consts: [["svgElement", ""], ["xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", "pointer-events", "none", "role", "img", 3, "innerHtml", "ngClass", "cHtmlAttr"], ["xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true", "pointer-events", "none", "role", "img", 3, "ngClass", "cHtmlAttr"]],
  template: function IconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, IconComponent_Conditional_0_Template, 2, 6, ":svg:svg", 1)(1, IconComponent_Conditional_1_Template, 3, 5, ":svg:svg", 2);
    }
    if (rf & 2) {
      ɵɵconditional(!ctx.use() && !!ctx.code() ? 0 : ctx.use() ? 1 : -1);
    }
  },
  dependencies: [NgClass, HtmlAttributesDirective],
  styles: [".icon[_ngcontent-%COMP%]{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon[_ngcontent-%COMP%]:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}"]
});
var IconComponent = _IconComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconComponent, [{
    type: Component,
    args: [{
      exportAs: "cIconComponent",
      imports: [NgClass, HtmlAttributesDirective],
      selector: "c-icon",
      standalone: true,
      host: {
        ngSkipHydration: "true",
        style: "display: none"
      },
      template: '@if (!use() && !!code()) {\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    [attr.width]="width()"\n    [attr.height]="height() || width()"\n    [attr.viewBox]="viewBox() ?? scale()"\n    [innerHtml]="innerHtml()"\n    [ngClass]="computedClasses()"\n    [cHtmlAttr]="attributes()"\n    aria-hidden="true"\n    pointer-events="none"\n    role="img"\n    #svgElement\n  >\n  </svg>\n} @else if (use()) {\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    [attr.width]="width()"\n    [attr.height]="height() || width()"\n    [ngClass]="computedClasses()"\n    [cHtmlAttr]="attributes()"\n    aria-hidden="true"\n    pointer-events="none"\n    role="img"\n    #svgElement\n  >\n    <use [attr.href]="use()"></use>\n  </svg>\n}\n',
      styles: [".icon{display:inline-block;color:inherit;text-align:center;vertical-align:-.125rem;fill:currentColor}.icon:not(.icon-c-s):not(.icon-custom-size){width:1rem;height:1rem;font-size:1rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xxl{width:2rem;height:2rem;font-size:2rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-xl{width:1.5rem;height:1.5rem;font-size:1.5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-lg{width:1.25rem;height:1.25rem;font-size:1.25rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-sm{width:.875rem;height:.875rem;font-size:.875rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-3xl{width:3rem;height:3rem;font-size:3rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-4xl{width:4rem;height:4rem;font-size:4rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-5xl{width:5rem;height:5rem;font-size:5rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-6xl{width:6rem;height:6rem;font-size:6rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-7xl{width:7rem;height:7rem;font-size:7rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-8xl{width:8rem;height:8rem;font-size:8rem}.icon:not(.icon-c-s):not(.icon-custom-size).icon-9xl{width:9rem;height:9rem;font-size:9rem}\n"]
    }]
  }], () => [], null);
})();
var _IconModule = class _IconModule {
};
_IconModule.ɵfac = function IconModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IconModule)();
};
_IconModule.ɵmod = ɵɵdefineNgModule({
  type: _IconModule,
  imports: [IconComponent, IconDirective],
  exports: [IconComponent, IconDirective]
});
_IconModule.ɵinj = ɵɵdefineInjector({});
var IconModule = _IconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconModule, [{
    type: NgModule,
    args: [{
      imports: [IconComponent, IconDirective],
      exports: [IconComponent, IconDirective]
    }]
  }], null, null);
})();

export {
  IconSetService,
  IconSetModule,
  IconDirective,
  IconComponent,
  IconModule
};
//# sourceMappingURL=chunk-CO3I4D2I.js.map
