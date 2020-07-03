import React from 'react';
import styles from '../../scss/sub/ProjectCard.module.scss';

const ProjectCard = ({ Logo, backgroundImagePath, title, dataList }) => {
    const renderData = dataList.map((data, i) => <li key={i}>{data}</li>);
    const css = backgroundImagePath ? { backgroundImage: `url(${backgroundImagePath})` } : { backgroundColor: '#ccc' };

    return (
        <section className={styles.projectCardWrapper}>
            <div className={styles.header} style={css}/>
            <Logo className={styles.logo}/>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.dataList}>
                {renderData()}
            </ul>
        </section>
    );
};

ProjectCard.defaultProps = {
    Logo: null,
    backgroundImagePath: null,
    title: '',
    dataList: []
}

export default ProjectCard;