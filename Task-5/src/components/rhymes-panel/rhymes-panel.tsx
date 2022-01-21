import React, { VFC } from 'react';
import { useRhymeQuery } from '../../../utils/useRhymeQuery';
import RhymesInput from '../rhymes-input';
import RhymesList from '../rhymes-list';

const RhymesPanel: VFC = () => {
    const { data, isLoading, error, refetch } = useRhymeQuery();

    return (
        <div className='RhymesPanel' data-testid='RhymesPanel'>
            <RhymesInput onChange={refetch} />
            <RhymesList data={data} error={error} isLoading={isLoading} />
        </div>
    );
};

export default RhymesPanel;
