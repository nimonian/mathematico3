import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const _imports_0 = "/assets/riemann-5.3ff5081a.png";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"id":"AoY78A0B","vimeo":111,"answer":0.782},"headers":[],"relativePath":"pure/numerical-methods/riemann-sums/problems/AoY78A0B.md","filePath":"pure/numerical-methods/riemann-sums/problems/AoY78A0B.md"}');
const _sfc_main = { name: "pure/numerical-methods/riemann-sums/problems/AoY78A0B.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Water is flowing out of a hole in the bottom of a cylindrical container. The initial height of the water in the container is <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.05ex" })}" xmlns="http://www.w3.org/2000/svg" width="5.405ex" height="1.557ex" role="img" focusable="false" viewBox="0 -666 2389 688" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z" transform="translate(778,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mtext" transform="translate(1278,0)"><path data-c="6D" d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(2111,0)"><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0.6</mn><mtext>m</mtext><mo>.</mo></math></mjx-assistive-mml></mjx-container></p><p><img${ssrRenderAttr("src", _imports_0)} alt=""></p><p>As the cylinder empties, the water flows out less quickly, so that</p><mjx-container class="MathJax" jax="SVG" display="true" style="${ssrRenderStyle({ "direction": "ltr", "display": "block", "text-align": "center", "margin": "1em 0", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-1.602ex" })}" xmlns="http://www.w3.org/2000/svg" width="23.455ex" height="5.224ex" role="img" focusable="false" viewBox="0 -1601 10367.2 2309" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mfrac"><g data-mml-node="mrow" transform="translate(220,676)"><g data-mml-node="mi"><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mi" transform="translate(520,0)"><path data-c="1D449" d="M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g><g data-mml-node="mrow" transform="translate(424,-686)"><g data-mml-node="mi"><path data-c="1D451" d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mi" transform="translate(520,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g><rect width="1489" height="60" x="120" y="220"></rect></g><g data-mml-node="mo" transform="translate(2006.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(3062.6,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mfrac" transform="translate(3840.6,0)"><g data-mml-node="msqrt" transform="translate(220,676)"><g transform="translate(853,0)"><g data-mml-node="mn"><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mo" transform="translate(722.2,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mi" transform="translate(1722.4,0)"><path data-c="1D461" d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g><g data-mml-node="mo" transform="translate(0,65)"><path data-c="221A" d="M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><rect width="2083.4" height="60" x="853" y="805"></rect></g><g data-mml-node="mn" transform="translate(1438.2,-686)"><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><rect width="3136.4" height="60" x="120" y="220"></rect></g><g data-mml-node="msup" transform="translate(7217,0)"><g data-mml-node="mtext"><path data-c="A0" d="" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="6D" d="M41 46H55Q94 46 102 60V68Q102 77 102 91T102 122T103 161T103 203Q103 234 103 269T102 328V351Q99 370 88 376T43 385H25V408Q25 431 27 431L37 432Q47 433 65 434T102 436Q119 437 138 438T167 441T178 442H181V402Q181 364 182 364T187 369T199 384T218 402T247 421T285 437Q305 442 336 442Q351 442 364 440T387 434T406 426T421 417T432 406T441 395T448 384T452 374T455 366L457 361L460 365Q463 369 466 373T475 384T488 397T503 410T523 422T546 432T572 439T603 442Q729 442 740 329Q741 322 741 190V104Q741 66 743 59T754 49Q775 46 803 46H819V0H811L788 1Q764 2 737 2T699 3Q596 3 587 0H579V46H595Q656 46 656 62Q657 64 657 200Q656 335 655 343Q649 371 635 385T611 402T585 404Q540 404 506 370Q479 343 472 315T464 232V168V108Q464 78 465 68T468 55T477 49Q498 46 526 46H542V0H534L510 1Q487 2 460 2T422 3Q319 3 310 0H302V46H318Q379 46 379 62Q380 64 380 200Q379 335 378 343Q372 371 358 385T334 402T308 404Q263 404 229 370Q202 343 195 315T187 232V168V108Q187 78 188 68T191 55T200 49Q221 46 249 46H265V0H257L234 1Q210 2 183 2T145 3Q42 3 33 0H25V46H41Z" transform="translate(250,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="TeXAtom" transform="translate(1116,413) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g><g data-mml-node="msup" transform="translate(8736.6,0)"><g data-mml-node="mtext"><path data-c="A0" d="" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="73" d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z" transform="translate(250,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="TeXAtom" transform="translate(677,413) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mo"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mn" transform="translate(778,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></g></g></svg><mjx-assistive-mml unselectable="on" display="block" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "overflow": "hidden", "width": "100%" })}"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mfrac><mrow><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mo>−</mo><mfrac><msqrt><mn>4</mn><mo>−</mo><mi>t</mi></msqrt><mn>5</mn></mfrac><msup><mtext> m</mtext><mrow data-mjx-texclass="ORD"><mn>3</mn></mrow></msup><msup><mtext> s</mtext><mrow data-mjx-texclass="ORD"><mo>−</mo><mn>1</mn></mrow></msup></math></mjx-assistive-mml></mjx-container><ol><li><p>Given that the cylinder empties after <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "0" })}" xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="1.532ex" role="img" focusable="false" viewBox="0 -677 500 677" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>4</mn></math></mjx-assistive-mml></mjx-container> seconds, use a Riemann sum with intervals of width <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.05ex" })}" xmlns="http://www.w3.org/2000/svg" width="3.783ex" height="1.557ex" role="img" focusable="false" viewBox="0 -666 1672 688" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="2E" d="M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z" transform="translate(500,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" transform="translate(778,0)" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g><g data-mml-node="mtext" transform="translate(1278,0)"><path data-c="73" d="M295 316Q295 356 268 385T190 414Q154 414 128 401Q98 382 98 349Q97 344 98 336T114 312T157 287Q175 282 201 278T245 269T277 256Q294 248 310 236T342 195T359 133Q359 71 321 31T198 -10H190Q138 -10 94 26L86 19L77 10Q71 4 65 -1L54 -11H46H42Q39 -11 33 -5V74V132Q33 153 35 157T45 162H54Q66 162 70 158T75 146T82 119T101 77Q136 26 198 26Q295 26 295 104Q295 133 277 151Q257 175 194 187T111 210Q75 227 54 256T33 318Q33 357 50 384T93 424T143 442T187 447H198Q238 447 268 432L283 424L292 431Q302 440 314 448H322H326Q329 448 335 442V310L329 304H301Q295 310 295 316Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0.5</mn><mtext>s</mtext></math></mjx-assistive-mml></mjx-container> to work out an estimate for the radius of the cylinder.</p></li><li><p>Using <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.691ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.38ex" height="2.514ex" role="img" focusable="false" viewBox="0 -805.5 610 1111" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo" transform="translate(0 0.5)"><path data-c="222B" d="M113 -244Q113 -246 119 -251T139 -263T167 -269Q186 -269 199 -260Q220 -247 232 -218T251 -133T262 -15T276 155T297 367Q300 390 305 438T314 512T325 580T340 647T361 703T390 751T428 784T479 804Q481 804 488 804T501 805Q552 802 581 769T610 695Q610 669 594 657T561 645Q542 645 527 658T512 694Q512 705 516 714T526 729T538 737T548 742L552 743Q552 745 545 751T525 762T498 768Q475 768 460 756T434 716T418 652T407 559T398 444T387 300T369 133Q349 -38 337 -102T303 -207Q256 -306 169 -306Q119 -306 87 -272T55 -196Q55 -170 71 -158T104 -146Q123 -146 138 -159T153 -195Q153 -206 149 -215T139 -230T127 -238T117 -242L113 -244Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo data-mjx-texclass="OP">∫</mo></math></mjx-assistive-mml></mjx-container> notation, write down an expression which represents the exact radius of the cylinder.</p></li></ol><hr><p>Give your estimate for the radius, correct to <mjx-container class="MathJax" jax="SVG" style="${ssrRenderStyle({ "direction": "ltr", "position": "relative" })}"><svg style="${ssrRenderStyle({ "overflow": "visible", "min-height": "1px", "min-width": "1px", "vertical-align": "-0.05ex" })}" xmlns="http://www.w3.org/2000/svg" width="1.131ex" height="1.554ex" role="img" focusable="false" viewBox="0 -665 500 687" aria-hidden="true"><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="${ssrRenderStyle({ "stroke-width": "3" })}"></path></g></g></g></svg><mjx-assistive-mml unselectable="on" display="inline" style="${ssrRenderStyle({ "top": "0px", "left": "0px", "clip": "rect(1px, 1px, 1px, 1px)", "-webkit-touch-callout": "none", "-webkit-user-select": "none", "-khtml-user-select": "none", "-moz-user-select": "none", "-ms-user-select": "none", "user-select": "none", "position": "absolute", "padding": "1px 0px 0px 0px", "border": "0px", "display": "block", "width": "auto", "overflow": "hidden" })}"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>3</mn></math></mjx-assistive-mml></mjx-container> significant figures.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pure/numerical-methods/riemann-sums/problems/AoY78A0B.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AoY78A0B = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  AoY78A0B as default
};