import { DataType } from "src/store/repository/types";

export type EditCardType = DataType & {
	onSave: (v: boolean) => void;
}