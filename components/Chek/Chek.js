
import anime from "animejs/lib/anime.js"
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";


const styles = {
    width: '120px',
    height: '50px',
    border: '2px solid hotpink',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px'
}
export default function Home() {
    // useEffect(() => {
    //     let animation = anime({
    //         targets: 'div',
    //         translateX: 100,
    //         borderRadius: 50,
    //         duration: 2000,
    //         easing: 'linear',
    //         direction: 'alternate',
    //         animationCounter: 1
    //       });    
    // }, [])

    const {ref: myRef, inView: yono} = useInView({threshold: 1});

    // useEffect(() => {
    //     const observer = new IntersectionObserver((enteries) => {
    //         const entry = enteries[0];
    //         console.log('entry', entry); 
    //     })
    //     observer.observe(myRef.current);
    // })

    return (
        <>
        {/* // <div style = {{width: '100px', height: '100px', backgroundColor: "black"}}></div> */}
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles} ref = {myRef}>myRef is here {yono? "hello": "fu" }</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         <div style={styles}>haloo</div>
         
        </>
    )
}