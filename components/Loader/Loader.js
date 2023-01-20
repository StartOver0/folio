import styles from '/styles/Loader.module.scss';
import img from '/public/images/sup.jpg';
import Image from 'next/image';

export default function Loader(){
    
    return (
        <div className={styles.body}>
            {/* <div className={styles.container}>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
            </div> */}
            <svg className={styles.svg} width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame 1">
                <rect width="75" height="75" fill="rgb(43, 43, 70)"/>
                <g id="Group 2">
                <g id="logo">
                <g id="full">
                <g id="r">
                <ellipse id="re" cx="45.2987" cy="26.1417" rx="12.8408" ry="8.1417" fill="#43C4C7"/>
                <rect id="rr" x="24.821" y="18" width="17.842" height="16.7623" fill="rgb(43, 43, 70)"/>
                </g>
                <g id="l">
                <rect id="lr2" x="15" y="18" width="4.05499" height="16.575" rx="2.02749" fill="#fb8e8e"/>
                <rect id="lr1" x="15" y="39.7912" width="4.05499" height="16.4653" rx="2.02749" fill="#fb8e8e"/>
                <ellipse id="ellipse2" rx="1.32402" ry="1.28207" transform="matrix(0.982732 -0.185032 0.233335 0.972396 17.0324 37.374)" fill="#fb8e8e"/>
                </g>
                </g>
                <g id="greenhands">
                <rect id="green1" x="36.6266" y="18" width="4.05499" height="16.7623" rx="2.02749" fill="#43C4C7"/>
                <rect id="green2" width="3.89896" height="25.3222" rx="1.94948" transform="matrix(0.83818 -0.545394 0.638337 0.769757 40.5679 37.5081)" fill="#43C4C7"/>
                </g>
                <g id="orangehands">
                <rect id="orange2" x="36.5255" y="39.7958" width="4.05499" height="16.463" rx="2.02749" fill="#fb8e8e"/>
                <rect id="orange1" width="3.04707" height="16.4131" rx="1.52354" transform="matrix(-0.0408308 -0.999166 0.999995 0.00323571 19.7949 38.7526)" fill="#fb8e8e"/>
                </g>
                </g>
                <ellipse id="Ellipse 1" rx="1.32402" ry="1.28207" transform="matrix(0.982732 -0.185032 0.233335 0.972396 38.5863 37.374)" fill="#43C4C7"/>
                
                </g>
                </g>

            </svg>
        </div>
    )
}