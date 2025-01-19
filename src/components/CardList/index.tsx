import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons"
import { Avatar } from "antd"
import styles from './CardList.module.scss';
import React, { useState } from "react"
import { EditCard } from "../EditCard"
import { CardListType } from "./types"

export function CardList({ id, owner, deleteElem }: CardListType) {
    const [editOpen, setEditOpen] = useState<boolean>(false)

    return (
        <div className={styles.listCard}>
            <div>
                <Avatar src={owner.avatar_url} />
                <a className={styles.reference} href={owner.url}>{owner.login}</a>
                <div className={styles.description}>{owner.url}</div>
            </div>
            <div>
                {editOpen && <EditCard id={id} owner={owner} onSave={setEditOpen} />}
            </div>
            <div>
                <DeleteTwoTone onClick={() => deleteElem(id)} style={{ fontSize: '25px', marginRight: '15px' }} />
                <EditTwoTone onClick={() => setEditOpen(true)} style={{ fontSize: '25px' }} />
            </div>
        </div >
    )
}
