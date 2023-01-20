import styles from './Achievements.module.scss';
import img1 from '/public/images/codechef.png';
import img2 from '/public/images/codingninjas.png';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function SecondSection({passedRef}){
    
    const {ref: achievementRef1, inView: isAchievement1Visible} = useInView({threshold: 1});
    const {ref: achievementRef2, inView: isAchievement2Visible} = useInView({threshold: 1});

    return ( 
        <div className={styles.container} ref = {passedRef}>
            
            <div className={styles.triangles}>
                {Array.from(Array(140)).map((atri, index) => (
                    <div className={styles.tile} key={index} onClick={() => handleOnclick(index)} ></div>
                ))}
            </div>
            <div className={styles.cc}>
                <div className={styles.sections}>
                    <h2 className={styles.heading}>Achievements</h2>
                    <div className={styles.section}>
                        <a href="https://www.codechef.com/users/fireflake0987" target='blank' className={`${styles.acv_item} ${isAchievement1Visible ? styles.visible: ''}`} ref={achievementRef1}>
                                <div className={styles.check}>
                                    <div className={styles.img_cover}>
                                        <Image src={img1} alt='Codechef' layout='fill' objectFit='cover'/>
                                    </div>
                                    <p className={styles.desc}>5&#11088; coder on Codechef</p>
                                </div>
                        </a>
                        <a className={`${styles.acv_item} ${isAchievement2Visible ? styles.visible: ''}`} ref={achievementRef2} target='blank' href="https://www.codechef.com/users/fireflake0987">
                            <div className={styles.check}>
                                <div className={styles.img_cover}>
                                    <Image src={img2} alt="Coding Ninjas" layout='fill' objectFit='cover'/>
                                </div>
                                <p className={styles.desc}>Specialist on Coding Ninjas </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}