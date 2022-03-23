import React from "react";
import styles from '@components/Card/Card.module.css';
import Link from "next/link";

const arrowIcon = '/icons/arrow-24.png';

function Card({howydos}) {
    return (
        <React.Fragment>
            {howydos.map((howydo) => {
                return (
                    <div key={howydo.id}
                    className={styles.card}>
                        <h2>{howydo.properties.Name.title[0].plain_text}</h2>
                        <h3>{howydo.properties.Date.date.start}</h3>
                        <p>{howydo.properties.Description.rich_text[0].plain_text}</p>
                        <Link href={'/howydo/'+ howydo.properties.Page.relation[0].id}><div className={styles.button}>
                            
                            <span>Continuar leyendo</span>
                            <div>
                                <img src={arrowIcon} width={16} height={16}/>
                            </div>
                        </div></Link>
                        <hr></hr>
                    </div>
                )
            })}
        </React.Fragment>
    )
}
export default Card;