(this["webpackJsonpruyu-website"]=this["webpackJsonpruyu-website"]||[]).push([[5],{114:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return b}));var n=i(0),a=i.n(n),s=i(10),r=i(27),c=[{title:"Neural Spline Fields for Burst Image Fusion and Layer Separation",figure:{src1:"images/publications/nsf_animation.mp4",isImage:!1},authors:[{name:"Ilya Chugunov",link:"https://ilyac.info/"},{name:"David Shustin",link:"https://davshus.github.io/"},{name:"Ruyu Yan"},{name:"Chenyang Lei",link:"https://chenyanglei.github.io/"},{name:"Felix Heide",link:"https://www.cs.princeton.edu/~fheide/"}],conference:"CVPR",year:"2024",paperLink:"https://light.princeton.edu/wp-content/uploads/2023/12/neural-spline-fields.pdf",projectLink:"https://light.princeton.edu/publication/nsf/",codeLink:"https://github.com/princeton-computational-imaging/NSF",desc:"We propose neural spline fields (NSFs) as a compact flow model, which maps input coordinates to spline control points for producing temporally consistent flow estimates that align with conventional optical flow references."},{title:"Ray Conditioning: Trading Photo-realism for Photo-Consistency in Multi-view Image Generation",figure:{src1:"images/publications/raycond.jpg",isImage:!0},authors:[{name:"Eric Ming Chen",link:"https://echen01.github.io/"},{name:"Sidhanth Holalkere",link:"https://sholalkere.github.io/"},{name:"Ruyu Yan"},{name:"Kai Zhang",link:"https://kai-46.github.io/website/"},{name:"Abe Davis",link:"http://abedavis.com/"}],conference:"ICCV",year:"2023",paperLink:"https://arxiv.org/pdf/2304.13681",projectLink:"https://ray-cond.github.io/",codeLink:"https://github.com/echen01/ray-conditioning",desc:"We propose ray conditioning, a lightweight and geometry-free technique for multi-view image generation. It enables enables photo-realistic multi-view image editing on natural photos via GAN inversion."},{title:"ReCapture: AR-Guided Time-lapse Photography",figure:{src1:"images/publications/recapture.png",isImage:!0},authors:[{name:"Ruyu Yan"},{name:"Jiatian Sun",link:"https://jiatiansun.github.io/"},{name:"Longxiulin Deng"},{name:"Abe Davis",link:"http://abedavis.com/"}],conference:"UIST",year:"2022",paperLink:"https://www.cs.cornell.edu/abe/projects/recapture/sources/ReCaptureUist2022.pdf",projectLink:"http://www.cs.cornell.edu/abe/projects/recapture/",desc:"We present ReCapture, a system that leverages AR-based guidance to help users capture time-lapse data with hand-held mobile devices. ReCapture works by repeatedly guiding users back to the precise location of previously captured images so they can record time-lapse videos one frame at a time without leaving their camera in the scene."}],o=i(3),l=function(e){var t=e.data,i=e.link;return Object(o.jsx)("div",{className:"figure-container",children:Object(o.jsx)("a",{href:i,children:t.isImage?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("img",{src:"".concat("").concat(t.src1),className:"main-image"}),t.src2&&Object(o.jsx)("img",{src:"".concat("").concat(t.src2),className:"hover-image"})]}):Object(o.jsx)("video",{src:"".concat("").concat(t.src1),autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})})},d=function(e){var t=e.data;return Object(o.jsx)("div",{className:"publication-cell-container",children:Object(o.jsxs)("div",{style:{display:"flex",gap:"20px",alignItems:"center"},children:[Object(o.jsx)("div",{style:{width:"30%",aspectRatio:"1",display:"flex",alignItems:"center"},children:Object(o.jsx)(l,{data:t.figure,link:t.projectLink})}),Object(o.jsxs)("div",{className:"card-text",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("h3",{children:Object(o.jsx)("a",{href:t.projectLink,children:t.title})}),Object(o.jsxs)("p",{children:[t.authors.map((function(e,i){return Object(o.jsxs)(a.a.Fragment,{children:[e.link?Object(o.jsx)("a",{href:e.link,style:{fontWeight:"Ruyu Yan"===e.name?"bold":"normal"},children:e.name}):Object(o.jsx)("span",{style:{fontWeight:"Ruyu Yan"===e.name?"bold":"normal"},children:e.name}),i<t.authors.length-1&&", "]},i)})),Object(o.jsxs)("p",{style:{fontSize:"0.75rem",fontStyle:"italic"},children:[t.conference,", ",t.year]}),Object(o.jsxs)("p",{style:{fontSize:"0.75rem"},children:[t.projectLink&&Object(o.jsx)("a",{className:"website-link",href:t.projectLink,children:"project website"}),t.paperLink&&t.projectLink&&" / ",t.paperLink&&Object(o.jsx)("a",{className:"website-link",href:t.paperLink,children:"paper"}),t.paperLink&&t.codeLink&&" / ",t.codeLink&&Object(o.jsx)("a",{className:"website-link",href:t.codeLink,children:"code"})]})]})]}),Object(o.jsx)("div",{className:"description",children:Object(o.jsx)("p",{children:t.desc})})]})]})})},p=i(5),h=i(76);var u=function(e){var t=Object(n.useState)(!1),i=Object(p.a)(t,2),a=i[0],s=i[1];return Object(o.jsxs)("span",{onMouseEnter:function(){s(!0)},onMouseLeave:function(){s(!1)},style:{position:"relative",display:"inline-flex",alignItems:"center"},children:[a&&Object(o.jsx)("div",{style:{position:"absolute",top:0,left:"50%",transform:"translate(-50%, -100%)",zIndex:1,width:"15vw",minWidth:"200px",maxWidth:"350px",fontFamily:"font-family: Raleway, Helvetica, sans-serif;"},children:Object(o.jsx)(h.a,{imageURL:e.imageURL,description:e.imageLabel,textPadding:10})}),e.text]})},j="";function b(){var e=Object(o.jsx)(u,{text:"Lab Cat",imageLabel:"Me and the Lab Cat",imageURL:"".concat(j,"images/RuyuAndLabCat.jpg")});return Object(o.jsxs)(r.a,{title:"About",description:"Ruyu Yan's Personal Page",children:[Object(o.jsxs)("article",{className:"post",id:"index",children:[Object(o.jsx)("header",{children:Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h2",{"data-testid":"heading",children:Object(o.jsx)(s.b,{to:"/",children:"About Me"})})})}),Object(o.jsxs)("p",{children:["I am a second year CS Ph.D. student at Princeton University working with Professors ",Object(o.jsx)("a",{href:"https://www.cs.princeton.edu/~af/",children:"Adam Finkelstein"})," and ",Object(o.jsx)("a",{href:"https://www.cs.princeton.edu/~fheide/",children:"Felix Heide"}),". My research spans graphics, vision, and HCI, with a focus on AI for content creation and computational photography. I am interested in exploring methods that combine mathematical models of both problems in image processing and user experience to tackle new applications."]}),Object(o.jsxs)("p",{children:["Previously, I completed my undergraduate studies at Cornell University, majoring in Computer Science and minoring in Psychology. I was fortunate to be advised by Professor ",Object(o.jsx)("a",{href:"http://abedavis.com/",children:"Abe Davis"})," and spent two wonderful years with the ",Object(o.jsx)("a",{href:"https://rgb.cs.cornell.edu/",children:"Cornell Vision & Graphics Group"}),", where I became good friends with the ",e,"."]})]}),Object(o.jsxs)("article",{className:"post",id:"index",children:[Object(o.jsx)("header",{children:Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h2",{"data-testid":"heading",children:"Publications"})})}),c.map((function(e){return Object(o.jsx)(d,{data:e},e.title)}))]})]})}},76:function(e,t,i){"use strict";var n=i(6);function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}var s=i(113),r=(i(0),i(3));t.a=function(e){var t=e.imageURL,i=e.description,c=e.height,o=void 0===c?70:c,l=e.textPadding,d=void 0===l?20:l,p=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){Object(n.a)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({margin:"10px"},e.style);return Object(r.jsxs)(s.a,{elevation:2,style:p,children:[Object(r.jsx)("img",{style:{height:"".concat(o,"%"),width:"100%"},src:t}),Object(r.jsxs)("p",{style:{padding:"".concat(d,"px 0px"),textAlign:"center",margin:0},children:[" ",i," "]})]})}}}]);
//# sourceMappingURL=5.fed40f47.chunk.js.map