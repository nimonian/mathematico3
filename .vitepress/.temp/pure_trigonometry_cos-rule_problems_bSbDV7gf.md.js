import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"id":"bSbDV7gf","vimeo":482713666,"tags":["proof"]},"headers":[],"relativePath":"pure/trigonometry/cos-rule/problems/bSbDV7gf.md","filePath":"pure/trigonometry/cos-rule/problems/bSbDV7gf.md"}');
const _sfc_main = { name: "pure/trigonometry/cos-rule/problems/bSbDV7gf.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_geogebra = resolveComponent("geogebra");
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Using the diagram below, prove the cosine rule.</p>`);
  _push(ssrRenderComponent(_component_geogebra, { id: "ja3gqbpg" }, null, _parent));
  _push(`<hr><p>Use Pythagoras to find a relationship between <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" })}" xmlns="http://www.w3.org/2000/svg" width="3.667ex" height="2.009ex" role="img" focusable="false" viewBox="0 -694 1620.7 888" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(433,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mstyle" transform="translate(711,0)"><g data-mml-node="mspace"></g></g><g data-mml-node="mi" transform="translate(1044.7,0)"><path data-c="210E" d="M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>c</mi><mo>,</mo><mstyle scriptlevel="0"><mspace width="0.167em"></mspace></mstyle><mi>h</mi></math></mjx-assistive-mml></mjx-container> and <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.923ex" height="1.025ex" role="img" focusable="false" viewBox="0 -442 850 453" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(572,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>.</mo></math></mjx-assistive-mml></mjx-container></p><p>Do similar to find a relationship between <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.439ex" })}" xmlns="http://www.w3.org/2000/svg" width="3.884ex" height="2.009ex" role="img" focusable="false" viewBox="0 -694 1716.7 888" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(529,0)"><path data-c="2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mstyle" transform="translate(807,0)"><g data-mml-node="mspace"></g></g><g data-mml-node="mi" transform="translate(1140.7,0)"><path data-c="210E" d="M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>a</mi><mo>,</mo><mstyle scriptlevel="0"><mspace width="0.167em"></mspace></mstyle><mi>h</mi></math></mjx-assistive-mml></mjx-container> and <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.566ex" })}" xmlns="http://www.w3.org/2000/svg" width="7.42ex" height="2.262ex" role="img" focusable="false" viewBox="0 -750 3279.4 1000" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="28" d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mi" transform="translate(389,0)"><path data-c="1D44F" d="M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(1040.2,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mi" transform="translate(2040.4,0)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(2612.4,0)"><path data-c="29" d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(3001.4,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo stretchy="false">(</mo><mi>b</mi><mo>−</mo><mi>x</mi><mo stretchy="false">)</mo><mo>.</mo></math></mjx-assistive-mml></mjx-container></p><hr><p>In the previous hint, we found two equations using Pythagoras. Eliminate <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.303ex" height="1.595ex" role="img" focusable="false" viewBox="0 -694 576 705" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="210E" d="M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>h</mi></math></mjx-assistive-mml></mjx-container> from these equations (either by substituting <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="2.291ex" height="1.912ex" role="img" focusable="false" viewBox="0 -833.9 1012.6 844.9" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mi"><path data-c="210E" d="M137 683Q138 683 209 688T282 694Q294 694 294 685Q294 674 258 534Q220 386 220 383Q220 381 227 388Q288 442 357 442Q411 442 444 415T478 336Q478 285 440 178T402 50Q403 36 407 31T422 26Q450 26 474 56T513 138Q516 149 519 151T535 153Q555 153 555 145Q555 144 551 130Q535 71 500 33Q466 -10 419 -10H414Q367 -10 346 17T325 74Q325 90 361 192T398 345Q398 404 354 404H349Q266 404 205 306L198 293L164 158Q132 28 127 16Q114 -11 83 -11Q69 -11 59 -2T48 16Q48 30 121 320L195 616Q195 629 188 632T149 637H128Q122 643 122 645T124 664Q129 683 137 683Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mn" transform="translate(609,363) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>h</mi><mn>2</mn></msup></math></mjx-assistive-mml></mjx-container> from one equation into the other, or by subtracting the equations).</p><hr><p>Notice that <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.798ex" })}" xmlns="http://www.w3.org/2000/svg" width="10.658ex" height="2.418ex" role="img" focusable="false" viewBox="0 -716 4710.7 1068.8" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="63" d="M370 305T349 305T313 320T297 358Q297 381 312 396Q317 401 317 402T307 404Q281 408 258 408Q209 408 178 376Q131 329 131 219Q131 137 162 90Q203 29 272 29Q313 29 338 55T374 117Q376 125 379 127T395 129H409Q415 123 415 120Q415 116 411 104T395 71T366 33T318 2T249 -11Q163 -11 99 53T34 214Q34 318 99 383T250 448T370 421T404 357Q404 334 387 320Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="6F" d="M28 214Q28 309 93 378T250 448Q340 448 405 380T471 215Q471 120 407 55T250 -10Q153 -10 91 57T28 214ZM250 30Q372 30 372 193V225V250Q372 272 371 288T364 326T348 362T317 390T268 410Q263 411 252 411Q222 411 195 399Q152 377 139 338T126 246V226Q126 130 145 91Q177 30 250 30Z" transform="translate(444,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="73" d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z" transform="translate(944,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(1338,0)"><path data-c="2061" d="" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mi" transform="translate(1504.7,0)"><path data-c="1D434" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(2532.4,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mfrac" transform="translate(3588.2,0)"><g data-mml-node="mi" transform="translate(220,394) scale(0.707)"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mi" transform="translate(269.1,-345) scale(0.707)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><rect width="604.5" height="60" x="120" y="220"></rect></g><g data-mml-node="mo" transform="translate(4432.7,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>cos</mi><mo data-mjx-texclass="NONE">⁡</mo><mi>A</mi><mo>=</mo><mfrac><mi>x</mi><mi>c</mi></mfrac><mo>.</mo></math></mjx-assistive-mml></mjx-container> Use this to eliminate <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.025ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.294ex" height="1.025ex" role="img" focusable="false" viewBox="0 -442 572 453" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D465" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi></math></mjx-assistive-mml></mjx-container> from the equation found in the previous hint.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pure/trigonometry/cos-rule/problems/bSbDV7gf.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bSbDV7gf = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bSbDV7gf as default
};
