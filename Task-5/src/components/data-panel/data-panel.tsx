import React, { PropsWithChildren } from 'react';
import { QueryData } from '../../../types';

function DataPanel<T>({
    data,
    error,
    isLoading,
    children,
}: PropsWithChildren<QueryData<T | T[]>>) {
    if (isLoading) return <h3>Loading...</h3>;
    if (error)
        return (
            <h3 className='DataPanelError'>
                {error.message || 'Unknown Error'}
            </h3>
        );

    const isEmptyData = Array.isArray(data) ? data.length === 0 : !data;
    if (isEmptyData) return <h3>No Data...</h3>;

    return <>{children}</>;
}

export default DataPanel;
