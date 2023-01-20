import Header from '../components/Header/Header'
import FirstSection from '../components/FirstSection/FirstSection'
import SecondSection from '../components/SecondSection/SecondSection'
import WorkSection from '/components/WorkSection/WorkSection';
import Contact from '/components/Contact/Contact'
import Achievements from '/components/Achievements/Achievements'
import styles from '../styles/Home.module.scss'
import ImageSection from '../components/ImageSection/ImageSection';
import Chek from '/components/Chek/Chek';
import Typewriter from '/components/Typewriter/Typewriter';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Loader from '../components/Loader/Loader';

export default function Home() {

  const [blur, setBlur] = useState(0);
  const toggleblur = () => {
    setBlur(!blur);
  }

  const gotoSection = (id) => {document.getElementById(id).scrollIntoView()}

  const {ref: myRef1, inView: orange} = useInView({threshold: 1});
  const {ref: myRef2, inView: orange1} = useInView({threshold: 0});
  const {ref: myRef3, inView: green} = useInView({threshold: 1});
  const {ref: myRef4, inView: green1} = useInView({threshold: 0});
  const {ref: myRef5, inView: defaultx} = useInView({threshold: 0});

  const [loading, setLoading] = useState(1);
  const isFirst = useRef(1);

  const [isNavopen, setNavopen] = useState(0);
  const navOpenClose = () => {
    setNavopen(!isNavopen);
  }

  const navClose = () => {setNavopen(0); setBlur(0)}
  useEffect(() =>{
      if(isFirst.current){
        setTimeout(() => {
            console.log('loading', loading);
            console.log(window.innerHeight, window.innerWidth);
            setLoading(0);
            isFirst.current = 0;

        }, 3200);
      }
  }, [])

  var color = `${defaultx ? 'nospike' :(green||green1 ? 'green':(orange || orange1? 'orange':'dark-gray'))}`
    
  return (
    <div style={{backgroundColor: "rgb(46, 48, 75)", minHeight: "100vh"}}>
      <div className={`${loading? '': styles.hide}`}><Loader /></div>
      <div className={`${!loading? styles.show: styles.hide}`}>
          <Header toggleblur={toggleblur} color={color} setNavopen={navOpenClose} isNavopen={isNavopen} gotoSection = {gotoSection}/>  
          <div className={`${styles.container} ${blur? styles.blur: ''}`} onClick = {navClose} >
            <FirstSection gotoSection = {gotoSection}/>
            <ImageSection />
            <SecondSection orange={orange} passedRef={myRef1}/>
            <div ref={myRef2} style = {{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 'calc(100vh - 90px)', backgroundColor:"rgb(242, 242, 242)"}}>
              <WorkSection/>
            </div>
            <Achievements passedRef = {myRef3}/>
            <Contact passedRef={myRef4}/>
            <div ref={myRef5} style={{height: ".5px"}}></div> 
          </div>
      </div>

    </div>

    // <Typewriter />
  )
}