import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"id":"xpW0U3R6","vimeo":478397402},"headers":[],"relativePath":"pure/sequences/geometric-sequences/problems/xpW0U3R6.md","filePath":"pure/sequences/geometric-sequences/problems/xpW0U3R6.md"}');
const _sfc_main = { name: "pure/sequences/geometric-sequences/problems/xpW0U3R6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>The interior angles of a triangle form a geometric sequence.</p><p>Given that one of the angles is equal to <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.891ex" height="1.946ex" role="img" focusable="false" viewBox="0 -666 1278 860" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(1000,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>60</mn><mo>,</mo></math></mjx-assistive-mml></mjx-container> use proof by exhaustion to show that the triangle is equilateral.</p><hr><p>The three cases you need to check are when <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.05ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="1.557ex" role="img" focusable="false" viewBox="0 -666 1000 688" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>60</mn></math></mjx-assistive-mml></mjx-container> is the smallest angle, when <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.05ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="1.557ex" role="img" focusable="false" viewBox="0 -666 1000 688" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>60</mn></math></mjx-assistive-mml></mjx-container> is the largest angle, and when <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.05ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.262ex" height="1.557ex" role="img" focusable="false" viewBox="0 -666 1000 688" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>60</mn></math></mjx-assistive-mml></mjx-container> is the middle angle.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pure/sequences/geometric-sequences/problems/xpW0U3R6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const xpW0U3R6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  xpW0U3R6 as default
};
