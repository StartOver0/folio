import styles from './FirstSection.module.scss';
import img from '/public/images/myImg.jpeg';
import Image from 'next/image';
import Typewriter from '/components/Typewriter/Typewriter';
import { useEffect, useRef, useState } from 'react';

export default function FirstSection({gotoSection}){
    const titles = ['developer', 'developer', 'programmer', 'programmer', 'student', 'student'];
    const len = titles.length
    
    return (
        <div className={styles.container}>
            <div className={styles.left_portion}>
                <div className={styles.head}>
                    <div className={styles.name}>
                        Hi, I’m <span>Harshit Rawat</span>
                        <p> a&nbsp;<Typewriter /></p>
                    </div>
                </div>
                <div className={`${styles.about}`}>
                    I enjoy building everything from small sites to big projects (with team). If you are a business seeking a web presence or an employer looking to hire you can get in touch with me.
                </div>
                <div className={styles.btn_cover}>
                    <button onClick={() => {gotoSection('work')}} className={styles.button1}>My works</button>
                    <button onClick={() => {gotoSection('contact')}} className={styles.button2}>Contact Me</button>
                </div>
            </div>  
            <div className={styles.right_portion}>
                <div className={`${styles.img_cover} img-shadow`}>
                    <Image src = {img} alt = 'my image' objectFit='contain' objectPosition='left'/>
                </div>
            </div>
            
        </div>
    )
}