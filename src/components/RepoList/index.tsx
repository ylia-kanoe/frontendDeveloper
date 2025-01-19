import { List, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useState, UIEvent } from 'react';
import { DataType } from 'src/store/repository/types';
import styles from './RepoList.module.scss';
import { CardList } from '../CardList';
import { repositoryStore } from 'src/store/repository';
import LoadingOutlined from '@ant-design/icons/lib/icons/LoadingOutlined';
import FilterList from '../FilterList';
import { repositoryApi } from 'src/services/repositories';

export const RepoList = observer(() => {
	const [page, setPage] = useState<number>(1)

	const loadMoreData = async (nextPage: number) => {
		repositoryStore.setStatus(true)
		const response = await repositoryApi.getData(nextPage)
		repositoryStore.updateData(response.data.items)
		repositoryStore.setStatus(false)
	};

	useEffect(() => {
		loadMoreData(page);
		setPage(page + 1);
	}, []);

	function handleNext(e: UIEvent<HTMLDivElement>) {
		const scrollBottom = e.currentTarget.scrollHeight - e.currentTarget.getBoundingClientRect().height - 100 -
			e.currentTarget.scrollTop
		if (scrollBottom < 1000 && !repositoryStore.statusLoad) {
			setPage(page + 1);
			loadMoreData(page);
		}
	}

	return (<>
		<div className={styles.toDoList} onScroll={handleNext}>
			{repositoryStore.statusLoad && <Spin className={styles.spinLoad} indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />}
			<List
				dataSource={repositoryStore.getData()}
				renderItem={(item: DataType) => (
					<List.Item key={item.id}>
						<CardList {...item} deleteElem={repositoryStore.deleteData} />
					</List.Item>
				)}
			/>
		</div>
		<FilterList />

	</>
	);
})
