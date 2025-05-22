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

    
    return (
        <div></div>
    )
}