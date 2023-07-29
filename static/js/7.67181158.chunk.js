(this["webpackJsonpruyu-website"]=this["webpackJsonpruyu-website"]||[]).push([[7],{115:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return p}));i(0);var n=i(10),r=i(27),s=i(113),c=i(86),a=i.n(c),l=i(3),o=[{title:"ReCapture: AR-Guided Timelapse Photography",link:"https://www.cs.cornell.edu/abe/projects/recapture/",desc:Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(l.jsxs)("div",{style:{flexDirection:"column",width:"70%"},children:[Object(l.jsx)("h4",{children:"Abstract"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{style:{fontWeight:900,fontStyle:"italic"},children:" ReCapture "})," is a system that leverages AR-based guidance to help users capture time-lapse data with hand-held mobile devices. It works by repeatedly guiding users back to the precise location of previously captured images so they can record time- lapse videos one frame at a time without leaving their camera in the scene. Building on previous work in computational re-photography, we combine three different guidance modes to enable parallel hand- held time-lapse capture in general settings. We demonstrate this versatility on a wide variety of subjects and scenes captured over a year of development and regular use, and explore different visualizations of unstructured hand-held time lapse data. See more details on our ",Object(l.jsx)("a",{href:"https://www.cs.cornell.edu/abe/projects/recapture/",children:"project website"}),"."]}),Object(l.jsx)("h4",{children:"iOS Implementation"}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"start",alignItems:"center",height:"25%",padding:"1.25em"},children:[Object(l.jsx)("div",{style:{width:"10%"},children:Object(l.jsx)(s.a,{elevation:1,style:{borderRadius:20,padding:5},children:Object(l.jsx)("img",{src:"".concat("","/images/projects/icon.png"),style:{width:"100%"}})})}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",marginLeft:20},children:[Object(l.jsx)("h3",{style:{margin:0},children:"ReCapture Time-lapse"}),Object(l.jsx)("a",{href:"https://apps.apple.com/us/app/recapture-app/id6443819694",style:{color:"rgb(80, 182, 232)",border:0,fontWeight:600,fontSize:"10pt"},children:"VIEW ON APP STORE"})]})]}),Object(l.jsx)("h4",{children:"Citation"}),Object(l.jsxs)("p",{style:{fontSize:"10pt"},children:[Object(l.jsx)("span",{style:{fontWeight:"bold"},children:"Ruyu Yan"}),", Jiatian Sun, Longxiulin Deng, and Abe Davis. 2022. ReCapture: AR-Guided Time-lapse Photography. ",Object(l.jsx)("span",{style:{fontStyle:"italic"},children:"In The 35th Annual ACM Symposium on User Interface Software and Technology (UIST \u201922). ACM. https://doi.org/10.1145/3526113.3545641"})]})]}),Object(l.jsx)("div",{style:{width:"30%"},children:Object(l.jsx)("a",{href:"https://www.cs.cornell.edu/abe/projects/recapture/",className:"image",children:Object(l.jsx)("img",{src:"".concat("","/images/projects/recapture.png"),alt:"ReCapture: AR-Guided Timelapse Photography"})})})]}),collaborators:Object(l.jsxs)("p",{children:["Collaborators: ",Object(l.jsx)("a",{href:"https://jiatiansun.github.io/",children:"Jiatian Sun"}),", Longxiulin Deng, ",Object(l.jsx)("a",{href:"http://abedavis.com/",children:"Abe Davis"})]})},{title:"Interactive Renderer For Chinese Ink Painting",desc:Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Description"}),Object(l.jsxs)("p",{children:["We developed a deferred shading pipeline that renders a 3D scene in the style of colorful 2D Chinese ink painting. To simulate the freehand painting effect, we will render the silhouette and the interior with stroke detection in different rendering passes. To better render the classic theme of mountain and water ",Object(l.jsx)("span",{style:{fontStyle:"italic"},children:" (shan shui) "})," in Chinese painting, we rendered water reflection with wave animation. Building on a stylized scene, we furthered implement repainting effects in response to camera motion and calligraphy animations according to the user input. The renderer is implemented with OpenGL. See more details in our ",Object(l.jsx)("a",{href:"".concat("","/documents/CS_5625_Final_Project_Report.pdf"),children:"project report"}),"."]}),Object(l.jsx)("h4",{children:"Demo"}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(l.jsx)("div",{className:"player-wrapper",style:{width:"70%",paddingRight:"10px"},children:Object(l.jsx)(a.a,{className:"react-player fixed-bottom",url:"videos/ink_render_demo.mp4",width:"100%",height:"100%",controls:!0,playing:!0,loop:!0})}),Object(l.jsxs)("div",{style:{flexDirection:"column",width:"30%"},children:[Object(l.jsx)("img",{style:{width:"100%"},src:"".concat("","/images/projects/contour.png")}),Object(l.jsx)("img",{style:{width:"100%"},src:"".concat("","/images/projects/interior.jpg")})]})]})]}),collaborators:Object(l.jsxs)("p",{children:["Collaborators: ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/becky-hu-443199175/",children:"Becky Hu"}),", ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/yue-olivia-li-7a1350193/",children:"Olivia Li"}),", Blaire Yu, Andrew Li"]})},{title:"Monitoring Maize Phenotype with UAV Image",desc:Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Abstract"}),Object(l.jsxs)("p",{children:["Crop phenotyping is an essential practice for farming and plant breeding, while traditional methods require a heavy labor force input. In this paper, we present a vision-based system for automated phenotyping for maize. We trained a crop row detector based on the Faster R-CNN framework, which allows us to further analyze the aerial image data at the plot level. We performed precise normalized difference vegetation index (NDVI) calculation on the predicted rows, applying plant segmentation with thresholding. We further present a latent vector learning method based on the variational autoencoder architecture to track the varying phenotypical representation over the lifespan of maize. Such feature vectors will be used for differentiating between genotypes. See more details in our ",Object(l.jsx)("a",{href:"".concat("","/documents/CS6670_writeup.pdf"),children:"project report"}),"."]}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(l.jsx)("img",{style:{width:"30%",paddingRight:"20px"},src:"".concat("","/images/projects/june_mask.png")}),Object(l.jsx)("img",{style:{width:"30%"},src:"".concat("","/images/projects/june_ndvi.png")})]}),Object(l.jsx)("p",{style:{textAlign:"center",fontStyle:"italic"},children:"Example Outputs: crop mask (left), image alignment and crop detection (right)"})]}),collaborators:Object(l.jsxs)("p",{children:["Collaborator: ",Object(l.jsx)("a",{href:"https://mingchiangchang.github.io/",children:"Ming-Chiang Chang"})]})},{title:"Symmetrical Paper Cutting Editor",desc:Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Description"}),Object(l.jsxs)("p",{children:["We developed a web application to model the Chinese paper cutting art using ",Object(l.jsx)("a",{href:"https://threejs.org/",children:"THREE.js"}),". We allow the users to fold the paper, cut out some patterns, and unfold to view the result. Paper cutting beginners can then learn to design patterns on our interface without destroying a lot of paper. Demo link coming soon."]}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",padding:"0px 20px 20px 20px"},children:[Object(l.jsxs)("div",{className:"player-wrapper",style:{width:"60%",padding:"20px"},children:[Object(l.jsx)("p",{style:{textAlign:"center",fontStyle:"italic"},children:"5x Fast-forwarded Demo Video"}),Object(l.jsx)(a.a,{className:"react-player fixed-bottom",url:"videos/paper_cut_demo_fast.mp4",width:"100%",height:"100%",controls:!0,playing:!0,loop:!0})]}),Object(l.jsxs)("div",{style:{flexDirection:"column",width:"40%",padding:"20px"},children:[Object(l.jsx)("p",{style:{textAlign:"center",fontStyle:"italic"},children:"Example Outputs"}),Object(l.jsxs)("div",{style:{flexDirection:"row",width:"100%"},children:[Object(l.jsx)("img",{style:{width:"50%",paddingRight:"5px"},src:"".concat("","/images/projects/paper_cut_1.png")}),Object(l.jsx)("img",{style:{width:"50%",paddingLeft:"5px"},src:"".concat("","/images/projects/paper_cut_2.png")})]}),Object(l.jsxs)("div",{style:{flexDirection:"row",width:"100%"},children:[Object(l.jsx)("img",{style:{width:"50%",paddingRight:"5px"},src:"".concat("","/images/projects/paper_cut_3.png")}),Object(l.jsx)("img",{style:{width:"50%",paddingLeft:"5px"},src:"".concat("","/images/projects/paper_cut_4.png")})]})]})]})]}),collaborators:Object(l.jsxs)("p",{children:["Collaborator: ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/becky-hu-443199175/",children:"Becky Hu"})]})},{title:"Interactive Portrait Editor",desc:Object(l.jsxs)("div",{children:[Object(l.jsx)("h4",{children:"Description"}),Object(l.jsxs)("p",{children:["Portraits are probably the most popular media of self-representation. There are numerous Apps for processing portraits as 2D images off the shelf. In this project, we leveraged 3D information predicted by deep learning models and prototyped a novel portrait editing interface, which enables camera controls, relighting, and face painting. We implemented a web application using ",Object(l.jsx)("a",{href:"https://threejs.org/",children:"THREE.js"})," and ",Object(l.jsx)("a",{href:"https://mediapipe.dev/",children:"MediaPipe"})," APIs. We also support semi-automated normal map estimation using ",Object(l.jsx)("span",{style:{fontStyle:"italic"},children:" InverseRenderNet "})," [1]. Demo link coming soon."]}),Object(l.jsxs)("p",{style:{fontSize:"12px"},children:["[1] Ye Yu and William AP Smith. 2019. InverseRenderNet: Learning single image inverse rendering. ",Object(l.jsx)("span",{style:{fontStyle:"italic"},children:" In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition(CVPR) "}),"."]}),Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",padding:"20px"},children:[Object(l.jsxs)("div",{style:{flexDirection:"column",width:"32%"},children:[Object(l.jsx)(a.a,{className:"react-player fixed-bottom",url:"videos/portrait_camera_demo_cropped.mp4",width:"100%",height:"100%",controls:!0,playing:!0,loop:!0}),Object(l.jsx)("p",{style:{textAlign:"center",fontStyle:"italic"},children:"Dolly Zoom and Camera Rotation"})]}),Object(l.jsxs)("div",{style:{flexDirection:"column",width:"32%"},children:[Object(l.jsx)(a.a,{className:"react-player fixed-bottom",url:"videos/portrait_light_demo_cropped.mp4",width:"100%",height:"100%",controls:!0,playing:!0,loop:!0}),Object(l.jsx)("p",{style:{textAlign:"center",fontStyle:"italic"},children:"Customized Re-lighting"})]}),Object(l.jsxs)("div",{style:{flexDirection:"column",width:"32%"},children:[Object(l.jsx)(a.a,{className:"react-player fixed-bottom",url:"videos/portrait_paint_demo_cropped.mp4",width:"100%",height:"100%",controls:!0,playing:!0,loop:!0}),Object(l.jsx)("p",{style:{textAlign:"center",fontStyle:"italic"},children:"Face Painting"})]})]})]}),collaborators:Object(l.jsxs)("p",{children:["Collaborators: Arthur Tan, ",Object(l.jsx)("a",{href:"https://www.linkedin.com/in/becky-hu-443199175/",children:"Becky Hu"}),", Hunter Sadoff"]})}];var d=function(e){var t=e.data,i=Object(l.jsx)("h2",{children:t.title});return t.link&&(i=Object(l.jsx)("h2",{children:Object(l.jsx)("a",{href:t.link,children:t.title})})),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"cell-container",children:Object(l.jsxs)("article",{className:"project-post",children:[Object(l.jsxs)("header",{children:[i,Object(l.jsx)("div",{children:t.collaborators})]}),Object(l.jsx)("div",{className:"description",children:t.desc})]})})})};function p(){return Object(l.jsxs)(r.a,{title:"Projects",description:"Ruyu's Past Projects",fullPage:!0,children:[Object(l.jsx)("header",{children:Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h1",{"data-testid":"heading",children:Object(l.jsx)(n.b,{to:"/",children:"Project Page"})}),Object(l.jsx)("p",{children:"A collection of my past projects in computer graphics, vision, and HCI."})]})}),o.map((function(e){return Object(l.jsx)(d,{data:e},e.title)})),Object(l.jsx)("div",{className:"cell-container project-post",children:Object(l.jsx)("h5",{style:{padding:"20px 20px 10px 20px",textAlign:"center"},children:" More Coming Soon... "})})]})}}}]);
//# sourceMappingURL=7.67181158.chunk.js.map