export const carouselImgVariants = {
    hidden: {
      opacity: 0, 
    }, 
    show:{
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.8, 0.71, 0.2, 1.01]
      }
    }
}

export const carouselInfoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      y: '-80%',
      x: '-50%',
    }, 
    show:{
      opacity: 1,
      scale: 1,
      y: '0%', 
      x: '-50%',
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: [0.5, 0.71, 0.6, 1.01]
      }
    }
};

export const downToUpVariants = {
    notInView: {
      opacity: 0,  
      y: "3vw",
    }, 
    inView:{
      opacity: 1,
      y: "0vw",
      transition: {
        duration: 0.8,
        ease: [0.5, 0.71, 0.2, 1.01],
      },
    }
}