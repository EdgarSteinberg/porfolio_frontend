import styles from './styles.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SobreMiSkills = ({ skills }) => {
    return (
        <>

            <div>
                <h4>Front-end</h4>
                <div className={styles.imagenes_Skills}>
                    {skills.frontend && skills.frontend.map((skill, index) => (
                        <div className={styles.divContainerTools} key={index} >
                            <LazyLoadImage className={styles.img_skills} src={`https://porfolioback-production-bbd6.up.railway.app/skills/frontend/${skill.image}`} alt={`skill ${index}`} effect="blur" threshold={10}/>  
                            <p className={styles.p}>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4>Backend</h4>
                <div className={styles.imagenes_Skills}>
                    {skills.backend && skills.backend.map((skill, index) => (
                        <div className={styles.divContainerTools} key={index} >
                            <LazyLoadImage className={styles.img_skills} src={`https://porfolioback-production-bbd6.up.railway.app/skills/backend/${skill.image}`} alt={`skill ${index}`} effect="blur" threshold={10}/> 
                            <p className={styles.p}>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4>Tools</h4>
                <div className={styles.imagenes_Skills}>
                    {skills.tools && skills.tools.map((skill, index) => (
                        <div className={styles.divContainerTools} key={index} >
                            <LazyLoadImage className={styles.img_skills} src={`https://porfolioback-production-bbd6.up.railway.app/skills/tools/${skill.image}`} alt={`skill ${index}`} effect="blur" threshold={10}/>
                            <p className={styles.p}>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SobreMiSkills;