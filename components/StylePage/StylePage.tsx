import React from 'react'
import styles from '@components/StylePage/StylePage.module.css'

type PageProps = {
    children?: React.ReactNode
}

let value = '10px';

const StylePage = ({ children }: PageProps) => (

    <React.Fragment>
        <div className={styles.page} 
        // style={{marginLeft: value}}
        >
            {children}
        </div>
    </React.Fragment>
)

export default StylePage