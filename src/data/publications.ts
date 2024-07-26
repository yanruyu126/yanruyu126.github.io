const publications = [
  {
    title: "Neural Spline Fields for Burst Image Fusion and Layer Separation",
    figure: {
      src1: "images/publications/nsf_animation.mp4",
      isImage: false
    },
    authors: [
      { name: "Ilya Chugunov", link: "https://ilyac.info/" },
      { name: "David Shustin", link: "https://davshus.github.io/" },
      { name: "Ruyu Yan" },
      { name: "Chenyang Lei", link: "https://chenyanglei.github.io/" },
      { name: "Felix Heide", link: "https://www.cs.princeton.edu/~fheide/" }
    ],
    conference: "CVPR",
    year: "2024",
    paperLink: "https://light.princeton.edu/wp-content/uploads/2023/12/neural-spline-fields.pdf",
    projectLink: "https://light.princeton.edu/publication/nsf/",
    codeLink: "https://github.com/princeton-computational-imaging/NSF",
    desc: "We propose neural spline fields (NSFs) as a compact flow model, which maps input coordinates to spline control points for producing temporally consistent flow estimates that align with conventional optical flow references."
  },
  {
    title: "Ray Conditioning: Trading Photo-realism for Photo-Consistency in Multi-view Image Generation",
    figure: {
      src1: "images/publications/raycond.jpg",
      isImage: true
    },
    authors: [
      { name: "Eric Ming Chen", link: "https://echen01.github.io/" },
      { name: "Sidhanth Holalkere", link: "https://sholalkere.github.io/" },
      { name: "Ruyu Yan" },
      { name: "Kai Zhang", link: "https://kai-46.github.io/website/" },
      { name: "Abe Davis", link: "http://abedavis.com/" }
    ],
    conference: "ICCV",
    year: "2023",
    paperLink: "https://arxiv.org/pdf/2304.13681",
    projectLink: "https://ray-cond.github.io/",
    codeLink: "https://github.com/echen01/ray-conditioning",
    desc: "We propose ray conditioning, a lightweight and geometry-free technique for multi-view image generation. It enables enables photo-realistic multi-view image editing on natural photos via GAN inversion."
  },
  {
    title: "ReCapture: AR-Guided Time-lapse Photography",
    figure: {
      src1: "images/publications/recapture.png",
      isImage: true
    },
    authors: [
      { name: "Ruyu Yan" },
      { name: "Jiatian Sun", link: "https://jiatiansun.github.io/" },
      { name: "Longxiulin Deng" },
      { name: "Abe Davis", link: "http://abedavis.com/" }
    ],
    conference: "UIST",
    year: "2022",
    paperLink: "https://www.cs.cornell.edu/abe/projects/recapture/sources/ReCaptureUist2022.pdf",
    projectLink: "http://www.cs.cornell.edu/abe/projects/recapture/",
    desc: "We present ReCapture, a system that leverages AR-based guidance to help users capture time-lapse data with hand-held mobile devices. ReCapture works by repeatedly guiding users back to the precise location of previously captured images so they can record time-lapse videos one frame at a time without leaving their camera in the scene."
  }
];

export default publications;