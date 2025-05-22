"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import styles from "../professores/Professores.module.css";
import { Pagination, Modal, Card, Skeleton } from "antd";


const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Professores() {
    const [data, setData] = useState({
        professores: [],
        loading: true,
        current: 1,
        pageSize: 5,
    });

    const [modalInfo, setModalInfo] = useState({
        visible: false,
        professor: null,
        disciplina: null,
        loading: false,
    });

    useEffect(() => {
        const fetchProfessores = async () => {
            try {
                const { data: professores } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/professores`,
                    {
                        headers: HEADERS,
                    }
                );
                setData({professores, loading: false, current: 1, pageSize: 5});
            } catch (error) {
                toast.error("Erro ao carregar Professores");
                setData((d) => ({ ...d, loading: false}));
            }
        };
        fetchProfessores();
    }, []);

    const openModal = async (professor) => {
        setModalInfo({visible: true, professor, disciplina: null, loading: true});

        try {
            const { data: disciplina } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/disciplinas/${professor.id}`,
                {
                    headers: HEADERS,
                }
            );
            setModalInfo((m) => ({ ...m, disciplina, loading: false }));
        } catch (error) {
            toast.error("Erro ao carregar disciplina");
            setModalInfo((m) => ({ ...m, loading: false }));
        }
    };

    const paginatedProfessores = () => {
        const start = (data.current -1) * data.pageSize
        return data.professores.slice(start, start + data.pageSize)
    }
    return (
        <div className={styles.main}>
             <ToastContainer />
                 <h1 className={styles.title}>Bem Vindos Professores!</h1>
             <div className={styles.container}>
            {data.loading ? (
                <Image
                src="/media/loading.gif"
                width={100}
                height={100}
                alt="Gif Carregando"
                />
            ) : (
                <div className={styles.cardsContainer}>
                    {paginatedProfessores().map((professor) => (
                        <Card
                            key={professor.id}
                            className={styles.card}
                            hoverable
                            onClick={() => openModal(professor)}
                            cover={ <Image
                                src={professor.uploads ? `/images/${professor.uploads}` : "/images/220.svg"}
                                alt={`Foto de ${professor.nome}`}
                                width={220}
                                height={220}
                                className={styles.image}
                                />
                            }
                            >
                               <Card.Meta title={professor.nome} />  
                            </Card>
                             ))}
                </div>
            )}
            <Modal
                title={`Avaliação de ${modalInfo.professor?.nome || ""}`}
                open={modalInfo.visible}
                onCancel={() =>
                    setModalInfo({
                        visible: false,
                        professor: null,
                        disciplina: null,
                        loading: false,
                    })
                }
                onOk={() =>
                    setModalInfo({
                        visible: false,
                        professor: null,
                        disciplina: null,
                        loading: false,
                    })
                }
                width={600}
            >
                {modalInfo.loading ? (
                    <Skeleton active />
                ) : modalInfo.disciplina ? (
                    <div className={styles.disciplinaInfo}>
                        <p>
                            <span className={styles.label}>Id do Professor:</span>{" "}
                            {modalInfo.disciplina.professores_id}
                        </p>
                        <p>
                            <span className={styles.label}>Matéria:</span>{" "}
                            {modalInfo.disciplina.materia}
                        </p>
                    </div>
                ) : (
                    <p style={{ textAlign: "center" }}>Disciplina não encontrada.</p>
                )}
            </Modal>
             </div>
                <Pagination
                className={styles.pagination}
                current={data.current}
                pageSize={data.pageSize}
                total={data.professores.length}
                onChange={(page, size) =>
                    setData((d) => ({ ...d, current: page, pageSize: size }))
                }
                showSizeChanger
                pageSizeOptions={["5", "10", "100"]}
            />
        </div>
    )
}