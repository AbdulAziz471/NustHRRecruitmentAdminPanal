import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-GKWECDPB.js";
import {
  DomSanitizer
} from "./chunk-DVCXGO2A.js";
import {
  HttpClient
} from "./chunk-V4HSFT2H.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-2ZLRKTML.js";
import {
  Attribute,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgModule,
  Output,
  Renderer2,
  SecurityContext,
  ViewChild,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-5SQEDC4B.js";
import "./chunk-XPU7EA6D.js";
import "./chunk-QN5HDKTT.js";
import "./chunk-MHK6ZZQX.js";
import "./chunk-6WCCERUZ.js";

// node_modules/@kolkov/angular-editor/fesm2020/kolkov-angular-editor.mjs
var _c0 = ["labelButton"];
var _c1 = (a0) => ({
  "ae-expanded": a0
});
var _c2 = (a0, a1) => ({
  "selected": a0,
  "focused": a1
});
function AeSelectComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function AeSelectComponent_button_8_Template_button_click_0_listener($event) {
      const item_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.optionSelect(item_r3, $event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(2, _c2, item_r3.value === ctx_r3.value, i_r5 === ctx_r3.optionId));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r3.label, " ");
  }
}
function AeSelectComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1, "No items for select");
    ɵɵelementEnd();
  }
}
var _c3 = ["fileInput"];
var _c4 = ["*"];
function AngularEditorToolbarComponent_div_0_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5)(1, "ae-select", 63);
    ɵɵtwoWayListener("ngModelChange", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.customClassId, $event) || (ctx_r1.customClassId = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("change", function AngularEditorToolbarComponent_div_0_div_55_Template_ae_select_change_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.setCustomClass(ctx_r1.customClassId));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("options", ctx_r1.customClassList);
    ɵɵtwoWayProperty("ngModel", ctx_r1.customClassId);
    ɵɵproperty("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("customClasses"));
  }
}
function AngularEditorToolbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "button", 6);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("undo"));
    });
    ɵɵelement(3, "i", 7);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 8);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("redo"));
    });
    ɵɵelement(5, "i", 9);
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 5)(7, "button", 10);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("bold"));
    });
    ɵɵelement(8, "i", 11);
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 12);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_9_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("italic"));
    });
    ɵɵelement(10, "i", 13);
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 14);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_11_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("underline"));
    });
    ɵɵelement(12, "i", 15);
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 16);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_13_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("strikeThrough"));
    });
    ɵɵelement(14, "i", 17);
    ɵɵelementEnd();
    ɵɵelementStart(15, "button", 18);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_15_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("subscript"));
    });
    ɵɵelement(16, "i", 19);
    ɵɵelementEnd();
    ɵɵelementStart(17, "button", 20);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_17_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("superscript"));
    });
    ɵɵelement(18, "i", 21);
    ɵɵelementEnd()();
    ɵɵelementStart(19, "div", 5)(20, "button", 22);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_20_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("justifyLeft"));
    });
    ɵɵelement(21, "i", 23);
    ɵɵelementEnd();
    ɵɵelementStart(22, "button", 24);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_22_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("justifyCenter"));
    });
    ɵɵelement(23, "i", 25);
    ɵɵelementEnd();
    ɵɵelementStart(24, "button", 26);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_24_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("justifyRight"));
    });
    ɵɵelement(25, "i", 27);
    ɵɵelementEnd();
    ɵɵelementStart(26, "button", 28);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_26_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("justifyFull"));
    });
    ɵɵelement(27, "i", 29);
    ɵɵelementEnd()();
    ɵɵelementStart(28, "div", 5)(29, "button", 30);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_29_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("indent"));
    });
    ɵɵelement(30, "i", 31);
    ɵɵelementEnd();
    ɵɵelementStart(31, "button", 32);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_31_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("outdent"));
    });
    ɵɵelement(32, "i", 33);
    ɵɵelementEnd()();
    ɵɵelementStart(33, "div", 5)(34, "button", 34);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_34_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("insertUnorderedList"));
    });
    ɵɵelement(35, "i", 35);
    ɵɵelementEnd();
    ɵɵelementStart(36, "button", 36);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_36_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("insertOrderedList"));
    });
    ɵɵelement(37, "i", 37);
    ɵɵelementEnd()();
    ɵɵelementStart(38, "div", 5)(39, "ae-select", 38);
    ɵɵtwoWayListener("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_39_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.block, $event) || (ctx_r1.block = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_39_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand(ctx_r1.block));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(40, "div", 5)(41, "ae-select", 39);
    ɵɵtwoWayListener("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_41_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.fontName, $event) || (ctx_r1.fontName = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_41_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setFontName(ctx_r1.fontName));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(42, "div", 5)(43, "ae-select", 40);
    ɵɵtwoWayListener("ngModelChange", function AngularEditorToolbarComponent_div_0_Template_ae_select_ngModelChange_43_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r1.fontSize, $event) || (ctx_r1.fontSize = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("change", function AngularEditorToolbarComponent_div_0_Template_ae_select_change_43_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.setFontSize(ctx_r1.fontSize));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(44, "div", 5)(45, "input", 41, 0);
    ɵɵlistener("change", function AngularEditorToolbarComponent_div_0_Template_input_change_45_listener() {
      ɵɵrestoreView(_r1);
      const fgInput_r3 = ɵɵreference(46);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.insertColor(fgInput_r3.value, "textColor"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(47, "button", 42);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_47_listener() {
      ɵɵrestoreView(_r1);
      const fgInput_r3 = ɵɵreference(46);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.focus();
      return ɵɵresetView(fgInput_r3.click());
    });
    ɵɵelementStart(48, "span", 43);
    ɵɵelement(49, "i", 44);
    ɵɵelementEnd()();
    ɵɵelementStart(50, "input", 41, 1);
    ɵɵlistener("change", function AngularEditorToolbarComponent_div_0_Template_input_change_50_listener() {
      ɵɵrestoreView(_r1);
      const bgInput_r4 = ɵɵreference(51);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.insertColor(bgInput_r4.value, "backgroundColor"));
    });
    ɵɵelementEnd();
    ɵɵelementStart(52, "button", 45);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_52_listener() {
      ɵɵrestoreView(_r1);
      const bgInput_r4 = ɵɵreference(51);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.focus();
      return ɵɵresetView(bgInput_r4.click());
    });
    ɵɵelementStart(53, "span", 46);
    ɵɵelement(54, "i", 44);
    ɵɵelementEnd()()();
    ɵɵtemplate(55, AngularEditorToolbarComponent_div_0_div_55_Template, 2, 4, "div", 47);
    ɵɵelementStart(56, "div", 5)(57, "button", 48);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_57_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.insertUrl());
    });
    ɵɵelement(58, "i", 49);
    ɵɵelementEnd();
    ɵɵelementStart(59, "button", 50);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_59_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("unlink"));
    });
    ɵɵelement(60, "i", 51);
    ɵɵelementEnd();
    ɵɵelementStart(61, "input", 52, 2);
    ɵɵlistener("change", function AngularEditorToolbarComponent_div_0_Template_input_change_61_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFileChanged($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(63, "button", 53);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_63_listener() {
      ɵɵrestoreView(_r1);
      const fileInput_r6 = ɵɵreference(62);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.focus();
      return ɵɵresetView(fileInput_r6.click());
    });
    ɵɵelement(64, "i", 54);
    ɵɵelementEnd();
    ɵɵelementStart(65, "button", 55);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_65_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.insertVideo());
    });
    ɵɵelement(66, "i", 56);
    ɵɵelementEnd();
    ɵɵelementStart(67, "button", 57);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_67_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("insertHorizontalRule"));
    });
    ɵɵelement(68, "i", 58);
    ɵɵelementEnd()();
    ɵɵelementStart(69, "div", 5)(70, "button", 59);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_70_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("removeFormat"));
    });
    ɵɵelement(71, "i", 60);
    ɵɵelementEnd()();
    ɵɵelementStart(72, "div", 5)(73, "button", 61);
    ɵɵlistener("click", function AngularEditorToolbarComponent_div_0_Template_button_click_73_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerCommand("toggleEditorMode"));
    });
    ɵɵelement(74, "i", 62);
    ɵɵelementEnd()();
    ɵɵprojection(75);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("hidden", ctx_r1.isButtonHidden("undo"));
    ɵɵadvance(2);
    ɵɵproperty("hidden", ctx_r1.isButtonHidden("redo"));
    ɵɵadvance(3);
    ɵɵproperty("id", "bold-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("bold"));
    ɵɵadvance(2);
    ɵɵproperty("id", "italic-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("italic"));
    ɵɵadvance(2);
    ɵɵproperty("id", "underline-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("underline"));
    ɵɵadvance(2);
    ɵɵproperty("id", "strikeThrough-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("strikeThrough"));
    ɵɵadvance(2);
    ɵɵproperty("id", "subscript-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("subscript"));
    ɵɵadvance(2);
    ɵɵproperty("id", "superscript-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("superscript"));
    ɵɵadvance(3);
    ɵɵproperty("id", "justifyLeft-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("justifyLeft"));
    ɵɵadvance(2);
    ɵɵproperty("id", "justifyCenter-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("justifyCenter"));
    ɵɵadvance(2);
    ɵɵproperty("id", "justifyRight-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("justifyRight"));
    ɵɵadvance(2);
    ɵɵproperty("id", "justifyFull-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("justifyFull"));
    ɵɵadvance(3);
    ɵɵproperty("id", "indent-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("indent"));
    ɵɵadvance(2);
    ɵɵproperty("id", "outdent-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("outdent"));
    ɵɵadvance(3);
    ɵɵproperty("id", "insertUnorderedList-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("insertUnorderedList"));
    ɵɵadvance(2);
    ɵɵproperty("id", "insertOrderedList-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("insertOrderedList"));
    ɵɵadvance(3);
    ɵɵproperty("options", ctx_r1.headings);
    ɵɵtwoWayProperty("ngModel", ctx_r1.block);
    ɵɵproperty("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("heading"));
    ɵɵadvance(2);
    ɵɵproperty("options", ctx_r1.fonts);
    ɵɵtwoWayProperty("ngModel", ctx_r1.fontName);
    ɵɵproperty("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("fontName"));
    ɵɵadvance(2);
    ɵɵproperty("options", ctx_r1.fontSizes);
    ɵɵtwoWayProperty("ngModel", ctx_r1.fontSize);
    ɵɵproperty("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("fontSize"));
    ɵɵadvance(4);
    ɵɵproperty("id", "foregroundColorPicker-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("textColor"));
    ɵɵadvance(5);
    ɵɵproperty("id", "backgroundColorPicker-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("backgroundColor"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1._customClasses);
    ɵɵadvance(2);
    ɵɵproperty("id", "link-" + ctx_r1.id)("disabled", ctx_r1.isLinkButtonDisabled)("hidden", ctx_r1.isButtonHidden("link"));
    ɵɵadvance(2);
    ɵɵproperty("id", "unlink-" + ctx_r1.id)("disabled", ctx_r1.htmlMode || !ctx_r1.linkSelected)("hidden", ctx_r1.isButtonHidden("unlink"));
    ɵɵadvance(4);
    ɵɵproperty("id", "insertImage-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("insertImage"));
    ɵɵadvance(2);
    ɵɵproperty("id", "insertVideo-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("insertVideo"));
    ɵɵadvance(2);
    ɵɵproperty("id", "insertHorizontalRule-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("insertHorizontalRule"));
    ɵɵadvance(3);
    ɵɵproperty("id", "clearFormatting-" + ctx_r1.id)("disabled", ctx_r1.htmlMode)("hidden", ctx_r1.isButtonHidden("removeFormat"));
    ɵɵadvance(3);
    ɵɵproperty("id", "toggleEditorMode-" + ctx_r1.id)("hidden", ctx_r1.isButtonHidden("toggleEditorMode"));
  }
}
var _c5 = ["customButtons"];
var _c6 = ["editor"];
var _c7 = ["editorWrapper"];
var _c8 = ["editorToolbar"];
var _c9 = (a0) => ({
  executeCommandFn: a0
});
function AngularEditorComponent_angular_editor_toolbar_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "angular-editor-toolbar", 9, 3);
    ɵɵlistener("execute", function AngularEditorComponent_angular_editor_toolbar_2_Template_angular_editor_toolbar_execute_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.executeCommand($event));
    });
    ɵɵelementContainer(2, 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r2.id)("uploadUrl", ctx_r2.config.uploadUrl)("upload", ctx_r2.config.upload)("showToolbar", ctx_r2.config.showToolbar !== void 0 ? ctx_r2.config.showToolbar : true)("fonts", ctx_r2.getFonts())("customClasses", ctx_r2.config.customClasses)("defaultFontName", ctx_r2.config.defaultFontName)("defaultFontSize", ctx_r2.config.defaultFontSize)("hiddenButtons", ctx_r2.config.toolbarHiddenButtons);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.customButtonsTemplateRef)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c9, ctx_r2.executeCommandFn));
  }
}
function AngularEditorComponent_angular_editor_toolbar_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "angular-editor-toolbar", 9, 3);
    ɵɵlistener("execute", function AngularEditorComponent_angular_editor_toolbar_9_Template_angular_editor_toolbar_execute_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.executeCommand($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r2.id)("uploadUrl", ctx_r2.config.uploadUrl)("upload", ctx_r2.config.upload)("showToolbar", ctx_r2.config.showToolbar !== void 0 ? ctx_r2.config.showToolbar : true)("fonts", ctx_r2.getFonts())("customClasses", ctx_r2.config.customClasses)("defaultFontName", ctx_r2.config.defaultFontName)("defaultFontSize", ctx_r2.config.defaultFontSize)("hiddenButtons", ctx_r2.config.toolbarHiddenButtons);
  }
}
var AngularEditorService = class {
  constructor(http, doc) {
    this.http = http;
    this.doc = doc;
    this.saveSelection = () => {
      if (this.doc.getSelection) {
        const sel = this.doc.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          this.savedSelection = sel.getRangeAt(0);
          this.selectedText = sel.toString();
        }
      } else if (this.doc.getSelection && this.doc.createRange) {
        this.savedSelection = document.createRange();
      } else {
        this.savedSelection = null;
      }
    };
  }
  /**
   * Executed command from editor header buttons exclude toggleEditorMode
   * @param command string from triggerCommand
   * @param value
   */
  executeCommand(command, value) {
    const commands = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "pre"];
    if (commands.includes(command)) {
      this.doc.execCommand("formatBlock", false, command);
      return;
    }
    this.doc.execCommand(command, false, value);
  }
  /**
   * Create URL link
   * @param url string from UI prompt
   */
  createLink(url) {
    if (!url.includes("http")) {
      this.doc.execCommand("createlink", false, url);
    } else {
      const newUrl = '<a href="' + url + '" target="_blank">' + this.selectedText + "</a>";
      this.insertHtml(newUrl);
    }
  }
  /**
   * insert color either font or background
   *
   * @param color color to be inserted
   * @param where where the color has to be inserted either text/background
   */
  insertColor(color, where) {
    const restored = this.restoreSelection();
    if (restored) {
      if (where === "textColor") {
        this.doc.execCommand("foreColor", false, color);
      } else {
        this.doc.execCommand("hiliteColor", false, color);
      }
    }
  }
  /**
   * Set font name
   * @param fontName string
   */
  setFontName(fontName) {
    this.doc.execCommand("fontName", false, fontName);
  }
  /**
   * Set font size
   * @param fontSize string
   */
  setFontSize(fontSize) {
    this.doc.execCommand("fontSize", false, fontSize);
  }
  /**
   * Create raw HTML
   * @param html HTML string
   */
  insertHtml(html) {
    const isHTMLInserted = this.doc.execCommand("insertHTML", false, html);
    if (!isHTMLInserted) {
      throw new Error("Unable to perform the operation");
    }
  }
  /**
   * restore selection when the editor is focused in
   *
   * saved selection when the editor is focused out
   */
  restoreSelection() {
    if (this.savedSelection) {
      if (this.doc.getSelection) {
        const sel = this.doc.getSelection();
        sel.removeAllRanges();
        sel.addRange(this.savedSelection);
        return true;
      } else if (this.doc.getSelection) {
        return true;
      }
    } else {
      return false;
    }
  }
  /**
   * setTimeout used for execute 'saveSelection' method in next event loop iteration
   */
  executeInNextQueueIteration(callbackFn, timeout = 100) {
    setTimeout(callbackFn, timeout);
  }
  /** check any selection is made or not */
  checkSelection() {
    const selectedText = this.savedSelection.toString();
    if (selectedText.length === 0) {
      throw new Error("No Selection Made");
    }
    return true;
  }
  /**
   * Upload file to uploadUrl
   * @param file The file
   */
  uploadImage(file) {
    const uploadData = new FormData();
    uploadData.append("file", file, file.name);
    return this.http.post(this.uploadUrl, uploadData, {
      reportProgress: true,
      observe: "events",
      withCredentials: this.uploadWithCredentials
    });
  }
  /**
   * Insert image with Url
   * @param imageUrl The imageUrl.
   */
  insertImage(imageUrl) {
    this.doc.execCommand("insertImage", false, imageUrl);
  }
  setDefaultParagraphSeparator(separator) {
    this.doc.execCommand("defaultParagraphSeparator", false, separator);
  }
  createCustomClass(customClass) {
    let newTag = this.selectedText;
    if (customClass) {
      const tagName = customClass.tag ? customClass.tag : "span";
      newTag = "<" + tagName + ' class="' + customClass.class + '">' + this.selectedText + "</" + tagName + ">";
    }
    this.insertHtml(newTag);
  }
  insertVideo(videoUrl) {
    if (videoUrl.match("www.youtube.com")) {
      this.insertYouTubeVideoTag(videoUrl);
    }
    if (videoUrl.match("vimeo.com")) {
      this.insertVimeoVideoTag(videoUrl);
    }
  }
  insertYouTubeVideoTag(videoUrl) {
    const id = videoUrl.split("v=")[1];
    const imageUrl = `https://img.youtube.com/vi/${id}/0.jpg`;
    const thumbnail = `
      <div style='position: relative'>
        <a href='${videoUrl}' target='_blank'>
          <img src="${imageUrl}" alt="click to watch"/>
          <img style='position: absolute; left:200px; top:140px'
          src="https://img.icons8.com/color/96/000000/youtube-play.png"/>
        </a>
      </div>`;
    this.insertHtml(thumbnail);
  }
  insertVimeoVideoTag(videoUrl) {
    const sub = this.http.get(`https://vimeo.com/api/oembed.json?url=${videoUrl}`).subscribe((data) => {
      const imageUrl = data.thumbnail_url_with_play_button;
      const thumbnail = `<div>
        <a href='${videoUrl}' target='_blank'>
          <img src="${imageUrl}" alt="${data.title}"/>
        </a>
      </div>`;
      this.insertHtml(thumbnail);
      sub.unsubscribe();
    });
  }
  nextNode(node) {
    if (node.hasChildNodes()) {
      return node.firstChild;
    } else {
      while (node && !node.nextSibling) {
        node = node.parentNode;
      }
      if (!node) {
        return null;
      }
      return node.nextSibling;
    }
  }
  getRangeSelectedNodes(range, includePartiallySelectedContainers) {
    let node = range.startContainer;
    const endNode = range.endContainer;
    let rangeNodes = [];
    if (node === endNode) {
      rangeNodes = [node];
    } else {
      while (node && node !== endNode) {
        rangeNodes.push(node = this.nextNode(node));
      }
      node = range.startContainer;
      while (node && node !== range.commonAncestorContainer) {
        rangeNodes.unshift(node);
        node = node.parentNode;
      }
    }
    if (includePartiallySelectedContainers) {
      node = range.commonAncestorContainer;
      while (node) {
        rangeNodes.push(node);
        node = node.parentNode;
      }
    }
    return rangeNodes;
  }
  getSelectedNodes() {
    const nodes = [];
    if (this.doc.getSelection) {
      const sel = this.doc.getSelection();
      for (let i = 0, len = sel.rangeCount; i < len; ++i) {
        nodes.push.apply(nodes, this.getRangeSelectedNodes(sel.getRangeAt(i), true));
      }
    }
    return nodes;
  }
  replaceWithOwnChildren(el) {
    const parent = el.parentNode;
    while (el.hasChildNodes()) {
      parent.insertBefore(el.firstChild, el);
    }
    parent.removeChild(el);
  }
  removeSelectedElements(tagNames) {
    const tagNamesArray = tagNames.toLowerCase().split(",");
    this.getSelectedNodes().forEach((node) => {
      if (node.nodeType === 1 && tagNamesArray.indexOf(node.tagName.toLowerCase()) > -1) {
        this.replaceWithOwnChildren(node);
      }
    });
  }
};
AngularEditorService.ɵfac = function AngularEditorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AngularEditorService)(ɵɵinject(HttpClient), ɵɵinject(DOCUMENT));
};
AngularEditorService.ɵprov = ɵɵdefineInjectable({
  token: AngularEditorService,
  factory: AngularEditorService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorService, [{
    type: Injectable
  }], function() {
    return [{
      type: HttpClient
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, null);
})();
var angularEditorConfig = {
  editable: true,
  spellcheck: true,
  height: "auto",
  minHeight: "0",
  maxHeight: "auto",
  width: "auto",
  minWidth: "0",
  translate: "yes",
  enableToolbar: true,
  showToolbar: true,
  placeholder: "Enter text here...",
  defaultParagraphSeparator: "",
  defaultFontName: "",
  defaultFontSize: "",
  fonts: [{
    class: "arial",
    name: "Arial"
  }, {
    class: "times-new-roman",
    name: "Times New Roman"
  }, {
    class: "calibri",
    name: "Calibri"
  }, {
    class: "comic-sans-ms",
    name: "Comic Sans MS"
  }],
  uploadUrl: "v1/image",
  uploadWithCredentials: false,
  sanitize: true,
  toolbarPosition: "top",
  outline: true
  /*toolbarHiddenButtons: [
    ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
    ['heading', 'fontName', 'fontSize', 'color'],
    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
    ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
    ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
    ['link', 'unlink', 'image', 'video']
  ]*/
};
function isDefined(value) {
  return value !== void 0 && value !== null;
}
var AeSelectComponent = class {
  constructor(elRef, r) {
    this.elRef = elRef;
    this.r = r;
    this.options = [];
    this.disabled = false;
    this.optionId = 0;
    this.opened = false;
    this.hidden = "inline-block";
    this.changeEvent = new EventEmitter();
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
  }
  get label() {
    return this.selectedOption && this.selectedOption.hasOwnProperty("label") ? this.selectedOption.label : "Select";
  }
  get value() {
    return this.selectedOption.value;
  }
  ngOnInit() {
    this.selectedOption = this.options[0];
    if (isDefined(this.isHidden) && this.isHidden) {
      this.hide();
    }
  }
  hide() {
    this.hidden = "none";
  }
  optionSelect(option, event) {
    event.stopPropagation();
    this.setValue(option.value);
    this.onChange(this.selectedOption.value);
    this.changeEvent.emit(this.selectedOption.value);
    this.onTouched();
    this.opened = false;
  }
  toggleOpen(event) {
    if (this.disabled) {
      return;
    }
    this.opened = !this.opened;
  }
  onClick($event) {
    if (!this.elRef.nativeElement.contains($event.target)) {
      this.close();
    }
  }
  close() {
    this.opened = false;
  }
  get isOpen() {
    return this.opened;
  }
  writeValue(value) {
    if (!value || typeof value !== "string") {
      return;
    }
    this.setValue(value);
  }
  setValue(value) {
    let index = 0;
    const selectedEl = this.options.find((el, i) => {
      index = i;
      return el.value === value;
    });
    if (selectedEl) {
      this.selectedOption = selectedEl;
      this.optionId = index;
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.labelButton.nativeElement.disabled = isDisabled;
    const div = this.labelButton.nativeElement;
    const action = isDisabled ? "addClass" : "removeClass";
    this.r[action](div, "disabled");
    this.disabled = isDisabled;
  }
  handleKeyDown($event) {
    if (!this.opened) {
      return;
    }
    switch ($event.key) {
      case "ArrowDown":
        this._handleArrowDown($event);
        break;
      case "ArrowUp":
        this._handleArrowUp($event);
        break;
      case "Space":
        this._handleSpace($event);
        break;
      case "Enter":
        this._handleEnter($event);
        break;
      case "Tab":
        this._handleTab($event);
        break;
      case "Escape":
        this.close();
        $event.preventDefault();
        break;
      case "Backspace":
        this._handleBackspace();
        break;
    }
  }
  _handleArrowDown($event) {
    if (this.optionId < this.options.length - 1) {
      this.optionId++;
    }
  }
  _handleArrowUp($event) {
    if (this.optionId >= 1) {
      this.optionId--;
    }
  }
  _handleSpace($event) {
  }
  _handleEnter($event) {
    this.optionSelect(this.options[this.optionId], $event);
  }
  _handleTab($event) {
  }
  _handleBackspace() {
  }
};
AeSelectComponent.ɵfac = function AeSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AeSelectComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
AeSelectComponent.ɵcmp = ɵɵdefineComponent({
  type: AeSelectComponent,
  selectors: [["ae-select"]],
  viewQuery: function AeSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelButton = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function AeSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function AeSelectComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      }, false, ɵɵresolveDocument)("keydown", function AeSelectComponent_keydown_HostBindingHandler($event) {
        return ctx.handleKeyDown($event);
      });
    }
    if (rf & 2) {
      ɵɵstyleProp("display", ctx.hidden);
    }
  },
  inputs: {
    options: "options",
    isHidden: [0, "hidden", "isHidden"]
  },
  outputs: {
    changeEvent: "change"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AeSelectComponent),
    multi: true
  }])],
  decls: 10,
  vars: 7,
  consts: [["labelButton", ""], [1, "ae-font", "ae-picker", 3, "ngClass"], ["tabindex", "0", "type", "button", "role", "button", 1, "ae-picker-label", 3, "click", "tabIndex"], ["viewBox", "0 0 18 18"], ["points", "7 11 9 13 11 11 7 11", 1, "ae-stroke"], ["points", "7 7 9 5 11 7 7 7", 1, "ae-stroke"], [1, "ae-picker-options"], ["tabindex", "-1", "type", "button", "role", "button", "class", "ae-picker-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "dropdown-item", 4, "ngIf"], ["tabindex", "-1", "type", "button", "role", "button", 1, "ae-picker-item", 3, "click", "ngClass"], [1, "dropdown-item"]],
  template: function AeSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "span", 1)(1, "button", 2, 0);
      ɵɵlistener("click", function AeSelectComponent_Template_button_click_1_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.toggleOpen($event));
      });
      ɵɵtext(3);
      ɵɵnamespaceSVG();
      ɵɵelementStart(4, "svg", 3);
      ɵɵelement(5, "polygon", 4)(6, "polygon", 5);
      ɵɵelementEnd()();
      ɵɵnamespaceHTML();
      ɵɵelementStart(7, "span", 6);
      ɵɵtemplate(8, AeSelectComponent_button_8_Template, 2, 5, "button", 7)(9, AeSelectComponent_span_9_Template, 2, 0, "span", 8);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c1, ctx.isOpen));
      ɵɵadvance();
      ɵɵproperty("tabIndex", -1);
      ɵɵadvance(2);
      ɵɵtextInterpolate1("", ctx.label, " ");
      ɵɵadvance(5);
      ɵɵproperty("ngForOf", ctx.options);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.options.length);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf],
  styles: ['.ae-font.ae-picker{color:#444;display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:10px;position:relative;width:100%;line-height:26px;vertical-align:middle;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;float:left;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:"";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(to right,rgb(255,255,255),#ffffff 100%)}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:#0003 0 2px 8px}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}\n'],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AeSelectComponent, [{
    type: Component,
    args: [{
      selector: "ae-select",
      encapsulation: ViewEncapsulation$1.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AeSelectComponent),
        multi: true
      }],
      template: `<span class="ae-font ae-picker" [ngClass]="{'ae-expanded':isOpen}">
  <button [tabIndex]="-1" #labelButton tabindex="0" type="button" role="button" class="ae-picker-label" (click)="toggleOpen($event);">{{label}}
    <svg viewBox="0 0 18 18">
     <!-- <use x="0" y="0" xlink:href="../assets/icons.svg#hom"></use>-->
      <polygon class="ae-stroke" points="7 11 9 13 11 11 7 11"></polygon>
      <polygon class="ae-stroke" points="7 7 9 5 11 7 7 7"></polygon>
    </svg>
  </button>
  <span class="ae-picker-options">
    <button tabindex="-1" type="button" role="button" class="ae-picker-item"
          *ngFor="let item of options; let i = index"
          [ngClass]="{'selected': item.value === value, 'focused': i === optionId}"
          (click)="optionSelect(item, $event)">
          {{item.label}}
    </button>
    <span class="dropdown-item" *ngIf="!options.length">No items for select</span>
  </span>
</span>
`,
      styles: ['.ae-font.ae-picker{color:#444;display:inline-block;float:left;width:100%;position:relative;vertical-align:middle}.ae-font .ae-picker-label{cursor:pointer;display:inline-block;height:100%;padding-left:8px;padding-right:10px;position:relative;width:100%;line-height:26px;vertical-align:middle;font-size:85%;text-align:left;background-color:#fff;min-width:2rem;float:left;border:1px solid #ddd;text-overflow:clip;overflow:hidden;white-space:nowrap}.ae-font .ae-picker-label:before{content:"";position:absolute;right:0;top:0;width:20px;height:100%;background:linear-gradient(to right,rgb(255,255,255),#ffffff 100%)}.ae-font .ae-picker-label:focus{outline:none}.ae-font .ae-picker-label:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.ae-font .ae-picker-label:hover:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-font .ae-picker-label:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.ae-font .ae-picker-label:disabled:before{background:linear-gradient(to right,#f5f5f5 100%,#ffffff 100%)}.ae-font .ae-picker-label svg{position:absolute;margin-top:-9px;right:0;top:50%;width:18px}.ae-font .ae-picker-label svg:not(:root){overflow:hidden}.ae-font .ae-picker-label svg .ae-stroke{fill:none;stroke:#444;stroke-linecap:round;stroke-linejoin:round;stroke-width:2}.ae-font .ae-picker-options{background-color:#fff;display:none;min-width:100%;position:absolute;white-space:nowrap;z-index:3;border:1px solid transparent;box-shadow:#0003 0 2px 8px}.ae-font .ae-picker-options .ae-picker-item{cursor:pointer;display:block;padding-bottom:5px;padding-top:5px;padding-left:5px;z-index:3;text-align:left;background-color:transparent;min-width:2rem;width:100%;border:0 solid #ddd}.ae-font .ae-picker-options .ae-picker-item.selected{color:#06c;background-color:#fff4c2}.ae-font .ae-picker-options .ae-picker-item.focused,.ae-font .ae-picker-options .ae-picker-item:hover{background-color:#fffa98}.ae-font.ae-expanded{display:block;margin-top:-1px;z-index:1}.ae-font.ae-expanded .ae-picker-label{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg{color:#ccc;z-index:2}.ae-font.ae-expanded .ae-picker-label svg .ae-stroke{stroke:#ccc}.ae-font.ae-expanded .ae-picker-options{display:block;margin-top:-1px;top:100%;z-index:3;border-color:#ccc}\n']
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    options: [{
      type: Input
    }],
    isHidden: [{
      type: Input,
      args: ["hidden"]
    }],
    hidden: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    changeEvent: [{
      type: Output,
      args: ["change"]
    }],
    labelButton: [{
      type: ViewChild,
      args: ["labelButton", {
        static: true
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }],
    handleKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var AngularEditorToolbarComponent = class {
  constructor(r, editorService, er, doc) {
    this.r = r;
    this.editorService = editorService;
    this.er = er;
    this.doc = doc;
    this.htmlMode = false;
    this.linkSelected = false;
    this.block = "default";
    this.fontName = "Times New Roman";
    this.fontSize = "3";
    this.headings = [{
      label: "Heading 1",
      value: "h1"
    }, {
      label: "Heading 2",
      value: "h2"
    }, {
      label: "Heading 3",
      value: "h3"
    }, {
      label: "Heading 4",
      value: "h4"
    }, {
      label: "Heading 5",
      value: "h5"
    }, {
      label: "Heading 6",
      value: "h6"
    }, {
      label: "Heading 7",
      value: "h7"
    }, {
      label: "Paragraph",
      value: "p"
    }, {
      label: "Predefined",
      value: "pre"
    }, {
      label: "Standard",
      value: "div"
    }, {
      label: "default",
      value: "default"
    }];
    this.fontSizes = [{
      label: "1",
      value: "1"
    }, {
      label: "2",
      value: "2"
    }, {
      label: "3",
      value: "3"
    }, {
      label: "4",
      value: "4"
    }, {
      label: "5",
      value: "5"
    }, {
      label: "6",
      value: "6"
    }, {
      label: "7",
      value: "7"
    }];
    this.customClassId = "-1";
    this.customClassList = [{
      label: "",
      value: ""
    }];
    this.tagMap = {
      BLOCKQUOTE: "indent",
      A: "link"
    };
    this.select = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "PRE", "DIV"];
    this.buttons = ["bold", "italic", "underline", "strikeThrough", "subscript", "superscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent", "insertUnorderedList", "insertOrderedList", "link"];
    this.fonts = [{
      label: "",
      value: ""
    }];
    this.execute = new EventEmitter();
  }
  set customClasses(classes) {
    if (classes) {
      this._customClasses = classes;
      this.customClassList = this._customClasses.map((x, i) => ({
        label: x.name,
        value: i.toString()
      }));
      this.customClassList.unshift({
        label: "Clear Class",
        value: "-1"
      });
    }
  }
  set defaultFontName(value) {
    if (value) {
      this.fontName = value;
    }
  }
  set defaultFontSize(value) {
    if (value) {
      this.fontSize = value;
    }
  }
  get isLinkButtonDisabled() {
    return this.htmlMode || !Boolean(this.editorService.selectedText);
  }
  /**
   * Trigger command from editor header buttons
   * @param command string from toolbar buttons
   */
  triggerCommand(command) {
    this.execute.emit(command);
  }
  /**
   * highlight editor buttons when cursor moved or positioning
   */
  triggerButtons() {
    if (!this.showToolbar) {
      return;
    }
    this.buttons.forEach((e) => {
      const result = this.doc.queryCommandState(e);
      const elementById = this.doc.getElementById(e + "-" + this.id);
      if (result) {
        this.r.addClass(elementById, "active");
      } else {
        this.r.removeClass(elementById, "active");
      }
    });
  }
  /**
   * trigger highlight editor buttons when cursor moved or positioning in block
   */
  triggerBlocks(nodes) {
    if (!this.showToolbar) {
      return;
    }
    this.linkSelected = nodes.findIndex((x) => x.nodeName === "A") > -1;
    let found = false;
    this.select.forEach((y) => {
      const node = nodes.find((x) => x.nodeName === y);
      if (node !== void 0 && y === node.nodeName) {
        if (found === false) {
          this.block = node.nodeName.toLowerCase();
          found = true;
        }
      } else if (found === false) {
        this.block = "default";
      }
    });
    found = false;
    if (this._customClasses) {
      this._customClasses.forEach((y, index) => {
        const node = nodes.find((x) => {
          if (x instanceof Element) {
            return x.className === y.class;
          }
        });
        if (node !== void 0) {
          if (found === false) {
            this.customClassId = index.toString();
            found = true;
          }
        } else if (found === false) {
          this.customClassId = "-1";
        }
      });
    }
    Object.keys(this.tagMap).map((e) => {
      const elementById = this.doc.getElementById(this.tagMap[e] + "-" + this.id);
      const node = nodes.find((x) => x.nodeName === e);
      if (node !== void 0 && e === node.nodeName) {
        this.r.addClass(elementById, "active");
      } else {
        this.r.removeClass(elementById, "active");
      }
    });
    this.foreColour = this.doc.queryCommandValue("ForeColor");
    this.fontSize = this.doc.queryCommandValue("FontSize");
    this.fontName = this.doc.queryCommandValue("FontName").replace(/"/g, "");
    this.backColor = this.doc.queryCommandValue("backColor");
  }
  /**
   * insert URL link
   */
  insertUrl() {
    let url = "https://";
    const selection = this.editorService.savedSelection;
    if (selection && selection.commonAncestorContainer.parentElement.nodeName === "A") {
      const parent = selection.commonAncestorContainer.parentElement;
      if (parent.href !== "") {
        url = parent.href;
      }
    }
    url = prompt("Insert URL link", url);
    if (url && url !== "" && url !== "https://") {
      this.editorService.createLink(url);
    }
  }
  /**
   * insert Video link
   */
  insertVideo() {
    this.execute.emit("");
    const url = prompt("Insert Video link", `https://`);
    if (url && url !== "" && url !== `https://`) {
      this.editorService.insertVideo(url);
    }
  }
  /** insert color */
  insertColor(color, where) {
    this.editorService.insertColor(color, where);
    this.execute.emit("");
  }
  /**
   * set font Name/family
   * @param foreColor string
   */
  setFontName(foreColor) {
    this.editorService.setFontName(foreColor);
    this.execute.emit("");
  }
  /**
   * set font Size
   * @param fontSize string
   */
  setFontSize(fontSize) {
    this.editorService.setFontSize(fontSize);
    this.execute.emit("");
  }
  /**
   * toggle editor mode (WYSIWYG or SOURCE)
   * @param m boolean
   */
  setEditorMode(m) {
    const toggleEditorModeButton = this.doc.getElementById("toggleEditorMode-" + this.id);
    if (m) {
      this.r.addClass(toggleEditorModeButton, "active");
    } else {
      this.r.removeClass(toggleEditorModeButton, "active");
    }
    this.htmlMode = m;
  }
  /**
   * Upload image when file is selected.
   */
  onFileChanged(event) {
    const file = event.target.files[0];
    if (file.type.includes("image/")) {
      if (this.upload) {
        this.upload(file).subscribe((response) => this.watchUploadImage(response, event));
      } else if (this.uploadUrl) {
        this.editorService.uploadImage(file).subscribe((response) => this.watchUploadImage(response, event));
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          const fr = e.currentTarget;
          this.editorService.insertImage(fr.result.toString());
        };
        reader.readAsDataURL(file);
      }
    }
  }
  watchUploadImage(response, event) {
    const {
      imageUrl
    } = response.body;
    this.editorService.insertImage(imageUrl);
    event.srcElement.value = null;
  }
  /**
   * Set custom class
   */
  setCustomClass(classId) {
    if (classId === "-1") {
      this.execute.emit("clear");
    } else {
      this.editorService.createCustomClass(this._customClasses[+classId]);
    }
  }
  isButtonHidden(name) {
    if (!name) {
      return false;
    }
    if (!(this.hiddenButtons instanceof Array)) {
      return false;
    }
    let result;
    for (const arr of this.hiddenButtons) {
      if (arr instanceof Array) {
        result = arr.find((item) => item === name);
      }
      if (result) {
        break;
      }
    }
    return result !== void 0;
  }
  focus() {
    this.execute.emit("focus");
    console.log("focused");
  }
};
AngularEditorToolbarComponent.ɵfac = function AngularEditorToolbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AngularEditorToolbarComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(AngularEditorService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT));
};
AngularEditorToolbarComponent.ɵcmp = ɵɵdefineComponent({
  type: AngularEditorToolbarComponent,
  selectors: [["angular-editor-toolbar"]],
  viewQuery: function AngularEditorToolbarComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c3, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.myInputFile = _t.first);
    }
  },
  inputs: {
    id: "id",
    uploadUrl: "uploadUrl",
    upload: "upload",
    showToolbar: "showToolbar",
    fonts: "fonts",
    customClasses: "customClasses",
    defaultFontName: "defaultFontName",
    defaultFontSize: "defaultFontSize",
    hiddenButtons: "hiddenButtons"
  },
  outputs: {
    execute: "execute"
  },
  ngContentSelectors: _c4,
  decls: 1,
  vars: 1,
  consts: [["fgInput", ""], ["bgInput", ""], ["fileInput", ""], ["class", "angular-editor-toolbar", 4, "ngIf"], [1, "angular-editor-toolbar"], [1, "angular-editor-toolbar-set"], ["type", "button", "title", "Undo", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "hidden"], [1, "fa", "fa-undo"], ["type", "button", "title", "Redo", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "hidden"], [1, "fa", "fa-repeat"], ["type", "button", "title", "Bold", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-bold"], ["type", "button", "title", "Italic", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-italic"], ["type", "button", "title", "Underline", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-underline"], ["type", "button", "title", "Strikethrough", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-strikethrough"], ["type", "button", "title", "Subscript", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-subscript"], ["type", "button", "title", "Superscript", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-superscript"], ["type", "button", "title", "Justify Left", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-align-left"], ["type", "button", "title", "Justify Center", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-align-center"], ["type", "button", "title", "Justify Right", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-align-right"], ["type", "button", "title", "Justify Full", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-align-justify"], ["type", "button", "title", "Indent", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-indent"], ["type", "button", "title", "Outdent", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-outdent"], ["type", "button", "title", "Unordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-list-ul"], ["type", "button", "title", "Ordered List", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-list-ol"], ["tabindex", "-1", 1, "select-heading", 3, "ngModelChange", "change", "options", "ngModel", "disabled", "hidden"], ["tabindex", "-1", 1, "select-font", 3, "ngModelChange", "change", "options", "ngModel", "disabled", "hidden"], ["tabindex", "-1", 1, "select-font-size", 3, "ngModelChange", "change", "options", "ngModel", "disabled", "hidden"], ["type", "color", 2, "display", "none", 3, "change"], ["type", "button", "title", "Text Color", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "color-label", "foreground"], [1, "fa", "fa-font"], ["type", "button", "title", "Background Color", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "color-label", "background"], ["class", "angular-editor-toolbar-set", 4, "ngIf"], ["type", "button", "title", "Insert Link", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-link"], ["type", "button", "title", "Unlink", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-chain-broken"], ["accept", "image/*", "type", "file", 2, "display", "none", 3, "change"], ["type", "button", "title", "Insert Image", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-image"], ["type", "button", "title", "Insert Video", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-video-camera"], ["type", "button", "title", "Horizontal Line", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-minus"], ["type", "button", "title", "Clear Formatting", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "disabled", "hidden"], [1, "fa", "fa-remove"], ["type", "button", "title", "HTML Code", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "id", "hidden"], [1, "fa", "fa-code"], ["tabindex", "-1", 1, "select-custom-style", 3, "ngModelChange", "change", "options", "ngModel", "disabled", "hidden"]],
  template: function AngularEditorToolbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, AngularEditorToolbarComponent_div_0_Template, 76, 83, "div", 3);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.showToolbar);
    }
  },
  dependencies: [AeSelectComponent, NgIf, NgControlStatus, NgModel],
  styles: ['\n\n\n\n@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fa-spin 2s infinite linear}.fa-pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fa-spin 1s infinite steps(8)}@keyframes _ngcontent-%COMP%_fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}[_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%]{filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:"\\f000"}.fa-music[_ngcontent-%COMP%]:before{content:"\\f001"}.fa-search[_ngcontent-%COMP%]:before{content:"\\f002"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:"\\f003"}.fa-heart[_ngcontent-%COMP%]:before{content:"\\f004"}.fa-star[_ngcontent-%COMP%]:before{content:"\\f005"}.fa-star-o[_ngcontent-%COMP%]:before{content:"\\f006"}.fa-user[_ngcontent-%COMP%]:before{content:"\\f007"}.fa-film[_ngcontent-%COMP%]:before{content:"\\f008"}.fa-th-large[_ngcontent-%COMP%]:before{content:"\\f009"}.fa-th[_ngcontent-%COMP%]:before{content:"\\f00a"}.fa-th-list[_ngcontent-%COMP%]:before{content:"\\f00b"}.fa-check[_ngcontent-%COMP%]:before{content:"\\f00c"}.fa-remove[_ngcontent-%COMP%]:before, .fa-close[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:"\\f00d"}.fa-search-plus[_ngcontent-%COMP%]:before{content:"\\f00e"}.fa-search-minus[_ngcontent-%COMP%]:before{content:"\\f010"}.fa-power-off[_ngcontent-%COMP%]:before{content:"\\f011"}.fa-signal[_ngcontent-%COMP%]:before{content:"\\f012"}.fa-gear[_ngcontent-%COMP%]:before, .fa-cog[_ngcontent-%COMP%]:before{content:"\\f013"}.fa-trash-o[_ngcontent-%COMP%]:before{content:"\\f014"}.fa-home[_ngcontent-%COMP%]:before{content:"\\f015"}.fa-file-o[_ngcontent-%COMP%]:before{content:"\\f016"}.fa-clock-o[_ngcontent-%COMP%]:before{content:"\\f017"}.fa-road[_ngcontent-%COMP%]:before{content:"\\f018"}.fa-download[_ngcontent-%COMP%]:before{content:"\\f019"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:"\\f01a"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:"\\f01b"}.fa-inbox[_ngcontent-%COMP%]:before{content:"\\f01c"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:"\\f01d"}.fa-rotate-right[_ngcontent-%COMP%]:before, .fa-repeat[_ngcontent-%COMP%]:before{content:"\\f01e"}.fa-refresh[_ngcontent-%COMP%]:before{content:"\\f021"}.fa-list-alt[_ngcontent-%COMP%]:before{content:"\\f022"}.fa-lock[_ngcontent-%COMP%]:before{content:"\\f023"}.fa-flag[_ngcontent-%COMP%]:before{content:"\\f024"}.fa-headphones[_ngcontent-%COMP%]:before{content:"\\f025"}.fa-volume-off[_ngcontent-%COMP%]:before{content:"\\f026"}.fa-volume-down[_ngcontent-%COMP%]:before{content:"\\f027"}.fa-volume-up[_ngcontent-%COMP%]:before{content:"\\f028"}.fa-qrcode[_ngcontent-%COMP%]:before{content:"\\f029"}.fa-barcode[_ngcontent-%COMP%]:before{content:"\\f02a"}.fa-tag[_ngcontent-%COMP%]:before{content:"\\f02b"}.fa-tags[_ngcontent-%COMP%]:before{content:"\\f02c"}.fa-book[_ngcontent-%COMP%]:before{content:"\\f02d"}.fa-bookmark[_ngcontent-%COMP%]:before{content:"\\f02e"}.fa-print[_ngcontent-%COMP%]:before{content:"\\f02f"}.fa-camera[_ngcontent-%COMP%]:before{content:"\\f030"}.fa-font[_ngcontent-%COMP%]:before{content:"\\f031"}.fa-bold[_ngcontent-%COMP%]:before{content:"\\f032"}.fa-italic[_ngcontent-%COMP%]:before{content:"\\f033"}.fa-text-height[_ngcontent-%COMP%]:before{content:"\\f034"}.fa-text-width[_ngcontent-%COMP%]:before{content:"\\f035"}.fa-align-left[_ngcontent-%COMP%]:before{content:"\\f036"}.fa-align-center[_ngcontent-%COMP%]:before{content:"\\f037"}.fa-align-right[_ngcontent-%COMP%]:before{content:"\\f038"}.fa-align-justify[_ngcontent-%COMP%]:before{content:"\\f039"}.fa-list[_ngcontent-%COMP%]:before{content:"\\f03a"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:"\\f03b"}.fa-indent[_ngcontent-%COMP%]:before{content:"\\f03c"}.fa-video-camera[_ngcontent-%COMP%]:before{content:"\\f03d"}.fa-photo[_ngcontent-%COMP%]:before, .fa-image[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:"\\f03e"}.fa-pencil[_ngcontent-%COMP%]:before{content:"\\f040"}.fa-map-marker[_ngcontent-%COMP%]:before{content:"\\f041"}.fa-adjust[_ngcontent-%COMP%]:before{content:"\\f042"}.fa-tint[_ngcontent-%COMP%]:before{content:"\\f043"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:"\\f044"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:"\\f045"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:"\\f046"}.fa-arrows[_ngcontent-%COMP%]:before{content:"\\f047"}.fa-step-backward[_ngcontent-%COMP%]:before{content:"\\f048"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:"\\f049"}.fa-backward[_ngcontent-%COMP%]:before{content:"\\f04a"}.fa-play[_ngcontent-%COMP%]:before{content:"\\f04b"}.fa-pause[_ngcontent-%COMP%]:before{content:"\\f04c"}.fa-stop[_ngcontent-%COMP%]:before{content:"\\f04d"}.fa-forward[_ngcontent-%COMP%]:before{content:"\\f04e"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:"\\f050"}.fa-step-forward[_ngcontent-%COMP%]:before{content:"\\f051"}.fa-eject[_ngcontent-%COMP%]:before{content:"\\f052"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:"\\f053"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:"\\f054"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:"\\f055"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:"\\f056"}.fa-times-circle[_ngcontent-%COMP%]:before{content:"\\f057"}.fa-check-circle[_ngcontent-%COMP%]:before{content:"\\f058"}.fa-question-circle[_ngcontent-%COMP%]:before{content:"\\f059"}.fa-info-circle[_ngcontent-%COMP%]:before{content:"\\f05a"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:"\\f05b"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:"\\f05c"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:"\\f05d"}.fa-ban[_ngcontent-%COMP%]:before{content:"\\f05e"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:"\\f060"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:"\\f061"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:"\\f062"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:"\\f063"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:"\\f064"}.fa-expand[_ngcontent-%COMP%]:before{content:"\\f065"}.fa-compress[_ngcontent-%COMP%]:before{content:"\\f066"}.fa-plus[_ngcontent-%COMP%]:before{content:"\\f067"}.fa-minus[_ngcontent-%COMP%]:before{content:"\\f068"}.fa-asterisk[_ngcontent-%COMP%]:before{content:"\\f069"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:"\\f06a"}.fa-gift[_ngcontent-%COMP%]:before{content:"\\f06b"}.fa-leaf[_ngcontent-%COMP%]:before{content:"\\f06c"}.fa-fire[_ngcontent-%COMP%]:before{content:"\\f06d"}.fa-eye[_ngcontent-%COMP%]:before{content:"\\f06e"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:"\\f070"}.fa-warning[_ngcontent-%COMP%]:before, .fa-exclamation-triangle[_ngcontent-%COMP%]:before{content:"\\f071"}.fa-plane[_ngcontent-%COMP%]:before{content:"\\f072"}.fa-calendar[_ngcontent-%COMP%]:before{content:"\\f073"}.fa-random[_ngcontent-%COMP%]:before{content:"\\f074"}.fa-comment[_ngcontent-%COMP%]:before{content:"\\f075"}.fa-magnet[_ngcontent-%COMP%]:before{content:"\\f076"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:"\\f077"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:"\\f078"}.fa-retweet[_ngcontent-%COMP%]:before{content:"\\f079"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:"\\f07a"}.fa-folder[_ngcontent-%COMP%]:before{content:"\\f07b"}.fa-folder-open[_ngcontent-%COMP%]:before{content:"\\f07c"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:"\\f07d"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:"\\f07e"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:"\\f080"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:"\\f081"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:"\\f082"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:"\\f083"}.fa-key[_ngcontent-%COMP%]:before{content:"\\f084"}.fa-gears[_ngcontent-%COMP%]:before, .fa-cogs[_ngcontent-%COMP%]:before{content:"\\f085"}.fa-comments[_ngcontent-%COMP%]:before{content:"\\f086"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:"\\f087"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:"\\f088"}.fa-star-half[_ngcontent-%COMP%]:before{content:"\\f089"}.fa-heart-o[_ngcontent-%COMP%]:before{content:"\\f08a"}.fa-sign-out[_ngcontent-%COMP%]:before{content:"\\f08b"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:"\\f08c"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:"\\f08d"}.fa-external-link[_ngcontent-%COMP%]:before{content:"\\f08e"}.fa-sign-in[_ngcontent-%COMP%]:before{content:"\\f090"}.fa-trophy[_ngcontent-%COMP%]:before{content:"\\f091"}.fa-github-square[_ngcontent-%COMP%]:before{content:"\\f092"}.fa-upload[_ngcontent-%COMP%]:before{content:"\\f093"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:"\\f094"}.fa-phone[_ngcontent-%COMP%]:before{content:"\\f095"}.fa-square-o[_ngcontent-%COMP%]:before{content:"\\f096"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:"\\f097"}.fa-phone-square[_ngcontent-%COMP%]:before{content:"\\f098"}.fa-twitter[_ngcontent-%COMP%]:before{content:"\\f099"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:"\\f09a"}.fa-github[_ngcontent-%COMP%]:before{content:"\\f09b"}.fa-unlock[_ngcontent-%COMP%]:before{content:"\\f09c"}.fa-credit-card[_ngcontent-%COMP%]:before{content:"\\f09d"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:"\\f09e"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:"\\f0a0"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:"\\f0a1"}.fa-bell[_ngcontent-%COMP%]:before{content:"\\f0f3"}.fa-certificate[_ngcontent-%COMP%]:before{content:"\\f0a3"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:"\\f0a4"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:"\\f0a5"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:"\\f0a6"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:"\\f0a7"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:"\\f0a8"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:"\\f0a9"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:"\\f0aa"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:"\\f0ab"}.fa-globe[_ngcontent-%COMP%]:before{content:"\\f0ac"}.fa-wrench[_ngcontent-%COMP%]:before{content:"\\f0ad"}.fa-tasks[_ngcontent-%COMP%]:before{content:"\\f0ae"}.fa-filter[_ngcontent-%COMP%]:before{content:"\\f0b0"}.fa-briefcase[_ngcontent-%COMP%]:before{content:"\\f0b1"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:"\\f0b2"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:"\\f0c0"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:"\\f0c1"}.fa-cloud[_ngcontent-%COMP%]:before{content:"\\f0c2"}.fa-flask[_ngcontent-%COMP%]:before{content:"\\f0c3"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:"\\f0c4"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:"\\f0c5"}.fa-paperclip[_ngcontent-%COMP%]:before{content:"\\f0c6"}.fa-save[_ngcontent-%COMP%]:before, .fa-floppy-o[_ngcontent-%COMP%]:before{content:"\\f0c7"}.fa-square[_ngcontent-%COMP%]:before{content:"\\f0c8"}.fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before, .fa-bars[_ngcontent-%COMP%]:before{content:"\\f0c9"}.fa-list-ul[_ngcontent-%COMP%]:before{content:"\\f0ca"}.fa-list-ol[_ngcontent-%COMP%]:before{content:"\\f0cb"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:"\\f0cc"}.fa-underline[_ngcontent-%COMP%]:before{content:"\\f0cd"}.fa-table[_ngcontent-%COMP%]:before{content:"\\f0ce"}.fa-magic[_ngcontent-%COMP%]:before{content:"\\f0d0"}.fa-truck[_ngcontent-%COMP%]:before{content:"\\f0d1"}.fa-pinterest[_ngcontent-%COMP%]:before{content:"\\f0d2"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:"\\f0d3"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:"\\f0d4"}.fa-google-plus[_ngcontent-%COMP%]:before{content:"\\f0d5"}.fa-money[_ngcontent-%COMP%]:before{content:"\\f0d6"}.fa-caret-down[_ngcontent-%COMP%]:before{content:"\\f0d7"}.fa-caret-up[_ngcontent-%COMP%]:before{content:"\\f0d8"}.fa-caret-left[_ngcontent-%COMP%]:before{content:"\\f0d9"}.fa-caret-right[_ngcontent-%COMP%]:before{content:"\\f0da"}.fa-columns[_ngcontent-%COMP%]:before{content:"\\f0db"}.fa-unsorted[_ngcontent-%COMP%]:before, .fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc"}.fa-sort-down[_ngcontent-%COMP%]:before, .fa-sort-desc[_ngcontent-%COMP%]:before{content:"\\f0dd"}.fa-sort-up[_ngcontent-%COMP%]:before, .fa-sort-asc[_ngcontent-%COMP%]:before{content:"\\f0de"}.fa-envelope[_ngcontent-%COMP%]:before{content:"\\f0e0"}.fa-linkedin[_ngcontent-%COMP%]:before{content:"\\f0e1"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:"\\f0e2"}.fa-legal[_ngcontent-%COMP%]:before, .fa-gavel[_ngcontent-%COMP%]:before{content:"\\f0e3"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:"\\f0e4"}.fa-comment-o[_ngcontent-%COMP%]:before{content:"\\f0e5"}.fa-comments-o[_ngcontent-%COMP%]:before{content:"\\f0e6"}.fa-flash[_ngcontent-%COMP%]:before, .fa-bolt[_ngcontent-%COMP%]:before{content:"\\f0e7"}.fa-sitemap[_ngcontent-%COMP%]:before{content:"\\f0e8"}.fa-umbrella[_ngcontent-%COMP%]:before{content:"\\f0e9"}.fa-paste[_ngcontent-%COMP%]:before, .fa-clipboard[_ngcontent-%COMP%]:before{content:"\\f0ea"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:"\\f0eb"}.fa-exchange[_ngcontent-%COMP%]:before{content:"\\f0ec"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:"\\f0ed"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:"\\f0ee"}.fa-user-md[_ngcontent-%COMP%]:before{content:"\\f0f0"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:"\\f0f1"}.fa-suitcase[_ngcontent-%COMP%]:before{content:"\\f0f2"}.fa-bell-o[_ngcontent-%COMP%]:before{content:"\\f0a2"}.fa-coffee[_ngcontent-%COMP%]:before{content:"\\f0f4"}.fa-cutlery[_ngcontent-%COMP%]:before{content:"\\f0f5"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:"\\f0f6"}.fa-building-o[_ngcontent-%COMP%]:before{content:"\\f0f7"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:"\\f0f8"}.fa-ambulance[_ngcontent-%COMP%]:before{content:"\\f0f9"}.fa-medkit[_ngcontent-%COMP%]:before{content:"\\f0fa"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:"\\f0fb"}.fa-beer[_ngcontent-%COMP%]:before{content:"\\f0fc"}.fa-h-square[_ngcontent-%COMP%]:before{content:"\\f0fd"}.fa-plus-square[_ngcontent-%COMP%]:before{content:"\\f0fe"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:"\\f100"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:"\\f101"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:"\\f102"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:"\\f103"}.fa-angle-left[_ngcontent-%COMP%]:before{content:"\\f104"}.fa-angle-right[_ngcontent-%COMP%]:before{content:"\\f105"}.fa-angle-up[_ngcontent-%COMP%]:before{content:"\\f106"}.fa-angle-down[_ngcontent-%COMP%]:before{content:"\\f107"}.fa-desktop[_ngcontent-%COMP%]:before{content:"\\f108"}.fa-laptop[_ngcontent-%COMP%]:before{content:"\\f109"}.fa-tablet[_ngcontent-%COMP%]:before{content:"\\f10a"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:"\\f10b"}.fa-circle-o[_ngcontent-%COMP%]:before{content:"\\f10c"}.fa-quote-left[_ngcontent-%COMP%]:before{content:"\\f10d"}.fa-quote-right[_ngcontent-%COMP%]:before{content:"\\f10e"}.fa-spinner[_ngcontent-%COMP%]:before{content:"\\f110"}.fa-circle[_ngcontent-%COMP%]:before{content:"\\f111"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:"\\f112"}.fa-github-alt[_ngcontent-%COMP%]:before{content:"\\f113"}.fa-folder-o[_ngcontent-%COMP%]:before{content:"\\f114"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:"\\f115"}.fa-smile-o[_ngcontent-%COMP%]:before{content:"\\f118"}.fa-frown-o[_ngcontent-%COMP%]:before{content:"\\f119"}.fa-meh-o[_ngcontent-%COMP%]:before{content:"\\f11a"}.fa-gamepad[_ngcontent-%COMP%]:before{content:"\\f11b"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:"\\f11c"}.fa-flag-o[_ngcontent-%COMP%]:before{content:"\\f11d"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:"\\f11e"}.fa-terminal[_ngcontent-%COMP%]:before{content:"\\f120"}.fa-code[_ngcontent-%COMP%]:before{content:"\\f121"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:"\\f122"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:"\\f123"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:"\\f124"}.fa-crop[_ngcontent-%COMP%]:before{content:"\\f125"}.fa-code-fork[_ngcontent-%COMP%]:before{content:"\\f126"}.fa-unlink[_ngcontent-%COMP%]:before, .fa-chain-broken[_ngcontent-%COMP%]:before{content:"\\f127"}.fa-question[_ngcontent-%COMP%]:before{content:"\\f128"}.fa-info[_ngcontent-%COMP%]:before{content:"\\f129"}.fa-exclamation[_ngcontent-%COMP%]:before{content:"\\f12a"}.fa-superscript[_ngcontent-%COMP%]:before{content:"\\f12b"}.fa-subscript[_ngcontent-%COMP%]:before{content:"\\f12c"}.fa-eraser[_ngcontent-%COMP%]:before{content:"\\f12d"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:"\\f12e"}.fa-microphone[_ngcontent-%COMP%]:before{content:"\\f130"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:"\\f131"}.fa-shield[_ngcontent-%COMP%]:before{content:"\\f132"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:"\\f133"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:"\\f134"}.fa-rocket[_ngcontent-%COMP%]:before{content:"\\f135"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:"\\f136"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:"\\f137"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:"\\f138"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:"\\f139"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:"\\f13a"}.fa-html5[_ngcontent-%COMP%]:before{content:"\\f13b"}.fa-css3[_ngcontent-%COMP%]:before{content:"\\f13c"}.fa-anchor[_ngcontent-%COMP%]:before{content:"\\f13d"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:"\\f13e"}.fa-bullseye[_ngcontent-%COMP%]:before{content:"\\f140"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:"\\f141"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:"\\f142"}.fa-rss-square[_ngcontent-%COMP%]:before{content:"\\f143"}.fa-play-circle[_ngcontent-%COMP%]:before{content:"\\f144"}.fa-ticket[_ngcontent-%COMP%]:before{content:"\\f145"}.fa-minus-square[_ngcontent-%COMP%]:before{content:"\\f146"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:"\\f147"}.fa-level-up[_ngcontent-%COMP%]:before{content:"\\f148"}.fa-level-down[_ngcontent-%COMP%]:before{content:"\\f149"}.fa-check-square[_ngcontent-%COMP%]:before{content:"\\f14a"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:"\\f14b"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:"\\f14c"}.fa-share-square[_ngcontent-%COMP%]:before{content:"\\f14d"}.fa-compass[_ngcontent-%COMP%]:before{content:"\\f14e"}.fa-toggle-down[_ngcontent-%COMP%]:before, .fa-caret-square-o-down[_ngcontent-%COMP%]:before{content:"\\f150"}.fa-toggle-up[_ngcontent-%COMP%]:before, .fa-caret-square-o-up[_ngcontent-%COMP%]:before{content:"\\f151"}.fa-toggle-right[_ngcontent-%COMP%]:before, .fa-caret-square-o-right[_ngcontent-%COMP%]:before{content:"\\f152"}.fa-euro[_ngcontent-%COMP%]:before, .fa-eur[_ngcontent-%COMP%]:before{content:"\\f153"}.fa-gbp[_ngcontent-%COMP%]:before{content:"\\f154"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:"\\f155"}.fa-rupee[_ngcontent-%COMP%]:before, .fa-inr[_ngcontent-%COMP%]:before{content:"\\f156"}.fa-cny[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before{content:"\\f157"}.fa-ruble[_ngcontent-%COMP%]:before, .fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before{content:"\\f158"}.fa-won[_ngcontent-%COMP%]:before, .fa-krw[_ngcontent-%COMP%]:before{content:"\\f159"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:"\\f15a"}.fa-file[_ngcontent-%COMP%]:before{content:"\\f15b"}.fa-file-text[_ngcontent-%COMP%]:before{content:"\\f15c"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:"\\f15d"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:"\\f15e"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:"\\f160"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:"\\f161"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:"\\f162"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:"\\f163"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:"\\f164"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:"\\f165"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:"\\f166"}.fa-youtube[_ngcontent-%COMP%]:before{content:"\\f167"}.fa-xing[_ngcontent-%COMP%]:before{content:"\\f168"}.fa-xing-square[_ngcontent-%COMP%]:before{content:"\\f169"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:"\\f16a"}.fa-dropbox[_ngcontent-%COMP%]:before{content:"\\f16b"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:"\\f16c"}.fa-instagram[_ngcontent-%COMP%]:before{content:"\\f16d"}.fa-flickr[_ngcontent-%COMP%]:before{content:"\\f16e"}.fa-adn[_ngcontent-%COMP%]:before{content:"\\f170"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:"\\f171"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:"\\f172"}.fa-tumblr[_ngcontent-%COMP%]:before{content:"\\f173"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:"\\f174"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:"\\f175"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:"\\f176"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:"\\f177"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:"\\f178"}.fa-apple[_ngcontent-%COMP%]:before{content:"\\f179"}.fa-windows[_ngcontent-%COMP%]:before{content:"\\f17a"}.fa-android[_ngcontent-%COMP%]:before{content:"\\f17b"}.fa-linux[_ngcontent-%COMP%]:before{content:"\\f17c"}.fa-dribbble[_ngcontent-%COMP%]:before{content:"\\f17d"}.fa-skype[_ngcontent-%COMP%]:before{content:"\\f17e"}.fa-foursquare[_ngcontent-%COMP%]:before{content:"\\f180"}.fa-trello[_ngcontent-%COMP%]:before{content:"\\f181"}.fa-female[_ngcontent-%COMP%]:before{content:"\\f182"}.fa-male[_ngcontent-%COMP%]:before{content:"\\f183"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:"\\f184"}.fa-sun-o[_ngcontent-%COMP%]:before{content:"\\f185"}.fa-moon-o[_ngcontent-%COMP%]:before{content:"\\f186"}.fa-archive[_ngcontent-%COMP%]:before{content:"\\f187"}.fa-bug[_ngcontent-%COMP%]:before{content:"\\f188"}.fa-vk[_ngcontent-%COMP%]:before{content:"\\f189"}.fa-weibo[_ngcontent-%COMP%]:before{content:"\\f18a"}.fa-renren[_ngcontent-%COMP%]:before{content:"\\f18b"}.fa-pagelines[_ngcontent-%COMP%]:before{content:"\\f18c"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:"\\f18d"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:"\\f18e"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:"\\f190"}.fa-toggle-left[_ngcontent-%COMP%]:before, .fa-caret-square-o-left[_ngcontent-%COMP%]:before{content:"\\f191"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:"\\f192"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:"\\f193"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:"\\f194"}.fa-turkish-lira[_ngcontent-%COMP%]:before, .fa-try[_ngcontent-%COMP%]:before{content:"\\f195"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:"\\f196"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:"\\f197"}.fa-slack[_ngcontent-%COMP%]:before{content:"\\f198"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:"\\f199"}.fa-wordpress[_ngcontent-%COMP%]:before{content:"\\f19a"}.fa-openid[_ngcontent-%COMP%]:before{content:"\\f19b"}.fa-institution[_ngcontent-%COMP%]:before, .fa-bank[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:"\\f19c"}.fa-mortar-board[_ngcontent-%COMP%]:before, .fa-graduation-cap[_ngcontent-%COMP%]:before{content:"\\f19d"}.fa-yahoo[_ngcontent-%COMP%]:before{content:"\\f19e"}.fa-google[_ngcontent-%COMP%]:before{content:"\\f1a0"}.fa-reddit[_ngcontent-%COMP%]:before{content:"\\f1a1"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:"\\f1a2"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:"\\f1a3"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:"\\f1a4"}.fa-delicious[_ngcontent-%COMP%]:before{content:"\\f1a5"}.fa-digg[_ngcontent-%COMP%]:before{content:"\\f1a6"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:"\\f1a7"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:"\\f1a8"}.fa-drupal[_ngcontent-%COMP%]:before{content:"\\f1a9"}.fa-joomla[_ngcontent-%COMP%]:before{content:"\\f1aa"}.fa-language[_ngcontent-%COMP%]:before{content:"\\f1ab"}.fa-fax[_ngcontent-%COMP%]:before{content:"\\f1ac"}.fa-building[_ngcontent-%COMP%]:before{content:"\\f1ad"}.fa-child[_ngcontent-%COMP%]:before{content:"\\f1ae"}.fa-paw[_ngcontent-%COMP%]:before{content:"\\f1b0"}.fa-spoon[_ngcontent-%COMP%]:before{content:"\\f1b1"}.fa-cube[_ngcontent-%COMP%]:before{content:"\\f1b2"}.fa-cubes[_ngcontent-%COMP%]:before{content:"\\f1b3"}.fa-behance[_ngcontent-%COMP%]:before{content:"\\f1b4"}.fa-behance-square[_ngcontent-%COMP%]:before{content:"\\f1b5"}.fa-steam[_ngcontent-%COMP%]:before{content:"\\f1b6"}.fa-steam-square[_ngcontent-%COMP%]:before{content:"\\f1b7"}.fa-recycle[_ngcontent-%COMP%]:before{content:"\\f1b8"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:"\\f1b9"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:"\\f1ba"}.fa-tree[_ngcontent-%COMP%]:before{content:"\\f1bb"}.fa-spotify[_ngcontent-%COMP%]:before{content:"\\f1bc"}.fa-deviantart[_ngcontent-%COMP%]:before{content:"\\f1bd"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:"\\f1be"}.fa-database[_ngcontent-%COMP%]:before{content:"\\f1c0"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:"\\f1c1"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:"\\f1c2"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:"\\f1c3"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:"\\f1c4"}.fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before, .fa-file-image-o[_ngcontent-%COMP%]:before{content:"\\f1c5"}.fa-file-zip-o[_ngcontent-%COMP%]:before, .fa-file-archive-o[_ngcontent-%COMP%]:before{content:"\\f1c6"}.fa-file-sound-o[_ngcontent-%COMP%]:before, .fa-file-audio-o[_ngcontent-%COMP%]:before{content:"\\f1c7"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:"\\f1c8"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:"\\f1c9"}.fa-vine[_ngcontent-%COMP%]:before{content:"\\f1ca"}.fa-codepen[_ngcontent-%COMP%]:before{content:"\\f1cb"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:"\\f1cc"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before{content:"\\f1cd"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:"\\f1ce"}.fa-ra[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before{content:"\\f1d0"}.fa-ge[_ngcontent-%COMP%]:before, .fa-empire[_ngcontent-%COMP%]:before{content:"\\f1d1"}.fa-git-square[_ngcontent-%COMP%]:before{content:"\\f1d2"}.fa-git[_ngcontent-%COMP%]:before{content:"\\f1d3"}.fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before, .fa-hacker-news[_ngcontent-%COMP%]:before{content:"\\f1d4"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:"\\f1d5"}.fa-qq[_ngcontent-%COMP%]:before{content:"\\f1d6"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:"\\f1d7"}.fa-send[_ngcontent-%COMP%]:before, .fa-paper-plane[_ngcontent-%COMP%]:before{content:"\\f1d8"}.fa-send-o[_ngcontent-%COMP%]:before, .fa-paper-plane-o[_ngcontent-%COMP%]:before{content:"\\f1d9"}.fa-history[_ngcontent-%COMP%]:before{content:"\\f1da"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:"\\f1db"}.fa-header[_ngcontent-%COMP%]:before{content:"\\f1dc"}.fa-paragraph[_ngcontent-%COMP%]:before{content:"\\f1dd"}.fa-sliders[_ngcontent-%COMP%]:before{content:"\\f1de"}.fa-share-alt[_ngcontent-%COMP%]:before{content:"\\f1e0"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:"\\f1e1"}.fa-bomb[_ngcontent-%COMP%]:before{content:"\\f1e2"}.fa-soccer-ball-o[_ngcontent-%COMP%]:before, .fa-futbol-o[_ngcontent-%COMP%]:before{content:"\\f1e3"}.fa-tty[_ngcontent-%COMP%]:before{content:"\\f1e4"}.fa-binoculars[_ngcontent-%COMP%]:before{content:"\\f1e5"}.fa-plug[_ngcontent-%COMP%]:before{content:"\\f1e6"}.fa-slideshare[_ngcontent-%COMP%]:before{content:"\\f1e7"}.fa-twitch[_ngcontent-%COMP%]:before{content:"\\f1e8"}.fa-yelp[_ngcontent-%COMP%]:before{content:"\\f1e9"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:"\\f1ea"}.fa-wifi[_ngcontent-%COMP%]:before{content:"\\f1eb"}.fa-calculator[_ngcontent-%COMP%]:before{content:"\\f1ec"}.fa-paypal[_ngcontent-%COMP%]:before{content:"\\f1ed"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:"\\f1ee"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:"\\f1f0"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:"\\f1f1"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:"\\f1f2"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:"\\f1f3"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:"\\f1f4"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:"\\f1f5"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:"\\f1f6"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:"\\f1f7"}.fa-trash[_ngcontent-%COMP%]:before{content:"\\f1f8"}.fa-copyright[_ngcontent-%COMP%]:before{content:"\\f1f9"}.fa-at[_ngcontent-%COMP%]:before{content:"\\f1fa"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:"\\f1fb"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:"\\f1fc"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:"\\f1fd"}.fa-area-chart[_ngcontent-%COMP%]:before{content:"\\f1fe"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:"\\f200"}.fa-line-chart[_ngcontent-%COMP%]:before{content:"\\f201"}.fa-lastfm[_ngcontent-%COMP%]:before{content:"\\f202"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:"\\f203"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:"\\f204"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:"\\f205"}.fa-bicycle[_ngcontent-%COMP%]:before{content:"\\f206"}.fa-bus[_ngcontent-%COMP%]:before{content:"\\f207"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:"\\f208"}.fa-angellist[_ngcontent-%COMP%]:before{content:"\\f209"}.fa-cc[_ngcontent-%COMP%]:before{content:"\\f20a"}.fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before, .fa-ils[_ngcontent-%COMP%]:before{content:"\\f20b"}.fa-meanpath[_ngcontent-%COMP%]:before{content:"\\f20c"}.fa-buysellads[_ngcontent-%COMP%]:before{content:"\\f20d"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:"\\f20e"}.fa-dashcube[_ngcontent-%COMP%]:before{content:"\\f210"}.fa-forumbee[_ngcontent-%COMP%]:before{content:"\\f211"}.fa-leanpub[_ngcontent-%COMP%]:before{content:"\\f212"}.fa-sellsy[_ngcontent-%COMP%]:before{content:"\\f213"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:"\\f214"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:"\\f215"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:"\\f216"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:"\\f217"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:"\\f218"}.fa-diamond[_ngcontent-%COMP%]:before{content:"\\f219"}.fa-ship[_ngcontent-%COMP%]:before{content:"\\f21a"}.fa-user-secret[_ngcontent-%COMP%]:before{content:"\\f21b"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:"\\f21c"}.fa-street-view[_ngcontent-%COMP%]:before{content:"\\f21d"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:"\\f21e"}.fa-venus[_ngcontent-%COMP%]:before{content:"\\f221"}.fa-mars[_ngcontent-%COMP%]:before{content:"\\f222"}.fa-mercury[_ngcontent-%COMP%]:before{content:"\\f223"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:"\\f224"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:"\\f225"}.fa-venus-double[_ngcontent-%COMP%]:before{content:"\\f226"}.fa-mars-double[_ngcontent-%COMP%]:before{content:"\\f227"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:"\\f228"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:"\\f229"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:"\\f22a"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:"\\f22b"}.fa-neuter[_ngcontent-%COMP%]:before{content:"\\f22c"}.fa-genderless[_ngcontent-%COMP%]:before{content:"\\f22d"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:"\\f230"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:"\\f231"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:"\\f232"}.fa-server[_ngcontent-%COMP%]:before{content:"\\f233"}.fa-user-plus[_ngcontent-%COMP%]:before{content:"\\f234"}.fa-user-times[_ngcontent-%COMP%]:before{content:"\\f235"}.fa-hotel[_ngcontent-%COMP%]:before, .fa-bed[_ngcontent-%COMP%]:before{content:"\\f236"}.fa-viacoin[_ngcontent-%COMP%]:before{content:"\\f237"}.fa-train[_ngcontent-%COMP%]:before{content:"\\f238"}.fa-subway[_ngcontent-%COMP%]:before{content:"\\f239"}.fa-medium[_ngcontent-%COMP%]:before{content:"\\f23a"}.fa-yc[_ngcontent-%COMP%]:before, .fa-y-combinator[_ngcontent-%COMP%]:before{content:"\\f23b"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:"\\f23c"}.fa-opencart[_ngcontent-%COMP%]:before{content:"\\f23d"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:"\\f23e"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before{content:"\\f240"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:"\\f241"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:"\\f242"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:"\\f243"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:"\\f244"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:"\\f245"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:"\\f246"}.fa-object-group[_ngcontent-%COMP%]:before{content:"\\f247"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:"\\f248"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:"\\f249"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:"\\f24a"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:"\\f24b"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:"\\f24c"}.fa-clone[_ngcontent-%COMP%]:before{content:"\\f24d"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:"\\f24e"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:"\\f250"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:"\\f251"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:"\\f252"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:"\\f253"}.fa-hourglass[_ngcontent-%COMP%]:before{content:"\\f254"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:"\\f255"}.fa-hand-stop-o[_ngcontent-%COMP%]:before, .fa-hand-paper-o[_ngcontent-%COMP%]:before{content:"\\f256"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:"\\f257"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:"\\f258"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:"\\f259"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:"\\f25a"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:"\\f25b"}.fa-trademark[_ngcontent-%COMP%]:before{content:"\\f25c"}.fa-registered[_ngcontent-%COMP%]:before{content:"\\f25d"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:"\\f25e"}.fa-gg[_ngcontent-%COMP%]:before{content:"\\f260"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:"\\f261"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:"\\f262"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:"\\f263"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:"\\f264"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:"\\f265"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:"\\f266"}.fa-safari[_ngcontent-%COMP%]:before{content:"\\f267"}.fa-chrome[_ngcontent-%COMP%]:before{content:"\\f268"}.fa-firefox[_ngcontent-%COMP%]:before{content:"\\f269"}.fa-opera[_ngcontent-%COMP%]:before{content:"\\f26a"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:"\\f26b"}.fa-tv[_ngcontent-%COMP%]:before, .fa-television[_ngcontent-%COMP%]:before{content:"\\f26c"}.fa-contao[_ngcontent-%COMP%]:before{content:"\\f26d"}.fa-500px[_ngcontent-%COMP%]:before{content:"\\f26e"}.fa-amazon[_ngcontent-%COMP%]:before{content:"\\f270"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:"\\f271"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:"\\f272"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:"\\f273"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:"\\f274"}.fa-industry[_ngcontent-%COMP%]:before{content:"\\f275"}.fa-map-pin[_ngcontent-%COMP%]:before{content:"\\f276"}.fa-map-signs[_ngcontent-%COMP%]:before{content:"\\f277"}.fa-map-o[_ngcontent-%COMP%]:before{content:"\\f278"}.fa-map[_ngcontent-%COMP%]:before{content:"\\f279"}.fa-commenting[_ngcontent-%COMP%]:before{content:"\\f27a"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:"\\f27b"}.fa-houzz[_ngcontent-%COMP%]:before{content:"\\f27c"}.fa-vimeo[_ngcontent-%COMP%]:before{content:"\\f27d"}.fa-black-tie[_ngcontent-%COMP%]:before{content:"\\f27e"}.fa-fonticons[_ngcontent-%COMP%]:before{content:"\\f280"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:"\\f281"}.fa-edge[_ngcontent-%COMP%]:before{content:"\\f282"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:"\\f283"}.fa-codiepie[_ngcontent-%COMP%]:before{content:"\\f284"}.fa-modx[_ngcontent-%COMP%]:before{content:"\\f285"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:"\\f286"}.fa-usb[_ngcontent-%COMP%]:before{content:"\\f287"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:"\\f288"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:"\\f289"}.fa-scribd[_ngcontent-%COMP%]:before{content:"\\f28a"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:"\\f28b"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:"\\f28c"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:"\\f28d"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:"\\f28e"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:"\\f290"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:"\\f291"}.fa-hashtag[_ngcontent-%COMP%]:before{content:"\\f292"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:"\\f293"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:"\\f294"}.fa-percent[_ngcontent-%COMP%]:before{content:"\\f295"}.fa-gitlab[_ngcontent-%COMP%]:before{content:"\\f296"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:"\\f297"}.fa-wpforms[_ngcontent-%COMP%]:before{content:"\\f298"}.fa-envira[_ngcontent-%COMP%]:before{content:"\\f299"}.fa-universal-access[_ngcontent-%COMP%]:before{content:"\\f29a"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:"\\f29b"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:"\\f29c"}.fa-blind[_ngcontent-%COMP%]:before{content:"\\f29d"}.fa-audio-description[_ngcontent-%COMP%]:before{content:"\\f29e"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:"\\f2a0"}.fa-braille[_ngcontent-%COMP%]:before{content:"\\f2a1"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:"\\f2a2"}.fa-asl-interpreting[_ngcontent-%COMP%]:before, .fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before{content:"\\f2a3"}.fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before, .fa-deaf[_ngcontent-%COMP%]:before{content:"\\f2a4"}.fa-glide[_ngcontent-%COMP%]:before{content:"\\f2a5"}.fa-glide-g[_ngcontent-%COMP%]:before{content:"\\f2a6"}.fa-signing[_ngcontent-%COMP%]:before, .fa-sign-language[_ngcontent-%COMP%]:before{content:"\\f2a7"}.fa-low-vision[_ngcontent-%COMP%]:before{content:"\\f2a8"}.fa-viadeo[_ngcontent-%COMP%]:before{content:"\\f2a9"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:"\\f2aa"}.fa-snapchat[_ngcontent-%COMP%]:before{content:"\\f2ab"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:"\\f2ac"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:"\\f2ad"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:"\\f2ae"}.fa-first-order[_ngcontent-%COMP%]:before{content:"\\f2b0"}.fa-yoast[_ngcontent-%COMP%]:before{content:"\\f2b1"}.fa-themeisle[_ngcontent-%COMP%]:before{content:"\\f2b2"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:"\\f2b3"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:"\\f2b4"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:"\\f2b5"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:"\\f2b6"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:"\\f2b7"}.fa-linode[_ngcontent-%COMP%]:before{content:"\\f2b8"}.fa-address-book[_ngcontent-%COMP%]:before{content:"\\f2b9"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:"\\f2ba"}.fa-vcard[_ngcontent-%COMP%]:before, .fa-address-card[_ngcontent-%COMP%]:before{content:"\\f2bb"}.fa-vcard-o[_ngcontent-%COMP%]:before, .fa-address-card-o[_ngcontent-%COMP%]:before{content:"\\f2bc"}.fa-user-circle[_ngcontent-%COMP%]:before{content:"\\f2bd"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:"\\f2be"}.fa-user-o[_ngcontent-%COMP%]:before{content:"\\f2c0"}.fa-id-badge[_ngcontent-%COMP%]:before{content:"\\f2c1"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:"\\f2c2"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:"\\f2c3"}.fa-quora[_ngcontent-%COMP%]:before{content:"\\f2c4"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:"\\f2c5"}.fa-telegram[_ngcontent-%COMP%]:before{content:"\\f2c6"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before{content:"\\f2c7"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:"\\f2c8"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:"\\f2c9"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:"\\f2ca"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:"\\f2cb"}.fa-shower[_ngcontent-%COMP%]:before{content:"\\f2cc"}.fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before, .fa-bath[_ngcontent-%COMP%]:before{content:"\\f2cd"}.fa-podcast[_ngcontent-%COMP%]:before{content:"\\f2ce"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:"\\f2d0"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:"\\f2d1"}.fa-window-restore[_ngcontent-%COMP%]:before{content:"\\f2d2"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:"\\f2d3"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:"\\f2d4"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:"\\f2d5"}.fa-grav[_ngcontent-%COMP%]:before{content:"\\f2d6"}.fa-etsy[_ngcontent-%COMP%]:before{content:"\\f2d7"}.fa-imdb[_ngcontent-%COMP%]:before{content:"\\f2d8"}.fa-ravelry[_ngcontent-%COMP%]:before{content:"\\f2d9"}.fa-eercast[_ngcontent-%COMP%]:before{content:"\\f2da"}.fa-microchip[_ngcontent-%COMP%]:before{content:"\\f2db"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:"\\f2dc"}.fa-superpowers[_ngcontent-%COMP%]:before{content:"\\f2dd"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:"\\f2de"}.fa-meetup[_ngcontent-%COMP%]:before{content:"\\f2e0"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus, .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%]{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%]{background:#555555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}']
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorToolbarComponent, [{
    type: Component,
    args: [{
      selector: "angular-editor-toolbar",
      template: `<div class="angular-editor-toolbar" *ngIf="showToolbar">
  <div class="angular-editor-toolbar-set">
    <button type="button" title="Undo" class="angular-editor-button" (click)="triggerCommand('undo')"
            [hidden]="isButtonHidden('undo')" tabindex="-1"><i
      class='fa fa-undo'></i></button>
    <button type="button" title="Redo" class="angular-editor-button" (click)="triggerCommand('redo')"
            [hidden]="isButtonHidden('redo')" tabindex="-1"><i
      class='fa fa-repeat'></i></button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'bold-'+id" type="button" title="Bold" class="angular-editor-button" (click)="triggerCommand('bold')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('bold')" tabindex="-1"><i class='fa fa-bold'></i></button>
    <button [id]="'italic-'+id" type="button" title="Italic" class="angular-editor-button"
            (click)="triggerCommand('italic')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('italic')" tabindex="-1"><i class='fa fa-italic'></i>
    </button>
    <button [id]="'underline-'+id" type="button" title="Underline" class="angular-editor-button"
            (click)="triggerCommand('underline')" [disabled]="htmlMode" [hidden]="isButtonHidden('underline')"
            tabindex="-1"><i class='fa fa-underline'></i></button>
    <button [id]="'strikeThrough-'+id" type="button" title="Strikethrough" class="angular-editor-button"
            (click)="triggerCommand('strikeThrough')" [disabled]="htmlMode" [hidden]="isButtonHidden('strikeThrough')"
            tabindex="-1"><i class='fa fa-strikethrough'></i></button>
    <button [id]="'subscript-'+id" type="button" title="Subscript" class="angular-editor-button"
            (click)="triggerCommand('subscript')" [disabled]="htmlMode" [hidden]="isButtonHidden('subscript')"
            tabindex="-1"><i class='fa fa-subscript'></i></button>
    <button [id]="'superscript-'+id" type="button" title="Superscript" class="angular-editor-button"
            (click)="triggerCommand('superscript')" [disabled]="htmlMode" [hidden]="isButtonHidden('superscript')"
            tabindex="-1"><i class='fa fa-superscript'></i></button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'justifyLeft-'+id" type="button" title="Justify Left" class="angular-editor-button"
            (click)="triggerCommand('justifyLeft')" [disabled]="htmlMode" [hidden]="isButtonHidden('justifyLeft')"
            tabindex="-1"><i
      class='fa fa-align-left'></i></button>
    <button [id]="'justifyCenter-'+id" type="button" title="Justify Center" class="angular-editor-button"
            (click)="triggerCommand('justifyCenter')" [disabled]="htmlMode" [hidden]="isButtonHidden('justifyCenter')"
            tabindex="-1"><i
      class='fa fa-align-center'></i></button>
    <button [id]="'justifyRight-'+id" type="button" title="Justify Right" class="angular-editor-button"
            (click)="triggerCommand('justifyRight')" [disabled]="htmlMode" [hidden]="isButtonHidden('justifyRight')"
            tabindex="-1">
      <i class='fa fa-align-right'></i></button>
    <button [id]="'justifyFull-'+id" type="button" title="Justify Full" class="angular-editor-button"
            (click)="triggerCommand('justifyFull')" [disabled]="htmlMode" [hidden]="isButtonHidden('justifyFull')"
            tabindex="-1"><i
      class='fa fa-align-justify'></i></button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'indent-'+id" type="button" title="Indent" class="angular-editor-button"
            (click)="triggerCommand('indent')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('indent')" tabindex="-1"><i
      class='fa fa-indent'></i></button>
    <button [id]="'outdent-'+id" type="button" title="Outdent" class="angular-editor-button"
            (click)="triggerCommand('outdent')"
            [disabled]="htmlMode" [hidden]="isButtonHidden('outdent')" tabindex="-1"><i
      class='fa fa-outdent'></i></button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'insertUnorderedList-'+id" type="button" title="Unordered List" class="angular-editor-button"
            (click)="triggerCommand('insertUnorderedList')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('insertUnorderedList')" tabindex="-1"><i
      class='fa fa-list-ul'></i></button>
    <button [id]="'insertOrderedList-'+id" type="button" title="Ordered List" class="angular-editor-button"
            (click)="triggerCommand('insertOrderedList')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('insertOrderedList')" tabindex="-1"><i
      class='fa fa-list-ol'></i></button>
  </div>
  <div class="angular-editor-toolbar-set">

    <ae-select class="select-heading" [options]="headings"
               [(ngModel)]="block"
               (change)="triggerCommand(block)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('heading')"
               tabindex="-1"></ae-select>
  </div>
  <div class="angular-editor-toolbar-set">

    <ae-select class="select-font" [options]="fonts"
               [(ngModel)]="fontName"
               (change)="setFontName(fontName)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('fontName')"
               tabindex="-1"></ae-select>
  </div>
  <div class="angular-editor-toolbar-set">

    <ae-select class="select-font-size" [options]="fontSizes"
               [(ngModel)]="fontSize"
               (change)="setFontSize(fontSize)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('fontSize')"
               tabindex="-1">
    </ae-select>
  </div>
  <div class="angular-editor-toolbar-set">
    <input
      style="display: none"
      type="color" (change)="insertColor(fgInput.value, 'textColor')"
      #fgInput>
    <button [id]="'foregroundColorPicker-'+id" type="button" class="angular-editor-button" (click)="focus(); ; fgInput.click()"
            title="Text Color"
            [disabled]="htmlMode" [hidden]="isButtonHidden('textColor')" tabindex="-1"><span
      class="color-label foreground"><i class="fa fa-font"></i></span>
    </button>
    <input
      style="display: none"
      type="color" (change)="insertColor(bgInput.value, 'backgroundColor')"
      #bgInput>
    <button [id]="'backgroundColorPicker-'+id" type="button" class="angular-editor-button" (click)="focus(); ; bgInput.click()"
            title="Background Color"
            [disabled]="htmlMode" [hidden]="isButtonHidden('backgroundColor')" tabindex="-1"><span
      class="color-label background"><i class="fa fa-font"></i></span>
    </button>
  </div>
  <div *ngIf="_customClasses" class="angular-editor-toolbar-set">
    <ae-select class="select-custom-style" [options]="customClassList"
               [(ngModel)]="customClassId"
               (change)="setCustomClass(customClassId)"
               [disabled]="htmlMode"
               [hidden]="isButtonHidden('customClasses')"
               tabindex="-1"></ae-select>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'link-'+id" type="button" class="angular-editor-button" (click)="insertUrl()"
            title="Insert Link" [disabled]="isLinkButtonDisabled" [hidden]="isButtonHidden('link')" tabindex="-1">
      <i class="fa fa-link"></i>
    </button>
    <button [id]="'unlink-'+id" type="button" class="angular-editor-button" (click)="triggerCommand('unlink')"
            title="Unlink" [disabled]="htmlMode || !linkSelected" [hidden]="isButtonHidden('unlink')" tabindex="-1">
      <i class="fa fa-chain-broken"></i>
    </button>
    <input
      style="display: none"
      accept="image/*"
      type="file" (change)="onFileChanged($event)"
      #fileInput>
    <button [id]="'insertImage-'+id" type="button" class="angular-editor-button" (click)="focus(); fileInput.click()"
            title="Insert Image"
            [disabled]="htmlMode" [hidden]="isButtonHidden('insertImage')" tabindex="-1"><i class="fa fa-image"></i>
    </button>
    <button [id]="'insertVideo-'+id" type="button" class="angular-editor-button"
            (click)="insertVideo()" title="Insert Video" [disabled]="htmlMode" [hidden]="isButtonHidden('insertVideo')"
            tabindex="-1"><i
      class="fa fa-video-camera"></i></button>
    <button [id]="'insertHorizontalRule-'+id" type="button" title="Horizontal Line" class="angular-editor-button"
            (click)="triggerCommand('insertHorizontalRule')" [disabled]="htmlMode"
            [hidden]="isButtonHidden('insertHorizontalRule')" tabindex="-1"><i
      class="fa fa-minus"></i></button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'clearFormatting-'+id" type="button" title="Clear Formatting" class="angular-editor-button"
            (click)="triggerCommand('removeFormat')" [disabled]="htmlMode" [hidden]="isButtonHidden('removeFormat')"
            tabindex="-1"><i class='fa fa-remove'></i>
    </button>
  </div>
  <div class="angular-editor-toolbar-set">
    <button [id]="'toggleEditorMode-'+id" type="button" title="HTML Code" class="angular-editor-button"
            (click)="triggerCommand('toggleEditorMode')" [hidden]="isButtonHidden('toggleEditorMode')" tabindex="-1"><i
      class='fa fa-code'></i></button>
  </div>
  <ng-content></ng-content>
</div>
`,
      styles: ['/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{animation:fa-spin 2s infinite linear}.fa-pulse{animation:fa-spin 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\\f000"}.fa-music:before{content:"\\f001"}.fa-search:before{content:"\\f002"}.fa-envelope-o:before{content:"\\f003"}.fa-heart:before{content:"\\f004"}.fa-star:before{content:"\\f005"}.fa-star-o:before{content:"\\f006"}.fa-user:before{content:"\\f007"}.fa-film:before{content:"\\f008"}.fa-th-large:before{content:"\\f009"}.fa-th:before{content:"\\f00a"}.fa-th-list:before{content:"\\f00b"}.fa-check:before{content:"\\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\\f00d"}.fa-search-plus:before{content:"\\f00e"}.fa-search-minus:before{content:"\\f010"}.fa-power-off:before{content:"\\f011"}.fa-signal:before{content:"\\f012"}.fa-gear:before,.fa-cog:before{content:"\\f013"}.fa-trash-o:before{content:"\\f014"}.fa-home:before{content:"\\f015"}.fa-file-o:before{content:"\\f016"}.fa-clock-o:before{content:"\\f017"}.fa-road:before{content:"\\f018"}.fa-download:before{content:"\\f019"}.fa-arrow-circle-o-down:before{content:"\\f01a"}.fa-arrow-circle-o-up:before{content:"\\f01b"}.fa-inbox:before{content:"\\f01c"}.fa-play-circle-o:before{content:"\\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\\f01e"}.fa-refresh:before{content:"\\f021"}.fa-list-alt:before{content:"\\f022"}.fa-lock:before{content:"\\f023"}.fa-flag:before{content:"\\f024"}.fa-headphones:before{content:"\\f025"}.fa-volume-off:before{content:"\\f026"}.fa-volume-down:before{content:"\\f027"}.fa-volume-up:before{content:"\\f028"}.fa-qrcode:before{content:"\\f029"}.fa-barcode:before{content:"\\f02a"}.fa-tag:before{content:"\\f02b"}.fa-tags:before{content:"\\f02c"}.fa-book:before{content:"\\f02d"}.fa-bookmark:before{content:"\\f02e"}.fa-print:before{content:"\\f02f"}.fa-camera:before{content:"\\f030"}.fa-font:before{content:"\\f031"}.fa-bold:before{content:"\\f032"}.fa-italic:before{content:"\\f033"}.fa-text-height:before{content:"\\f034"}.fa-text-width:before{content:"\\f035"}.fa-align-left:before{content:"\\f036"}.fa-align-center:before{content:"\\f037"}.fa-align-right:before{content:"\\f038"}.fa-align-justify:before{content:"\\f039"}.fa-list:before{content:"\\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-indent:before{content:"\\f03c"}.fa-video-camera:before{content:"\\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\\f03e"}.fa-pencil:before{content:"\\f040"}.fa-map-marker:before{content:"\\f041"}.fa-adjust:before{content:"\\f042"}.fa-tint:before{content:"\\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\\f044"}.fa-share-square-o:before{content:"\\f045"}.fa-check-square-o:before{content:"\\f046"}.fa-arrows:before{content:"\\f047"}.fa-step-backward:before{content:"\\f048"}.fa-fast-backward:before{content:"\\f049"}.fa-backward:before{content:"\\f04a"}.fa-play:before{content:"\\f04b"}.fa-pause:before{content:"\\f04c"}.fa-stop:before{content:"\\f04d"}.fa-forward:before{content:"\\f04e"}.fa-fast-forward:before{content:"\\f050"}.fa-step-forward:before{content:"\\f051"}.fa-eject:before{content:"\\f052"}.fa-chevron-left:before{content:"\\f053"}.fa-chevron-right:before{content:"\\f054"}.fa-plus-circle:before{content:"\\f055"}.fa-minus-circle:before{content:"\\f056"}.fa-times-circle:before{content:"\\f057"}.fa-check-circle:before{content:"\\f058"}.fa-question-circle:before{content:"\\f059"}.fa-info-circle:before{content:"\\f05a"}.fa-crosshairs:before{content:"\\f05b"}.fa-times-circle-o:before{content:"\\f05c"}.fa-check-circle-o:before{content:"\\f05d"}.fa-ban:before{content:"\\f05e"}.fa-arrow-left:before{content:"\\f060"}.fa-arrow-right:before{content:"\\f061"}.fa-arrow-up:before{content:"\\f062"}.fa-arrow-down:before{content:"\\f063"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-expand:before{content:"\\f065"}.fa-compress:before{content:"\\f066"}.fa-plus:before{content:"\\f067"}.fa-minus:before{content:"\\f068"}.fa-asterisk:before{content:"\\f069"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-gift:before{content:"\\f06b"}.fa-leaf:before{content:"\\f06c"}.fa-fire:before{content:"\\f06d"}.fa-eye:before{content:"\\f06e"}.fa-eye-slash:before{content:"\\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\\f071"}.fa-plane:before{content:"\\f072"}.fa-calendar:before{content:"\\f073"}.fa-random:before{content:"\\f074"}.fa-comment:before{content:"\\f075"}.fa-magnet:before{content:"\\f076"}.fa-chevron-up:before{content:"\\f077"}.fa-chevron-down:before{content:"\\f078"}.fa-retweet:before{content:"\\f079"}.fa-shopping-cart:before{content:"\\f07a"}.fa-folder:before{content:"\\f07b"}.fa-folder-open:before{content:"\\f07c"}.fa-arrows-v:before{content:"\\f07d"}.fa-arrows-h:before{content:"\\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\\f080"}.fa-twitter-square:before{content:"\\f081"}.fa-facebook-square:before{content:"\\f082"}.fa-camera-retro:before{content:"\\f083"}.fa-key:before{content:"\\f084"}.fa-gears:before,.fa-cogs:before{content:"\\f085"}.fa-comments:before{content:"\\f086"}.fa-thumbs-o-up:before{content:"\\f087"}.fa-thumbs-o-down:before{content:"\\f088"}.fa-star-half:before{content:"\\f089"}.fa-heart-o:before{content:"\\f08a"}.fa-sign-out:before{content:"\\f08b"}.fa-linkedin-square:before{content:"\\f08c"}.fa-thumb-tack:before{content:"\\f08d"}.fa-external-link:before{content:"\\f08e"}.fa-sign-in:before{content:"\\f090"}.fa-trophy:before{content:"\\f091"}.fa-github-square:before{content:"\\f092"}.fa-upload:before{content:"\\f093"}.fa-lemon-o:before{content:"\\f094"}.fa-phone:before{content:"\\f095"}.fa-square-o:before{content:"\\f096"}.fa-bookmark-o:before{content:"\\f097"}.fa-phone-square:before{content:"\\f098"}.fa-twitter:before{content:"\\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\\f09a"}.fa-github:before{content:"\\f09b"}.fa-unlock:before{content:"\\f09c"}.fa-credit-card:before{content:"\\f09d"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-hdd-o:before{content:"\\f0a0"}.fa-bullhorn:before{content:"\\f0a1"}.fa-bell:before{content:"\\f0f3"}.fa-certificate:before{content:"\\f0a3"}.fa-hand-o-right:before{content:"\\f0a4"}.fa-hand-o-left:before{content:"\\f0a5"}.fa-hand-o-up:before{content:"\\f0a6"}.fa-hand-o-down:before{content:"\\f0a7"}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-arrow-circle-up:before{content:"\\f0aa"}.fa-arrow-circle-down:before{content:"\\f0ab"}.fa-globe:before{content:"\\f0ac"}.fa-wrench:before{content:"\\f0ad"}.fa-tasks:before{content:"\\f0ae"}.fa-filter:before{content:"\\f0b0"}.fa-briefcase:before{content:"\\f0b1"}.fa-arrows-alt:before{content:"\\f0b2"}.fa-group:before,.fa-users:before{content:"\\f0c0"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-cloud:before{content:"\\f0c2"}.fa-flask:before{content:"\\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\\f0c5"}.fa-paperclip:before{content:"\\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\\f0c7"}.fa-square:before{content:"\\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\\f0c9"}.fa-list-ul:before{content:"\\f0ca"}.fa-list-ol:before{content:"\\f0cb"}.fa-strikethrough:before{content:"\\f0cc"}.fa-underline:before{content:"\\f0cd"}.fa-table:before{content:"\\f0ce"}.fa-magic:before{content:"\\f0d0"}.fa-truck:before{content:"\\f0d1"}.fa-pinterest:before{content:"\\f0d2"}.fa-pinterest-square:before{content:"\\f0d3"}.fa-google-plus-square:before{content:"\\f0d4"}.fa-google-plus:before{content:"\\f0d5"}.fa-money:before{content:"\\f0d6"}.fa-caret-down:before{content:"\\f0d7"}.fa-caret-up:before{content:"\\f0d8"}.fa-caret-left:before{content:"\\f0d9"}.fa-caret-right:before{content:"\\f0da"}.fa-columns:before{content:"\\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\\f0de"}.fa-envelope:before{content:"\\f0e0"}.fa-linkedin:before{content:"\\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\\f0e4"}.fa-comment-o:before{content:"\\f0e5"}.fa-comments-o:before{content:"\\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\\f0e7"}.fa-sitemap:before{content:"\\f0e8"}.fa-umbrella:before{content:"\\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\\f0ea"}.fa-lightbulb-o:before{content:"\\f0eb"}.fa-exchange:before{content:"\\f0ec"}.fa-cloud-download:before{content:"\\f0ed"}.fa-cloud-upload:before{content:"\\f0ee"}.fa-user-md:before{content:"\\f0f0"}.fa-stethoscope:before{content:"\\f0f1"}.fa-suitcase:before{content:"\\f0f2"}.fa-bell-o:before{content:"\\f0a2"}.fa-coffee:before{content:"\\f0f4"}.fa-cutlery:before{content:"\\f0f5"}.fa-file-text-o:before{content:"\\f0f6"}.fa-building-o:before{content:"\\f0f7"}.fa-hospital-o:before{content:"\\f0f8"}.fa-ambulance:before{content:"\\f0f9"}.fa-medkit:before{content:"\\f0fa"}.fa-fighter-jet:before{content:"\\f0fb"}.fa-beer:before{content:"\\f0fc"}.fa-h-square:before{content:"\\f0fd"}.fa-plus-square:before{content:"\\f0fe"}.fa-angle-double-left:before{content:"\\f100"}.fa-angle-double-right:before{content:"\\f101"}.fa-angle-double-up:before{content:"\\f102"}.fa-angle-double-down:before{content:"\\f103"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-angle-up:before{content:"\\f106"}.fa-angle-down:before{content:"\\f107"}.fa-desktop:before{content:"\\f108"}.fa-laptop:before{content:"\\f109"}.fa-tablet:before{content:"\\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\\f10b"}.fa-circle-o:before{content:"\\f10c"}.fa-quote-left:before{content:"\\f10d"}.fa-quote-right:before{content:"\\f10e"}.fa-spinner:before{content:"\\f110"}.fa-circle:before{content:"\\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\\f112"}.fa-github-alt:before{content:"\\f113"}.fa-folder-o:before{content:"\\f114"}.fa-folder-open-o:before{content:"\\f115"}.fa-smile-o:before{content:"\\f118"}.fa-frown-o:before{content:"\\f119"}.fa-meh-o:before{content:"\\f11a"}.fa-gamepad:before{content:"\\f11b"}.fa-keyboard-o:before{content:"\\f11c"}.fa-flag-o:before{content:"\\f11d"}.fa-flag-checkered:before{content:"\\f11e"}.fa-terminal:before{content:"\\f120"}.fa-code:before{content:"\\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\\f123"}.fa-location-arrow:before{content:"\\f124"}.fa-crop:before{content:"\\f125"}.fa-code-fork:before{content:"\\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\\f127"}.fa-question:before{content:"\\f128"}.fa-info:before{content:"\\f129"}.fa-exclamation:before{content:"\\f12a"}.fa-superscript:before{content:"\\f12b"}.fa-subscript:before{content:"\\f12c"}.fa-eraser:before{content:"\\f12d"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-microphone:before{content:"\\f130"}.fa-microphone-slash:before{content:"\\f131"}.fa-shield:before{content:"\\f132"}.fa-calendar-o:before{content:"\\f133"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-rocket:before{content:"\\f135"}.fa-maxcdn:before{content:"\\f136"}.fa-chevron-circle-left:before{content:"\\f137"}.fa-chevron-circle-right:before{content:"\\f138"}.fa-chevron-circle-up:before{content:"\\f139"}.fa-chevron-circle-down:before{content:"\\f13a"}.fa-html5:before{content:"\\f13b"}.fa-css3:before{content:"\\f13c"}.fa-anchor:before{content:"\\f13d"}.fa-unlock-alt:before{content:"\\f13e"}.fa-bullseye:before{content:"\\f140"}.fa-ellipsis-h:before{content:"\\f141"}.fa-ellipsis-v:before{content:"\\f142"}.fa-rss-square:before{content:"\\f143"}.fa-play-circle:before{content:"\\f144"}.fa-ticket:before{content:"\\f145"}.fa-minus-square:before{content:"\\f146"}.fa-minus-square-o:before{content:"\\f147"}.fa-level-up:before{content:"\\f148"}.fa-level-down:before{content:"\\f149"}.fa-check-square:before{content:"\\f14a"}.fa-pencil-square:before{content:"\\f14b"}.fa-external-link-square:before{content:"\\f14c"}.fa-share-square:before{content:"\\f14d"}.fa-compass:before{content:"\\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\\f152"}.fa-euro:before,.fa-eur:before{content:"\\f153"}.fa-gbp:before{content:"\\f154"}.fa-dollar:before,.fa-usd:before{content:"\\f155"}.fa-rupee:before,.fa-inr:before{content:"\\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\\f158"}.fa-won:before,.fa-krw:before{content:"\\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\\f15a"}.fa-file:before{content:"\\f15b"}.fa-file-text:before{content:"\\f15c"}.fa-sort-alpha-asc:before{content:"\\f15d"}.fa-sort-alpha-desc:before{content:"\\f15e"}.fa-sort-amount-asc:before{content:"\\f160"}.fa-sort-amount-desc:before{content:"\\f161"}.fa-sort-numeric-asc:before{content:"\\f162"}.fa-sort-numeric-desc:before{content:"\\f163"}.fa-thumbs-up:before{content:"\\f164"}.fa-thumbs-down:before{content:"\\f165"}.fa-youtube-square:before{content:"\\f166"}.fa-youtube:before{content:"\\f167"}.fa-xing:before{content:"\\f168"}.fa-xing-square:before{content:"\\f169"}.fa-youtube-play:before{content:"\\f16a"}.fa-dropbox:before{content:"\\f16b"}.fa-stack-overflow:before{content:"\\f16c"}.fa-instagram:before{content:"\\f16d"}.fa-flickr:before{content:"\\f16e"}.fa-adn:before{content:"\\f170"}.fa-bitbucket:before{content:"\\f171"}.fa-bitbucket-square:before{content:"\\f172"}.fa-tumblr:before{content:"\\f173"}.fa-tumblr-square:before{content:"\\f174"}.fa-long-arrow-down:before{content:"\\f175"}.fa-long-arrow-up:before{content:"\\f176"}.fa-long-arrow-left:before{content:"\\f177"}.fa-long-arrow-right:before{content:"\\f178"}.fa-apple:before{content:"\\f179"}.fa-windows:before{content:"\\f17a"}.fa-android:before{content:"\\f17b"}.fa-linux:before{content:"\\f17c"}.fa-dribbble:before{content:"\\f17d"}.fa-skype:before{content:"\\f17e"}.fa-foursquare:before{content:"\\f180"}.fa-trello:before{content:"\\f181"}.fa-female:before{content:"\\f182"}.fa-male:before{content:"\\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\\f184"}.fa-sun-o:before{content:"\\f185"}.fa-moon-o:before{content:"\\f186"}.fa-archive:before{content:"\\f187"}.fa-bug:before{content:"\\f188"}.fa-vk:before{content:"\\f189"}.fa-weibo:before{content:"\\f18a"}.fa-renren:before{content:"\\f18b"}.fa-pagelines:before{content:"\\f18c"}.fa-stack-exchange:before{content:"\\f18d"}.fa-arrow-circle-o-right:before{content:"\\f18e"}.fa-arrow-circle-o-left:before{content:"\\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\\f191"}.fa-dot-circle-o:before{content:"\\f192"}.fa-wheelchair:before{content:"\\f193"}.fa-vimeo-square:before{content:"\\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\\f195"}.fa-plus-square-o:before{content:"\\f196"}.fa-space-shuttle:before{content:"\\f197"}.fa-slack:before{content:"\\f198"}.fa-envelope-square:before{content:"\\f199"}.fa-wordpress:before{content:"\\f19a"}.fa-openid:before{content:"\\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\\f19d"}.fa-yahoo:before{content:"\\f19e"}.fa-google:before{content:"\\f1a0"}.fa-reddit:before{content:"\\f1a1"}.fa-reddit-square:before{content:"\\f1a2"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-delicious:before{content:"\\f1a5"}.fa-digg:before{content:"\\f1a6"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-drupal:before{content:"\\f1a9"}.fa-joomla:before{content:"\\f1aa"}.fa-language:before{content:"\\f1ab"}.fa-fax:before{content:"\\f1ac"}.fa-building:before{content:"\\f1ad"}.fa-child:before{content:"\\f1ae"}.fa-paw:before{content:"\\f1b0"}.fa-spoon:before{content:"\\f1b1"}.fa-cube:before{content:"\\f1b2"}.fa-cubes:before{content:"\\f1b3"}.fa-behance:before{content:"\\f1b4"}.fa-behance-square:before{content:"\\f1b5"}.fa-steam:before{content:"\\f1b6"}.fa-steam-square:before{content:"\\f1b7"}.fa-recycle:before{content:"\\f1b8"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-tree:before{content:"\\f1bb"}.fa-spotify:before{content:"\\f1bc"}.fa-deviantart:before{content:"\\f1bd"}.fa-soundcloud:before{content:"\\f1be"}.fa-database:before{content:"\\f1c0"}.fa-file-pdf-o:before{content:"\\f1c1"}.fa-file-word-o:before{content:"\\f1c2"}.fa-file-excel-o:before{content:"\\f1c3"}.fa-file-powerpoint-o:before{content:"\\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\\f1c8"}.fa-file-code-o:before{content:"\\f1c9"}.fa-vine:before{content:"\\f1ca"}.fa-codepen:before{content:"\\f1cb"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\\f1cd"}.fa-circle-o-notch:before{content:"\\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\\f1d0"}.fa-ge:before,.fa-empire:before{content:"\\f1d1"}.fa-git-square:before{content:"\\f1d2"}.fa-git:before{content:"\\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\\f1d4"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-qq:before{content:"\\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\\f1d9"}.fa-history:before{content:"\\f1da"}.fa-circle-thin:before{content:"\\f1db"}.fa-header:before{content:"\\f1dc"}.fa-paragraph:before{content:"\\f1dd"}.fa-sliders:before{content:"\\f1de"}.fa-share-alt:before{content:"\\f1e0"}.fa-share-alt-square:before{content:"\\f1e1"}.fa-bomb:before{content:"\\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\\f1e3"}.fa-tty:before{content:"\\f1e4"}.fa-binoculars:before{content:"\\f1e5"}.fa-plug:before{content:"\\f1e6"}.fa-slideshare:before{content:"\\f1e7"}.fa-twitch:before{content:"\\f1e8"}.fa-yelp:before{content:"\\f1e9"}.fa-newspaper-o:before{content:"\\f1ea"}.fa-wifi:before{content:"\\f1eb"}.fa-calculator:before{content:"\\f1ec"}.fa-paypal:before{content:"\\f1ed"}.fa-google-wallet:before{content:"\\f1ee"}.fa-cc-visa:before{content:"\\f1f0"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-cc-discover:before{content:"\\f1f2"}.fa-cc-amex:before{content:"\\f1f3"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-bell-slash:before{content:"\\f1f6"}.fa-bell-slash-o:before{content:"\\f1f7"}.fa-trash:before{content:"\\f1f8"}.fa-copyright:before{content:"\\f1f9"}.fa-at:before{content:"\\f1fa"}.fa-eyedropper:before{content:"\\f1fb"}.fa-paint-brush:before{content:"\\f1fc"}.fa-birthday-cake:before{content:"\\f1fd"}.fa-area-chart:before{content:"\\f1fe"}.fa-pie-chart:before{content:"\\f200"}.fa-line-chart:before{content:"\\f201"}.fa-lastfm:before{content:"\\f202"}.fa-lastfm-square:before{content:"\\f203"}.fa-toggle-off:before{content:"\\f204"}.fa-toggle-on:before{content:"\\f205"}.fa-bicycle:before{content:"\\f206"}.fa-bus:before{content:"\\f207"}.fa-ioxhost:before{content:"\\f208"}.fa-angellist:before{content:"\\f209"}.fa-cc:before{content:"\\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\\f20b"}.fa-meanpath:before{content:"\\f20c"}.fa-buysellads:before{content:"\\f20d"}.fa-connectdevelop:before{content:"\\f20e"}.fa-dashcube:before{content:"\\f210"}.fa-forumbee:before{content:"\\f211"}.fa-leanpub:before{content:"\\f212"}.fa-sellsy:before{content:"\\f213"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-simplybuilt:before{content:"\\f215"}.fa-skyatlas:before{content:"\\f216"}.fa-cart-plus:before{content:"\\f217"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-diamond:before{content:"\\f219"}.fa-ship:before{content:"\\f21a"}.fa-user-secret:before{content:"\\f21b"}.fa-motorcycle:before{content:"\\f21c"}.fa-street-view:before{content:"\\f21d"}.fa-heartbeat:before{content:"\\f21e"}.fa-venus:before{content:"\\f221"}.fa-mars:before{content:"\\f222"}.fa-mercury:before{content:"\\f223"}.fa-intersex:before,.fa-transgender:before{content:"\\f224"}.fa-transgender-alt:before{content:"\\f225"}.fa-venus-double:before{content:"\\f226"}.fa-mars-double:before{content:"\\f227"}.fa-venus-mars:before{content:"\\f228"}.fa-mars-stroke:before{content:"\\f229"}.fa-mars-stroke-v:before{content:"\\f22a"}.fa-mars-stroke-h:before{content:"\\f22b"}.fa-neuter:before{content:"\\f22c"}.fa-genderless:before{content:"\\f22d"}.fa-facebook-official:before{content:"\\f230"}.fa-pinterest-p:before{content:"\\f231"}.fa-whatsapp:before{content:"\\f232"}.fa-server:before{content:"\\f233"}.fa-user-plus:before{content:"\\f234"}.fa-user-times:before{content:"\\f235"}.fa-hotel:before,.fa-bed:before{content:"\\f236"}.fa-viacoin:before{content:"\\f237"}.fa-train:before{content:"\\f238"}.fa-subway:before{content:"\\f239"}.fa-medium:before{content:"\\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\\f23b"}.fa-optin-monster:before{content:"\\f23c"}.fa-opencart:before{content:"\\f23d"}.fa-expeditedssl:before{content:"\\f23e"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-mouse-pointer:before{content:"\\f245"}.fa-i-cursor:before{content:"\\f246"}.fa-object-group:before{content:"\\f247"}.fa-object-ungroup:before{content:"\\f248"}.fa-sticky-note:before{content:"\\f249"}.fa-sticky-note-o:before{content:"\\f24a"}.fa-cc-jcb:before{content:"\\f24b"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-clone:before{content:"\\f24d"}.fa-balance-scale:before{content:"\\f24e"}.fa-hourglass-o:before{content:"\\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-hourglass:before{content:"\\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\\f256"}.fa-hand-scissors-o:before{content:"\\f257"}.fa-hand-lizard-o:before{content:"\\f258"}.fa-hand-spock-o:before{content:"\\f259"}.fa-hand-pointer-o:before{content:"\\f25a"}.fa-hand-peace-o:before{content:"\\f25b"}.fa-trademark:before{content:"\\f25c"}.fa-registered:before{content:"\\f25d"}.fa-creative-commons:before{content:"\\f25e"}.fa-gg:before{content:"\\f260"}.fa-gg-circle:before{content:"\\f261"}.fa-tripadvisor:before{content:"\\f262"}.fa-odnoklassniki:before{content:"\\f263"}.fa-odnoklassniki-square:before{content:"\\f264"}.fa-get-pocket:before{content:"\\f265"}.fa-wikipedia-w:before{content:"\\f266"}.fa-safari:before{content:"\\f267"}.fa-chrome:before{content:"\\f268"}.fa-firefox:before{content:"\\f269"}.fa-opera:before{content:"\\f26a"}.fa-internet-explorer:before{content:"\\f26b"}.fa-tv:before,.fa-television:before{content:"\\f26c"}.fa-contao:before{content:"\\f26d"}.fa-500px:before{content:"\\f26e"}.fa-amazon:before{content:"\\f270"}.fa-calendar-plus-o:before{content:"\\f271"}.fa-calendar-minus-o:before{content:"\\f272"}.fa-calendar-times-o:before{content:"\\f273"}.fa-calendar-check-o:before{content:"\\f274"}.fa-industry:before{content:"\\f275"}.fa-map-pin:before{content:"\\f276"}.fa-map-signs:before{content:"\\f277"}.fa-map-o:before{content:"\\f278"}.fa-map:before{content:"\\f279"}.fa-commenting:before{content:"\\f27a"}.fa-commenting-o:before{content:"\\f27b"}.fa-houzz:before{content:"\\f27c"}.fa-vimeo:before{content:"\\f27d"}.fa-black-tie:before{content:"\\f27e"}.fa-fonticons:before{content:"\\f280"}.fa-reddit-alien:before{content:"\\f281"}.fa-edge:before{content:"\\f282"}.fa-credit-card-alt:before{content:"\\f283"}.fa-codiepie:before{content:"\\f284"}.fa-modx:before{content:"\\f285"}.fa-fort-awesome:before{content:"\\f286"}.fa-usb:before{content:"\\f287"}.fa-product-hunt:before{content:"\\f288"}.fa-mixcloud:before{content:"\\f289"}.fa-scribd:before{content:"\\f28a"}.fa-pause-circle:before{content:"\\f28b"}.fa-pause-circle-o:before{content:"\\f28c"}.fa-stop-circle:before{content:"\\f28d"}.fa-stop-circle-o:before{content:"\\f28e"}.fa-shopping-bag:before{content:"\\f290"}.fa-shopping-basket:before{content:"\\f291"}.fa-hashtag:before{content:"\\f292"}.fa-bluetooth:before{content:"\\f293"}.fa-bluetooth-b:before{content:"\\f294"}.fa-percent:before{content:"\\f295"}.fa-gitlab:before{content:"\\f296"}.fa-wpbeginner:before{content:"\\f297"}.fa-wpforms:before{content:"\\f298"}.fa-envira:before{content:"\\f299"}.fa-universal-access:before{content:"\\f29a"}.fa-wheelchair-alt:before{content:"\\f29b"}.fa-question-circle-o:before{content:"\\f29c"}.fa-blind:before{content:"\\f29d"}.fa-audio-description:before{content:"\\f29e"}.fa-volume-control-phone:before{content:"\\f2a0"}.fa-braille:before{content:"\\f2a1"}.fa-assistive-listening-systems:before{content:"\\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\\f2a4"}.fa-glide:before{content:"\\f2a5"}.fa-glide-g:before{content:"\\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\\f2a7"}.fa-low-vision:before{content:"\\f2a8"}.fa-viadeo:before{content:"\\f2a9"}.fa-viadeo-square:before{content:"\\f2aa"}.fa-snapchat:before{content:"\\f2ab"}.fa-snapchat-ghost:before{content:"\\f2ac"}.fa-snapchat-square:before{content:"\\f2ad"}.fa-pied-piper:before{content:"\\f2ae"}.fa-first-order:before{content:"\\f2b0"}.fa-yoast:before{content:"\\f2b1"}.fa-themeisle:before{content:"\\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-handshake-o:before{content:"\\f2b5"}.fa-envelope-open:before{content:"\\f2b6"}.fa-envelope-open-o:before{content:"\\f2b7"}.fa-linode:before{content:"\\f2b8"}.fa-address-book:before{content:"\\f2b9"}.fa-address-book-o:before{content:"\\f2ba"}.fa-vcard:before,.fa-address-card:before{content:"\\f2bb"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\\f2bc"}.fa-user-circle:before{content:"\\f2bd"}.fa-user-circle-o:before{content:"\\f2be"}.fa-user-o:before{content:"\\f2c0"}.fa-id-badge:before{content:"\\f2c1"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\\f2c3"}.fa-quora:before{content:"\\f2c4"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-telegram:before{content:"\\f2c6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-shower:before{content:"\\f2cc"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\\f2cd"}.fa-podcast:before{content:"\\f2ce"}.fa-window-maximize:before{content:"\\f2d0"}.fa-window-minimize:before{content:"\\f2d1"}.fa-window-restore:before{content:"\\f2d2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\\f2d3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\\f2d4"}.fa-bandcamp:before{content:"\\f2d5"}.fa-grav:before{content:"\\f2d6"}.fa-etsy:before{content:"\\f2d7"}.fa-imdb:before{content:"\\f2d8"}.fa-ravelry:before{content:"\\f2d9"}.fa-eercast:before{content:"\\f2da"}.fa-microchip:before{content:"\\f2db"}.fa-snowflake-o:before{content:"\\f2dc"}.fa-superpowers:before{content:"\\f2dd"}.fa-wpexplorer:before{content:"\\f2de"}.fa-meetup:before{content:"\\f2e0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}\n']
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: AngularEditorService
    }, {
      type: ElementRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }];
  }, {
    id: [{
      type: Input
    }],
    uploadUrl: [{
      type: Input
    }],
    upload: [{
      type: Input
    }],
    showToolbar: [{
      type: Input
    }],
    fonts: [{
      type: Input
    }],
    customClasses: [{
      type: Input
    }],
    defaultFontName: [{
      type: Input
    }],
    defaultFontSize: [{
      type: Input
    }],
    hiddenButtons: [{
      type: Input
    }],
    execute: [{
      type: Output
    }],
    myInputFile: [{
      type: ViewChild,
      args: ["fileInput", {
        static: true
      }]
    }]
  });
})();
var AngularEditorComponent = class {
  constructor(r, editorService, doc, sanitizer, cdRef, defaultTabIndex, autoFocus) {
    this.r = r;
    this.editorService = editorService;
    this.doc = doc;
    this.sanitizer = sanitizer;
    this.cdRef = cdRef;
    this.autoFocus = autoFocus;
    this.modeVisual = true;
    this.showPlaceholder = false;
    this.disabled = false;
    this.focused = false;
    this.touched = false;
    this.changed = false;
    this.id = "";
    this.config = angularEditorConfig;
    this.placeholder = "";
    this.executeCommandFn = this.executeCommand.bind(this);
    this.viewMode = new EventEmitter();
    this.blurEvent = new EventEmitter();
    this.focusEvent = new EventEmitter();
    this.tabindex = -1;
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
  }
  onFocus() {
    this.focus();
  }
  ngOnInit() {
    this.config.toolbarPosition = this.config.toolbarPosition ? this.config.toolbarPosition : angularEditorConfig.toolbarPosition;
  }
  ngAfterViewInit() {
    if (isDefined(this.autoFocus)) {
      this.focus();
    }
  }
  onPaste(event) {
    if (this.config.rawPaste) {
      event.preventDefault();
      const text = event.clipboardData.getData("text/plain");
      document.execCommand("insertHTML", false, text);
      return text;
    }
  }
  /**
   * Executed command from editor header buttons
   * @param command string from triggerCommand
   * @param value
   */
  executeCommand(command, value) {
    this.focus();
    if (command === "focus") {
      return;
    }
    if (command === "toggleEditorMode") {
      this.toggleEditorMode(this.modeVisual);
    } else if (command !== "") {
      if (command === "clear") {
        this.editorService.removeSelectedElements(this.getCustomTags());
        this.onContentChange(this.textArea.nativeElement);
      } else if (command === "default") {
        this.editorService.removeSelectedElements("h1,h2,h3,h4,h5,h6,p,pre");
        this.onContentChange(this.textArea.nativeElement);
      } else {
        this.editorService.executeCommand(command, value);
      }
      this.exec();
    }
  }
  /**
   * focus event
   */
  onTextAreaFocus(event) {
    if (this.focused) {
      event.stopPropagation();
      return;
    }
    this.focused = true;
    this.focusEvent.emit(event);
    if (!this.touched || !this.changed) {
      this.editorService.executeInNextQueueIteration(() => {
        this.configure();
        this.touched = true;
      });
    }
  }
  /**
   * @description fires when cursor leaves textarea
   */
  onTextAreaMouseOut(event) {
    this.editorService.saveSelection();
  }
  /**
   * blur event
   */
  onTextAreaBlur(event) {
    this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
    if (typeof this.onTouched === "function") {
      this.onTouched();
    }
    if (event.relatedTarget !== null) {
      const parent = event.relatedTarget.parentElement;
      if (!parent.classList.contains("angular-editor-toolbar-set") && !parent.classList.contains("ae-picker")) {
        this.blurEvent.emit(event);
        this.focused = false;
      }
    }
  }
  /**
   *  focus the text area when the editor is focused
   */
  focus() {
    if (this.modeVisual) {
      this.textArea.nativeElement.focus();
    } else {
      const sourceText = this.doc.getElementById("sourceText" + this.id);
      sourceText.focus();
      this.focused = true;
    }
  }
  /**
   * Executed from the contenteditable section while the input property changes
   * @param element html element from contenteditable
   */
  onContentChange(element) {
    let html = "";
    if (this.modeVisual) {
      html = element.innerHTML;
    } else {
      html = element.innerText;
    }
    if (!html || html === "<br>") {
      html = "";
    }
    if (typeof this.onChange === "function") {
      this.onChange(this.config.sanitize || this.config.sanitize === void 0 ? this.sanitizer.sanitize(SecurityContext.HTML, html) : html);
      if (!html !== this.showPlaceholder) {
        this.togglePlaceholder(this.showPlaceholder);
      }
    }
    this.changed = true;
  }
  /**
   * Set the function to be called
   * when the control receives a change event.
   *
   * @param fn a function
   */
  registerOnChange(fn) {
    this.onChange = (e) => e === "<br>" ? fn("") : fn(e);
  }
  /**
   * Set the function to be called
   * when the control receives a touch event.
   *
   * @param fn a function
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Write a new value to the element.
   *
   * @param value value to be executed when there is a change in contenteditable
   */
  writeValue(value) {
    if ((!value || value === "<br>" || value === "") !== this.showPlaceholder) {
      this.togglePlaceholder(this.showPlaceholder);
    }
    if (value === void 0 || value === "" || value === "<br>") {
      value = null;
    }
    this.refreshView(value);
  }
  /**
   * refresh view/HTML of the editor
   *
   * @param value html string from the editor
   */
  refreshView(value) {
    const normalizedValue = value === null ? "" : value;
    this.r.setProperty(this.textArea.nativeElement, "innerHTML", normalizedValue);
    return;
  }
  /**
   * toggles placeholder based on input string
   *
   * @param value A HTML string from the editor
   */
  togglePlaceholder(value) {
    if (!value) {
      this.r.addClass(this.editorWrapper.nativeElement, "show-placeholder");
      this.showPlaceholder = true;
    } else {
      this.r.removeClass(this.editorWrapper.nativeElement, "show-placeholder");
      this.showPlaceholder = false;
    }
  }
  /**
   * Implements disabled state for this element
   *
   * @param isDisabled Disabled flag
   */
  setDisabledState(isDisabled) {
    const div = this.textArea.nativeElement;
    const action = isDisabled ? "addClass" : "removeClass";
    this.r[action](div, "disabled");
    this.disabled = isDisabled;
  }
  /**
   * toggles editor mode based on bToSource bool
   *
   * @param bToSource A boolean value from the editor
   */
  toggleEditorMode(bToSource) {
    let oContent;
    const editableElement = this.textArea.nativeElement;
    if (bToSource) {
      oContent = this.r.createText(editableElement.innerHTML);
      this.r.setProperty(editableElement, "innerHTML", "");
      this.r.setProperty(editableElement, "contentEditable", false);
      const oPre = this.r.createElement("pre");
      this.r.setStyle(oPre, "margin", "0");
      this.r.setStyle(oPre, "outline", "none");
      const oCode = this.r.createElement("code");
      this.r.setProperty(oCode, "id", "sourceText" + this.id);
      this.r.setStyle(oCode, "display", "block");
      this.r.setStyle(oCode, "white-space", "pre-wrap");
      this.r.setStyle(oCode, "word-break", "keep-all");
      this.r.setStyle(oCode, "outline", "none");
      this.r.setStyle(oCode, "margin", "0");
      this.r.setStyle(oCode, "background-color", "#fff5b9");
      this.r.setProperty(oCode, "contentEditable", true);
      this.r.appendChild(oCode, oContent);
      this.focusInstance = this.r.listen(oCode, "focus", (event) => this.onTextAreaFocus(event));
      this.blurInstance = this.r.listen(oCode, "blur", (event) => this.onTextAreaBlur(event));
      this.r.appendChild(oPre, oCode);
      this.r.appendChild(editableElement, oPre);
      this.doc.execCommand("defaultParagraphSeparator", false, "div");
      this.modeVisual = false;
      this.viewMode.emit(false);
      oCode.focus();
    } else {
      if (this.doc.querySelectorAll) {
        this.r.setProperty(editableElement, "innerHTML", editableElement.innerText);
      } else {
        oContent = this.doc.createRange();
        oContent.selectNodeContents(editableElement.firstChild);
        this.r.setProperty(editableElement, "innerHTML", oContent.toString());
      }
      this.r.setProperty(editableElement, "contentEditable", true);
      this.modeVisual = true;
      this.viewMode.emit(true);
      this.onContentChange(editableElement);
      editableElement.focus();
    }
    this.editorToolbar.setEditorMode(!this.modeVisual);
  }
  /**
   * toggles editor buttons when cursor moved or positioning
   *
   * Send a node array from the contentEditable of the editor
   */
  exec() {
    this.editorToolbar.triggerButtons();
    let userSelection;
    if (this.doc.getSelection) {
      userSelection = this.doc.getSelection();
      this.editorService.executeInNextQueueIteration(this.editorService.saveSelection);
    }
    let a = userSelection.focusNode;
    const els = [];
    while (a && a.id !== "editor") {
      els.unshift(a);
      a = a.parentNode;
    }
    this.editorToolbar.triggerBlocks(els);
  }
  configure() {
    this.editorService.uploadUrl = this.config.uploadUrl;
    this.editorService.uploadWithCredentials = this.config.uploadWithCredentials;
    if (this.config.defaultParagraphSeparator) {
      this.editorService.setDefaultParagraphSeparator(this.config.defaultParagraphSeparator);
    }
    if (this.config.defaultFontName) {
      this.editorService.setFontName(this.config.defaultFontName);
    }
    if (this.config.defaultFontSize) {
      this.editorService.setFontSize(this.config.defaultFontSize);
    }
  }
  getFonts() {
    const fonts = this.config.fonts ? this.config.fonts : angularEditorConfig.fonts;
    return fonts.map((x) => {
      return {
        label: x.name,
        value: x.name
      };
    });
  }
  getCustomTags() {
    const tags = ["span"];
    this.config.customClasses.forEach((x) => {
      if (x.tag !== void 0) {
        if (!tags.includes(x.tag)) {
          tags.push(x.tag);
        }
      }
    });
    return tags.join(",");
  }
  ngOnDestroy() {
    if (this.blurInstance) {
      this.blurInstance();
    }
    if (this.focusInstance) {
      this.focusInstance();
    }
  }
  filterStyles(html) {
    html = html.replace("position: fixed;", "");
    return html;
  }
};
AngularEditorComponent.ɵfac = function AngularEditorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AngularEditorComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(AngularEditorService), ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵinjectAttribute("tabindex"), ɵɵinjectAttribute("autofocus"));
};
AngularEditorComponent.ɵcmp = ɵɵdefineComponent({
  type: AngularEditorComponent,
  selectors: [["angular-editor"]],
  contentQueries: function AngularEditorComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c5, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customButtonsTemplateRef = _t.first);
    }
  },
  viewQuery: function AngularEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c6, 7);
      ɵɵviewQuery(_c7, 7);
      ɵɵviewQuery(_c8, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textArea = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorWrapper = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorToolbar = _t.first);
    }
  },
  hostVars: 1,
  hostBindings: function AngularEditorComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focus", function AngularEditorComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.tabindex);
    }
  },
  inputs: {
    id: "id",
    config: "config",
    placeholder: "placeholder",
    tabIndex: "tabIndex"
  },
  outputs: {
    html: "html",
    viewMode: "viewMode",
    blurEvent: "blur",
    focusEvent: "focus"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AngularEditorComponent),
    multi: true
  }, AngularEditorService])],
  decls: 10,
  vars: 19,
  consts: [["angularEditor", ""], ["editorWrapper", ""], ["editor", ""], ["editorToolbar", ""], [1, "angular-editor"], [3, "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons", "execute", 4, "ngIf"], [1, "angular-editor-wrapper"], [1, "angular-editor-textarea", 3, "input", "focus", "blur", "click", "keyup", "mouseout", "paste"], [1, "angular-editor-placeholder"], [3, "execute", "id", "uploadUrl", "upload", "showToolbar", "fonts", "customClasses", "defaultFontName", "defaultFontSize", "hiddenButtons"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function AngularEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 4, 0);
      ɵɵtemplate(2, AngularEditorComponent_angular_editor_toolbar_2_Template, 3, 13, "angular-editor-toolbar", 5);
      ɵɵelementStart(3, "div", 6, 1)(5, "div", 7, 2);
      ɵɵlistener("input", function AngularEditorComponent_Template_div_input_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onContentChange($event.target));
      })("focus", function AngularEditorComponent_Template_div_focus_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onTextAreaFocus($event));
      })("blur", function AngularEditorComponent_Template_div_blur_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onTextAreaBlur($event));
      })("click", function AngularEditorComponent_Template_div_click_5_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.exec());
      })("keyup", function AngularEditorComponent_Template_div_keyup_5_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.exec());
      })("mouseout", function AngularEditorComponent_Template_div_mouseout_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onTextAreaMouseOut($event));
      })("paste", function AngularEditorComponent_Template_div_paste_5_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.onPaste($event));
      });
      ɵɵelementEnd();
      ɵɵelementStart(7, "span", 8);
      ɵɵtext(8);
      ɵɵelementEnd()();
      ɵɵtemplate(9, AngularEditorComponent_angular_editor_toolbar_9_Template, 2, 9, "angular-editor-toolbar", 5);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵstyleProp("width", ctx.config.width)("min-width", ctx.config.minWidth);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.config.toolbarPosition === "top");
      ɵɵadvance(3);
      ɵɵstyleProp("height", ctx.config.height)("min-height", ctx.config.minHeight)("max-height", ctx.config.maxHeight)("outline", ctx.config.outline === false ? "none" : void 0);
      ɵɵattribute("contenteditable", ctx.config.editable)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("translate", ctx.config.translate)("spellcheck", ctx.config.spellcheck);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ctx.placeholder || ctx.config["placeholder"]);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.config.toolbarPosition === "bottom");
    }
  },
  dependencies: [AngularEditorToolbarComponent, NgIf, NgTemplateOutlet],
  styles: ['\n\n\n\n@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa[_ngcontent-%COMP%]{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg[_ngcontent-%COMP%]{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x[_ngcontent-%COMP%]{font-size:2em}.fa-3x[_ngcontent-%COMP%]{font-size:3em}.fa-4x[_ngcontent-%COMP%]{font-size:4em}.fa-5x[_ngcontent-%COMP%]{font-size:5em}.fa-fw[_ngcontent-%COMP%]{width:1.2857142857em;text-align:center}.fa-ul[_ngcontent-%COMP%]{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative}.fa-li[_ngcontent-%COMP%]{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg[_ngcontent-%COMP%]{left:-1.8571428571em}.fa-border[_ngcontent-%COMP%]{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left[_ngcontent-%COMP%]{float:left}.fa-pull-right[_ngcontent-%COMP%]{float:right}.fa.fa-pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.fa-pull-right[_ngcontent-%COMP%]{margin-left:.3em}.pull-right[_ngcontent-%COMP%]{float:right}.pull-left[_ngcontent-%COMP%]{float:left}.fa.pull-left[_ngcontent-%COMP%]{margin-right:.3em}.fa.pull-right[_ngcontent-%COMP%]{margin-left:.3em}.fa-spin[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fa-spin 2s infinite linear}.fa-pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fa-spin 1s infinite steps(8)}@keyframes _ngcontent-%COMP%_fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical[_ngcontent-%COMP%]{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}[_ngcontent-%COMP%]:root   .fa-rotate-90[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-180[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-rotate-270[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-horizontal[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root   .fa-flip-vertical[_ngcontent-%COMP%]{filter:none}.fa-stack[_ngcontent-%COMP%]{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x[_ngcontent-%COMP%], .fa-stack-2x[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x[_ngcontent-%COMP%]{line-height:inherit}.fa-stack-2x[_ngcontent-%COMP%]{font-size:2em}.fa-inverse[_ngcontent-%COMP%]{color:#fff}.fa-glass[_ngcontent-%COMP%]:before{content:"\\f000"}.fa-music[_ngcontent-%COMP%]:before{content:"\\f001"}.fa-search[_ngcontent-%COMP%]:before{content:"\\f002"}.fa-envelope-o[_ngcontent-%COMP%]:before{content:"\\f003"}.fa-heart[_ngcontent-%COMP%]:before{content:"\\f004"}.fa-star[_ngcontent-%COMP%]:before{content:"\\f005"}.fa-star-o[_ngcontent-%COMP%]:before{content:"\\f006"}.fa-user[_ngcontent-%COMP%]:before{content:"\\f007"}.fa-film[_ngcontent-%COMP%]:before{content:"\\f008"}.fa-th-large[_ngcontent-%COMP%]:before{content:"\\f009"}.fa-th[_ngcontent-%COMP%]:before{content:"\\f00a"}.fa-th-list[_ngcontent-%COMP%]:before{content:"\\f00b"}.fa-check[_ngcontent-%COMP%]:before{content:"\\f00c"}.fa-remove[_ngcontent-%COMP%]:before, .fa-close[_ngcontent-%COMP%]:before, .fa-times[_ngcontent-%COMP%]:before{content:"\\f00d"}.fa-search-plus[_ngcontent-%COMP%]:before{content:"\\f00e"}.fa-search-minus[_ngcontent-%COMP%]:before{content:"\\f010"}.fa-power-off[_ngcontent-%COMP%]:before{content:"\\f011"}.fa-signal[_ngcontent-%COMP%]:before{content:"\\f012"}.fa-gear[_ngcontent-%COMP%]:before, .fa-cog[_ngcontent-%COMP%]:before{content:"\\f013"}.fa-trash-o[_ngcontent-%COMP%]:before{content:"\\f014"}.fa-home[_ngcontent-%COMP%]:before{content:"\\f015"}.fa-file-o[_ngcontent-%COMP%]:before{content:"\\f016"}.fa-clock-o[_ngcontent-%COMP%]:before{content:"\\f017"}.fa-road[_ngcontent-%COMP%]:before{content:"\\f018"}.fa-download[_ngcontent-%COMP%]:before{content:"\\f019"}.fa-arrow-circle-o-down[_ngcontent-%COMP%]:before{content:"\\f01a"}.fa-arrow-circle-o-up[_ngcontent-%COMP%]:before{content:"\\f01b"}.fa-inbox[_ngcontent-%COMP%]:before{content:"\\f01c"}.fa-play-circle-o[_ngcontent-%COMP%]:before{content:"\\f01d"}.fa-rotate-right[_ngcontent-%COMP%]:before, .fa-repeat[_ngcontent-%COMP%]:before{content:"\\f01e"}.fa-refresh[_ngcontent-%COMP%]:before{content:"\\f021"}.fa-list-alt[_ngcontent-%COMP%]:before{content:"\\f022"}.fa-lock[_ngcontent-%COMP%]:before{content:"\\f023"}.fa-flag[_ngcontent-%COMP%]:before{content:"\\f024"}.fa-headphones[_ngcontent-%COMP%]:before{content:"\\f025"}.fa-volume-off[_ngcontent-%COMP%]:before{content:"\\f026"}.fa-volume-down[_ngcontent-%COMP%]:before{content:"\\f027"}.fa-volume-up[_ngcontent-%COMP%]:before{content:"\\f028"}.fa-qrcode[_ngcontent-%COMP%]:before{content:"\\f029"}.fa-barcode[_ngcontent-%COMP%]:before{content:"\\f02a"}.fa-tag[_ngcontent-%COMP%]:before{content:"\\f02b"}.fa-tags[_ngcontent-%COMP%]:before{content:"\\f02c"}.fa-book[_ngcontent-%COMP%]:before{content:"\\f02d"}.fa-bookmark[_ngcontent-%COMP%]:before{content:"\\f02e"}.fa-print[_ngcontent-%COMP%]:before{content:"\\f02f"}.fa-camera[_ngcontent-%COMP%]:before{content:"\\f030"}.fa-font[_ngcontent-%COMP%]:before{content:"\\f031"}.fa-bold[_ngcontent-%COMP%]:before{content:"\\f032"}.fa-italic[_ngcontent-%COMP%]:before{content:"\\f033"}.fa-text-height[_ngcontent-%COMP%]:before{content:"\\f034"}.fa-text-width[_ngcontent-%COMP%]:before{content:"\\f035"}.fa-align-left[_ngcontent-%COMP%]:before{content:"\\f036"}.fa-align-center[_ngcontent-%COMP%]:before{content:"\\f037"}.fa-align-right[_ngcontent-%COMP%]:before{content:"\\f038"}.fa-align-justify[_ngcontent-%COMP%]:before{content:"\\f039"}.fa-list[_ngcontent-%COMP%]:before{content:"\\f03a"}.fa-dedent[_ngcontent-%COMP%]:before, .fa-outdent[_ngcontent-%COMP%]:before{content:"\\f03b"}.fa-indent[_ngcontent-%COMP%]:before{content:"\\f03c"}.fa-video-camera[_ngcontent-%COMP%]:before{content:"\\f03d"}.fa-photo[_ngcontent-%COMP%]:before, .fa-image[_ngcontent-%COMP%]:before, .fa-picture-o[_ngcontent-%COMP%]:before{content:"\\f03e"}.fa-pencil[_ngcontent-%COMP%]:before{content:"\\f040"}.fa-map-marker[_ngcontent-%COMP%]:before{content:"\\f041"}.fa-adjust[_ngcontent-%COMP%]:before{content:"\\f042"}.fa-tint[_ngcontent-%COMP%]:before{content:"\\f043"}.fa-edit[_ngcontent-%COMP%]:before, .fa-pencil-square-o[_ngcontent-%COMP%]:before{content:"\\f044"}.fa-share-square-o[_ngcontent-%COMP%]:before{content:"\\f045"}.fa-check-square-o[_ngcontent-%COMP%]:before{content:"\\f046"}.fa-arrows[_ngcontent-%COMP%]:before{content:"\\f047"}.fa-step-backward[_ngcontent-%COMP%]:before{content:"\\f048"}.fa-fast-backward[_ngcontent-%COMP%]:before{content:"\\f049"}.fa-backward[_ngcontent-%COMP%]:before{content:"\\f04a"}.fa-play[_ngcontent-%COMP%]:before{content:"\\f04b"}.fa-pause[_ngcontent-%COMP%]:before{content:"\\f04c"}.fa-stop[_ngcontent-%COMP%]:before{content:"\\f04d"}.fa-forward[_ngcontent-%COMP%]:before{content:"\\f04e"}.fa-fast-forward[_ngcontent-%COMP%]:before{content:"\\f050"}.fa-step-forward[_ngcontent-%COMP%]:before{content:"\\f051"}.fa-eject[_ngcontent-%COMP%]:before{content:"\\f052"}.fa-chevron-left[_ngcontent-%COMP%]:before{content:"\\f053"}.fa-chevron-right[_ngcontent-%COMP%]:before{content:"\\f054"}.fa-plus-circle[_ngcontent-%COMP%]:before{content:"\\f055"}.fa-minus-circle[_ngcontent-%COMP%]:before{content:"\\f056"}.fa-times-circle[_ngcontent-%COMP%]:before{content:"\\f057"}.fa-check-circle[_ngcontent-%COMP%]:before{content:"\\f058"}.fa-question-circle[_ngcontent-%COMP%]:before{content:"\\f059"}.fa-info-circle[_ngcontent-%COMP%]:before{content:"\\f05a"}.fa-crosshairs[_ngcontent-%COMP%]:before{content:"\\f05b"}.fa-times-circle-o[_ngcontent-%COMP%]:before{content:"\\f05c"}.fa-check-circle-o[_ngcontent-%COMP%]:before{content:"\\f05d"}.fa-ban[_ngcontent-%COMP%]:before{content:"\\f05e"}.fa-arrow-left[_ngcontent-%COMP%]:before{content:"\\f060"}.fa-arrow-right[_ngcontent-%COMP%]:before{content:"\\f061"}.fa-arrow-up[_ngcontent-%COMP%]:before{content:"\\f062"}.fa-arrow-down[_ngcontent-%COMP%]:before{content:"\\f063"}.fa-mail-forward[_ngcontent-%COMP%]:before, .fa-share[_ngcontent-%COMP%]:before{content:"\\f064"}.fa-expand[_ngcontent-%COMP%]:before{content:"\\f065"}.fa-compress[_ngcontent-%COMP%]:before{content:"\\f066"}.fa-plus[_ngcontent-%COMP%]:before{content:"\\f067"}.fa-minus[_ngcontent-%COMP%]:before{content:"\\f068"}.fa-asterisk[_ngcontent-%COMP%]:before{content:"\\f069"}.fa-exclamation-circle[_ngcontent-%COMP%]:before{content:"\\f06a"}.fa-gift[_ngcontent-%COMP%]:before{content:"\\f06b"}.fa-leaf[_ngcontent-%COMP%]:before{content:"\\f06c"}.fa-fire[_ngcontent-%COMP%]:before{content:"\\f06d"}.fa-eye[_ngcontent-%COMP%]:before{content:"\\f06e"}.fa-eye-slash[_ngcontent-%COMP%]:before{content:"\\f070"}.fa-warning[_ngcontent-%COMP%]:before, .fa-exclamation-triangle[_ngcontent-%COMP%]:before{content:"\\f071"}.fa-plane[_ngcontent-%COMP%]:before{content:"\\f072"}.fa-calendar[_ngcontent-%COMP%]:before{content:"\\f073"}.fa-random[_ngcontent-%COMP%]:before{content:"\\f074"}.fa-comment[_ngcontent-%COMP%]:before{content:"\\f075"}.fa-magnet[_ngcontent-%COMP%]:before{content:"\\f076"}.fa-chevron-up[_ngcontent-%COMP%]:before{content:"\\f077"}.fa-chevron-down[_ngcontent-%COMP%]:before{content:"\\f078"}.fa-retweet[_ngcontent-%COMP%]:before{content:"\\f079"}.fa-shopping-cart[_ngcontent-%COMP%]:before{content:"\\f07a"}.fa-folder[_ngcontent-%COMP%]:before{content:"\\f07b"}.fa-folder-open[_ngcontent-%COMP%]:before{content:"\\f07c"}.fa-arrows-v[_ngcontent-%COMP%]:before{content:"\\f07d"}.fa-arrows-h[_ngcontent-%COMP%]:before{content:"\\f07e"}.fa-bar-chart-o[_ngcontent-%COMP%]:before, .fa-bar-chart[_ngcontent-%COMP%]:before{content:"\\f080"}.fa-twitter-square[_ngcontent-%COMP%]:before{content:"\\f081"}.fa-facebook-square[_ngcontent-%COMP%]:before{content:"\\f082"}.fa-camera-retro[_ngcontent-%COMP%]:before{content:"\\f083"}.fa-key[_ngcontent-%COMP%]:before{content:"\\f084"}.fa-gears[_ngcontent-%COMP%]:before, .fa-cogs[_ngcontent-%COMP%]:before{content:"\\f085"}.fa-comments[_ngcontent-%COMP%]:before{content:"\\f086"}.fa-thumbs-o-up[_ngcontent-%COMP%]:before{content:"\\f087"}.fa-thumbs-o-down[_ngcontent-%COMP%]:before{content:"\\f088"}.fa-star-half[_ngcontent-%COMP%]:before{content:"\\f089"}.fa-heart-o[_ngcontent-%COMP%]:before{content:"\\f08a"}.fa-sign-out[_ngcontent-%COMP%]:before{content:"\\f08b"}.fa-linkedin-square[_ngcontent-%COMP%]:before{content:"\\f08c"}.fa-thumb-tack[_ngcontent-%COMP%]:before{content:"\\f08d"}.fa-external-link[_ngcontent-%COMP%]:before{content:"\\f08e"}.fa-sign-in[_ngcontent-%COMP%]:before{content:"\\f090"}.fa-trophy[_ngcontent-%COMP%]:before{content:"\\f091"}.fa-github-square[_ngcontent-%COMP%]:before{content:"\\f092"}.fa-upload[_ngcontent-%COMP%]:before{content:"\\f093"}.fa-lemon-o[_ngcontent-%COMP%]:before{content:"\\f094"}.fa-phone[_ngcontent-%COMP%]:before{content:"\\f095"}.fa-square-o[_ngcontent-%COMP%]:before{content:"\\f096"}.fa-bookmark-o[_ngcontent-%COMP%]:before{content:"\\f097"}.fa-phone-square[_ngcontent-%COMP%]:before{content:"\\f098"}.fa-twitter[_ngcontent-%COMP%]:before{content:"\\f099"}.fa-facebook-f[_ngcontent-%COMP%]:before, .fa-facebook[_ngcontent-%COMP%]:before{content:"\\f09a"}.fa-github[_ngcontent-%COMP%]:before{content:"\\f09b"}.fa-unlock[_ngcontent-%COMP%]:before{content:"\\f09c"}.fa-credit-card[_ngcontent-%COMP%]:before{content:"\\f09d"}.fa-feed[_ngcontent-%COMP%]:before, .fa-rss[_ngcontent-%COMP%]:before{content:"\\f09e"}.fa-hdd-o[_ngcontent-%COMP%]:before{content:"\\f0a0"}.fa-bullhorn[_ngcontent-%COMP%]:before{content:"\\f0a1"}.fa-bell[_ngcontent-%COMP%]:before{content:"\\f0f3"}.fa-certificate[_ngcontent-%COMP%]:before{content:"\\f0a3"}.fa-hand-o-right[_ngcontent-%COMP%]:before{content:"\\f0a4"}.fa-hand-o-left[_ngcontent-%COMP%]:before{content:"\\f0a5"}.fa-hand-o-up[_ngcontent-%COMP%]:before{content:"\\f0a6"}.fa-hand-o-down[_ngcontent-%COMP%]:before{content:"\\f0a7"}.fa-arrow-circle-left[_ngcontent-%COMP%]:before{content:"\\f0a8"}.fa-arrow-circle-right[_ngcontent-%COMP%]:before{content:"\\f0a9"}.fa-arrow-circle-up[_ngcontent-%COMP%]:before{content:"\\f0aa"}.fa-arrow-circle-down[_ngcontent-%COMP%]:before{content:"\\f0ab"}.fa-globe[_ngcontent-%COMP%]:before{content:"\\f0ac"}.fa-wrench[_ngcontent-%COMP%]:before{content:"\\f0ad"}.fa-tasks[_ngcontent-%COMP%]:before{content:"\\f0ae"}.fa-filter[_ngcontent-%COMP%]:before{content:"\\f0b0"}.fa-briefcase[_ngcontent-%COMP%]:before{content:"\\f0b1"}.fa-arrows-alt[_ngcontent-%COMP%]:before{content:"\\f0b2"}.fa-group[_ngcontent-%COMP%]:before, .fa-users[_ngcontent-%COMP%]:before{content:"\\f0c0"}.fa-chain[_ngcontent-%COMP%]:before, .fa-link[_ngcontent-%COMP%]:before{content:"\\f0c1"}.fa-cloud[_ngcontent-%COMP%]:before{content:"\\f0c2"}.fa-flask[_ngcontent-%COMP%]:before{content:"\\f0c3"}.fa-cut[_ngcontent-%COMP%]:before, .fa-scissors[_ngcontent-%COMP%]:before{content:"\\f0c4"}.fa-copy[_ngcontent-%COMP%]:before, .fa-files-o[_ngcontent-%COMP%]:before{content:"\\f0c5"}.fa-paperclip[_ngcontent-%COMP%]:before{content:"\\f0c6"}.fa-save[_ngcontent-%COMP%]:before, .fa-floppy-o[_ngcontent-%COMP%]:before{content:"\\f0c7"}.fa-square[_ngcontent-%COMP%]:before{content:"\\f0c8"}.fa-navicon[_ngcontent-%COMP%]:before, .fa-reorder[_ngcontent-%COMP%]:before, .fa-bars[_ngcontent-%COMP%]:before{content:"\\f0c9"}.fa-list-ul[_ngcontent-%COMP%]:before{content:"\\f0ca"}.fa-list-ol[_ngcontent-%COMP%]:before{content:"\\f0cb"}.fa-strikethrough[_ngcontent-%COMP%]:before{content:"\\f0cc"}.fa-underline[_ngcontent-%COMP%]:before{content:"\\f0cd"}.fa-table[_ngcontent-%COMP%]:before{content:"\\f0ce"}.fa-magic[_ngcontent-%COMP%]:before{content:"\\f0d0"}.fa-truck[_ngcontent-%COMP%]:before{content:"\\f0d1"}.fa-pinterest[_ngcontent-%COMP%]:before{content:"\\f0d2"}.fa-pinterest-square[_ngcontent-%COMP%]:before{content:"\\f0d3"}.fa-google-plus-square[_ngcontent-%COMP%]:before{content:"\\f0d4"}.fa-google-plus[_ngcontent-%COMP%]:before{content:"\\f0d5"}.fa-money[_ngcontent-%COMP%]:before{content:"\\f0d6"}.fa-caret-down[_ngcontent-%COMP%]:before{content:"\\f0d7"}.fa-caret-up[_ngcontent-%COMP%]:before{content:"\\f0d8"}.fa-caret-left[_ngcontent-%COMP%]:before{content:"\\f0d9"}.fa-caret-right[_ngcontent-%COMP%]:before{content:"\\f0da"}.fa-columns[_ngcontent-%COMP%]:before{content:"\\f0db"}.fa-unsorted[_ngcontent-%COMP%]:before, .fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc"}.fa-sort-down[_ngcontent-%COMP%]:before, .fa-sort-desc[_ngcontent-%COMP%]:before{content:"\\f0dd"}.fa-sort-up[_ngcontent-%COMP%]:before, .fa-sort-asc[_ngcontent-%COMP%]:before{content:"\\f0de"}.fa-envelope[_ngcontent-%COMP%]:before{content:"\\f0e0"}.fa-linkedin[_ngcontent-%COMP%]:before{content:"\\f0e1"}.fa-rotate-left[_ngcontent-%COMP%]:before, .fa-undo[_ngcontent-%COMP%]:before{content:"\\f0e2"}.fa-legal[_ngcontent-%COMP%]:before, .fa-gavel[_ngcontent-%COMP%]:before{content:"\\f0e3"}.fa-dashboard[_ngcontent-%COMP%]:before, .fa-tachometer[_ngcontent-%COMP%]:before{content:"\\f0e4"}.fa-comment-o[_ngcontent-%COMP%]:before{content:"\\f0e5"}.fa-comments-o[_ngcontent-%COMP%]:before{content:"\\f0e6"}.fa-flash[_ngcontent-%COMP%]:before, .fa-bolt[_ngcontent-%COMP%]:before{content:"\\f0e7"}.fa-sitemap[_ngcontent-%COMP%]:before{content:"\\f0e8"}.fa-umbrella[_ngcontent-%COMP%]:before{content:"\\f0e9"}.fa-paste[_ngcontent-%COMP%]:before, .fa-clipboard[_ngcontent-%COMP%]:before{content:"\\f0ea"}.fa-lightbulb-o[_ngcontent-%COMP%]:before{content:"\\f0eb"}.fa-exchange[_ngcontent-%COMP%]:before{content:"\\f0ec"}.fa-cloud-download[_ngcontent-%COMP%]:before{content:"\\f0ed"}.fa-cloud-upload[_ngcontent-%COMP%]:before{content:"\\f0ee"}.fa-user-md[_ngcontent-%COMP%]:before{content:"\\f0f0"}.fa-stethoscope[_ngcontent-%COMP%]:before{content:"\\f0f1"}.fa-suitcase[_ngcontent-%COMP%]:before{content:"\\f0f2"}.fa-bell-o[_ngcontent-%COMP%]:before{content:"\\f0a2"}.fa-coffee[_ngcontent-%COMP%]:before{content:"\\f0f4"}.fa-cutlery[_ngcontent-%COMP%]:before{content:"\\f0f5"}.fa-file-text-o[_ngcontent-%COMP%]:before{content:"\\f0f6"}.fa-building-o[_ngcontent-%COMP%]:before{content:"\\f0f7"}.fa-hospital-o[_ngcontent-%COMP%]:before{content:"\\f0f8"}.fa-ambulance[_ngcontent-%COMP%]:before{content:"\\f0f9"}.fa-medkit[_ngcontent-%COMP%]:before{content:"\\f0fa"}.fa-fighter-jet[_ngcontent-%COMP%]:before{content:"\\f0fb"}.fa-beer[_ngcontent-%COMP%]:before{content:"\\f0fc"}.fa-h-square[_ngcontent-%COMP%]:before{content:"\\f0fd"}.fa-plus-square[_ngcontent-%COMP%]:before{content:"\\f0fe"}.fa-angle-double-left[_ngcontent-%COMP%]:before{content:"\\f100"}.fa-angle-double-right[_ngcontent-%COMP%]:before{content:"\\f101"}.fa-angle-double-up[_ngcontent-%COMP%]:before{content:"\\f102"}.fa-angle-double-down[_ngcontent-%COMP%]:before{content:"\\f103"}.fa-angle-left[_ngcontent-%COMP%]:before{content:"\\f104"}.fa-angle-right[_ngcontent-%COMP%]:before{content:"\\f105"}.fa-angle-up[_ngcontent-%COMP%]:before{content:"\\f106"}.fa-angle-down[_ngcontent-%COMP%]:before{content:"\\f107"}.fa-desktop[_ngcontent-%COMP%]:before{content:"\\f108"}.fa-laptop[_ngcontent-%COMP%]:before{content:"\\f109"}.fa-tablet[_ngcontent-%COMP%]:before{content:"\\f10a"}.fa-mobile-phone[_ngcontent-%COMP%]:before, .fa-mobile[_ngcontent-%COMP%]:before{content:"\\f10b"}.fa-circle-o[_ngcontent-%COMP%]:before{content:"\\f10c"}.fa-quote-left[_ngcontent-%COMP%]:before{content:"\\f10d"}.fa-quote-right[_ngcontent-%COMP%]:before{content:"\\f10e"}.fa-spinner[_ngcontent-%COMP%]:before{content:"\\f110"}.fa-circle[_ngcontent-%COMP%]:before{content:"\\f111"}.fa-mail-reply[_ngcontent-%COMP%]:before, .fa-reply[_ngcontent-%COMP%]:before{content:"\\f112"}.fa-github-alt[_ngcontent-%COMP%]:before{content:"\\f113"}.fa-folder-o[_ngcontent-%COMP%]:before{content:"\\f114"}.fa-folder-open-o[_ngcontent-%COMP%]:before{content:"\\f115"}.fa-smile-o[_ngcontent-%COMP%]:before{content:"\\f118"}.fa-frown-o[_ngcontent-%COMP%]:before{content:"\\f119"}.fa-meh-o[_ngcontent-%COMP%]:before{content:"\\f11a"}.fa-gamepad[_ngcontent-%COMP%]:before{content:"\\f11b"}.fa-keyboard-o[_ngcontent-%COMP%]:before{content:"\\f11c"}.fa-flag-o[_ngcontent-%COMP%]:before{content:"\\f11d"}.fa-flag-checkered[_ngcontent-%COMP%]:before{content:"\\f11e"}.fa-terminal[_ngcontent-%COMP%]:before{content:"\\f120"}.fa-code[_ngcontent-%COMP%]:before{content:"\\f121"}.fa-mail-reply-all[_ngcontent-%COMP%]:before, .fa-reply-all[_ngcontent-%COMP%]:before{content:"\\f122"}.fa-star-half-empty[_ngcontent-%COMP%]:before, .fa-star-half-full[_ngcontent-%COMP%]:before, .fa-star-half-o[_ngcontent-%COMP%]:before{content:"\\f123"}.fa-location-arrow[_ngcontent-%COMP%]:before{content:"\\f124"}.fa-crop[_ngcontent-%COMP%]:before{content:"\\f125"}.fa-code-fork[_ngcontent-%COMP%]:before{content:"\\f126"}.fa-unlink[_ngcontent-%COMP%]:before, .fa-chain-broken[_ngcontent-%COMP%]:before{content:"\\f127"}.fa-question[_ngcontent-%COMP%]:before{content:"\\f128"}.fa-info[_ngcontent-%COMP%]:before{content:"\\f129"}.fa-exclamation[_ngcontent-%COMP%]:before{content:"\\f12a"}.fa-superscript[_ngcontent-%COMP%]:before{content:"\\f12b"}.fa-subscript[_ngcontent-%COMP%]:before{content:"\\f12c"}.fa-eraser[_ngcontent-%COMP%]:before{content:"\\f12d"}.fa-puzzle-piece[_ngcontent-%COMP%]:before{content:"\\f12e"}.fa-microphone[_ngcontent-%COMP%]:before{content:"\\f130"}.fa-microphone-slash[_ngcontent-%COMP%]:before{content:"\\f131"}.fa-shield[_ngcontent-%COMP%]:before{content:"\\f132"}.fa-calendar-o[_ngcontent-%COMP%]:before{content:"\\f133"}.fa-fire-extinguisher[_ngcontent-%COMP%]:before{content:"\\f134"}.fa-rocket[_ngcontent-%COMP%]:before{content:"\\f135"}.fa-maxcdn[_ngcontent-%COMP%]:before{content:"\\f136"}.fa-chevron-circle-left[_ngcontent-%COMP%]:before{content:"\\f137"}.fa-chevron-circle-right[_ngcontent-%COMP%]:before{content:"\\f138"}.fa-chevron-circle-up[_ngcontent-%COMP%]:before{content:"\\f139"}.fa-chevron-circle-down[_ngcontent-%COMP%]:before{content:"\\f13a"}.fa-html5[_ngcontent-%COMP%]:before{content:"\\f13b"}.fa-css3[_ngcontent-%COMP%]:before{content:"\\f13c"}.fa-anchor[_ngcontent-%COMP%]:before{content:"\\f13d"}.fa-unlock-alt[_ngcontent-%COMP%]:before{content:"\\f13e"}.fa-bullseye[_ngcontent-%COMP%]:before{content:"\\f140"}.fa-ellipsis-h[_ngcontent-%COMP%]:before{content:"\\f141"}.fa-ellipsis-v[_ngcontent-%COMP%]:before{content:"\\f142"}.fa-rss-square[_ngcontent-%COMP%]:before{content:"\\f143"}.fa-play-circle[_ngcontent-%COMP%]:before{content:"\\f144"}.fa-ticket[_ngcontent-%COMP%]:before{content:"\\f145"}.fa-minus-square[_ngcontent-%COMP%]:before{content:"\\f146"}.fa-minus-square-o[_ngcontent-%COMP%]:before{content:"\\f147"}.fa-level-up[_ngcontent-%COMP%]:before{content:"\\f148"}.fa-level-down[_ngcontent-%COMP%]:before{content:"\\f149"}.fa-check-square[_ngcontent-%COMP%]:before{content:"\\f14a"}.fa-pencil-square[_ngcontent-%COMP%]:before{content:"\\f14b"}.fa-external-link-square[_ngcontent-%COMP%]:before{content:"\\f14c"}.fa-share-square[_ngcontent-%COMP%]:before{content:"\\f14d"}.fa-compass[_ngcontent-%COMP%]:before{content:"\\f14e"}.fa-toggle-down[_ngcontent-%COMP%]:before, .fa-caret-square-o-down[_ngcontent-%COMP%]:before{content:"\\f150"}.fa-toggle-up[_ngcontent-%COMP%]:before, .fa-caret-square-o-up[_ngcontent-%COMP%]:before{content:"\\f151"}.fa-toggle-right[_ngcontent-%COMP%]:before, .fa-caret-square-o-right[_ngcontent-%COMP%]:before{content:"\\f152"}.fa-euro[_ngcontent-%COMP%]:before, .fa-eur[_ngcontent-%COMP%]:before{content:"\\f153"}.fa-gbp[_ngcontent-%COMP%]:before{content:"\\f154"}.fa-dollar[_ngcontent-%COMP%]:before, .fa-usd[_ngcontent-%COMP%]:before{content:"\\f155"}.fa-rupee[_ngcontent-%COMP%]:before, .fa-inr[_ngcontent-%COMP%]:before{content:"\\f156"}.fa-cny[_ngcontent-%COMP%]:before, .fa-rmb[_ngcontent-%COMP%]:before, .fa-yen[_ngcontent-%COMP%]:before, .fa-jpy[_ngcontent-%COMP%]:before{content:"\\f157"}.fa-ruble[_ngcontent-%COMP%]:before, .fa-rouble[_ngcontent-%COMP%]:before, .fa-rub[_ngcontent-%COMP%]:before{content:"\\f158"}.fa-won[_ngcontent-%COMP%]:before, .fa-krw[_ngcontent-%COMP%]:before{content:"\\f159"}.fa-bitcoin[_ngcontent-%COMP%]:before, .fa-btc[_ngcontent-%COMP%]:before{content:"\\f15a"}.fa-file[_ngcontent-%COMP%]:before{content:"\\f15b"}.fa-file-text[_ngcontent-%COMP%]:before{content:"\\f15c"}.fa-sort-alpha-asc[_ngcontent-%COMP%]:before{content:"\\f15d"}.fa-sort-alpha-desc[_ngcontent-%COMP%]:before{content:"\\f15e"}.fa-sort-amount-asc[_ngcontent-%COMP%]:before{content:"\\f160"}.fa-sort-amount-desc[_ngcontent-%COMP%]:before{content:"\\f161"}.fa-sort-numeric-asc[_ngcontent-%COMP%]:before{content:"\\f162"}.fa-sort-numeric-desc[_ngcontent-%COMP%]:before{content:"\\f163"}.fa-thumbs-up[_ngcontent-%COMP%]:before{content:"\\f164"}.fa-thumbs-down[_ngcontent-%COMP%]:before{content:"\\f165"}.fa-youtube-square[_ngcontent-%COMP%]:before{content:"\\f166"}.fa-youtube[_ngcontent-%COMP%]:before{content:"\\f167"}.fa-xing[_ngcontent-%COMP%]:before{content:"\\f168"}.fa-xing-square[_ngcontent-%COMP%]:before{content:"\\f169"}.fa-youtube-play[_ngcontent-%COMP%]:before{content:"\\f16a"}.fa-dropbox[_ngcontent-%COMP%]:before{content:"\\f16b"}.fa-stack-overflow[_ngcontent-%COMP%]:before{content:"\\f16c"}.fa-instagram[_ngcontent-%COMP%]:before{content:"\\f16d"}.fa-flickr[_ngcontent-%COMP%]:before{content:"\\f16e"}.fa-adn[_ngcontent-%COMP%]:before{content:"\\f170"}.fa-bitbucket[_ngcontent-%COMP%]:before{content:"\\f171"}.fa-bitbucket-square[_ngcontent-%COMP%]:before{content:"\\f172"}.fa-tumblr[_ngcontent-%COMP%]:before{content:"\\f173"}.fa-tumblr-square[_ngcontent-%COMP%]:before{content:"\\f174"}.fa-long-arrow-down[_ngcontent-%COMP%]:before{content:"\\f175"}.fa-long-arrow-up[_ngcontent-%COMP%]:before{content:"\\f176"}.fa-long-arrow-left[_ngcontent-%COMP%]:before{content:"\\f177"}.fa-long-arrow-right[_ngcontent-%COMP%]:before{content:"\\f178"}.fa-apple[_ngcontent-%COMP%]:before{content:"\\f179"}.fa-windows[_ngcontent-%COMP%]:before{content:"\\f17a"}.fa-android[_ngcontent-%COMP%]:before{content:"\\f17b"}.fa-linux[_ngcontent-%COMP%]:before{content:"\\f17c"}.fa-dribbble[_ngcontent-%COMP%]:before{content:"\\f17d"}.fa-skype[_ngcontent-%COMP%]:before{content:"\\f17e"}.fa-foursquare[_ngcontent-%COMP%]:before{content:"\\f180"}.fa-trello[_ngcontent-%COMP%]:before{content:"\\f181"}.fa-female[_ngcontent-%COMP%]:before{content:"\\f182"}.fa-male[_ngcontent-%COMP%]:before{content:"\\f183"}.fa-gittip[_ngcontent-%COMP%]:before, .fa-gratipay[_ngcontent-%COMP%]:before{content:"\\f184"}.fa-sun-o[_ngcontent-%COMP%]:before{content:"\\f185"}.fa-moon-o[_ngcontent-%COMP%]:before{content:"\\f186"}.fa-archive[_ngcontent-%COMP%]:before{content:"\\f187"}.fa-bug[_ngcontent-%COMP%]:before{content:"\\f188"}.fa-vk[_ngcontent-%COMP%]:before{content:"\\f189"}.fa-weibo[_ngcontent-%COMP%]:before{content:"\\f18a"}.fa-renren[_ngcontent-%COMP%]:before{content:"\\f18b"}.fa-pagelines[_ngcontent-%COMP%]:before{content:"\\f18c"}.fa-stack-exchange[_ngcontent-%COMP%]:before{content:"\\f18d"}.fa-arrow-circle-o-right[_ngcontent-%COMP%]:before{content:"\\f18e"}.fa-arrow-circle-o-left[_ngcontent-%COMP%]:before{content:"\\f190"}.fa-toggle-left[_ngcontent-%COMP%]:before, .fa-caret-square-o-left[_ngcontent-%COMP%]:before{content:"\\f191"}.fa-dot-circle-o[_ngcontent-%COMP%]:before{content:"\\f192"}.fa-wheelchair[_ngcontent-%COMP%]:before{content:"\\f193"}.fa-vimeo-square[_ngcontent-%COMP%]:before{content:"\\f194"}.fa-turkish-lira[_ngcontent-%COMP%]:before, .fa-try[_ngcontent-%COMP%]:before{content:"\\f195"}.fa-plus-square-o[_ngcontent-%COMP%]:before{content:"\\f196"}.fa-space-shuttle[_ngcontent-%COMP%]:before{content:"\\f197"}.fa-slack[_ngcontent-%COMP%]:before{content:"\\f198"}.fa-envelope-square[_ngcontent-%COMP%]:before{content:"\\f199"}.fa-wordpress[_ngcontent-%COMP%]:before{content:"\\f19a"}.fa-openid[_ngcontent-%COMP%]:before{content:"\\f19b"}.fa-institution[_ngcontent-%COMP%]:before, .fa-bank[_ngcontent-%COMP%]:before, .fa-university[_ngcontent-%COMP%]:before{content:"\\f19c"}.fa-mortar-board[_ngcontent-%COMP%]:before, .fa-graduation-cap[_ngcontent-%COMP%]:before{content:"\\f19d"}.fa-yahoo[_ngcontent-%COMP%]:before{content:"\\f19e"}.fa-google[_ngcontent-%COMP%]:before{content:"\\f1a0"}.fa-reddit[_ngcontent-%COMP%]:before{content:"\\f1a1"}.fa-reddit-square[_ngcontent-%COMP%]:before{content:"\\f1a2"}.fa-stumbleupon-circle[_ngcontent-%COMP%]:before{content:"\\f1a3"}.fa-stumbleupon[_ngcontent-%COMP%]:before{content:"\\f1a4"}.fa-delicious[_ngcontent-%COMP%]:before{content:"\\f1a5"}.fa-digg[_ngcontent-%COMP%]:before{content:"\\f1a6"}.fa-pied-piper-pp[_ngcontent-%COMP%]:before{content:"\\f1a7"}.fa-pied-piper-alt[_ngcontent-%COMP%]:before{content:"\\f1a8"}.fa-drupal[_ngcontent-%COMP%]:before{content:"\\f1a9"}.fa-joomla[_ngcontent-%COMP%]:before{content:"\\f1aa"}.fa-language[_ngcontent-%COMP%]:before{content:"\\f1ab"}.fa-fax[_ngcontent-%COMP%]:before{content:"\\f1ac"}.fa-building[_ngcontent-%COMP%]:before{content:"\\f1ad"}.fa-child[_ngcontent-%COMP%]:before{content:"\\f1ae"}.fa-paw[_ngcontent-%COMP%]:before{content:"\\f1b0"}.fa-spoon[_ngcontent-%COMP%]:before{content:"\\f1b1"}.fa-cube[_ngcontent-%COMP%]:before{content:"\\f1b2"}.fa-cubes[_ngcontent-%COMP%]:before{content:"\\f1b3"}.fa-behance[_ngcontent-%COMP%]:before{content:"\\f1b4"}.fa-behance-square[_ngcontent-%COMP%]:before{content:"\\f1b5"}.fa-steam[_ngcontent-%COMP%]:before{content:"\\f1b6"}.fa-steam-square[_ngcontent-%COMP%]:before{content:"\\f1b7"}.fa-recycle[_ngcontent-%COMP%]:before{content:"\\f1b8"}.fa-automobile[_ngcontent-%COMP%]:before, .fa-car[_ngcontent-%COMP%]:before{content:"\\f1b9"}.fa-cab[_ngcontent-%COMP%]:before, .fa-taxi[_ngcontent-%COMP%]:before{content:"\\f1ba"}.fa-tree[_ngcontent-%COMP%]:before{content:"\\f1bb"}.fa-spotify[_ngcontent-%COMP%]:before{content:"\\f1bc"}.fa-deviantart[_ngcontent-%COMP%]:before{content:"\\f1bd"}.fa-soundcloud[_ngcontent-%COMP%]:before{content:"\\f1be"}.fa-database[_ngcontent-%COMP%]:before{content:"\\f1c0"}.fa-file-pdf-o[_ngcontent-%COMP%]:before{content:"\\f1c1"}.fa-file-word-o[_ngcontent-%COMP%]:before{content:"\\f1c2"}.fa-file-excel-o[_ngcontent-%COMP%]:before{content:"\\f1c3"}.fa-file-powerpoint-o[_ngcontent-%COMP%]:before{content:"\\f1c4"}.fa-file-photo-o[_ngcontent-%COMP%]:before, .fa-file-picture-o[_ngcontent-%COMP%]:before, .fa-file-image-o[_ngcontent-%COMP%]:before{content:"\\f1c5"}.fa-file-zip-o[_ngcontent-%COMP%]:before, .fa-file-archive-o[_ngcontent-%COMP%]:before{content:"\\f1c6"}.fa-file-sound-o[_ngcontent-%COMP%]:before, .fa-file-audio-o[_ngcontent-%COMP%]:before{content:"\\f1c7"}.fa-file-movie-o[_ngcontent-%COMP%]:before, .fa-file-video-o[_ngcontent-%COMP%]:before{content:"\\f1c8"}.fa-file-code-o[_ngcontent-%COMP%]:before{content:"\\f1c9"}.fa-vine[_ngcontent-%COMP%]:before{content:"\\f1ca"}.fa-codepen[_ngcontent-%COMP%]:before{content:"\\f1cb"}.fa-jsfiddle[_ngcontent-%COMP%]:before{content:"\\f1cc"}.fa-life-bouy[_ngcontent-%COMP%]:before, .fa-life-buoy[_ngcontent-%COMP%]:before, .fa-life-saver[_ngcontent-%COMP%]:before, .fa-support[_ngcontent-%COMP%]:before, .fa-life-ring[_ngcontent-%COMP%]:before{content:"\\f1cd"}.fa-circle-o-notch[_ngcontent-%COMP%]:before{content:"\\f1ce"}.fa-ra[_ngcontent-%COMP%]:before, .fa-resistance[_ngcontent-%COMP%]:before, .fa-rebel[_ngcontent-%COMP%]:before{content:"\\f1d0"}.fa-ge[_ngcontent-%COMP%]:before, .fa-empire[_ngcontent-%COMP%]:before{content:"\\f1d1"}.fa-git-square[_ngcontent-%COMP%]:before{content:"\\f1d2"}.fa-git[_ngcontent-%COMP%]:before{content:"\\f1d3"}.fa-y-combinator-square[_ngcontent-%COMP%]:before, .fa-yc-square[_ngcontent-%COMP%]:before, .fa-hacker-news[_ngcontent-%COMP%]:before{content:"\\f1d4"}.fa-tencent-weibo[_ngcontent-%COMP%]:before{content:"\\f1d5"}.fa-qq[_ngcontent-%COMP%]:before{content:"\\f1d6"}.fa-wechat[_ngcontent-%COMP%]:before, .fa-weixin[_ngcontent-%COMP%]:before{content:"\\f1d7"}.fa-send[_ngcontent-%COMP%]:before, .fa-paper-plane[_ngcontent-%COMP%]:before{content:"\\f1d8"}.fa-send-o[_ngcontent-%COMP%]:before, .fa-paper-plane-o[_ngcontent-%COMP%]:before{content:"\\f1d9"}.fa-history[_ngcontent-%COMP%]:before{content:"\\f1da"}.fa-circle-thin[_ngcontent-%COMP%]:before{content:"\\f1db"}.fa-header[_ngcontent-%COMP%]:before{content:"\\f1dc"}.fa-paragraph[_ngcontent-%COMP%]:before{content:"\\f1dd"}.fa-sliders[_ngcontent-%COMP%]:before{content:"\\f1de"}.fa-share-alt[_ngcontent-%COMP%]:before{content:"\\f1e0"}.fa-share-alt-square[_ngcontent-%COMP%]:before{content:"\\f1e1"}.fa-bomb[_ngcontent-%COMP%]:before{content:"\\f1e2"}.fa-soccer-ball-o[_ngcontent-%COMP%]:before, .fa-futbol-o[_ngcontent-%COMP%]:before{content:"\\f1e3"}.fa-tty[_ngcontent-%COMP%]:before{content:"\\f1e4"}.fa-binoculars[_ngcontent-%COMP%]:before{content:"\\f1e5"}.fa-plug[_ngcontent-%COMP%]:before{content:"\\f1e6"}.fa-slideshare[_ngcontent-%COMP%]:before{content:"\\f1e7"}.fa-twitch[_ngcontent-%COMP%]:before{content:"\\f1e8"}.fa-yelp[_ngcontent-%COMP%]:before{content:"\\f1e9"}.fa-newspaper-o[_ngcontent-%COMP%]:before{content:"\\f1ea"}.fa-wifi[_ngcontent-%COMP%]:before{content:"\\f1eb"}.fa-calculator[_ngcontent-%COMP%]:before{content:"\\f1ec"}.fa-paypal[_ngcontent-%COMP%]:before{content:"\\f1ed"}.fa-google-wallet[_ngcontent-%COMP%]:before{content:"\\f1ee"}.fa-cc-visa[_ngcontent-%COMP%]:before{content:"\\f1f0"}.fa-cc-mastercard[_ngcontent-%COMP%]:before{content:"\\f1f1"}.fa-cc-discover[_ngcontent-%COMP%]:before{content:"\\f1f2"}.fa-cc-amex[_ngcontent-%COMP%]:before{content:"\\f1f3"}.fa-cc-paypal[_ngcontent-%COMP%]:before{content:"\\f1f4"}.fa-cc-stripe[_ngcontent-%COMP%]:before{content:"\\f1f5"}.fa-bell-slash[_ngcontent-%COMP%]:before{content:"\\f1f6"}.fa-bell-slash-o[_ngcontent-%COMP%]:before{content:"\\f1f7"}.fa-trash[_ngcontent-%COMP%]:before{content:"\\f1f8"}.fa-copyright[_ngcontent-%COMP%]:before{content:"\\f1f9"}.fa-at[_ngcontent-%COMP%]:before{content:"\\f1fa"}.fa-eyedropper[_ngcontent-%COMP%]:before{content:"\\f1fb"}.fa-paint-brush[_ngcontent-%COMP%]:before{content:"\\f1fc"}.fa-birthday-cake[_ngcontent-%COMP%]:before{content:"\\f1fd"}.fa-area-chart[_ngcontent-%COMP%]:before{content:"\\f1fe"}.fa-pie-chart[_ngcontent-%COMP%]:before{content:"\\f200"}.fa-line-chart[_ngcontent-%COMP%]:before{content:"\\f201"}.fa-lastfm[_ngcontent-%COMP%]:before{content:"\\f202"}.fa-lastfm-square[_ngcontent-%COMP%]:before{content:"\\f203"}.fa-toggle-off[_ngcontent-%COMP%]:before{content:"\\f204"}.fa-toggle-on[_ngcontent-%COMP%]:before{content:"\\f205"}.fa-bicycle[_ngcontent-%COMP%]:before{content:"\\f206"}.fa-bus[_ngcontent-%COMP%]:before{content:"\\f207"}.fa-ioxhost[_ngcontent-%COMP%]:before{content:"\\f208"}.fa-angellist[_ngcontent-%COMP%]:before{content:"\\f209"}.fa-cc[_ngcontent-%COMP%]:before{content:"\\f20a"}.fa-shekel[_ngcontent-%COMP%]:before, .fa-sheqel[_ngcontent-%COMP%]:before, .fa-ils[_ngcontent-%COMP%]:before{content:"\\f20b"}.fa-meanpath[_ngcontent-%COMP%]:before{content:"\\f20c"}.fa-buysellads[_ngcontent-%COMP%]:before{content:"\\f20d"}.fa-connectdevelop[_ngcontent-%COMP%]:before{content:"\\f20e"}.fa-dashcube[_ngcontent-%COMP%]:before{content:"\\f210"}.fa-forumbee[_ngcontent-%COMP%]:before{content:"\\f211"}.fa-leanpub[_ngcontent-%COMP%]:before{content:"\\f212"}.fa-sellsy[_ngcontent-%COMP%]:before{content:"\\f213"}.fa-shirtsinbulk[_ngcontent-%COMP%]:before{content:"\\f214"}.fa-simplybuilt[_ngcontent-%COMP%]:before{content:"\\f215"}.fa-skyatlas[_ngcontent-%COMP%]:before{content:"\\f216"}.fa-cart-plus[_ngcontent-%COMP%]:before{content:"\\f217"}.fa-cart-arrow-down[_ngcontent-%COMP%]:before{content:"\\f218"}.fa-diamond[_ngcontent-%COMP%]:before{content:"\\f219"}.fa-ship[_ngcontent-%COMP%]:before{content:"\\f21a"}.fa-user-secret[_ngcontent-%COMP%]:before{content:"\\f21b"}.fa-motorcycle[_ngcontent-%COMP%]:before{content:"\\f21c"}.fa-street-view[_ngcontent-%COMP%]:before{content:"\\f21d"}.fa-heartbeat[_ngcontent-%COMP%]:before{content:"\\f21e"}.fa-venus[_ngcontent-%COMP%]:before{content:"\\f221"}.fa-mars[_ngcontent-%COMP%]:before{content:"\\f222"}.fa-mercury[_ngcontent-%COMP%]:before{content:"\\f223"}.fa-intersex[_ngcontent-%COMP%]:before, .fa-transgender[_ngcontent-%COMP%]:before{content:"\\f224"}.fa-transgender-alt[_ngcontent-%COMP%]:before{content:"\\f225"}.fa-venus-double[_ngcontent-%COMP%]:before{content:"\\f226"}.fa-mars-double[_ngcontent-%COMP%]:before{content:"\\f227"}.fa-venus-mars[_ngcontent-%COMP%]:before{content:"\\f228"}.fa-mars-stroke[_ngcontent-%COMP%]:before{content:"\\f229"}.fa-mars-stroke-v[_ngcontent-%COMP%]:before{content:"\\f22a"}.fa-mars-stroke-h[_ngcontent-%COMP%]:before{content:"\\f22b"}.fa-neuter[_ngcontent-%COMP%]:before{content:"\\f22c"}.fa-genderless[_ngcontent-%COMP%]:before{content:"\\f22d"}.fa-facebook-official[_ngcontent-%COMP%]:before{content:"\\f230"}.fa-pinterest-p[_ngcontent-%COMP%]:before{content:"\\f231"}.fa-whatsapp[_ngcontent-%COMP%]:before{content:"\\f232"}.fa-server[_ngcontent-%COMP%]:before{content:"\\f233"}.fa-user-plus[_ngcontent-%COMP%]:before{content:"\\f234"}.fa-user-times[_ngcontent-%COMP%]:before{content:"\\f235"}.fa-hotel[_ngcontent-%COMP%]:before, .fa-bed[_ngcontent-%COMP%]:before{content:"\\f236"}.fa-viacoin[_ngcontent-%COMP%]:before{content:"\\f237"}.fa-train[_ngcontent-%COMP%]:before{content:"\\f238"}.fa-subway[_ngcontent-%COMP%]:before{content:"\\f239"}.fa-medium[_ngcontent-%COMP%]:before{content:"\\f23a"}.fa-yc[_ngcontent-%COMP%]:before, .fa-y-combinator[_ngcontent-%COMP%]:before{content:"\\f23b"}.fa-optin-monster[_ngcontent-%COMP%]:before{content:"\\f23c"}.fa-opencart[_ngcontent-%COMP%]:before{content:"\\f23d"}.fa-expeditedssl[_ngcontent-%COMP%]:before{content:"\\f23e"}.fa-battery-4[_ngcontent-%COMP%]:before, .fa-battery[_ngcontent-%COMP%]:before, .fa-battery-full[_ngcontent-%COMP%]:before{content:"\\f240"}.fa-battery-3[_ngcontent-%COMP%]:before, .fa-battery-three-quarters[_ngcontent-%COMP%]:before{content:"\\f241"}.fa-battery-2[_ngcontent-%COMP%]:before, .fa-battery-half[_ngcontent-%COMP%]:before{content:"\\f242"}.fa-battery-1[_ngcontent-%COMP%]:before, .fa-battery-quarter[_ngcontent-%COMP%]:before{content:"\\f243"}.fa-battery-0[_ngcontent-%COMP%]:before, .fa-battery-empty[_ngcontent-%COMP%]:before{content:"\\f244"}.fa-mouse-pointer[_ngcontent-%COMP%]:before{content:"\\f245"}.fa-i-cursor[_ngcontent-%COMP%]:before{content:"\\f246"}.fa-object-group[_ngcontent-%COMP%]:before{content:"\\f247"}.fa-object-ungroup[_ngcontent-%COMP%]:before{content:"\\f248"}.fa-sticky-note[_ngcontent-%COMP%]:before{content:"\\f249"}.fa-sticky-note-o[_ngcontent-%COMP%]:before{content:"\\f24a"}.fa-cc-jcb[_ngcontent-%COMP%]:before{content:"\\f24b"}.fa-cc-diners-club[_ngcontent-%COMP%]:before{content:"\\f24c"}.fa-clone[_ngcontent-%COMP%]:before{content:"\\f24d"}.fa-balance-scale[_ngcontent-%COMP%]:before{content:"\\f24e"}.fa-hourglass-o[_ngcontent-%COMP%]:before{content:"\\f250"}.fa-hourglass-1[_ngcontent-%COMP%]:before, .fa-hourglass-start[_ngcontent-%COMP%]:before{content:"\\f251"}.fa-hourglass-2[_ngcontent-%COMP%]:before, .fa-hourglass-half[_ngcontent-%COMP%]:before{content:"\\f252"}.fa-hourglass-3[_ngcontent-%COMP%]:before, .fa-hourglass-end[_ngcontent-%COMP%]:before{content:"\\f253"}.fa-hourglass[_ngcontent-%COMP%]:before{content:"\\f254"}.fa-hand-grab-o[_ngcontent-%COMP%]:before, .fa-hand-rock-o[_ngcontent-%COMP%]:before{content:"\\f255"}.fa-hand-stop-o[_ngcontent-%COMP%]:before, .fa-hand-paper-o[_ngcontent-%COMP%]:before{content:"\\f256"}.fa-hand-scissors-o[_ngcontent-%COMP%]:before{content:"\\f257"}.fa-hand-lizard-o[_ngcontent-%COMP%]:before{content:"\\f258"}.fa-hand-spock-o[_ngcontent-%COMP%]:before{content:"\\f259"}.fa-hand-pointer-o[_ngcontent-%COMP%]:before{content:"\\f25a"}.fa-hand-peace-o[_ngcontent-%COMP%]:before{content:"\\f25b"}.fa-trademark[_ngcontent-%COMP%]:before{content:"\\f25c"}.fa-registered[_ngcontent-%COMP%]:before{content:"\\f25d"}.fa-creative-commons[_ngcontent-%COMP%]:before{content:"\\f25e"}.fa-gg[_ngcontent-%COMP%]:before{content:"\\f260"}.fa-gg-circle[_ngcontent-%COMP%]:before{content:"\\f261"}.fa-tripadvisor[_ngcontent-%COMP%]:before{content:"\\f262"}.fa-odnoklassniki[_ngcontent-%COMP%]:before{content:"\\f263"}.fa-odnoklassniki-square[_ngcontent-%COMP%]:before{content:"\\f264"}.fa-get-pocket[_ngcontent-%COMP%]:before{content:"\\f265"}.fa-wikipedia-w[_ngcontent-%COMP%]:before{content:"\\f266"}.fa-safari[_ngcontent-%COMP%]:before{content:"\\f267"}.fa-chrome[_ngcontent-%COMP%]:before{content:"\\f268"}.fa-firefox[_ngcontent-%COMP%]:before{content:"\\f269"}.fa-opera[_ngcontent-%COMP%]:before{content:"\\f26a"}.fa-internet-explorer[_ngcontent-%COMP%]:before{content:"\\f26b"}.fa-tv[_ngcontent-%COMP%]:before, .fa-television[_ngcontent-%COMP%]:before{content:"\\f26c"}.fa-contao[_ngcontent-%COMP%]:before{content:"\\f26d"}.fa-500px[_ngcontent-%COMP%]:before{content:"\\f26e"}.fa-amazon[_ngcontent-%COMP%]:before{content:"\\f270"}.fa-calendar-plus-o[_ngcontent-%COMP%]:before{content:"\\f271"}.fa-calendar-minus-o[_ngcontent-%COMP%]:before{content:"\\f272"}.fa-calendar-times-o[_ngcontent-%COMP%]:before{content:"\\f273"}.fa-calendar-check-o[_ngcontent-%COMP%]:before{content:"\\f274"}.fa-industry[_ngcontent-%COMP%]:before{content:"\\f275"}.fa-map-pin[_ngcontent-%COMP%]:before{content:"\\f276"}.fa-map-signs[_ngcontent-%COMP%]:before{content:"\\f277"}.fa-map-o[_ngcontent-%COMP%]:before{content:"\\f278"}.fa-map[_ngcontent-%COMP%]:before{content:"\\f279"}.fa-commenting[_ngcontent-%COMP%]:before{content:"\\f27a"}.fa-commenting-o[_ngcontent-%COMP%]:before{content:"\\f27b"}.fa-houzz[_ngcontent-%COMP%]:before{content:"\\f27c"}.fa-vimeo[_ngcontent-%COMP%]:before{content:"\\f27d"}.fa-black-tie[_ngcontent-%COMP%]:before{content:"\\f27e"}.fa-fonticons[_ngcontent-%COMP%]:before{content:"\\f280"}.fa-reddit-alien[_ngcontent-%COMP%]:before{content:"\\f281"}.fa-edge[_ngcontent-%COMP%]:before{content:"\\f282"}.fa-credit-card-alt[_ngcontent-%COMP%]:before{content:"\\f283"}.fa-codiepie[_ngcontent-%COMP%]:before{content:"\\f284"}.fa-modx[_ngcontent-%COMP%]:before{content:"\\f285"}.fa-fort-awesome[_ngcontent-%COMP%]:before{content:"\\f286"}.fa-usb[_ngcontent-%COMP%]:before{content:"\\f287"}.fa-product-hunt[_ngcontent-%COMP%]:before{content:"\\f288"}.fa-mixcloud[_ngcontent-%COMP%]:before{content:"\\f289"}.fa-scribd[_ngcontent-%COMP%]:before{content:"\\f28a"}.fa-pause-circle[_ngcontent-%COMP%]:before{content:"\\f28b"}.fa-pause-circle-o[_ngcontent-%COMP%]:before{content:"\\f28c"}.fa-stop-circle[_ngcontent-%COMP%]:before{content:"\\f28d"}.fa-stop-circle-o[_ngcontent-%COMP%]:before{content:"\\f28e"}.fa-shopping-bag[_ngcontent-%COMP%]:before{content:"\\f290"}.fa-shopping-basket[_ngcontent-%COMP%]:before{content:"\\f291"}.fa-hashtag[_ngcontent-%COMP%]:before{content:"\\f292"}.fa-bluetooth[_ngcontent-%COMP%]:before{content:"\\f293"}.fa-bluetooth-b[_ngcontent-%COMP%]:before{content:"\\f294"}.fa-percent[_ngcontent-%COMP%]:before{content:"\\f295"}.fa-gitlab[_ngcontent-%COMP%]:before{content:"\\f296"}.fa-wpbeginner[_ngcontent-%COMP%]:before{content:"\\f297"}.fa-wpforms[_ngcontent-%COMP%]:before{content:"\\f298"}.fa-envira[_ngcontent-%COMP%]:before{content:"\\f299"}.fa-universal-access[_ngcontent-%COMP%]:before{content:"\\f29a"}.fa-wheelchair-alt[_ngcontent-%COMP%]:before{content:"\\f29b"}.fa-question-circle-o[_ngcontent-%COMP%]:before{content:"\\f29c"}.fa-blind[_ngcontent-%COMP%]:before{content:"\\f29d"}.fa-audio-description[_ngcontent-%COMP%]:before{content:"\\f29e"}.fa-volume-control-phone[_ngcontent-%COMP%]:before{content:"\\f2a0"}.fa-braille[_ngcontent-%COMP%]:before{content:"\\f2a1"}.fa-assistive-listening-systems[_ngcontent-%COMP%]:before{content:"\\f2a2"}.fa-asl-interpreting[_ngcontent-%COMP%]:before, .fa-american-sign-language-interpreting[_ngcontent-%COMP%]:before{content:"\\f2a3"}.fa-deafness[_ngcontent-%COMP%]:before, .fa-hard-of-hearing[_ngcontent-%COMP%]:before, .fa-deaf[_ngcontent-%COMP%]:before{content:"\\f2a4"}.fa-glide[_ngcontent-%COMP%]:before{content:"\\f2a5"}.fa-glide-g[_ngcontent-%COMP%]:before{content:"\\f2a6"}.fa-signing[_ngcontent-%COMP%]:before, .fa-sign-language[_ngcontent-%COMP%]:before{content:"\\f2a7"}.fa-low-vision[_ngcontent-%COMP%]:before{content:"\\f2a8"}.fa-viadeo[_ngcontent-%COMP%]:before{content:"\\f2a9"}.fa-viadeo-square[_ngcontent-%COMP%]:before{content:"\\f2aa"}.fa-snapchat[_ngcontent-%COMP%]:before{content:"\\f2ab"}.fa-snapchat-ghost[_ngcontent-%COMP%]:before{content:"\\f2ac"}.fa-snapchat-square[_ngcontent-%COMP%]:before{content:"\\f2ad"}.fa-pied-piper[_ngcontent-%COMP%]:before{content:"\\f2ae"}.fa-first-order[_ngcontent-%COMP%]:before{content:"\\f2b0"}.fa-yoast[_ngcontent-%COMP%]:before{content:"\\f2b1"}.fa-themeisle[_ngcontent-%COMP%]:before{content:"\\f2b2"}.fa-google-plus-circle[_ngcontent-%COMP%]:before, .fa-google-plus-official[_ngcontent-%COMP%]:before{content:"\\f2b3"}.fa-fa[_ngcontent-%COMP%]:before, .fa-font-awesome[_ngcontent-%COMP%]:before{content:"\\f2b4"}.fa-handshake-o[_ngcontent-%COMP%]:before{content:"\\f2b5"}.fa-envelope-open[_ngcontent-%COMP%]:before{content:"\\f2b6"}.fa-envelope-open-o[_ngcontent-%COMP%]:before{content:"\\f2b7"}.fa-linode[_ngcontent-%COMP%]:before{content:"\\f2b8"}.fa-address-book[_ngcontent-%COMP%]:before{content:"\\f2b9"}.fa-address-book-o[_ngcontent-%COMP%]:before{content:"\\f2ba"}.fa-vcard[_ngcontent-%COMP%]:before, .fa-address-card[_ngcontent-%COMP%]:before{content:"\\f2bb"}.fa-vcard-o[_ngcontent-%COMP%]:before, .fa-address-card-o[_ngcontent-%COMP%]:before{content:"\\f2bc"}.fa-user-circle[_ngcontent-%COMP%]:before{content:"\\f2bd"}.fa-user-circle-o[_ngcontent-%COMP%]:before{content:"\\f2be"}.fa-user-o[_ngcontent-%COMP%]:before{content:"\\f2c0"}.fa-id-badge[_ngcontent-%COMP%]:before{content:"\\f2c1"}.fa-drivers-license[_ngcontent-%COMP%]:before, .fa-id-card[_ngcontent-%COMP%]:before{content:"\\f2c2"}.fa-drivers-license-o[_ngcontent-%COMP%]:before, .fa-id-card-o[_ngcontent-%COMP%]:before{content:"\\f2c3"}.fa-quora[_ngcontent-%COMP%]:before{content:"\\f2c4"}.fa-free-code-camp[_ngcontent-%COMP%]:before{content:"\\f2c5"}.fa-telegram[_ngcontent-%COMP%]:before{content:"\\f2c6"}.fa-thermometer-4[_ngcontent-%COMP%]:before, .fa-thermometer[_ngcontent-%COMP%]:before, .fa-thermometer-full[_ngcontent-%COMP%]:before{content:"\\f2c7"}.fa-thermometer-3[_ngcontent-%COMP%]:before, .fa-thermometer-three-quarters[_ngcontent-%COMP%]:before{content:"\\f2c8"}.fa-thermometer-2[_ngcontent-%COMP%]:before, .fa-thermometer-half[_ngcontent-%COMP%]:before{content:"\\f2c9"}.fa-thermometer-1[_ngcontent-%COMP%]:before, .fa-thermometer-quarter[_ngcontent-%COMP%]:before{content:"\\f2ca"}.fa-thermometer-0[_ngcontent-%COMP%]:before, .fa-thermometer-empty[_ngcontent-%COMP%]:before{content:"\\f2cb"}.fa-shower[_ngcontent-%COMP%]:before{content:"\\f2cc"}.fa-bathtub[_ngcontent-%COMP%]:before, .fa-s15[_ngcontent-%COMP%]:before, .fa-bath[_ngcontent-%COMP%]:before{content:"\\f2cd"}.fa-podcast[_ngcontent-%COMP%]:before{content:"\\f2ce"}.fa-window-maximize[_ngcontent-%COMP%]:before{content:"\\f2d0"}.fa-window-minimize[_ngcontent-%COMP%]:before{content:"\\f2d1"}.fa-window-restore[_ngcontent-%COMP%]:before{content:"\\f2d2"}.fa-times-rectangle[_ngcontent-%COMP%]:before, .fa-window-close[_ngcontent-%COMP%]:before{content:"\\f2d3"}.fa-times-rectangle-o[_ngcontent-%COMP%]:before, .fa-window-close-o[_ngcontent-%COMP%]:before{content:"\\f2d4"}.fa-bandcamp[_ngcontent-%COMP%]:before{content:"\\f2d5"}.fa-grav[_ngcontent-%COMP%]:before{content:"\\f2d6"}.fa-etsy[_ngcontent-%COMP%]:before{content:"\\f2d7"}.fa-imdb[_ngcontent-%COMP%]:before{content:"\\f2d8"}.fa-ravelry[_ngcontent-%COMP%]:before{content:"\\f2d9"}.fa-eercast[_ngcontent-%COMP%]:before{content:"\\f2da"}.fa-microchip[_ngcontent-%COMP%]:before{content:"\\f2db"}.fa-snowflake-o[_ngcontent-%COMP%]:before{content:"\\f2dc"}.fa-superpowers[_ngcontent-%COMP%]:before{content:"\\f2dd"}.fa-wpexplorer[_ngcontent-%COMP%]:before{content:"\\f2de"}.fa-meetup[_ngcontent-%COMP%]:before{content:"\\f2e0"}.sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable[_ngcontent-%COMP%]:active, .sr-only-focusable[_ngcontent-%COMP%]:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a[_ngcontent-%COMP%]{cursor:pointer}.angular-editor-textarea[_ngcontent-%COMP%]{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar[_ngcontent-%COMP%]{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:focus, .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.focus[_ngcontent-%COMP%]{outline:0}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label[_ngcontent-%COMP%]{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{background:#555555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button[_ngcontent-%COMP%]:disabled > .color-label.background[_ngcontent-%COMP%]{background:#555555}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]{background:#fff5b9}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .angular-editor-button.active[_ngcontent-%COMP%]:hover{background-color:#fffa98}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .default[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:24px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h2[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h3[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h4[_ngcontent-%COMP%]{font-size:15px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h5[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .h6[_ngcontent-%COMP%]{font-size:13px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .div[_ngcontent-%COMP%], .angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]   .pre[_ngcontent-%COMP%]{font-size:12px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-heading[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size1[_ngcontent-%COMP%]{font-size:10px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size2[_ngcontent-%COMP%]{font-size:12px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size3[_ngcontent-%COMP%]{font-size:14px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size4[_ngcontent-%COMP%]{font-size:16px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size5[_ngcontent-%COMP%]{font-size:18px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size6[_ngcontent-%COMP%]{font-size:20px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]   .size7[_ngcontent-%COMP%]{font-size:22px}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-font-size[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   optgroup[_ngcontent-%COMP%]{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{border:1px solid;background-color:#fff}}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .select-custom-style[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .color-label[_ngcontent-%COMP%]{position:relative;cursor:pointer}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]   .foreground[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar[_ngcontent-%COMP%]   .angular-editor-toolbar-set[_ngcontent-%COMP%]:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}.angular-editor[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]     [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]{position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-textarea[_ngcontent-%COMP%]     blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]     p{margin-bottom:0}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.show-placeholder[_ngcontent-%COMP%]   .angular-editor-placeholder[_ngcontent-%COMP%]{display:block}.angular-editor[_ngcontent-%COMP%]   .angular-editor-wrapper.disabled[_ngcontent-%COMP%]{cursor:not-allowed;opacity:.5;pointer-events:none}']
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorComponent, [{
    type: Component,
    args: [{
      selector: "angular-editor",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AngularEditorComponent),
        multi: true
      }, AngularEditorService],
      template: `<div
     class="angular-editor"
     #angularEditor
     [style.width]="config.width"
     [style.minWidth]="config.minWidth"
>
     <angular-editor-toolbar
          *ngIf="config.toolbarPosition === 'top'"
          #editorToolbar
          [id]="id"
          [uploadUrl]="config.uploadUrl"
          [upload]="config.upload"
          [showToolbar]="config.showToolbar !== undefined ? config.showToolbar : true"
          [fonts]="getFonts()"
          [customClasses]="config.customClasses"
          [defaultFontName]="config.defaultFontName"
          [defaultFontSize]="config.defaultFontSize"
          [hiddenButtons]="config.toolbarHiddenButtons"
          (execute)="executeCommand($event)"
     >
       <ng-container
         [ngTemplateOutlet]="customButtonsTemplateRef"
         [ngTemplateOutletContext]="{ executeCommandFn: this.executeCommandFn}"
       >
       </ng-container>
     </angular-editor-toolbar>

     <div
          class="angular-editor-wrapper"
          #editorWrapper
     >
          <div
               #editor
               class="angular-editor-textarea"
               [attr.contenteditable]="config.editable"
               [attr.tabindex]="disabled ? -1 : tabIndex"
               [attr.translate]="config.translate"
               [attr.spellcheck]="config.spellcheck"
               [style.height]="config.height"
               [style.minHeight]="config.minHeight"
               [style.maxHeight]="config.maxHeight"
               [style.outline]="config.outline === false ? 'none': undefined"
               (input)="onContentChange($event.target)"
               (focus)="onTextAreaFocus($event)"
               (blur)="onTextAreaBlur($event)"
               (click)="exec()"
               (keyup)="exec()"
               (mouseout)="onTextAreaMouseOut($event)"
               (paste)="onPaste($event)"
          >
          </div>
          <span class="angular-editor-placeholder">{{ placeholder || config['placeholder'] }}</span>
     </div>
     <angular-editor-toolbar
          *ngIf="config.toolbarPosition === 'bottom'"
          #editorToolbar
          [id]="id"
          [uploadUrl]="config.uploadUrl"
          [upload]="config.upload"
          [showToolbar]="config.showToolbar !== undefined ? config.showToolbar : true"
          [fonts]="getFonts()"
          [customClasses]="config.customClasses"
          [defaultFontName]="config.defaultFontName"
          [defaultFontSize]="config.defaultFontSize"
          [hiddenButtons]="config.toolbarHiddenButtons"
          (execute)="executeCommand($event)"
     ></angular-editor-toolbar>
</div>
`,
      styles: ['/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{animation:fa-spin 2s infinite linear}.fa-pulse{animation:fa-spin 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\\f000"}.fa-music:before{content:"\\f001"}.fa-search:before{content:"\\f002"}.fa-envelope-o:before{content:"\\f003"}.fa-heart:before{content:"\\f004"}.fa-star:before{content:"\\f005"}.fa-star-o:before{content:"\\f006"}.fa-user:before{content:"\\f007"}.fa-film:before{content:"\\f008"}.fa-th-large:before{content:"\\f009"}.fa-th:before{content:"\\f00a"}.fa-th-list:before{content:"\\f00b"}.fa-check:before{content:"\\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\\f00d"}.fa-search-plus:before{content:"\\f00e"}.fa-search-minus:before{content:"\\f010"}.fa-power-off:before{content:"\\f011"}.fa-signal:before{content:"\\f012"}.fa-gear:before,.fa-cog:before{content:"\\f013"}.fa-trash-o:before{content:"\\f014"}.fa-home:before{content:"\\f015"}.fa-file-o:before{content:"\\f016"}.fa-clock-o:before{content:"\\f017"}.fa-road:before{content:"\\f018"}.fa-download:before{content:"\\f019"}.fa-arrow-circle-o-down:before{content:"\\f01a"}.fa-arrow-circle-o-up:before{content:"\\f01b"}.fa-inbox:before{content:"\\f01c"}.fa-play-circle-o:before{content:"\\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\\f01e"}.fa-refresh:before{content:"\\f021"}.fa-list-alt:before{content:"\\f022"}.fa-lock:before{content:"\\f023"}.fa-flag:before{content:"\\f024"}.fa-headphones:before{content:"\\f025"}.fa-volume-off:before{content:"\\f026"}.fa-volume-down:before{content:"\\f027"}.fa-volume-up:before{content:"\\f028"}.fa-qrcode:before{content:"\\f029"}.fa-barcode:before{content:"\\f02a"}.fa-tag:before{content:"\\f02b"}.fa-tags:before{content:"\\f02c"}.fa-book:before{content:"\\f02d"}.fa-bookmark:before{content:"\\f02e"}.fa-print:before{content:"\\f02f"}.fa-camera:before{content:"\\f030"}.fa-font:before{content:"\\f031"}.fa-bold:before{content:"\\f032"}.fa-italic:before{content:"\\f033"}.fa-text-height:before{content:"\\f034"}.fa-text-width:before{content:"\\f035"}.fa-align-left:before{content:"\\f036"}.fa-align-center:before{content:"\\f037"}.fa-align-right:before{content:"\\f038"}.fa-align-justify:before{content:"\\f039"}.fa-list:before{content:"\\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-indent:before{content:"\\f03c"}.fa-video-camera:before{content:"\\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\\f03e"}.fa-pencil:before{content:"\\f040"}.fa-map-marker:before{content:"\\f041"}.fa-adjust:before{content:"\\f042"}.fa-tint:before{content:"\\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\\f044"}.fa-share-square-o:before{content:"\\f045"}.fa-check-square-o:before{content:"\\f046"}.fa-arrows:before{content:"\\f047"}.fa-step-backward:before{content:"\\f048"}.fa-fast-backward:before{content:"\\f049"}.fa-backward:before{content:"\\f04a"}.fa-play:before{content:"\\f04b"}.fa-pause:before{content:"\\f04c"}.fa-stop:before{content:"\\f04d"}.fa-forward:before{content:"\\f04e"}.fa-fast-forward:before{content:"\\f050"}.fa-step-forward:before{content:"\\f051"}.fa-eject:before{content:"\\f052"}.fa-chevron-left:before{content:"\\f053"}.fa-chevron-right:before{content:"\\f054"}.fa-plus-circle:before{content:"\\f055"}.fa-minus-circle:before{content:"\\f056"}.fa-times-circle:before{content:"\\f057"}.fa-check-circle:before{content:"\\f058"}.fa-question-circle:before{content:"\\f059"}.fa-info-circle:before{content:"\\f05a"}.fa-crosshairs:before{content:"\\f05b"}.fa-times-circle-o:before{content:"\\f05c"}.fa-check-circle-o:before{content:"\\f05d"}.fa-ban:before{content:"\\f05e"}.fa-arrow-left:before{content:"\\f060"}.fa-arrow-right:before{content:"\\f061"}.fa-arrow-up:before{content:"\\f062"}.fa-arrow-down:before{content:"\\f063"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-expand:before{content:"\\f065"}.fa-compress:before{content:"\\f066"}.fa-plus:before{content:"\\f067"}.fa-minus:before{content:"\\f068"}.fa-asterisk:before{content:"\\f069"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-gift:before{content:"\\f06b"}.fa-leaf:before{content:"\\f06c"}.fa-fire:before{content:"\\f06d"}.fa-eye:before{content:"\\f06e"}.fa-eye-slash:before{content:"\\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\\f071"}.fa-plane:before{content:"\\f072"}.fa-calendar:before{content:"\\f073"}.fa-random:before{content:"\\f074"}.fa-comment:before{content:"\\f075"}.fa-magnet:before{content:"\\f076"}.fa-chevron-up:before{content:"\\f077"}.fa-chevron-down:before{content:"\\f078"}.fa-retweet:before{content:"\\f079"}.fa-shopping-cart:before{content:"\\f07a"}.fa-folder:before{content:"\\f07b"}.fa-folder-open:before{content:"\\f07c"}.fa-arrows-v:before{content:"\\f07d"}.fa-arrows-h:before{content:"\\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\\f080"}.fa-twitter-square:before{content:"\\f081"}.fa-facebook-square:before{content:"\\f082"}.fa-camera-retro:before{content:"\\f083"}.fa-key:before{content:"\\f084"}.fa-gears:before,.fa-cogs:before{content:"\\f085"}.fa-comments:before{content:"\\f086"}.fa-thumbs-o-up:before{content:"\\f087"}.fa-thumbs-o-down:before{content:"\\f088"}.fa-star-half:before{content:"\\f089"}.fa-heart-o:before{content:"\\f08a"}.fa-sign-out:before{content:"\\f08b"}.fa-linkedin-square:before{content:"\\f08c"}.fa-thumb-tack:before{content:"\\f08d"}.fa-external-link:before{content:"\\f08e"}.fa-sign-in:before{content:"\\f090"}.fa-trophy:before{content:"\\f091"}.fa-github-square:before{content:"\\f092"}.fa-upload:before{content:"\\f093"}.fa-lemon-o:before{content:"\\f094"}.fa-phone:before{content:"\\f095"}.fa-square-o:before{content:"\\f096"}.fa-bookmark-o:before{content:"\\f097"}.fa-phone-square:before{content:"\\f098"}.fa-twitter:before{content:"\\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\\f09a"}.fa-github:before{content:"\\f09b"}.fa-unlock:before{content:"\\f09c"}.fa-credit-card:before{content:"\\f09d"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-hdd-o:before{content:"\\f0a0"}.fa-bullhorn:before{content:"\\f0a1"}.fa-bell:before{content:"\\f0f3"}.fa-certificate:before{content:"\\f0a3"}.fa-hand-o-right:before{content:"\\f0a4"}.fa-hand-o-left:before{content:"\\f0a5"}.fa-hand-o-up:before{content:"\\f0a6"}.fa-hand-o-down:before{content:"\\f0a7"}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-arrow-circle-up:before{content:"\\f0aa"}.fa-arrow-circle-down:before{content:"\\f0ab"}.fa-globe:before{content:"\\f0ac"}.fa-wrench:before{content:"\\f0ad"}.fa-tasks:before{content:"\\f0ae"}.fa-filter:before{content:"\\f0b0"}.fa-briefcase:before{content:"\\f0b1"}.fa-arrows-alt:before{content:"\\f0b2"}.fa-group:before,.fa-users:before{content:"\\f0c0"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-cloud:before{content:"\\f0c2"}.fa-flask:before{content:"\\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\\f0c5"}.fa-paperclip:before{content:"\\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\\f0c7"}.fa-square:before{content:"\\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\\f0c9"}.fa-list-ul:before{content:"\\f0ca"}.fa-list-ol:before{content:"\\f0cb"}.fa-strikethrough:before{content:"\\f0cc"}.fa-underline:before{content:"\\f0cd"}.fa-table:before{content:"\\f0ce"}.fa-magic:before{content:"\\f0d0"}.fa-truck:before{content:"\\f0d1"}.fa-pinterest:before{content:"\\f0d2"}.fa-pinterest-square:before{content:"\\f0d3"}.fa-google-plus-square:before{content:"\\f0d4"}.fa-google-plus:before{content:"\\f0d5"}.fa-money:before{content:"\\f0d6"}.fa-caret-down:before{content:"\\f0d7"}.fa-caret-up:before{content:"\\f0d8"}.fa-caret-left:before{content:"\\f0d9"}.fa-caret-right:before{content:"\\f0da"}.fa-columns:before{content:"\\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\\f0de"}.fa-envelope:before{content:"\\f0e0"}.fa-linkedin:before{content:"\\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\\f0e4"}.fa-comment-o:before{content:"\\f0e5"}.fa-comments-o:before{content:"\\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\\f0e7"}.fa-sitemap:before{content:"\\f0e8"}.fa-umbrella:before{content:"\\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\\f0ea"}.fa-lightbulb-o:before{content:"\\f0eb"}.fa-exchange:before{content:"\\f0ec"}.fa-cloud-download:before{content:"\\f0ed"}.fa-cloud-upload:before{content:"\\f0ee"}.fa-user-md:before{content:"\\f0f0"}.fa-stethoscope:before{content:"\\f0f1"}.fa-suitcase:before{content:"\\f0f2"}.fa-bell-o:before{content:"\\f0a2"}.fa-coffee:before{content:"\\f0f4"}.fa-cutlery:before{content:"\\f0f5"}.fa-file-text-o:before{content:"\\f0f6"}.fa-building-o:before{content:"\\f0f7"}.fa-hospital-o:before{content:"\\f0f8"}.fa-ambulance:before{content:"\\f0f9"}.fa-medkit:before{content:"\\f0fa"}.fa-fighter-jet:before{content:"\\f0fb"}.fa-beer:before{content:"\\f0fc"}.fa-h-square:before{content:"\\f0fd"}.fa-plus-square:before{content:"\\f0fe"}.fa-angle-double-left:before{content:"\\f100"}.fa-angle-double-right:before{content:"\\f101"}.fa-angle-double-up:before{content:"\\f102"}.fa-angle-double-down:before{content:"\\f103"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-angle-up:before{content:"\\f106"}.fa-angle-down:before{content:"\\f107"}.fa-desktop:before{content:"\\f108"}.fa-laptop:before{content:"\\f109"}.fa-tablet:before{content:"\\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\\f10b"}.fa-circle-o:before{content:"\\f10c"}.fa-quote-left:before{content:"\\f10d"}.fa-quote-right:before{content:"\\f10e"}.fa-spinner:before{content:"\\f110"}.fa-circle:before{content:"\\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\\f112"}.fa-github-alt:before{content:"\\f113"}.fa-folder-o:before{content:"\\f114"}.fa-folder-open-o:before{content:"\\f115"}.fa-smile-o:before{content:"\\f118"}.fa-frown-o:before{content:"\\f119"}.fa-meh-o:before{content:"\\f11a"}.fa-gamepad:before{content:"\\f11b"}.fa-keyboard-o:before{content:"\\f11c"}.fa-flag-o:before{content:"\\f11d"}.fa-flag-checkered:before{content:"\\f11e"}.fa-terminal:before{content:"\\f120"}.fa-code:before{content:"\\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\\f123"}.fa-location-arrow:before{content:"\\f124"}.fa-crop:before{content:"\\f125"}.fa-code-fork:before{content:"\\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\\f127"}.fa-question:before{content:"\\f128"}.fa-info:before{content:"\\f129"}.fa-exclamation:before{content:"\\f12a"}.fa-superscript:before{content:"\\f12b"}.fa-subscript:before{content:"\\f12c"}.fa-eraser:before{content:"\\f12d"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-microphone:before{content:"\\f130"}.fa-microphone-slash:before{content:"\\f131"}.fa-shield:before{content:"\\f132"}.fa-calendar-o:before{content:"\\f133"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-rocket:before{content:"\\f135"}.fa-maxcdn:before{content:"\\f136"}.fa-chevron-circle-left:before{content:"\\f137"}.fa-chevron-circle-right:before{content:"\\f138"}.fa-chevron-circle-up:before{content:"\\f139"}.fa-chevron-circle-down:before{content:"\\f13a"}.fa-html5:before{content:"\\f13b"}.fa-css3:before{content:"\\f13c"}.fa-anchor:before{content:"\\f13d"}.fa-unlock-alt:before{content:"\\f13e"}.fa-bullseye:before{content:"\\f140"}.fa-ellipsis-h:before{content:"\\f141"}.fa-ellipsis-v:before{content:"\\f142"}.fa-rss-square:before{content:"\\f143"}.fa-play-circle:before{content:"\\f144"}.fa-ticket:before{content:"\\f145"}.fa-minus-square:before{content:"\\f146"}.fa-minus-square-o:before{content:"\\f147"}.fa-level-up:before{content:"\\f148"}.fa-level-down:before{content:"\\f149"}.fa-check-square:before{content:"\\f14a"}.fa-pencil-square:before{content:"\\f14b"}.fa-external-link-square:before{content:"\\f14c"}.fa-share-square:before{content:"\\f14d"}.fa-compass:before{content:"\\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\\f152"}.fa-euro:before,.fa-eur:before{content:"\\f153"}.fa-gbp:before{content:"\\f154"}.fa-dollar:before,.fa-usd:before{content:"\\f155"}.fa-rupee:before,.fa-inr:before{content:"\\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\\f158"}.fa-won:before,.fa-krw:before{content:"\\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\\f15a"}.fa-file:before{content:"\\f15b"}.fa-file-text:before{content:"\\f15c"}.fa-sort-alpha-asc:before{content:"\\f15d"}.fa-sort-alpha-desc:before{content:"\\f15e"}.fa-sort-amount-asc:before{content:"\\f160"}.fa-sort-amount-desc:before{content:"\\f161"}.fa-sort-numeric-asc:before{content:"\\f162"}.fa-sort-numeric-desc:before{content:"\\f163"}.fa-thumbs-up:before{content:"\\f164"}.fa-thumbs-down:before{content:"\\f165"}.fa-youtube-square:before{content:"\\f166"}.fa-youtube:before{content:"\\f167"}.fa-xing:before{content:"\\f168"}.fa-xing-square:before{content:"\\f169"}.fa-youtube-play:before{content:"\\f16a"}.fa-dropbox:before{content:"\\f16b"}.fa-stack-overflow:before{content:"\\f16c"}.fa-instagram:before{content:"\\f16d"}.fa-flickr:before{content:"\\f16e"}.fa-adn:before{content:"\\f170"}.fa-bitbucket:before{content:"\\f171"}.fa-bitbucket-square:before{content:"\\f172"}.fa-tumblr:before{content:"\\f173"}.fa-tumblr-square:before{content:"\\f174"}.fa-long-arrow-down:before{content:"\\f175"}.fa-long-arrow-up:before{content:"\\f176"}.fa-long-arrow-left:before{content:"\\f177"}.fa-long-arrow-right:before{content:"\\f178"}.fa-apple:before{content:"\\f179"}.fa-windows:before{content:"\\f17a"}.fa-android:before{content:"\\f17b"}.fa-linux:before{content:"\\f17c"}.fa-dribbble:before{content:"\\f17d"}.fa-skype:before{content:"\\f17e"}.fa-foursquare:before{content:"\\f180"}.fa-trello:before{content:"\\f181"}.fa-female:before{content:"\\f182"}.fa-male:before{content:"\\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\\f184"}.fa-sun-o:before{content:"\\f185"}.fa-moon-o:before{content:"\\f186"}.fa-archive:before{content:"\\f187"}.fa-bug:before{content:"\\f188"}.fa-vk:before{content:"\\f189"}.fa-weibo:before{content:"\\f18a"}.fa-renren:before{content:"\\f18b"}.fa-pagelines:before{content:"\\f18c"}.fa-stack-exchange:before{content:"\\f18d"}.fa-arrow-circle-o-right:before{content:"\\f18e"}.fa-arrow-circle-o-left:before{content:"\\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\\f191"}.fa-dot-circle-o:before{content:"\\f192"}.fa-wheelchair:before{content:"\\f193"}.fa-vimeo-square:before{content:"\\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\\f195"}.fa-plus-square-o:before{content:"\\f196"}.fa-space-shuttle:before{content:"\\f197"}.fa-slack:before{content:"\\f198"}.fa-envelope-square:before{content:"\\f199"}.fa-wordpress:before{content:"\\f19a"}.fa-openid:before{content:"\\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\\f19d"}.fa-yahoo:before{content:"\\f19e"}.fa-google:before{content:"\\f1a0"}.fa-reddit:before{content:"\\f1a1"}.fa-reddit-square:before{content:"\\f1a2"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-delicious:before{content:"\\f1a5"}.fa-digg:before{content:"\\f1a6"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-drupal:before{content:"\\f1a9"}.fa-joomla:before{content:"\\f1aa"}.fa-language:before{content:"\\f1ab"}.fa-fax:before{content:"\\f1ac"}.fa-building:before{content:"\\f1ad"}.fa-child:before{content:"\\f1ae"}.fa-paw:before{content:"\\f1b0"}.fa-spoon:before{content:"\\f1b1"}.fa-cube:before{content:"\\f1b2"}.fa-cubes:before{content:"\\f1b3"}.fa-behance:before{content:"\\f1b4"}.fa-behance-square:before{content:"\\f1b5"}.fa-steam:before{content:"\\f1b6"}.fa-steam-square:before{content:"\\f1b7"}.fa-recycle:before{content:"\\f1b8"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-tree:before{content:"\\f1bb"}.fa-spotify:before{content:"\\f1bc"}.fa-deviantart:before{content:"\\f1bd"}.fa-soundcloud:before{content:"\\f1be"}.fa-database:before{content:"\\f1c0"}.fa-file-pdf-o:before{content:"\\f1c1"}.fa-file-word-o:before{content:"\\f1c2"}.fa-file-excel-o:before{content:"\\f1c3"}.fa-file-powerpoint-o:before{content:"\\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\\f1c8"}.fa-file-code-o:before{content:"\\f1c9"}.fa-vine:before{content:"\\f1ca"}.fa-codepen:before{content:"\\f1cb"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\\f1cd"}.fa-circle-o-notch:before{content:"\\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\\f1d0"}.fa-ge:before,.fa-empire:before{content:"\\f1d1"}.fa-git-square:before{content:"\\f1d2"}.fa-git:before{content:"\\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\\f1d4"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-qq:before{content:"\\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\\f1d9"}.fa-history:before{content:"\\f1da"}.fa-circle-thin:before{content:"\\f1db"}.fa-header:before{content:"\\f1dc"}.fa-paragraph:before{content:"\\f1dd"}.fa-sliders:before{content:"\\f1de"}.fa-share-alt:before{content:"\\f1e0"}.fa-share-alt-square:before{content:"\\f1e1"}.fa-bomb:before{content:"\\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\\f1e3"}.fa-tty:before{content:"\\f1e4"}.fa-binoculars:before{content:"\\f1e5"}.fa-plug:before{content:"\\f1e6"}.fa-slideshare:before{content:"\\f1e7"}.fa-twitch:before{content:"\\f1e8"}.fa-yelp:before{content:"\\f1e9"}.fa-newspaper-o:before{content:"\\f1ea"}.fa-wifi:before{content:"\\f1eb"}.fa-calculator:before{content:"\\f1ec"}.fa-paypal:before{content:"\\f1ed"}.fa-google-wallet:before{content:"\\f1ee"}.fa-cc-visa:before{content:"\\f1f0"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-cc-discover:before{content:"\\f1f2"}.fa-cc-amex:before{content:"\\f1f3"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-bell-slash:before{content:"\\f1f6"}.fa-bell-slash-o:before{content:"\\f1f7"}.fa-trash:before{content:"\\f1f8"}.fa-copyright:before{content:"\\f1f9"}.fa-at:before{content:"\\f1fa"}.fa-eyedropper:before{content:"\\f1fb"}.fa-paint-brush:before{content:"\\f1fc"}.fa-birthday-cake:before{content:"\\f1fd"}.fa-area-chart:before{content:"\\f1fe"}.fa-pie-chart:before{content:"\\f200"}.fa-line-chart:before{content:"\\f201"}.fa-lastfm:before{content:"\\f202"}.fa-lastfm-square:before{content:"\\f203"}.fa-toggle-off:before{content:"\\f204"}.fa-toggle-on:before{content:"\\f205"}.fa-bicycle:before{content:"\\f206"}.fa-bus:before{content:"\\f207"}.fa-ioxhost:before{content:"\\f208"}.fa-angellist:before{content:"\\f209"}.fa-cc:before{content:"\\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\\f20b"}.fa-meanpath:before{content:"\\f20c"}.fa-buysellads:before{content:"\\f20d"}.fa-connectdevelop:before{content:"\\f20e"}.fa-dashcube:before{content:"\\f210"}.fa-forumbee:before{content:"\\f211"}.fa-leanpub:before{content:"\\f212"}.fa-sellsy:before{content:"\\f213"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-simplybuilt:before{content:"\\f215"}.fa-skyatlas:before{content:"\\f216"}.fa-cart-plus:before{content:"\\f217"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-diamond:before{content:"\\f219"}.fa-ship:before{content:"\\f21a"}.fa-user-secret:before{content:"\\f21b"}.fa-motorcycle:before{content:"\\f21c"}.fa-street-view:before{content:"\\f21d"}.fa-heartbeat:before{content:"\\f21e"}.fa-venus:before{content:"\\f221"}.fa-mars:before{content:"\\f222"}.fa-mercury:before{content:"\\f223"}.fa-intersex:before,.fa-transgender:before{content:"\\f224"}.fa-transgender-alt:before{content:"\\f225"}.fa-venus-double:before{content:"\\f226"}.fa-mars-double:before{content:"\\f227"}.fa-venus-mars:before{content:"\\f228"}.fa-mars-stroke:before{content:"\\f229"}.fa-mars-stroke-v:before{content:"\\f22a"}.fa-mars-stroke-h:before{content:"\\f22b"}.fa-neuter:before{content:"\\f22c"}.fa-genderless:before{content:"\\f22d"}.fa-facebook-official:before{content:"\\f230"}.fa-pinterest-p:before{content:"\\f231"}.fa-whatsapp:before{content:"\\f232"}.fa-server:before{content:"\\f233"}.fa-user-plus:before{content:"\\f234"}.fa-user-times:before{content:"\\f235"}.fa-hotel:before,.fa-bed:before{content:"\\f236"}.fa-viacoin:before{content:"\\f237"}.fa-train:before{content:"\\f238"}.fa-subway:before{content:"\\f239"}.fa-medium:before{content:"\\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\\f23b"}.fa-optin-monster:before{content:"\\f23c"}.fa-opencart:before{content:"\\f23d"}.fa-expeditedssl:before{content:"\\f23e"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-mouse-pointer:before{content:"\\f245"}.fa-i-cursor:before{content:"\\f246"}.fa-object-group:before{content:"\\f247"}.fa-object-ungroup:before{content:"\\f248"}.fa-sticky-note:before{content:"\\f249"}.fa-sticky-note-o:before{content:"\\f24a"}.fa-cc-jcb:before{content:"\\f24b"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-clone:before{content:"\\f24d"}.fa-balance-scale:before{content:"\\f24e"}.fa-hourglass-o:before{content:"\\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-hourglass:before{content:"\\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\\f256"}.fa-hand-scissors-o:before{content:"\\f257"}.fa-hand-lizard-o:before{content:"\\f258"}.fa-hand-spock-o:before{content:"\\f259"}.fa-hand-pointer-o:before{content:"\\f25a"}.fa-hand-peace-o:before{content:"\\f25b"}.fa-trademark:before{content:"\\f25c"}.fa-registered:before{content:"\\f25d"}.fa-creative-commons:before{content:"\\f25e"}.fa-gg:before{content:"\\f260"}.fa-gg-circle:before{content:"\\f261"}.fa-tripadvisor:before{content:"\\f262"}.fa-odnoklassniki:before{content:"\\f263"}.fa-odnoklassniki-square:before{content:"\\f264"}.fa-get-pocket:before{content:"\\f265"}.fa-wikipedia-w:before{content:"\\f266"}.fa-safari:before{content:"\\f267"}.fa-chrome:before{content:"\\f268"}.fa-firefox:before{content:"\\f269"}.fa-opera:before{content:"\\f26a"}.fa-internet-explorer:before{content:"\\f26b"}.fa-tv:before,.fa-television:before{content:"\\f26c"}.fa-contao:before{content:"\\f26d"}.fa-500px:before{content:"\\f26e"}.fa-amazon:before{content:"\\f270"}.fa-calendar-plus-o:before{content:"\\f271"}.fa-calendar-minus-o:before{content:"\\f272"}.fa-calendar-times-o:before{content:"\\f273"}.fa-calendar-check-o:before{content:"\\f274"}.fa-industry:before{content:"\\f275"}.fa-map-pin:before{content:"\\f276"}.fa-map-signs:before{content:"\\f277"}.fa-map-o:before{content:"\\f278"}.fa-map:before{content:"\\f279"}.fa-commenting:before{content:"\\f27a"}.fa-commenting-o:before{content:"\\f27b"}.fa-houzz:before{content:"\\f27c"}.fa-vimeo:before{content:"\\f27d"}.fa-black-tie:before{content:"\\f27e"}.fa-fonticons:before{content:"\\f280"}.fa-reddit-alien:before{content:"\\f281"}.fa-edge:before{content:"\\f282"}.fa-credit-card-alt:before{content:"\\f283"}.fa-codiepie:before{content:"\\f284"}.fa-modx:before{content:"\\f285"}.fa-fort-awesome:before{content:"\\f286"}.fa-usb:before{content:"\\f287"}.fa-product-hunt:before{content:"\\f288"}.fa-mixcloud:before{content:"\\f289"}.fa-scribd:before{content:"\\f28a"}.fa-pause-circle:before{content:"\\f28b"}.fa-pause-circle-o:before{content:"\\f28c"}.fa-stop-circle:before{content:"\\f28d"}.fa-stop-circle-o:before{content:"\\f28e"}.fa-shopping-bag:before{content:"\\f290"}.fa-shopping-basket:before{content:"\\f291"}.fa-hashtag:before{content:"\\f292"}.fa-bluetooth:before{content:"\\f293"}.fa-bluetooth-b:before{content:"\\f294"}.fa-percent:before{content:"\\f295"}.fa-gitlab:before{content:"\\f296"}.fa-wpbeginner:before{content:"\\f297"}.fa-wpforms:before{content:"\\f298"}.fa-envira:before{content:"\\f299"}.fa-universal-access:before{content:"\\f29a"}.fa-wheelchair-alt:before{content:"\\f29b"}.fa-question-circle-o:before{content:"\\f29c"}.fa-blind:before{content:"\\f29d"}.fa-audio-description:before{content:"\\f29e"}.fa-volume-control-phone:before{content:"\\f2a0"}.fa-braille:before{content:"\\f2a1"}.fa-assistive-listening-systems:before{content:"\\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\\f2a4"}.fa-glide:before{content:"\\f2a5"}.fa-glide-g:before{content:"\\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\\f2a7"}.fa-low-vision:before{content:"\\f2a8"}.fa-viadeo:before{content:"\\f2a9"}.fa-viadeo-square:before{content:"\\f2aa"}.fa-snapchat:before{content:"\\f2ab"}.fa-snapchat-ghost:before{content:"\\f2ac"}.fa-snapchat-square:before{content:"\\f2ad"}.fa-pied-piper:before{content:"\\f2ae"}.fa-first-order:before{content:"\\f2b0"}.fa-yoast:before{content:"\\f2b1"}.fa-themeisle:before{content:"\\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-handshake-o:before{content:"\\f2b5"}.fa-envelope-open:before{content:"\\f2b6"}.fa-envelope-open-o:before{content:"\\f2b7"}.fa-linode:before{content:"\\f2b8"}.fa-address-book:before{content:"\\f2b9"}.fa-address-book-o:before{content:"\\f2ba"}.fa-vcard:before,.fa-address-card:before{content:"\\f2bb"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\\f2bc"}.fa-user-circle:before{content:"\\f2bd"}.fa-user-circle-o:before{content:"\\f2be"}.fa-user-o:before{content:"\\f2c0"}.fa-id-badge:before{content:"\\f2c1"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\\f2c3"}.fa-quora:before{content:"\\f2c4"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-telegram:before{content:"\\f2c6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-shower:before{content:"\\f2cc"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\\f2cd"}.fa-podcast:before{content:"\\f2ce"}.fa-window-maximize:before{content:"\\f2d0"}.fa-window-minimize:before{content:"\\f2d1"}.fa-window-restore:before{content:"\\f2d2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\\f2d3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\\f2d4"}.fa-bandcamp:before{content:"\\f2d5"}.fa-grav:before{content:"\\f2d6"}.fa-etsy:before{content:"\\f2d7"}.fa-imdb:before{content:"\\f2d8"}.fa-ravelry:before{content:"\\f2d9"}.fa-eercast:before{content:"\\f2da"}.fa-microchip:before{content:"\\f2db"}.fa-snowflake-o:before{content:"\\f2dc"}.fa-superpowers:before{content:"\\f2dd"}.fa-wpexplorer:before{content:"\\f2de"}.fa-meetup:before{content:"\\f2e0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}.angular-editor{position:relative}.angular-editor ::ng-deep [contenteditable=true]:empty:before{content:attr(placeholder);color:#868e96;opacity:1}.angular-editor .angular-editor-wrapper{position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea{min-height:5rem;padding:.5rem .8rem 1rem;border:1px solid #ddd;background-color:transparent;overflow-x:hidden;overflow-y:auto;position:relative}.angular-editor .angular-editor-wrapper .angular-editor-textarea ::ng-deep blockquote{margin-left:1rem;border-left:.2em solid #dfe2e5;padding-left:.5rem}.angular-editor .angular-editor-wrapper ::ng-deep p{margin-bottom:0}.angular-editor .angular-editor-wrapper .angular-editor-placeholder{display:none;position:absolute;top:0;padding:.5rem .8rem 1rem .9rem;color:#6c757d;opacity:.75}.angular-editor .angular-editor-wrapper.show-placeholder .angular-editor-placeholder{display:block}.angular-editor .angular-editor-wrapper.disabled{cursor:not-allowed;opacity:.5;pointer-events:none}\n']
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: AngularEditorService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: DomSanitizer
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["tabindex"]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["autofocus"]
      }]
    }];
  }, {
    id: [{
      type: Input
    }],
    config: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    html: [{
      type: Output
    }],
    textArea: [{
      type: ViewChild,
      args: ["editor", {
        static: true
      }]
    }],
    editorWrapper: [{
      type: ViewChild,
      args: ["editorWrapper", {
        static: true
      }]
    }],
    editorToolbar: [{
      type: ViewChild,
      args: ["editorToolbar"]
    }],
    customButtonsTemplateRef: [{
      type: ContentChild,
      args: ["customButtons"]
    }],
    viewMode: [{
      type: Output
    }],
    blurEvent: [{
      type: Output,
      args: ["blur"]
    }],
    focusEvent: [{
      type: Output,
      args: ["focus"]
    }],
    tabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }]
  });
})();
var AeButtonComponent = class {
  constructor() {
    this.iconClass = "";
    this.title = "";
    this.buttonClick = new EventEmitter();
  }
};
AeButtonComponent.ɵfac = function AeButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AeButtonComponent)();
};
AeButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: AeButtonComponent,
  selectors: [["ae-button"]],
  inputs: {
    iconClass: "iconClass",
    title: "title"
  },
  outputs: {
    buttonClick: "buttonClick"
  },
  decls: 2,
  vars: 3,
  consts: [["type", "button", "tabindex", "-1", 1, "angular-editor-button", 3, "click", "title"]],
  template: function AeButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function AeButtonComponent_Template_button_click_0_listener() {
        return ctx.buttonClick.emit();
      });
      ɵɵelement(1, "i");
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("title", ctx.title);
      ɵɵadvance();
      ɵɵclassMap(ctx.iconClass);
    }
  },
  styles: ['/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{animation:fa-spin 2s infinite linear}.fa-pulse{animation:fa-spin 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\\f000"}.fa-music:before{content:"\\f001"}.fa-search:before{content:"\\f002"}.fa-envelope-o:before{content:"\\f003"}.fa-heart:before{content:"\\f004"}.fa-star:before{content:"\\f005"}.fa-star-o:before{content:"\\f006"}.fa-user:before{content:"\\f007"}.fa-film:before{content:"\\f008"}.fa-th-large:before{content:"\\f009"}.fa-th:before{content:"\\f00a"}.fa-th-list:before{content:"\\f00b"}.fa-check:before{content:"\\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\\f00d"}.fa-search-plus:before{content:"\\f00e"}.fa-search-minus:before{content:"\\f010"}.fa-power-off:before{content:"\\f011"}.fa-signal:before{content:"\\f012"}.fa-gear:before,.fa-cog:before{content:"\\f013"}.fa-trash-o:before{content:"\\f014"}.fa-home:before{content:"\\f015"}.fa-file-o:before{content:"\\f016"}.fa-clock-o:before{content:"\\f017"}.fa-road:before{content:"\\f018"}.fa-download:before{content:"\\f019"}.fa-arrow-circle-o-down:before{content:"\\f01a"}.fa-arrow-circle-o-up:before{content:"\\f01b"}.fa-inbox:before{content:"\\f01c"}.fa-play-circle-o:before{content:"\\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\\f01e"}.fa-refresh:before{content:"\\f021"}.fa-list-alt:before{content:"\\f022"}.fa-lock:before{content:"\\f023"}.fa-flag:before{content:"\\f024"}.fa-headphones:before{content:"\\f025"}.fa-volume-off:before{content:"\\f026"}.fa-volume-down:before{content:"\\f027"}.fa-volume-up:before{content:"\\f028"}.fa-qrcode:before{content:"\\f029"}.fa-barcode:before{content:"\\f02a"}.fa-tag:before{content:"\\f02b"}.fa-tags:before{content:"\\f02c"}.fa-book:before{content:"\\f02d"}.fa-bookmark:before{content:"\\f02e"}.fa-print:before{content:"\\f02f"}.fa-camera:before{content:"\\f030"}.fa-font:before{content:"\\f031"}.fa-bold:before{content:"\\f032"}.fa-italic:before{content:"\\f033"}.fa-text-height:before{content:"\\f034"}.fa-text-width:before{content:"\\f035"}.fa-align-left:before{content:"\\f036"}.fa-align-center:before{content:"\\f037"}.fa-align-right:before{content:"\\f038"}.fa-align-justify:before{content:"\\f039"}.fa-list:before{content:"\\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-indent:before{content:"\\f03c"}.fa-video-camera:before{content:"\\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\\f03e"}.fa-pencil:before{content:"\\f040"}.fa-map-marker:before{content:"\\f041"}.fa-adjust:before{content:"\\f042"}.fa-tint:before{content:"\\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\\f044"}.fa-share-square-o:before{content:"\\f045"}.fa-check-square-o:before{content:"\\f046"}.fa-arrows:before{content:"\\f047"}.fa-step-backward:before{content:"\\f048"}.fa-fast-backward:before{content:"\\f049"}.fa-backward:before{content:"\\f04a"}.fa-play:before{content:"\\f04b"}.fa-pause:before{content:"\\f04c"}.fa-stop:before{content:"\\f04d"}.fa-forward:before{content:"\\f04e"}.fa-fast-forward:before{content:"\\f050"}.fa-step-forward:before{content:"\\f051"}.fa-eject:before{content:"\\f052"}.fa-chevron-left:before{content:"\\f053"}.fa-chevron-right:before{content:"\\f054"}.fa-plus-circle:before{content:"\\f055"}.fa-minus-circle:before{content:"\\f056"}.fa-times-circle:before{content:"\\f057"}.fa-check-circle:before{content:"\\f058"}.fa-question-circle:before{content:"\\f059"}.fa-info-circle:before{content:"\\f05a"}.fa-crosshairs:before{content:"\\f05b"}.fa-times-circle-o:before{content:"\\f05c"}.fa-check-circle-o:before{content:"\\f05d"}.fa-ban:before{content:"\\f05e"}.fa-arrow-left:before{content:"\\f060"}.fa-arrow-right:before{content:"\\f061"}.fa-arrow-up:before{content:"\\f062"}.fa-arrow-down:before{content:"\\f063"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-expand:before{content:"\\f065"}.fa-compress:before{content:"\\f066"}.fa-plus:before{content:"\\f067"}.fa-minus:before{content:"\\f068"}.fa-asterisk:before{content:"\\f069"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-gift:before{content:"\\f06b"}.fa-leaf:before{content:"\\f06c"}.fa-fire:before{content:"\\f06d"}.fa-eye:before{content:"\\f06e"}.fa-eye-slash:before{content:"\\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\\f071"}.fa-plane:before{content:"\\f072"}.fa-calendar:before{content:"\\f073"}.fa-random:before{content:"\\f074"}.fa-comment:before{content:"\\f075"}.fa-magnet:before{content:"\\f076"}.fa-chevron-up:before{content:"\\f077"}.fa-chevron-down:before{content:"\\f078"}.fa-retweet:before{content:"\\f079"}.fa-shopping-cart:before{content:"\\f07a"}.fa-folder:before{content:"\\f07b"}.fa-folder-open:before{content:"\\f07c"}.fa-arrows-v:before{content:"\\f07d"}.fa-arrows-h:before{content:"\\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\\f080"}.fa-twitter-square:before{content:"\\f081"}.fa-facebook-square:before{content:"\\f082"}.fa-camera-retro:before{content:"\\f083"}.fa-key:before{content:"\\f084"}.fa-gears:before,.fa-cogs:before{content:"\\f085"}.fa-comments:before{content:"\\f086"}.fa-thumbs-o-up:before{content:"\\f087"}.fa-thumbs-o-down:before{content:"\\f088"}.fa-star-half:before{content:"\\f089"}.fa-heart-o:before{content:"\\f08a"}.fa-sign-out:before{content:"\\f08b"}.fa-linkedin-square:before{content:"\\f08c"}.fa-thumb-tack:before{content:"\\f08d"}.fa-external-link:before{content:"\\f08e"}.fa-sign-in:before{content:"\\f090"}.fa-trophy:before{content:"\\f091"}.fa-github-square:before{content:"\\f092"}.fa-upload:before{content:"\\f093"}.fa-lemon-o:before{content:"\\f094"}.fa-phone:before{content:"\\f095"}.fa-square-o:before{content:"\\f096"}.fa-bookmark-o:before{content:"\\f097"}.fa-phone-square:before{content:"\\f098"}.fa-twitter:before{content:"\\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\\f09a"}.fa-github:before{content:"\\f09b"}.fa-unlock:before{content:"\\f09c"}.fa-credit-card:before{content:"\\f09d"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-hdd-o:before{content:"\\f0a0"}.fa-bullhorn:before{content:"\\f0a1"}.fa-bell:before{content:"\\f0f3"}.fa-certificate:before{content:"\\f0a3"}.fa-hand-o-right:before{content:"\\f0a4"}.fa-hand-o-left:before{content:"\\f0a5"}.fa-hand-o-up:before{content:"\\f0a6"}.fa-hand-o-down:before{content:"\\f0a7"}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-arrow-circle-up:before{content:"\\f0aa"}.fa-arrow-circle-down:before{content:"\\f0ab"}.fa-globe:before{content:"\\f0ac"}.fa-wrench:before{content:"\\f0ad"}.fa-tasks:before{content:"\\f0ae"}.fa-filter:before{content:"\\f0b0"}.fa-briefcase:before{content:"\\f0b1"}.fa-arrows-alt:before{content:"\\f0b2"}.fa-group:before,.fa-users:before{content:"\\f0c0"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-cloud:before{content:"\\f0c2"}.fa-flask:before{content:"\\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\\f0c5"}.fa-paperclip:before{content:"\\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\\f0c7"}.fa-square:before{content:"\\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\\f0c9"}.fa-list-ul:before{content:"\\f0ca"}.fa-list-ol:before{content:"\\f0cb"}.fa-strikethrough:before{content:"\\f0cc"}.fa-underline:before{content:"\\f0cd"}.fa-table:before{content:"\\f0ce"}.fa-magic:before{content:"\\f0d0"}.fa-truck:before{content:"\\f0d1"}.fa-pinterest:before{content:"\\f0d2"}.fa-pinterest-square:before{content:"\\f0d3"}.fa-google-plus-square:before{content:"\\f0d4"}.fa-google-plus:before{content:"\\f0d5"}.fa-money:before{content:"\\f0d6"}.fa-caret-down:before{content:"\\f0d7"}.fa-caret-up:before{content:"\\f0d8"}.fa-caret-left:before{content:"\\f0d9"}.fa-caret-right:before{content:"\\f0da"}.fa-columns:before{content:"\\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\\f0de"}.fa-envelope:before{content:"\\f0e0"}.fa-linkedin:before{content:"\\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\\f0e4"}.fa-comment-o:before{content:"\\f0e5"}.fa-comments-o:before{content:"\\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\\f0e7"}.fa-sitemap:before{content:"\\f0e8"}.fa-umbrella:before{content:"\\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\\f0ea"}.fa-lightbulb-o:before{content:"\\f0eb"}.fa-exchange:before{content:"\\f0ec"}.fa-cloud-download:before{content:"\\f0ed"}.fa-cloud-upload:before{content:"\\f0ee"}.fa-user-md:before{content:"\\f0f0"}.fa-stethoscope:before{content:"\\f0f1"}.fa-suitcase:before{content:"\\f0f2"}.fa-bell-o:before{content:"\\f0a2"}.fa-coffee:before{content:"\\f0f4"}.fa-cutlery:before{content:"\\f0f5"}.fa-file-text-o:before{content:"\\f0f6"}.fa-building-o:before{content:"\\f0f7"}.fa-hospital-o:before{content:"\\f0f8"}.fa-ambulance:before{content:"\\f0f9"}.fa-medkit:before{content:"\\f0fa"}.fa-fighter-jet:before{content:"\\f0fb"}.fa-beer:before{content:"\\f0fc"}.fa-h-square:before{content:"\\f0fd"}.fa-plus-square:before{content:"\\f0fe"}.fa-angle-double-left:before{content:"\\f100"}.fa-angle-double-right:before{content:"\\f101"}.fa-angle-double-up:before{content:"\\f102"}.fa-angle-double-down:before{content:"\\f103"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-angle-up:before{content:"\\f106"}.fa-angle-down:before{content:"\\f107"}.fa-desktop:before{content:"\\f108"}.fa-laptop:before{content:"\\f109"}.fa-tablet:before{content:"\\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\\f10b"}.fa-circle-o:before{content:"\\f10c"}.fa-quote-left:before{content:"\\f10d"}.fa-quote-right:before{content:"\\f10e"}.fa-spinner:before{content:"\\f110"}.fa-circle:before{content:"\\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\\f112"}.fa-github-alt:before{content:"\\f113"}.fa-folder-o:before{content:"\\f114"}.fa-folder-open-o:before{content:"\\f115"}.fa-smile-o:before{content:"\\f118"}.fa-frown-o:before{content:"\\f119"}.fa-meh-o:before{content:"\\f11a"}.fa-gamepad:before{content:"\\f11b"}.fa-keyboard-o:before{content:"\\f11c"}.fa-flag-o:before{content:"\\f11d"}.fa-flag-checkered:before{content:"\\f11e"}.fa-terminal:before{content:"\\f120"}.fa-code:before{content:"\\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\\f123"}.fa-location-arrow:before{content:"\\f124"}.fa-crop:before{content:"\\f125"}.fa-code-fork:before{content:"\\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\\f127"}.fa-question:before{content:"\\f128"}.fa-info:before{content:"\\f129"}.fa-exclamation:before{content:"\\f12a"}.fa-superscript:before{content:"\\f12b"}.fa-subscript:before{content:"\\f12c"}.fa-eraser:before{content:"\\f12d"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-microphone:before{content:"\\f130"}.fa-microphone-slash:before{content:"\\f131"}.fa-shield:before{content:"\\f132"}.fa-calendar-o:before{content:"\\f133"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-rocket:before{content:"\\f135"}.fa-maxcdn:before{content:"\\f136"}.fa-chevron-circle-left:before{content:"\\f137"}.fa-chevron-circle-right:before{content:"\\f138"}.fa-chevron-circle-up:before{content:"\\f139"}.fa-chevron-circle-down:before{content:"\\f13a"}.fa-html5:before{content:"\\f13b"}.fa-css3:before{content:"\\f13c"}.fa-anchor:before{content:"\\f13d"}.fa-unlock-alt:before{content:"\\f13e"}.fa-bullseye:before{content:"\\f140"}.fa-ellipsis-h:before{content:"\\f141"}.fa-ellipsis-v:before{content:"\\f142"}.fa-rss-square:before{content:"\\f143"}.fa-play-circle:before{content:"\\f144"}.fa-ticket:before{content:"\\f145"}.fa-minus-square:before{content:"\\f146"}.fa-minus-square-o:before{content:"\\f147"}.fa-level-up:before{content:"\\f148"}.fa-level-down:before{content:"\\f149"}.fa-check-square:before{content:"\\f14a"}.fa-pencil-square:before{content:"\\f14b"}.fa-external-link-square:before{content:"\\f14c"}.fa-share-square:before{content:"\\f14d"}.fa-compass:before{content:"\\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\\f152"}.fa-euro:before,.fa-eur:before{content:"\\f153"}.fa-gbp:before{content:"\\f154"}.fa-dollar:before,.fa-usd:before{content:"\\f155"}.fa-rupee:before,.fa-inr:before{content:"\\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\\f158"}.fa-won:before,.fa-krw:before{content:"\\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\\f15a"}.fa-file:before{content:"\\f15b"}.fa-file-text:before{content:"\\f15c"}.fa-sort-alpha-asc:before{content:"\\f15d"}.fa-sort-alpha-desc:before{content:"\\f15e"}.fa-sort-amount-asc:before{content:"\\f160"}.fa-sort-amount-desc:before{content:"\\f161"}.fa-sort-numeric-asc:before{content:"\\f162"}.fa-sort-numeric-desc:before{content:"\\f163"}.fa-thumbs-up:before{content:"\\f164"}.fa-thumbs-down:before{content:"\\f165"}.fa-youtube-square:before{content:"\\f166"}.fa-youtube:before{content:"\\f167"}.fa-xing:before{content:"\\f168"}.fa-xing-square:before{content:"\\f169"}.fa-youtube-play:before{content:"\\f16a"}.fa-dropbox:before{content:"\\f16b"}.fa-stack-overflow:before{content:"\\f16c"}.fa-instagram:before{content:"\\f16d"}.fa-flickr:before{content:"\\f16e"}.fa-adn:before{content:"\\f170"}.fa-bitbucket:before{content:"\\f171"}.fa-bitbucket-square:before{content:"\\f172"}.fa-tumblr:before{content:"\\f173"}.fa-tumblr-square:before{content:"\\f174"}.fa-long-arrow-down:before{content:"\\f175"}.fa-long-arrow-up:before{content:"\\f176"}.fa-long-arrow-left:before{content:"\\f177"}.fa-long-arrow-right:before{content:"\\f178"}.fa-apple:before{content:"\\f179"}.fa-windows:before{content:"\\f17a"}.fa-android:before{content:"\\f17b"}.fa-linux:before{content:"\\f17c"}.fa-dribbble:before{content:"\\f17d"}.fa-skype:before{content:"\\f17e"}.fa-foursquare:before{content:"\\f180"}.fa-trello:before{content:"\\f181"}.fa-female:before{content:"\\f182"}.fa-male:before{content:"\\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\\f184"}.fa-sun-o:before{content:"\\f185"}.fa-moon-o:before{content:"\\f186"}.fa-archive:before{content:"\\f187"}.fa-bug:before{content:"\\f188"}.fa-vk:before{content:"\\f189"}.fa-weibo:before{content:"\\f18a"}.fa-renren:before{content:"\\f18b"}.fa-pagelines:before{content:"\\f18c"}.fa-stack-exchange:before{content:"\\f18d"}.fa-arrow-circle-o-right:before{content:"\\f18e"}.fa-arrow-circle-o-left:before{content:"\\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\\f191"}.fa-dot-circle-o:before{content:"\\f192"}.fa-wheelchair:before{content:"\\f193"}.fa-vimeo-square:before{content:"\\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\\f195"}.fa-plus-square-o:before{content:"\\f196"}.fa-space-shuttle:before{content:"\\f197"}.fa-slack:before{content:"\\f198"}.fa-envelope-square:before{content:"\\f199"}.fa-wordpress:before{content:"\\f19a"}.fa-openid:before{content:"\\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\\f19d"}.fa-yahoo:before{content:"\\f19e"}.fa-google:before{content:"\\f1a0"}.fa-reddit:before{content:"\\f1a1"}.fa-reddit-square:before{content:"\\f1a2"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-delicious:before{content:"\\f1a5"}.fa-digg:before{content:"\\f1a6"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-drupal:before{content:"\\f1a9"}.fa-joomla:before{content:"\\f1aa"}.fa-language:before{content:"\\f1ab"}.fa-fax:before{content:"\\f1ac"}.fa-building:before{content:"\\f1ad"}.fa-child:before{content:"\\f1ae"}.fa-paw:before{content:"\\f1b0"}.fa-spoon:before{content:"\\f1b1"}.fa-cube:before{content:"\\f1b2"}.fa-cubes:before{content:"\\f1b3"}.fa-behance:before{content:"\\f1b4"}.fa-behance-square:before{content:"\\f1b5"}.fa-steam:before{content:"\\f1b6"}.fa-steam-square:before{content:"\\f1b7"}.fa-recycle:before{content:"\\f1b8"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-tree:before{content:"\\f1bb"}.fa-spotify:before{content:"\\f1bc"}.fa-deviantart:before{content:"\\f1bd"}.fa-soundcloud:before{content:"\\f1be"}.fa-database:before{content:"\\f1c0"}.fa-file-pdf-o:before{content:"\\f1c1"}.fa-file-word-o:before{content:"\\f1c2"}.fa-file-excel-o:before{content:"\\f1c3"}.fa-file-powerpoint-o:before{content:"\\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\\f1c8"}.fa-file-code-o:before{content:"\\f1c9"}.fa-vine:before{content:"\\f1ca"}.fa-codepen:before{content:"\\f1cb"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\\f1cd"}.fa-circle-o-notch:before{content:"\\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\\f1d0"}.fa-ge:before,.fa-empire:before{content:"\\f1d1"}.fa-git-square:before{content:"\\f1d2"}.fa-git:before{content:"\\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\\f1d4"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-qq:before{content:"\\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\\f1d9"}.fa-history:before{content:"\\f1da"}.fa-circle-thin:before{content:"\\f1db"}.fa-header:before{content:"\\f1dc"}.fa-paragraph:before{content:"\\f1dd"}.fa-sliders:before{content:"\\f1de"}.fa-share-alt:before{content:"\\f1e0"}.fa-share-alt-square:before{content:"\\f1e1"}.fa-bomb:before{content:"\\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\\f1e3"}.fa-tty:before{content:"\\f1e4"}.fa-binoculars:before{content:"\\f1e5"}.fa-plug:before{content:"\\f1e6"}.fa-slideshare:before{content:"\\f1e7"}.fa-twitch:before{content:"\\f1e8"}.fa-yelp:before{content:"\\f1e9"}.fa-newspaper-o:before{content:"\\f1ea"}.fa-wifi:before{content:"\\f1eb"}.fa-calculator:before{content:"\\f1ec"}.fa-paypal:before{content:"\\f1ed"}.fa-google-wallet:before{content:"\\f1ee"}.fa-cc-visa:before{content:"\\f1f0"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-cc-discover:before{content:"\\f1f2"}.fa-cc-amex:before{content:"\\f1f3"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-bell-slash:before{content:"\\f1f6"}.fa-bell-slash-o:before{content:"\\f1f7"}.fa-trash:before{content:"\\f1f8"}.fa-copyright:before{content:"\\f1f9"}.fa-at:before{content:"\\f1fa"}.fa-eyedropper:before{content:"\\f1fb"}.fa-paint-brush:before{content:"\\f1fc"}.fa-birthday-cake:before{content:"\\f1fd"}.fa-area-chart:before{content:"\\f1fe"}.fa-pie-chart:before{content:"\\f200"}.fa-line-chart:before{content:"\\f201"}.fa-lastfm:before{content:"\\f202"}.fa-lastfm-square:before{content:"\\f203"}.fa-toggle-off:before{content:"\\f204"}.fa-toggle-on:before{content:"\\f205"}.fa-bicycle:before{content:"\\f206"}.fa-bus:before{content:"\\f207"}.fa-ioxhost:before{content:"\\f208"}.fa-angellist:before{content:"\\f209"}.fa-cc:before{content:"\\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\\f20b"}.fa-meanpath:before{content:"\\f20c"}.fa-buysellads:before{content:"\\f20d"}.fa-connectdevelop:before{content:"\\f20e"}.fa-dashcube:before{content:"\\f210"}.fa-forumbee:before{content:"\\f211"}.fa-leanpub:before{content:"\\f212"}.fa-sellsy:before{content:"\\f213"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-simplybuilt:before{content:"\\f215"}.fa-skyatlas:before{content:"\\f216"}.fa-cart-plus:before{content:"\\f217"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-diamond:before{content:"\\f219"}.fa-ship:before{content:"\\f21a"}.fa-user-secret:before{content:"\\f21b"}.fa-motorcycle:before{content:"\\f21c"}.fa-street-view:before{content:"\\f21d"}.fa-heartbeat:before{content:"\\f21e"}.fa-venus:before{content:"\\f221"}.fa-mars:before{content:"\\f222"}.fa-mercury:before{content:"\\f223"}.fa-intersex:before,.fa-transgender:before{content:"\\f224"}.fa-transgender-alt:before{content:"\\f225"}.fa-venus-double:before{content:"\\f226"}.fa-mars-double:before{content:"\\f227"}.fa-venus-mars:before{content:"\\f228"}.fa-mars-stroke:before{content:"\\f229"}.fa-mars-stroke-v:before{content:"\\f22a"}.fa-mars-stroke-h:before{content:"\\f22b"}.fa-neuter:before{content:"\\f22c"}.fa-genderless:before{content:"\\f22d"}.fa-facebook-official:before{content:"\\f230"}.fa-pinterest-p:before{content:"\\f231"}.fa-whatsapp:before{content:"\\f232"}.fa-server:before{content:"\\f233"}.fa-user-plus:before{content:"\\f234"}.fa-user-times:before{content:"\\f235"}.fa-hotel:before,.fa-bed:before{content:"\\f236"}.fa-viacoin:before{content:"\\f237"}.fa-train:before{content:"\\f238"}.fa-subway:before{content:"\\f239"}.fa-medium:before{content:"\\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\\f23b"}.fa-optin-monster:before{content:"\\f23c"}.fa-opencart:before{content:"\\f23d"}.fa-expeditedssl:before{content:"\\f23e"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-mouse-pointer:before{content:"\\f245"}.fa-i-cursor:before{content:"\\f246"}.fa-object-group:before{content:"\\f247"}.fa-object-ungroup:before{content:"\\f248"}.fa-sticky-note:before{content:"\\f249"}.fa-sticky-note-o:before{content:"\\f24a"}.fa-cc-jcb:before{content:"\\f24b"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-clone:before{content:"\\f24d"}.fa-balance-scale:before{content:"\\f24e"}.fa-hourglass-o:before{content:"\\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-hourglass:before{content:"\\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\\f256"}.fa-hand-scissors-o:before{content:"\\f257"}.fa-hand-lizard-o:before{content:"\\f258"}.fa-hand-spock-o:before{content:"\\f259"}.fa-hand-pointer-o:before{content:"\\f25a"}.fa-hand-peace-o:before{content:"\\f25b"}.fa-trademark:before{content:"\\f25c"}.fa-registered:before{content:"\\f25d"}.fa-creative-commons:before{content:"\\f25e"}.fa-gg:before{content:"\\f260"}.fa-gg-circle:before{content:"\\f261"}.fa-tripadvisor:before{content:"\\f262"}.fa-odnoklassniki:before{content:"\\f263"}.fa-odnoklassniki-square:before{content:"\\f264"}.fa-get-pocket:before{content:"\\f265"}.fa-wikipedia-w:before{content:"\\f266"}.fa-safari:before{content:"\\f267"}.fa-chrome:before{content:"\\f268"}.fa-firefox:before{content:"\\f269"}.fa-opera:before{content:"\\f26a"}.fa-internet-explorer:before{content:"\\f26b"}.fa-tv:before,.fa-television:before{content:"\\f26c"}.fa-contao:before{content:"\\f26d"}.fa-500px:before{content:"\\f26e"}.fa-amazon:before{content:"\\f270"}.fa-calendar-plus-o:before{content:"\\f271"}.fa-calendar-minus-o:before{content:"\\f272"}.fa-calendar-times-o:before{content:"\\f273"}.fa-calendar-check-o:before{content:"\\f274"}.fa-industry:before{content:"\\f275"}.fa-map-pin:before{content:"\\f276"}.fa-map-signs:before{content:"\\f277"}.fa-map-o:before{content:"\\f278"}.fa-map:before{content:"\\f279"}.fa-commenting:before{content:"\\f27a"}.fa-commenting-o:before{content:"\\f27b"}.fa-houzz:before{content:"\\f27c"}.fa-vimeo:before{content:"\\f27d"}.fa-black-tie:before{content:"\\f27e"}.fa-fonticons:before{content:"\\f280"}.fa-reddit-alien:before{content:"\\f281"}.fa-edge:before{content:"\\f282"}.fa-credit-card-alt:before{content:"\\f283"}.fa-codiepie:before{content:"\\f284"}.fa-modx:before{content:"\\f285"}.fa-fort-awesome:before{content:"\\f286"}.fa-usb:before{content:"\\f287"}.fa-product-hunt:before{content:"\\f288"}.fa-mixcloud:before{content:"\\f289"}.fa-scribd:before{content:"\\f28a"}.fa-pause-circle:before{content:"\\f28b"}.fa-pause-circle-o:before{content:"\\f28c"}.fa-stop-circle:before{content:"\\f28d"}.fa-stop-circle-o:before{content:"\\f28e"}.fa-shopping-bag:before{content:"\\f290"}.fa-shopping-basket:before{content:"\\f291"}.fa-hashtag:before{content:"\\f292"}.fa-bluetooth:before{content:"\\f293"}.fa-bluetooth-b:before{content:"\\f294"}.fa-percent:before{content:"\\f295"}.fa-gitlab:before{content:"\\f296"}.fa-wpbeginner:before{content:"\\f297"}.fa-wpforms:before{content:"\\f298"}.fa-envira:before{content:"\\f299"}.fa-universal-access:before{content:"\\f29a"}.fa-wheelchair-alt:before{content:"\\f29b"}.fa-question-circle-o:before{content:"\\f29c"}.fa-blind:before{content:"\\f29d"}.fa-audio-description:before{content:"\\f29e"}.fa-volume-control-phone:before{content:"\\f2a0"}.fa-braille:before{content:"\\f2a1"}.fa-assistive-listening-systems:before{content:"\\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\\f2a4"}.fa-glide:before{content:"\\f2a5"}.fa-glide-g:before{content:"\\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\\f2a7"}.fa-low-vision:before{content:"\\f2a8"}.fa-viadeo:before{content:"\\f2a9"}.fa-viadeo-square:before{content:"\\f2aa"}.fa-snapchat:before{content:"\\f2ab"}.fa-snapchat-ghost:before{content:"\\f2ac"}.fa-snapchat-square:before{content:"\\f2ad"}.fa-pied-piper:before{content:"\\f2ae"}.fa-first-order:before{content:"\\f2b0"}.fa-yoast:before{content:"\\f2b1"}.fa-themeisle:before{content:"\\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-handshake-o:before{content:"\\f2b5"}.fa-envelope-open:before{content:"\\f2b6"}.fa-envelope-open-o:before{content:"\\f2b7"}.fa-linode:before{content:"\\f2b8"}.fa-address-book:before{content:"\\f2b9"}.fa-address-book-o:before{content:"\\f2ba"}.fa-vcard:before,.fa-address-card:before{content:"\\f2bb"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\\f2bc"}.fa-user-circle:before{content:"\\f2bd"}.fa-user-circle-o:before{content:"\\f2be"}.fa-user-o:before{content:"\\f2c0"}.fa-id-badge:before{content:"\\f2c1"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\\f2c3"}.fa-quora:before{content:"\\f2c4"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-telegram:before{content:"\\f2c6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-shower:before{content:"\\f2cc"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\\f2cd"}.fa-podcast:before{content:"\\f2ce"}.fa-window-maximize:before{content:"\\f2d0"}.fa-window-minimize:before{content:"\\f2d1"}.fa-window-restore:before{content:"\\f2d2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\\f2d3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\\f2d4"}.fa-bandcamp:before{content:"\\f2d5"}.fa-grav:before{content:"\\f2d6"}.fa-etsy:before{content:"\\f2d7"}.fa-imdb:before{content:"\\f2d8"}.fa-ravelry:before{content:"\\f2d9"}.fa-eercast:before{content:"\\f2da"}.fa-microchip:before{content:"\\f2db"}.fa-snowflake-o:before{content:"\\f2dc"}.fa-superpowers:before{content:"\\f2dd"}.fa-wpexplorer:before{content:"\\f2de"}.fa-meetup:before{content:"\\f2e0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}.select-button{display:inline-block}.select-button.disabled{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}\n'],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AeButtonComponent, [{
    type: Component,
    args: [{
      selector: "ae-button",
      encapsulation: ViewEncapsulation$1.None,
      template: '<button type="button" [title]="title" class="angular-editor-button" (click)="buttonClick.emit()" tabindex="-1"><i\n    [class]="iconClass"></i></button>\n\n',
      styles: ['/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */@font-face{font-family:FontAwesome;src:url(/assets/fonts/fontawesome-webfont.eot?v=4.7.0);src:url(/assets/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0) format("embedded-opentype"),url(/assets/fonts/fontawesome-webfont.woff2?v=4.7.0) format("woff2"),url(/assets/fonts/fontawesome-webfont.woff?v=4.7.0) format("woff"),url(/assets/fonts/fontawesome-webfont.ttf?v=4.7.0) format("truetype"),url(/assets/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format("svg");font-weight:400;font-style:normal}.fa{display:inline-block;font: 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-15%}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-fw{width:1.2857142857em;text-align:center}.fa-ul{padding-left:0;margin-left:2.1428571429em;list-style-type:none}.fa-ul>li{position:relative}.fa-li{position:absolute;left:-2.1428571429em;width:2.1428571429em;top:.1428571429em;text-align:center}.fa-li.fa-lg{left:-1.8571428571em}.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left{margin-right:.3em}.fa.fa-pull-right{margin-left:.3em}.pull-right{float:right}.pull-left{float:left}.fa.pull-left{margin-right:.3em}.fa.pull-right{margin-left:.3em}.fa-spin{animation:fa-spin 2s infinite linear}.fa-pulse{animation:fa-spin 1s infinite steps(8)}@keyframes fa-spin{0%{transform:rotate(0)}to{transform:rotate(359deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";transform:scaleX(-1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";transform:scaleY(-1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical{filter:none}.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-glass:before{content:"\\f000"}.fa-music:before{content:"\\f001"}.fa-search:before{content:"\\f002"}.fa-envelope-o:before{content:"\\f003"}.fa-heart:before{content:"\\f004"}.fa-star:before{content:"\\f005"}.fa-star-o:before{content:"\\f006"}.fa-user:before{content:"\\f007"}.fa-film:before{content:"\\f008"}.fa-th-large:before{content:"\\f009"}.fa-th:before{content:"\\f00a"}.fa-th-list:before{content:"\\f00b"}.fa-check:before{content:"\\f00c"}.fa-remove:before,.fa-close:before,.fa-times:before{content:"\\f00d"}.fa-search-plus:before{content:"\\f00e"}.fa-search-minus:before{content:"\\f010"}.fa-power-off:before{content:"\\f011"}.fa-signal:before{content:"\\f012"}.fa-gear:before,.fa-cog:before{content:"\\f013"}.fa-trash-o:before{content:"\\f014"}.fa-home:before{content:"\\f015"}.fa-file-o:before{content:"\\f016"}.fa-clock-o:before{content:"\\f017"}.fa-road:before{content:"\\f018"}.fa-download:before{content:"\\f019"}.fa-arrow-circle-o-down:before{content:"\\f01a"}.fa-arrow-circle-o-up:before{content:"\\f01b"}.fa-inbox:before{content:"\\f01c"}.fa-play-circle-o:before{content:"\\f01d"}.fa-rotate-right:before,.fa-repeat:before{content:"\\f01e"}.fa-refresh:before{content:"\\f021"}.fa-list-alt:before{content:"\\f022"}.fa-lock:before{content:"\\f023"}.fa-flag:before{content:"\\f024"}.fa-headphones:before{content:"\\f025"}.fa-volume-off:before{content:"\\f026"}.fa-volume-down:before{content:"\\f027"}.fa-volume-up:before{content:"\\f028"}.fa-qrcode:before{content:"\\f029"}.fa-barcode:before{content:"\\f02a"}.fa-tag:before{content:"\\f02b"}.fa-tags:before{content:"\\f02c"}.fa-book:before{content:"\\f02d"}.fa-bookmark:before{content:"\\f02e"}.fa-print:before{content:"\\f02f"}.fa-camera:before{content:"\\f030"}.fa-font:before{content:"\\f031"}.fa-bold:before{content:"\\f032"}.fa-italic:before{content:"\\f033"}.fa-text-height:before{content:"\\f034"}.fa-text-width:before{content:"\\f035"}.fa-align-left:before{content:"\\f036"}.fa-align-center:before{content:"\\f037"}.fa-align-right:before{content:"\\f038"}.fa-align-justify:before{content:"\\f039"}.fa-list:before{content:"\\f03a"}.fa-dedent:before,.fa-outdent:before{content:"\\f03b"}.fa-indent:before{content:"\\f03c"}.fa-video-camera:before{content:"\\f03d"}.fa-photo:before,.fa-image:before,.fa-picture-o:before{content:"\\f03e"}.fa-pencil:before{content:"\\f040"}.fa-map-marker:before{content:"\\f041"}.fa-adjust:before{content:"\\f042"}.fa-tint:before{content:"\\f043"}.fa-edit:before,.fa-pencil-square-o:before{content:"\\f044"}.fa-share-square-o:before{content:"\\f045"}.fa-check-square-o:before{content:"\\f046"}.fa-arrows:before{content:"\\f047"}.fa-step-backward:before{content:"\\f048"}.fa-fast-backward:before{content:"\\f049"}.fa-backward:before{content:"\\f04a"}.fa-play:before{content:"\\f04b"}.fa-pause:before{content:"\\f04c"}.fa-stop:before{content:"\\f04d"}.fa-forward:before{content:"\\f04e"}.fa-fast-forward:before{content:"\\f050"}.fa-step-forward:before{content:"\\f051"}.fa-eject:before{content:"\\f052"}.fa-chevron-left:before{content:"\\f053"}.fa-chevron-right:before{content:"\\f054"}.fa-plus-circle:before{content:"\\f055"}.fa-minus-circle:before{content:"\\f056"}.fa-times-circle:before{content:"\\f057"}.fa-check-circle:before{content:"\\f058"}.fa-question-circle:before{content:"\\f059"}.fa-info-circle:before{content:"\\f05a"}.fa-crosshairs:before{content:"\\f05b"}.fa-times-circle-o:before{content:"\\f05c"}.fa-check-circle-o:before{content:"\\f05d"}.fa-ban:before{content:"\\f05e"}.fa-arrow-left:before{content:"\\f060"}.fa-arrow-right:before{content:"\\f061"}.fa-arrow-up:before{content:"\\f062"}.fa-arrow-down:before{content:"\\f063"}.fa-mail-forward:before,.fa-share:before{content:"\\f064"}.fa-expand:before{content:"\\f065"}.fa-compress:before{content:"\\f066"}.fa-plus:before{content:"\\f067"}.fa-minus:before{content:"\\f068"}.fa-asterisk:before{content:"\\f069"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-gift:before{content:"\\f06b"}.fa-leaf:before{content:"\\f06c"}.fa-fire:before{content:"\\f06d"}.fa-eye:before{content:"\\f06e"}.fa-eye-slash:before{content:"\\f070"}.fa-warning:before,.fa-exclamation-triangle:before{content:"\\f071"}.fa-plane:before{content:"\\f072"}.fa-calendar:before{content:"\\f073"}.fa-random:before{content:"\\f074"}.fa-comment:before{content:"\\f075"}.fa-magnet:before{content:"\\f076"}.fa-chevron-up:before{content:"\\f077"}.fa-chevron-down:before{content:"\\f078"}.fa-retweet:before{content:"\\f079"}.fa-shopping-cart:before{content:"\\f07a"}.fa-folder:before{content:"\\f07b"}.fa-folder-open:before{content:"\\f07c"}.fa-arrows-v:before{content:"\\f07d"}.fa-arrows-h:before{content:"\\f07e"}.fa-bar-chart-o:before,.fa-bar-chart:before{content:"\\f080"}.fa-twitter-square:before{content:"\\f081"}.fa-facebook-square:before{content:"\\f082"}.fa-camera-retro:before{content:"\\f083"}.fa-key:before{content:"\\f084"}.fa-gears:before,.fa-cogs:before{content:"\\f085"}.fa-comments:before{content:"\\f086"}.fa-thumbs-o-up:before{content:"\\f087"}.fa-thumbs-o-down:before{content:"\\f088"}.fa-star-half:before{content:"\\f089"}.fa-heart-o:before{content:"\\f08a"}.fa-sign-out:before{content:"\\f08b"}.fa-linkedin-square:before{content:"\\f08c"}.fa-thumb-tack:before{content:"\\f08d"}.fa-external-link:before{content:"\\f08e"}.fa-sign-in:before{content:"\\f090"}.fa-trophy:before{content:"\\f091"}.fa-github-square:before{content:"\\f092"}.fa-upload:before{content:"\\f093"}.fa-lemon-o:before{content:"\\f094"}.fa-phone:before{content:"\\f095"}.fa-square-o:before{content:"\\f096"}.fa-bookmark-o:before{content:"\\f097"}.fa-phone-square:before{content:"\\f098"}.fa-twitter:before{content:"\\f099"}.fa-facebook-f:before,.fa-facebook:before{content:"\\f09a"}.fa-github:before{content:"\\f09b"}.fa-unlock:before{content:"\\f09c"}.fa-credit-card:before{content:"\\f09d"}.fa-feed:before,.fa-rss:before{content:"\\f09e"}.fa-hdd-o:before{content:"\\f0a0"}.fa-bullhorn:before{content:"\\f0a1"}.fa-bell:before{content:"\\f0f3"}.fa-certificate:before{content:"\\f0a3"}.fa-hand-o-right:before{content:"\\f0a4"}.fa-hand-o-left:before{content:"\\f0a5"}.fa-hand-o-up:before{content:"\\f0a6"}.fa-hand-o-down:before{content:"\\f0a7"}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-arrow-circle-up:before{content:"\\f0aa"}.fa-arrow-circle-down:before{content:"\\f0ab"}.fa-globe:before{content:"\\f0ac"}.fa-wrench:before{content:"\\f0ad"}.fa-tasks:before{content:"\\f0ae"}.fa-filter:before{content:"\\f0b0"}.fa-briefcase:before{content:"\\f0b1"}.fa-arrows-alt:before{content:"\\f0b2"}.fa-group:before,.fa-users:before{content:"\\f0c0"}.fa-chain:before,.fa-link:before{content:"\\f0c1"}.fa-cloud:before{content:"\\f0c2"}.fa-flask:before{content:"\\f0c3"}.fa-cut:before,.fa-scissors:before{content:"\\f0c4"}.fa-copy:before,.fa-files-o:before{content:"\\f0c5"}.fa-paperclip:before{content:"\\f0c6"}.fa-save:before,.fa-floppy-o:before{content:"\\f0c7"}.fa-square:before{content:"\\f0c8"}.fa-navicon:before,.fa-reorder:before,.fa-bars:before{content:"\\f0c9"}.fa-list-ul:before{content:"\\f0ca"}.fa-list-ol:before{content:"\\f0cb"}.fa-strikethrough:before{content:"\\f0cc"}.fa-underline:before{content:"\\f0cd"}.fa-table:before{content:"\\f0ce"}.fa-magic:before{content:"\\f0d0"}.fa-truck:before{content:"\\f0d1"}.fa-pinterest:before{content:"\\f0d2"}.fa-pinterest-square:before{content:"\\f0d3"}.fa-google-plus-square:before{content:"\\f0d4"}.fa-google-plus:before{content:"\\f0d5"}.fa-money:before{content:"\\f0d6"}.fa-caret-down:before{content:"\\f0d7"}.fa-caret-up:before{content:"\\f0d8"}.fa-caret-left:before{content:"\\f0d9"}.fa-caret-right:before{content:"\\f0da"}.fa-columns:before{content:"\\f0db"}.fa-unsorted:before,.fa-sort:before{content:"\\f0dc"}.fa-sort-down:before,.fa-sort-desc:before{content:"\\f0dd"}.fa-sort-up:before,.fa-sort-asc:before{content:"\\f0de"}.fa-envelope:before{content:"\\f0e0"}.fa-linkedin:before{content:"\\f0e1"}.fa-rotate-left:before,.fa-undo:before{content:"\\f0e2"}.fa-legal:before,.fa-gavel:before{content:"\\f0e3"}.fa-dashboard:before,.fa-tachometer:before{content:"\\f0e4"}.fa-comment-o:before{content:"\\f0e5"}.fa-comments-o:before{content:"\\f0e6"}.fa-flash:before,.fa-bolt:before{content:"\\f0e7"}.fa-sitemap:before{content:"\\f0e8"}.fa-umbrella:before{content:"\\f0e9"}.fa-paste:before,.fa-clipboard:before{content:"\\f0ea"}.fa-lightbulb-o:before{content:"\\f0eb"}.fa-exchange:before{content:"\\f0ec"}.fa-cloud-download:before{content:"\\f0ed"}.fa-cloud-upload:before{content:"\\f0ee"}.fa-user-md:before{content:"\\f0f0"}.fa-stethoscope:before{content:"\\f0f1"}.fa-suitcase:before{content:"\\f0f2"}.fa-bell-o:before{content:"\\f0a2"}.fa-coffee:before{content:"\\f0f4"}.fa-cutlery:before{content:"\\f0f5"}.fa-file-text-o:before{content:"\\f0f6"}.fa-building-o:before{content:"\\f0f7"}.fa-hospital-o:before{content:"\\f0f8"}.fa-ambulance:before{content:"\\f0f9"}.fa-medkit:before{content:"\\f0fa"}.fa-fighter-jet:before{content:"\\f0fb"}.fa-beer:before{content:"\\f0fc"}.fa-h-square:before{content:"\\f0fd"}.fa-plus-square:before{content:"\\f0fe"}.fa-angle-double-left:before{content:"\\f100"}.fa-angle-double-right:before{content:"\\f101"}.fa-angle-double-up:before{content:"\\f102"}.fa-angle-double-down:before{content:"\\f103"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-angle-up:before{content:"\\f106"}.fa-angle-down:before{content:"\\f107"}.fa-desktop:before{content:"\\f108"}.fa-laptop:before{content:"\\f109"}.fa-tablet:before{content:"\\f10a"}.fa-mobile-phone:before,.fa-mobile:before{content:"\\f10b"}.fa-circle-o:before{content:"\\f10c"}.fa-quote-left:before{content:"\\f10d"}.fa-quote-right:before{content:"\\f10e"}.fa-spinner:before{content:"\\f110"}.fa-circle:before{content:"\\f111"}.fa-mail-reply:before,.fa-reply:before{content:"\\f112"}.fa-github-alt:before{content:"\\f113"}.fa-folder-o:before{content:"\\f114"}.fa-folder-open-o:before{content:"\\f115"}.fa-smile-o:before{content:"\\f118"}.fa-frown-o:before{content:"\\f119"}.fa-meh-o:before{content:"\\f11a"}.fa-gamepad:before{content:"\\f11b"}.fa-keyboard-o:before{content:"\\f11c"}.fa-flag-o:before{content:"\\f11d"}.fa-flag-checkered:before{content:"\\f11e"}.fa-terminal:before{content:"\\f120"}.fa-code:before{content:"\\f121"}.fa-mail-reply-all:before,.fa-reply-all:before{content:"\\f122"}.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:"\\f123"}.fa-location-arrow:before{content:"\\f124"}.fa-crop:before{content:"\\f125"}.fa-code-fork:before{content:"\\f126"}.fa-unlink:before,.fa-chain-broken:before{content:"\\f127"}.fa-question:before{content:"\\f128"}.fa-info:before{content:"\\f129"}.fa-exclamation:before{content:"\\f12a"}.fa-superscript:before{content:"\\f12b"}.fa-subscript:before{content:"\\f12c"}.fa-eraser:before{content:"\\f12d"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-microphone:before{content:"\\f130"}.fa-microphone-slash:before{content:"\\f131"}.fa-shield:before{content:"\\f132"}.fa-calendar-o:before{content:"\\f133"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-rocket:before{content:"\\f135"}.fa-maxcdn:before{content:"\\f136"}.fa-chevron-circle-left:before{content:"\\f137"}.fa-chevron-circle-right:before{content:"\\f138"}.fa-chevron-circle-up:before{content:"\\f139"}.fa-chevron-circle-down:before{content:"\\f13a"}.fa-html5:before{content:"\\f13b"}.fa-css3:before{content:"\\f13c"}.fa-anchor:before{content:"\\f13d"}.fa-unlock-alt:before{content:"\\f13e"}.fa-bullseye:before{content:"\\f140"}.fa-ellipsis-h:before{content:"\\f141"}.fa-ellipsis-v:before{content:"\\f142"}.fa-rss-square:before{content:"\\f143"}.fa-play-circle:before{content:"\\f144"}.fa-ticket:before{content:"\\f145"}.fa-minus-square:before{content:"\\f146"}.fa-minus-square-o:before{content:"\\f147"}.fa-level-up:before{content:"\\f148"}.fa-level-down:before{content:"\\f149"}.fa-check-square:before{content:"\\f14a"}.fa-pencil-square:before{content:"\\f14b"}.fa-external-link-square:before{content:"\\f14c"}.fa-share-square:before{content:"\\f14d"}.fa-compass:before{content:"\\f14e"}.fa-toggle-down:before,.fa-caret-square-o-down:before{content:"\\f150"}.fa-toggle-up:before,.fa-caret-square-o-up:before{content:"\\f151"}.fa-toggle-right:before,.fa-caret-square-o-right:before{content:"\\f152"}.fa-euro:before,.fa-eur:before{content:"\\f153"}.fa-gbp:before{content:"\\f154"}.fa-dollar:before,.fa-usd:before{content:"\\f155"}.fa-rupee:before,.fa-inr:before{content:"\\f156"}.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:"\\f157"}.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:"\\f158"}.fa-won:before,.fa-krw:before{content:"\\f159"}.fa-bitcoin:before,.fa-btc:before{content:"\\f15a"}.fa-file:before{content:"\\f15b"}.fa-file-text:before{content:"\\f15c"}.fa-sort-alpha-asc:before{content:"\\f15d"}.fa-sort-alpha-desc:before{content:"\\f15e"}.fa-sort-amount-asc:before{content:"\\f160"}.fa-sort-amount-desc:before{content:"\\f161"}.fa-sort-numeric-asc:before{content:"\\f162"}.fa-sort-numeric-desc:before{content:"\\f163"}.fa-thumbs-up:before{content:"\\f164"}.fa-thumbs-down:before{content:"\\f165"}.fa-youtube-square:before{content:"\\f166"}.fa-youtube:before{content:"\\f167"}.fa-xing:before{content:"\\f168"}.fa-xing-square:before{content:"\\f169"}.fa-youtube-play:before{content:"\\f16a"}.fa-dropbox:before{content:"\\f16b"}.fa-stack-overflow:before{content:"\\f16c"}.fa-instagram:before{content:"\\f16d"}.fa-flickr:before{content:"\\f16e"}.fa-adn:before{content:"\\f170"}.fa-bitbucket:before{content:"\\f171"}.fa-bitbucket-square:before{content:"\\f172"}.fa-tumblr:before{content:"\\f173"}.fa-tumblr-square:before{content:"\\f174"}.fa-long-arrow-down:before{content:"\\f175"}.fa-long-arrow-up:before{content:"\\f176"}.fa-long-arrow-left:before{content:"\\f177"}.fa-long-arrow-right:before{content:"\\f178"}.fa-apple:before{content:"\\f179"}.fa-windows:before{content:"\\f17a"}.fa-android:before{content:"\\f17b"}.fa-linux:before{content:"\\f17c"}.fa-dribbble:before{content:"\\f17d"}.fa-skype:before{content:"\\f17e"}.fa-foursquare:before{content:"\\f180"}.fa-trello:before{content:"\\f181"}.fa-female:before{content:"\\f182"}.fa-male:before{content:"\\f183"}.fa-gittip:before,.fa-gratipay:before{content:"\\f184"}.fa-sun-o:before{content:"\\f185"}.fa-moon-o:before{content:"\\f186"}.fa-archive:before{content:"\\f187"}.fa-bug:before{content:"\\f188"}.fa-vk:before{content:"\\f189"}.fa-weibo:before{content:"\\f18a"}.fa-renren:before{content:"\\f18b"}.fa-pagelines:before{content:"\\f18c"}.fa-stack-exchange:before{content:"\\f18d"}.fa-arrow-circle-o-right:before{content:"\\f18e"}.fa-arrow-circle-o-left:before{content:"\\f190"}.fa-toggle-left:before,.fa-caret-square-o-left:before{content:"\\f191"}.fa-dot-circle-o:before{content:"\\f192"}.fa-wheelchair:before{content:"\\f193"}.fa-vimeo-square:before{content:"\\f194"}.fa-turkish-lira:before,.fa-try:before{content:"\\f195"}.fa-plus-square-o:before{content:"\\f196"}.fa-space-shuttle:before{content:"\\f197"}.fa-slack:before{content:"\\f198"}.fa-envelope-square:before{content:"\\f199"}.fa-wordpress:before{content:"\\f19a"}.fa-openid:before{content:"\\f19b"}.fa-institution:before,.fa-bank:before,.fa-university:before{content:"\\f19c"}.fa-mortar-board:before,.fa-graduation-cap:before{content:"\\f19d"}.fa-yahoo:before{content:"\\f19e"}.fa-google:before{content:"\\f1a0"}.fa-reddit:before{content:"\\f1a1"}.fa-reddit-square:before{content:"\\f1a2"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-delicious:before{content:"\\f1a5"}.fa-digg:before{content:"\\f1a6"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-drupal:before{content:"\\f1a9"}.fa-joomla:before{content:"\\f1aa"}.fa-language:before{content:"\\f1ab"}.fa-fax:before{content:"\\f1ac"}.fa-building:before{content:"\\f1ad"}.fa-child:before{content:"\\f1ae"}.fa-paw:before{content:"\\f1b0"}.fa-spoon:before{content:"\\f1b1"}.fa-cube:before{content:"\\f1b2"}.fa-cubes:before{content:"\\f1b3"}.fa-behance:before{content:"\\f1b4"}.fa-behance-square:before{content:"\\f1b5"}.fa-steam:before{content:"\\f1b6"}.fa-steam-square:before{content:"\\f1b7"}.fa-recycle:before{content:"\\f1b8"}.fa-automobile:before,.fa-car:before{content:"\\f1b9"}.fa-cab:before,.fa-taxi:before{content:"\\f1ba"}.fa-tree:before{content:"\\f1bb"}.fa-spotify:before{content:"\\f1bc"}.fa-deviantart:before{content:"\\f1bd"}.fa-soundcloud:before{content:"\\f1be"}.fa-database:before{content:"\\f1c0"}.fa-file-pdf-o:before{content:"\\f1c1"}.fa-file-word-o:before{content:"\\f1c2"}.fa-file-excel-o:before{content:"\\f1c3"}.fa-file-powerpoint-o:before{content:"\\f1c4"}.fa-file-photo-o:before,.fa-file-picture-o:before,.fa-file-image-o:before{content:"\\f1c5"}.fa-file-zip-o:before,.fa-file-archive-o:before{content:"\\f1c6"}.fa-file-sound-o:before,.fa-file-audio-o:before{content:"\\f1c7"}.fa-file-movie-o:before,.fa-file-video-o:before{content:"\\f1c8"}.fa-file-code-o:before{content:"\\f1c9"}.fa-vine:before{content:"\\f1ca"}.fa-codepen:before{content:"\\f1cb"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-life-bouy:before,.fa-life-buoy:before,.fa-life-saver:before,.fa-support:before,.fa-life-ring:before{content:"\\f1cd"}.fa-circle-o-notch:before{content:"\\f1ce"}.fa-ra:before,.fa-resistance:before,.fa-rebel:before{content:"\\f1d0"}.fa-ge:before,.fa-empire:before{content:"\\f1d1"}.fa-git-square:before{content:"\\f1d2"}.fa-git:before{content:"\\f1d3"}.fa-y-combinator-square:before,.fa-yc-square:before,.fa-hacker-news:before{content:"\\f1d4"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-qq:before{content:"\\f1d6"}.fa-wechat:before,.fa-weixin:before{content:"\\f1d7"}.fa-send:before,.fa-paper-plane:before{content:"\\f1d8"}.fa-send-o:before,.fa-paper-plane-o:before{content:"\\f1d9"}.fa-history:before{content:"\\f1da"}.fa-circle-thin:before{content:"\\f1db"}.fa-header:before{content:"\\f1dc"}.fa-paragraph:before{content:"\\f1dd"}.fa-sliders:before{content:"\\f1de"}.fa-share-alt:before{content:"\\f1e0"}.fa-share-alt-square:before{content:"\\f1e1"}.fa-bomb:before{content:"\\f1e2"}.fa-soccer-ball-o:before,.fa-futbol-o:before{content:"\\f1e3"}.fa-tty:before{content:"\\f1e4"}.fa-binoculars:before{content:"\\f1e5"}.fa-plug:before{content:"\\f1e6"}.fa-slideshare:before{content:"\\f1e7"}.fa-twitch:before{content:"\\f1e8"}.fa-yelp:before{content:"\\f1e9"}.fa-newspaper-o:before{content:"\\f1ea"}.fa-wifi:before{content:"\\f1eb"}.fa-calculator:before{content:"\\f1ec"}.fa-paypal:before{content:"\\f1ed"}.fa-google-wallet:before{content:"\\f1ee"}.fa-cc-visa:before{content:"\\f1f0"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-cc-discover:before{content:"\\f1f2"}.fa-cc-amex:before{content:"\\f1f3"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-bell-slash:before{content:"\\f1f6"}.fa-bell-slash-o:before{content:"\\f1f7"}.fa-trash:before{content:"\\f1f8"}.fa-copyright:before{content:"\\f1f9"}.fa-at:before{content:"\\f1fa"}.fa-eyedropper:before{content:"\\f1fb"}.fa-paint-brush:before{content:"\\f1fc"}.fa-birthday-cake:before{content:"\\f1fd"}.fa-area-chart:before{content:"\\f1fe"}.fa-pie-chart:before{content:"\\f200"}.fa-line-chart:before{content:"\\f201"}.fa-lastfm:before{content:"\\f202"}.fa-lastfm-square:before{content:"\\f203"}.fa-toggle-off:before{content:"\\f204"}.fa-toggle-on:before{content:"\\f205"}.fa-bicycle:before{content:"\\f206"}.fa-bus:before{content:"\\f207"}.fa-ioxhost:before{content:"\\f208"}.fa-angellist:before{content:"\\f209"}.fa-cc:before{content:"\\f20a"}.fa-shekel:before,.fa-sheqel:before,.fa-ils:before{content:"\\f20b"}.fa-meanpath:before{content:"\\f20c"}.fa-buysellads:before{content:"\\f20d"}.fa-connectdevelop:before{content:"\\f20e"}.fa-dashcube:before{content:"\\f210"}.fa-forumbee:before{content:"\\f211"}.fa-leanpub:before{content:"\\f212"}.fa-sellsy:before{content:"\\f213"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-simplybuilt:before{content:"\\f215"}.fa-skyatlas:before{content:"\\f216"}.fa-cart-plus:before{content:"\\f217"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-diamond:before{content:"\\f219"}.fa-ship:before{content:"\\f21a"}.fa-user-secret:before{content:"\\f21b"}.fa-motorcycle:before{content:"\\f21c"}.fa-street-view:before{content:"\\f21d"}.fa-heartbeat:before{content:"\\f21e"}.fa-venus:before{content:"\\f221"}.fa-mars:before{content:"\\f222"}.fa-mercury:before{content:"\\f223"}.fa-intersex:before,.fa-transgender:before{content:"\\f224"}.fa-transgender-alt:before{content:"\\f225"}.fa-venus-double:before{content:"\\f226"}.fa-mars-double:before{content:"\\f227"}.fa-venus-mars:before{content:"\\f228"}.fa-mars-stroke:before{content:"\\f229"}.fa-mars-stroke-v:before{content:"\\f22a"}.fa-mars-stroke-h:before{content:"\\f22b"}.fa-neuter:before{content:"\\f22c"}.fa-genderless:before{content:"\\f22d"}.fa-facebook-official:before{content:"\\f230"}.fa-pinterest-p:before{content:"\\f231"}.fa-whatsapp:before{content:"\\f232"}.fa-server:before{content:"\\f233"}.fa-user-plus:before{content:"\\f234"}.fa-user-times:before{content:"\\f235"}.fa-hotel:before,.fa-bed:before{content:"\\f236"}.fa-viacoin:before{content:"\\f237"}.fa-train:before{content:"\\f238"}.fa-subway:before{content:"\\f239"}.fa-medium:before{content:"\\f23a"}.fa-yc:before,.fa-y-combinator:before{content:"\\f23b"}.fa-optin-monster:before{content:"\\f23c"}.fa-opencart:before{content:"\\f23d"}.fa-expeditedssl:before{content:"\\f23e"}.fa-battery-4:before,.fa-battery:before,.fa-battery-full:before{content:"\\f240"}.fa-battery-3:before,.fa-battery-three-quarters:before{content:"\\f241"}.fa-battery-2:before,.fa-battery-half:before{content:"\\f242"}.fa-battery-1:before,.fa-battery-quarter:before{content:"\\f243"}.fa-battery-0:before,.fa-battery-empty:before{content:"\\f244"}.fa-mouse-pointer:before{content:"\\f245"}.fa-i-cursor:before{content:"\\f246"}.fa-object-group:before{content:"\\f247"}.fa-object-ungroup:before{content:"\\f248"}.fa-sticky-note:before{content:"\\f249"}.fa-sticky-note-o:before{content:"\\f24a"}.fa-cc-jcb:before{content:"\\f24b"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-clone:before{content:"\\f24d"}.fa-balance-scale:before{content:"\\f24e"}.fa-hourglass-o:before{content:"\\f250"}.fa-hourglass-1:before,.fa-hourglass-start:before{content:"\\f251"}.fa-hourglass-2:before,.fa-hourglass-half:before{content:"\\f252"}.fa-hourglass-3:before,.fa-hourglass-end:before{content:"\\f253"}.fa-hourglass:before{content:"\\f254"}.fa-hand-grab-o:before,.fa-hand-rock-o:before{content:"\\f255"}.fa-hand-stop-o:before,.fa-hand-paper-o:before{content:"\\f256"}.fa-hand-scissors-o:before{content:"\\f257"}.fa-hand-lizard-o:before{content:"\\f258"}.fa-hand-spock-o:before{content:"\\f259"}.fa-hand-pointer-o:before{content:"\\f25a"}.fa-hand-peace-o:before{content:"\\f25b"}.fa-trademark:before{content:"\\f25c"}.fa-registered:before{content:"\\f25d"}.fa-creative-commons:before{content:"\\f25e"}.fa-gg:before{content:"\\f260"}.fa-gg-circle:before{content:"\\f261"}.fa-tripadvisor:before{content:"\\f262"}.fa-odnoklassniki:before{content:"\\f263"}.fa-odnoklassniki-square:before{content:"\\f264"}.fa-get-pocket:before{content:"\\f265"}.fa-wikipedia-w:before{content:"\\f266"}.fa-safari:before{content:"\\f267"}.fa-chrome:before{content:"\\f268"}.fa-firefox:before{content:"\\f269"}.fa-opera:before{content:"\\f26a"}.fa-internet-explorer:before{content:"\\f26b"}.fa-tv:before,.fa-television:before{content:"\\f26c"}.fa-contao:before{content:"\\f26d"}.fa-500px:before{content:"\\f26e"}.fa-amazon:before{content:"\\f270"}.fa-calendar-plus-o:before{content:"\\f271"}.fa-calendar-minus-o:before{content:"\\f272"}.fa-calendar-times-o:before{content:"\\f273"}.fa-calendar-check-o:before{content:"\\f274"}.fa-industry:before{content:"\\f275"}.fa-map-pin:before{content:"\\f276"}.fa-map-signs:before{content:"\\f277"}.fa-map-o:before{content:"\\f278"}.fa-map:before{content:"\\f279"}.fa-commenting:before{content:"\\f27a"}.fa-commenting-o:before{content:"\\f27b"}.fa-houzz:before{content:"\\f27c"}.fa-vimeo:before{content:"\\f27d"}.fa-black-tie:before{content:"\\f27e"}.fa-fonticons:before{content:"\\f280"}.fa-reddit-alien:before{content:"\\f281"}.fa-edge:before{content:"\\f282"}.fa-credit-card-alt:before{content:"\\f283"}.fa-codiepie:before{content:"\\f284"}.fa-modx:before{content:"\\f285"}.fa-fort-awesome:before{content:"\\f286"}.fa-usb:before{content:"\\f287"}.fa-product-hunt:before{content:"\\f288"}.fa-mixcloud:before{content:"\\f289"}.fa-scribd:before{content:"\\f28a"}.fa-pause-circle:before{content:"\\f28b"}.fa-pause-circle-o:before{content:"\\f28c"}.fa-stop-circle:before{content:"\\f28d"}.fa-stop-circle-o:before{content:"\\f28e"}.fa-shopping-bag:before{content:"\\f290"}.fa-shopping-basket:before{content:"\\f291"}.fa-hashtag:before{content:"\\f292"}.fa-bluetooth:before{content:"\\f293"}.fa-bluetooth-b:before{content:"\\f294"}.fa-percent:before{content:"\\f295"}.fa-gitlab:before{content:"\\f296"}.fa-wpbeginner:before{content:"\\f297"}.fa-wpforms:before{content:"\\f298"}.fa-envira:before{content:"\\f299"}.fa-universal-access:before{content:"\\f29a"}.fa-wheelchair-alt:before{content:"\\f29b"}.fa-question-circle-o:before{content:"\\f29c"}.fa-blind:before{content:"\\f29d"}.fa-audio-description:before{content:"\\f29e"}.fa-volume-control-phone:before{content:"\\f2a0"}.fa-braille:before{content:"\\f2a1"}.fa-assistive-listening-systems:before{content:"\\f2a2"}.fa-asl-interpreting:before,.fa-american-sign-language-interpreting:before{content:"\\f2a3"}.fa-deafness:before,.fa-hard-of-hearing:before,.fa-deaf:before{content:"\\f2a4"}.fa-glide:before{content:"\\f2a5"}.fa-glide-g:before{content:"\\f2a6"}.fa-signing:before,.fa-sign-language:before{content:"\\f2a7"}.fa-low-vision:before{content:"\\f2a8"}.fa-viadeo:before{content:"\\f2a9"}.fa-viadeo-square:before{content:"\\f2aa"}.fa-snapchat:before{content:"\\f2ab"}.fa-snapchat-ghost:before{content:"\\f2ac"}.fa-snapchat-square:before{content:"\\f2ad"}.fa-pied-piper:before{content:"\\f2ae"}.fa-first-order:before{content:"\\f2b0"}.fa-yoast:before{content:"\\f2b1"}.fa-themeisle:before{content:"\\f2b2"}.fa-google-plus-circle:before,.fa-google-plus-official:before{content:"\\f2b3"}.fa-fa:before,.fa-font-awesome:before{content:"\\f2b4"}.fa-handshake-o:before{content:"\\f2b5"}.fa-envelope-open:before{content:"\\f2b6"}.fa-envelope-open-o:before{content:"\\f2b7"}.fa-linode:before{content:"\\f2b8"}.fa-address-book:before{content:"\\f2b9"}.fa-address-book-o:before{content:"\\f2ba"}.fa-vcard:before,.fa-address-card:before{content:"\\f2bb"}.fa-vcard-o:before,.fa-address-card-o:before{content:"\\f2bc"}.fa-user-circle:before{content:"\\f2bd"}.fa-user-circle-o:before{content:"\\f2be"}.fa-user-o:before{content:"\\f2c0"}.fa-id-badge:before{content:"\\f2c1"}.fa-drivers-license:before,.fa-id-card:before{content:"\\f2c2"}.fa-drivers-license-o:before,.fa-id-card-o:before{content:"\\f2c3"}.fa-quora:before{content:"\\f2c4"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-telegram:before{content:"\\f2c6"}.fa-thermometer-4:before,.fa-thermometer:before,.fa-thermometer-full:before{content:"\\f2c7"}.fa-thermometer-3:before,.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-thermometer-2:before,.fa-thermometer-half:before{content:"\\f2c9"}.fa-thermometer-1:before,.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-thermometer-0:before,.fa-thermometer-empty:before{content:"\\f2cb"}.fa-shower:before{content:"\\f2cc"}.fa-bathtub:before,.fa-s15:before,.fa-bath:before{content:"\\f2cd"}.fa-podcast:before{content:"\\f2ce"}.fa-window-maximize:before{content:"\\f2d0"}.fa-window-minimize:before{content:"\\f2d1"}.fa-window-restore:before{content:"\\f2d2"}.fa-times-rectangle:before,.fa-window-close:before{content:"\\f2d3"}.fa-times-rectangle-o:before,.fa-window-close-o:before{content:"\\f2d4"}.fa-bandcamp:before{content:"\\f2d5"}.fa-grav:before{content:"\\f2d6"}.fa-etsy:before{content:"\\f2d7"}.fa-imdb:before{content:"\\f2d8"}.fa-ravelry:before{content:"\\f2d9"}.fa-eercast:before{content:"\\f2da"}.fa-microchip:before{content:"\\f2db"}.fa-snowflake-o:before{content:"\\f2dc"}.fa-superpowers:before{content:"\\f2dd"}.fa-wpexplorer:before{content:"\\f2de"}.fa-meetup:before{content:"\\f2e0"}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}a{cursor:pointer}.angular-editor-textarea{min-height:150px;overflow:auto;margin-top:5px;resize:vertical}.angular-editor-textarea:after{content:"";position:absolute;bottom:0;right:0;display:block;width:8px;height:8px;cursor:nwse-resize;background-color:#ffffff80}.angular-editor-toolbar{font:100 14px/15px Roboto,Arial,sans-serif;background-color:#f5f5f5;font-size:.8rem;padding:.2rem;border:1px solid #ddd}.angular-editor-toolbar .angular-editor-toolbar-set{display:none;margin-right:5px;vertical-align:baseline}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button{background-color:#fff;vertical-align:middle;border:1px solid #ddd;padding:.4rem;min-width:2rem;float:left}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:focus,.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.focus{outline:0}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label{pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.foreground :after{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button:disabled>.color-label.background{background:#555555}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active{background:#fff5b9}.angular-editor-toolbar .angular-editor-toolbar-set .angular-editor-button.active:hover{background-color:#fffa98}.angular-editor-toolbar .angular-editor-toolbar-set select{font-size:11px;width:90px;vertical-align:middle;background-color:transparent;border:.5px solid rgba(255,255,255,0);border-radius:5px;outline:none;padding:.4rem;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-heading optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .default{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h1{font-size:24px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h2{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h3{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h4{font-size:15px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h5{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .h6{font-size:13px}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .div,.angular-editor-toolbar .angular-editor-toolbar-set .select-heading .pre{font-size:12px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-heading:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size{display:inline-block;width:50px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size option{border:1px solid;background-color:#fff}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size1{font-size:10px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size2{font-size:12px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size3{font-size:14px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size4{font-size:16px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size5{font-size:18px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size6{font-size:20px}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size .size7{font-size:22px}}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-font-size:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style{display:inline-block;width:90px}@supports not (-moz-appearance: none){.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style optgroup{font-size:12px;background-color:#f4f4f4;padding:5px}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style option{border:1px solid;background-color:#fff}}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:disabled{background-color:#f5f5f5;pointer-events:none;cursor:not-allowed}.angular-editor-toolbar .angular-editor-toolbar-set .select-custom-style:hover{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}.angular-editor-toolbar .angular-editor-toolbar-set .color-label{position:relative;cursor:pointer}.angular-editor-toolbar .angular-editor-toolbar-set .background{font-size:smaller;background:#1b1b1b;color:#fff;padding:3px}.angular-editor-toolbar .angular-editor-toolbar-set .foreground :after{position:absolute;content:"";left:-1px;top:auto;bottom:-3px;right:auto;width:15px;height:2px;z-index:0;background:#1b1b1b}.angular-editor-toolbar .angular-editor-toolbar-set:not([style*="display:none"]):not([style*="display: none"]){display:inline-block}.select-button{display:inline-block}.select-button.disabled{cursor:pointer;background-color:#f1f1f1;transition:.2s ease}\n']
    }]
  }], function() {
    return [];
  }, {
    iconClass: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    buttonClick: [{
      type: Output
    }]
  });
})();
var AeToolbarSetComponent = class {
  constructor() {
  }
};
AeToolbarSetComponent.ɵfac = function AeToolbarSetComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AeToolbarSetComponent)();
};
AeToolbarSetComponent.ɵcmp = ɵɵdefineComponent({
  type: AeToolbarSetComponent,
  selectors: [["ae-toolbar-set"]],
  ngContentSelectors: _c4,
  decls: 2,
  vars: 0,
  consts: [[1, "angular-editor-toolbar-set"]],
  template: function AeToolbarSetComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AeToolbarSetComponent, [{
    type: Component,
    args: [{
      selector: "ae-toolbar-set",
      encapsulation: ViewEncapsulation$1.None,
      template: '<div class="angular-editor-toolbar-set">\n  <ng-content></ng-content>\n</div>\n',
      styles: [""]
    }]
  }], function() {
    return [];
  }, null);
})();
var AngularEditorModule = class {
};
AngularEditorModule.ɵfac = function AngularEditorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AngularEditorModule)();
};
AngularEditorModule.ɵmod = ɵɵdefineNgModule({
  type: AngularEditorModule,
  declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent, AeButtonComponent, AeToolbarSetComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AngularEditorComponent, AngularEditorToolbarComponent, AeButtonComponent, AeToolbarSetComponent]
});
AngularEditorModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule, FormsModule, ReactiveFormsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngularEditorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule],
      declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent, AeButtonComponent, AeToolbarSetComponent],
      exports: [AngularEditorComponent, AngularEditorToolbarComponent, AeButtonComponent, AeToolbarSetComponent]
    }]
  }], null, null);
})();
export {
  AeButtonComponent,
  AeSelectComponent,
  AeToolbarSetComponent,
  AngularEditorComponent,
  AngularEditorModule,
  AngularEditorService,
  AngularEditorToolbarComponent
};
//# sourceMappingURL=@kolkov_angular-editor.js.map
