export type DataMuseDataType = {
    word: string;
    score?: number | null;
};

export type QueryData<TData = object> = {
    data?: TData | null;
    isLoading?: boolean;
    error?: Error;
};

export type DataPanelProps<T> = QueryData<T | T[]>;

export type RhymesInputProps = {
    onChange: (value?: string | null) => void;
};

export type RhymesListProps = QueryData<DataMuseDataType[]>;

export type RhymesListItemProps = {
    data: DataMuseDataType;
};

export type RhymeQueryParams = {
    delay?: number;
};

export type RhymeQueryData = QueryData<DataMuseDataType[]>;
