import { DataType } from "src/store/repository/types";

export type FilterListType = DataType & {
	filterList: (id: number) => void;
}