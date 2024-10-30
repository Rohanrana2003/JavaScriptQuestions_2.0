let rect = document.getElementById('center');


rect.addEventListener('mousemove', (e)=>{

      let rectLocation = rect.getBoundingClientRect();
      let insideRectVal = e.clientX -  rect.getBoundingClientRect().left;
      let mid = rectLocation.width/2

      if(insideRectVal < mid){

        let redColor = gsap.utils.mapRange(0, mid, 255, 0, insideRectVal);

        gsap.to(rect,{
          backgroundColor:`rgb(${redColor}, 0, 0)`,
          ease: Power4,
        }) 
      }
      else{ 
        let blueColor = gsap.utils.mapRange(mid, rectLocation.width, 0, 255, insideRectVal);

        gsap.to(rect,{
          backgroundColor:`rgb( 0, 0, ${blueColor})`,
          ease: Power4,
        })
      }

})

rect.addEventListener('mouseleave', (e)=>{
  gsap.to(rect, {
    backgroundColor:'white',
  })
})