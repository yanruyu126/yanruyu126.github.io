import { Paper } from '@mui/material';
import React from 'react';
import ReactPlayer from 'react-player';

const { PUBLIC_URL } = process.env;

const data = [
    {
      title: 'ReCapture: AR-Guided Timelapse Photography',
      link: "https://www.cs.cornell.edu/abe/projects/recapture/",
      desc:
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <div style={{flexDirection: "column", width:"70%"}}>
          <h4>Abstract</h4>
          <p>
            <span style={{fontWeight:900, fontStyle:"italic"}}> ReCapture </span> is a system that leverages AR-based guidance to help users capture time-lapse data with hand-held mobile devices. It works by repeatedly guiding users back to the precise location of previously captured images so they can record time- lapse videos one frame at a time without leaving their camera in the scene. Building on previous work in computational re-photography, we combine three different guidance modes to enable parallel hand- held time-lapse capture in general settings. We demonstrate this versatility on a wide variety of subjects and scenes captured over a year of development and regular use, and explore different visualizations of unstructured hand-held time lapse data.
            See more details on our <a href="https://www.cs.cornell.edu/abe/projects/recapture/">project website</a>.
          </p>
          <h4>iOS Implementation</h4>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "start", alignItems:"center", height: '25%', padding:"1.25em"}}>
              <div style={{width:'10%'}}>
                  <Paper elevation={1} style={{borderRadius: 20, padding: 5}}> 
                      <img src={`${process.env.PUBLIC_URL}/images/projects/icon.png`} style={{width:'100%'}} />
                  </Paper>
              </div>
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center", marginLeft: 20}}>   
                  <h3 style={{margin:0}}>ReCapture Time-lapse</h3>
                  <a href="https://apps.apple.com/us/app/recapture-app/id6443819694" style={{color: "rgb(80, 182, 232)", border:0, fontWeight:600, fontSize:"10pt"}}>
                      VIEW ON APP STORE
                  </a>
              </div>
          </div>
          <h4>Citation</h4>
          <p style={{fontSize:"10pt"}}><span style={{fontWeight:"bold"}}>Ruyu Yan</span>, Jiatian Sun, Longxiulin Deng, and Abe Davis. 2022. ReCapture: AR-Guided Time-lapse Photography. <span style={{fontStyle:"italic"}}>In The 35th Annual ACM Symposium on User Interface Software and Technology (UIST ’22). ACM. https://doi.org/10.1145/3526113.3545641</span></p>
        </div>
        <div style={{width:"30%"}}>
          <a href={"https://www.cs.cornell.edu/abe/projects/recapture/"} className="image">
            <img src={`${process.env.PUBLIC_URL}${'/images/projects/recapture.png'}`} alt={'ReCapture: AR-Guided Timelapse Photography'} />
          </a>
        </div>
      </div>,
      collaborators: <p>
        Collaborators: <a href="https://jiatiansun.github.io/">Jiatian Sun</a>, Longxiulin Deng, <a href="http://abedavis.com/">Abe Davis</a> 
      </p>
    },
    {
      title: 'Interactive Renderer For Chinese Ink Painting',
      desc:
        <div>
          <h4>Description</h4>
          <p>
            We developed a deferred shading pipeline that renders a 3D scene in the style of colorful 2D Chinese ink painting. To simulate the freehand painting effect, we will render the silhouette and the interior with stroke detection in different rendering passes. To better render the classic theme of mountain and water <span style={{fontStyle:"italic"}}> (shan shui) </span> in Chinese painting, we rendered water reflection with wave animation. Building on a stylized scene, we furthered implement repainting effects in response to camera motion and calligraphy animations according to the user input. 
            See more details in our <a href={`${PUBLIC_URL}/documents/CS_5625_Final_Project_Report.pdf`}>project report</a>.
          </p>     
          <h4>Demo</h4>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <div className='player-wrapper' style={{width:"70%", paddingRight:"10px"}}>
              <ReactPlayer
              className='react-player fixed-bottom'
              url= "videos/ink_render_demo.mp4"
              width='100%'
              height='100%'
              controls = {true}
              playing 
              loop
              />
            </div>
            <div style={{flexDirection: "column", width:"30%"}}>
              <img style={{width:"100%"}} src={`${process.env.PUBLIC_URL}${'/images/projects/contour.png'}`} />
              <img style={{width:"100%"}} src={`${process.env.PUBLIC_URL}${'/images/projects/interior.jpg'}`} />
            </div>
          </div>
        </div>,
      collaborators:  <p>
        Collaborators: <a href="https://www.linkedin.com/in/becky-hu-443199175/">Becky Hu</a>, <a href="https://www.linkedin.com/in/yue-olivia-li-7a1350193/">Olivia Li</a>, Blaire Yu, Andrew Li
      </p>
    },
    {
      title: 'Monitoring Maize Phenotype with UAV Image',
      desc:
        <div>
          <h4>Abstract</h4>
          <p>
            Crop phenotyping is an essential practice for farming and plant breeding, while traditional methods require a heavy labor force input. In this paper, we present a vision-based system for automated phenotyping for maize. We trained a crop row detector based on the Faster R-CNN framework, which allows us to further analyze the aerial image data at the plot level. We performed precise normalized difference vegetation index (NDVI) calculation on the predicted rows, applying plant segmentation with thresholding. We further present a latent vector learning method based on the variational autoencoder architecture to track the varying phenotypical representation over the lifespan of maize. Such feature vectors will be used for differentiating between genotypes.
            See more details in our <a href={`${PUBLIC_URL}/documents/CS6670_writeup.pdf`}>project report</a>.
          </p>     
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
              <img style={{width:"30%", paddingRight:"20px"}} src={`${process.env.PUBLIC_URL}${'/images/projects/june_mask.png'}`} />
              <img style={{width:"30%"}} src={`${process.env.PUBLIC_URL}${'/images/projects/june_ndvi.png'}`} />
          </div>
          <p style={{textAlign: 'center', fontStyle: 'italic'}}>Example Outputs: crop mask (left), image alignment and crop detection (right)</p>
        </div>,
      collaborators:  <p>
        Collaborator: <a href="https://mingchiangchang.github.io/">Ming-Chiang Chang</a>
      </p>
    },
  ];
  
  export default data;