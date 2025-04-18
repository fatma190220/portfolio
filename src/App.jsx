import { useEffect, useState } from 'react'
import Header from './component/1-header/header'
import Hero from './component/2-hero/hero'
import Main from './component/3-main/main'
import Contact from './component/4-contact/contact'
import Footer from './component/5-footer/footer'



function App() {

const [scrollAction, setscrollAction]  = useState(false);

useEffect(()=> window.addEventListener("scroll",()=>{
  if(window.scrollY > 500){
    setscrollAction (true)
  }else{
    setscrollAction (false)
  }
})

,[]);

  return (
    <div id='up'  className='container'>
     <Header  />  
     <Hero />
     <div className='separator' />
     <Main />
     <div className='separator' />
     <Contact />
     <div className='separator' />
     <Footer />

   {scrollAction && <a className='goup' href='#up'>
     <i className="fa-solid fa-chevron-up"></i>
     </a> } 
    </div>
  )
}

export default App
