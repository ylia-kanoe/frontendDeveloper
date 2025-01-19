import { DataType } from "src/store/repository/types";

export type CardListType = DataType & {
	deleteElem: (id: number) => void;
}