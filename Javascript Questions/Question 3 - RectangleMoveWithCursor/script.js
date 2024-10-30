
window.addEventListener('mousemove', (e)=>{

  let position = gsap.utils.mapRange(0, window.innerWidth, 200, window.innerWidth-200, e.clientX)

    gsap.to('#center', {
      left: position+ 'px',
      ease: Power3
    });
      
})

// rect.addEventListener('mouseleave', (e)=>{
//   gsap.to(rect, {
//     backgroundColor:'white',
//   })
// })