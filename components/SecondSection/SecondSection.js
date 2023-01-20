import styles from './SecondSection.module.scss';
import img from '/public/images/myImg.jpeg';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
// import {ReactComponent as Twitter} from '/public/icons/twitter.svg';
import { useInView } from 'react-intersection-observer';

export default function SecondSection({orange, passedRef}){
    
    const {ref: aboutRef, inView: isAboutVisible} = useInView({threshold: 1});
    const {ref: linksRef1, inView: areLinksVisible1} = useInView({threshold: 1});
    const {ref: linksRef2, inView: areLinksVisible2} = useInView({threshold: 1});
    const {ref: linksRef3, inView: areLinksVisible3} = useInView({threshold: 1});

    return (
        <div className={styles.container} ref = {passedRef} > 
            {/* <div> */}
            <div className={styles.triangles}>
                {Array.from(Array(140)).map((atri, index) => (
                    <div className={styles.tile} key={index} onClick={() => handleOnclick(index)} ></div>
                ))}
            </div>
            <div className={styles.cc} >
                <div className={styles.sections}>
                    <div className={styles.left_section}>
                        <div className={styles.about}>
                            <h2 className={`${styles.heading}`}>About Me</h2>
                            <div className={`${styles.desc} ${isAboutVisible? styles.animate_about: ''}`} ref={aboutRef}><p>I am Harshit Rawat, an adept and motivated student pursuing a B.Tech in Computer Science. Seeking opportunities to work in the IT industry to improve my overall skills and assist in the accomplishment of remarkable projects.</p></div>
                        </div>
                        <div className={styles.links}>
                            <a data-name='LINKEDIN'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>

                            <a data-name='GITHUB' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>

                            <a data-name='TWITTER' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>

                            <a data-name='INSTAGRAM' ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        </div>
                        
                    </div>
                    <div className={styles.right_section}>
                        <div >
                           <h3 className={`${styles.heading} ${styles.heading2}`}>Technologies known</h3>
                            <div className={styles.techs}>
                                <ul>
                                    <li><span className={`${areLinksVisible1? styles.animate_links: ''}`} ref={linksRef1}>React JS</span></li>
                                    <li><span className={`${areLinksVisible2? styles.animate_links: ''}`} ref={linksRef2}>Next JS</span></li>
                                    <li><span className={`${areLinksVisible3? styles.animate_links: ''}`} ref={linksRef3}>Express JS</span></li>
                                </ul>
                                <ul>
                                    <li><span className={`${areLinksVisible1? styles.animate_links: ''}`}>MongoDB</span></li>
                                    <li><span className={`${areLinksVisible2? styles.animate_links: ''}`}>C++</span></li>
                                    <li><span className={`${areLinksVisible3? styles.animate_links: ''}`}>Python</span></li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    )
}