import React from "react";
import { repositoryStore } from "src/store/repository";
import Button from "antd/es/button";
import styles from './FilterList.module.scss';
import Popover from "antd/es/popover";

const content = (
    <div className={styles.filterWarning}>
        <p>Фильтрация текущих данных</p>
    </div>
);

export default function FilterList() {
    return (<div>
        <Popover placement="bottomLeft" content={content} color="yellow">
            <Button className={styles.filterList} onClick={repositoryStore.filterList} type="primary">Сортировать список</Button>
        </Popover>
    </div>)
}