import React from 'react'
import styles from './index.module.sass'

export const StoryReader = (props) => {
    const { cover, content,title } = props.location.state
return(
        <div className = {styles.readerCont}>
            <img src = {cover} alt = 'img'/>
            <div className = {styles.story}>
                <h1 className = {styles.sttile}>
                    {title}
                </h1>
                <div className = {styles.green} dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
            
        </div>
    
)}

const text = 'Dasturlarda dinamik malumotlar tuzilmasidan kopincha chiziqli royhatlarelementlarning bog‘lanish usuli va ular ustida bajarilishi mumkin bo‘lgan amallaribilan farqlanadi. Dinamik tuzilmalar massiv va yozuvdan farqli ravishda operatixotirada ketma-ket sohalarda joylashmaydi. Ixtiyoriy dinamik tuzilma elementi2 ta maydondan tashkil topadi: tuzilma tashkil etilishiga sabab bo‘layotgan'