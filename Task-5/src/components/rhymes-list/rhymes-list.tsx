import React, { VFC } from 'react';
import { RhymesListProps } from '../../../types';
import DataPanel from '../data-panel';
import RhymesListItem from './rhymes-list-item';

const RhymesList: VFC<RhymesListProps> = ({ data, error, isLoading }) => (
    <div className='RhymesList' data-testid='RhymesList'>
        <DataPanel data={data} isLoading={isLoading} error={error}>
            {data?.map((rhymeItem) => (
                <RhymesListItem key={rhymeItem.word} data={rhymeItem} />
            ))}
        </DataPanel>
    </div>
);

export default RhymesList;
