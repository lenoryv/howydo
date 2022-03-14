import React from "react";
import styles from '@components/Card/Card.module.css';

const articles = [
    {
        title: '¿Cómo hacer una presentación?',
        date: '13 de marzo de 2022',
        category: ['presentaciones', 'new'],
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'+ 
        'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor. '
    }
];



function Card() {
    return (
        <React.Fragment>
            {articles.map((article) => {
                return (
                    <div className={styles.card}>
                        <h2>{article.title}</h2>
                        <h3>{article.date}</h3>
                        <p>{article.description}</p>
                        <div className={styles.button}>
                            <span>Leer más</span>
                            <div>+</div>
                        </div>
                        <hr></hr>
                    </div>
                )
            })}
        </React.Fragment>
    )
}
export default Card;