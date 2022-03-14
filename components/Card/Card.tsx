import React from "react";
import styles from '@components/Card/Card.module.css';

const articles = [
    {
        id: 0,
        title: '¿Cómo hacer una presentación?',
        date: '13 de marzo de 2022',
        category: ['presentaciones', 'new'],
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'+ 
        'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor. '
    }
];

const arrowIcon = '/icons/arrow-24.png';

function Card() {
    return (
        <React.Fragment>
            {articles.map((article) => {
                return (
                    <div key={article.id}
                    className={styles.card}>
                        <h2>{article.title}</h2>
                        <h3>{article.date}</h3>
                        <p>{article.description}</p>
                        <div className={styles.button}>
                            <span>Continuar leyendo</span>
                            <div>
                                <img src={arrowIcon} width={16} height={16}/>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                )
            })}
        </React.Fragment>
    )
}
export default Card;