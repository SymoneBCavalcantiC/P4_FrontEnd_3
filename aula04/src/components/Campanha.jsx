import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function defineMensagem(mes) {

        if (mes === "setembro") {
            return "Prevenção ao suicídio" 
        } else if (mes === "outubro") {
            return "Conscientização sobre o câncer de mama"
        } else if (mes === "novembro") {
            return "Prevenção e combate ao cãncer de próstata"
        } else {
            return "Mês trival"
        }
    }

    function defineCorDeFundo(mes) {

        if(mes === "setembro") {
            return styles.setembroClass
        } else if (mes === "outubro") {
            return styles.outubroClass
        } else {
            return styles.novembroClass
        }
    }

  return (
    <div className = {defineCorDeFundo(props.mes)}>
        {defineMensagem(props.mes)}
    </div>
  )
}

export default Campanha