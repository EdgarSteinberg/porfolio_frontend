import styles from './styles.module.css';

const SobreMiSkills = ({ skills }) => {
    return (
        <>

            <div>
                <h4>Front-end</h4>
                <div className={styles.imagenes_Skills}>
                    {skills.frontend && skills.frontend.map((skill, index) => (
                        <div className={styles.divContainerTools} key={index} >
                            <img className={styles.img_skills} src={`https://porfolio-back-lr6x.onrender.com/skills/frontend/${skill.image}`} alt={`skill ${index}`} />  
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
                            <img className={styles.img_skills} src={`https://porfolio-back-lr6x.onrender.com/skills/backend/${skill.image}`} alt={`skill ${index}`} /> 
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
                            <img className={styles.img_skills} src={`https://porfolio-back-lr6x.onrender.com/skills/tools/${skill.image}`} alt={`skill ${index}`} />
                            <p className={styles.p}>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SobreMiSkills;