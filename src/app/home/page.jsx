import styles from "../home/Home.module.css"
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";

export default function Home(){

    return(
        <div className={styles.main}>
            <div className={styles.container}>
                <Image 
                className={styles.image}
                src="/images/eu.jpg" 
                alt="Foto da aluna" 
                width={500} 
                height={400} />
                <div className={styles.aside}>
                       <h1 className={styles.name}>
                        Ana Beatriz de Souza de Oliveira
                    </h1>
                    <p className={styles.infos}>
                     Turma: 2TDS1
                    </p>
                    <p className={styles.infos}>
                        Nome dos instrutores:
                    </p>
                    <p className={styles.infos}>
                        Thiago Ferreira e Marcelo Carboni
                    </p>
                    <p className={styles.infos}>
                     Matéria:
                     Front-End 
                    </p>
                    <p className={styles.infos}>
                       Descrição:
                        A API de Professores e disciplinas foi criada mediante as instruções da prova de Back-end, sua função é trazer informações das matérias juntamente do professor responsável por ela
                    </p>
                    <Button props="Clique e Veja!" link="/professores"/>
                </div>
                </div>
            </div>
    )
}