import styles from './WorkSection.module.scss';
import img from '/public/images/uv1.jpeg';
import Image from 'next/image';
import projects from '/staticData/projectDetails';
import { useInView } from 'react-intersection-observer';

export default function WorkSection(){

    const {ref: project2, inView: projectx2} = useInView({threshold: .2, triggerOnce: true});
    const {ref: project3, inView: projectx3} = useInView({threshold: .2, triggerOnce: true});
    const {ref: project1, inView: projectx1} = useInView({threshold: .2, triggerOnce: true});
    return (
        <div className={styles.container} id = 'work'>
            <div>
                <h2 className={styles.heading}>
                    Some things I&#39;ve build 
                </h2>
        
                <div className={`${styles.project_item} ${projectx1 ? styles.fadeinleft: ''}`} ref={project1}>
                    {/* <div className={styles.project_image}> */}
                        <div className={styles.image_cover}>
                            <Image src = {img} alt='Hello friends' layout='fill' objectFit='cover'/>
                        </div>
                    {/* </div>  */}
                    <div className={styles.project_details} >
                        <p className={styles.project_type}>{projects[0].projectType}</p>
                        <p className={styles.project_name}>{projects[0].projectName}</p>
                        <div className={styles.desc_cover}>
                            <p className={styles.project_desc}>{projects[0].projectDesc}</p>
                        </div>
                        <div className={styles.project_links}>
                            <a href="https://github.com/bchiang7/halcyon-site" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 -2 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a href="https://halcyon-theme.netlify.com/" aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 -1 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`${styles.project_item} ${projectx2 ? styles.fadeinleft: ''}`} ref={project2}>
                <div className={styles.project_details}>
                        <p className={styles.project_type}>{projects[1].projectType}</p>
                        <p className={styles.project_name}>{projects[1].projectName}</p>
                        <div className={styles.desc_cover}>
                            <p className={styles.project_desc}>{projects[1].projectDesc}</p>
                        </div>
                        <div className={styles.project_links}>
                            <a href="https://github.com/bchiang7/halcyon-site" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 -2 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a href="https://halcyon-theme.netlify.com/" aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 -1 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* <div className={styles.project_image}> */}
                        <div className={styles.image_cover}>
                            <Image src = {img} alt='Hello friends' layout='fill' objectFit='cover'/>
                        </div>
                    {/* </div>  */}
                    
                </div>
                <div className={`${styles.project_item} ${projectx3 ? styles.fadeinleft: ''}`} ref={project3}>
                    {/* <div className={styles.project_image}> */}
                        <div className={styles.image_cover}>
                            <Image src = {img} alt='Hello friends' layout='fill' objectFit='cover'/>
                        </div>
                    {/* </div>  */}
                    <div className={styles.project_details}>
                        <p className={styles.project_type}>{projects[2].projectType}</p>
                        <p className={styles.project_name}>{projects[2].projectName}</p>
                        <div className={styles.desc_cover}>
                            <p className={styles.project_desc}>{projects[2].projectDesc}</p>
                        </div>
                        <div className={styles.project_links}>
                            <a href="https://github.com/bchiang7/halcyon-site" aria-label="GitHub Link" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 -2 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <title>GitHub</title>
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                            <a href="https://halcyon-theme.netlify.com/" aria-label="External Link" className="external" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 -1 24 24"  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}