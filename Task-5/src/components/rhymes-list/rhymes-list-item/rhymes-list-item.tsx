import React, { VFC } from 'react';
import { RhymesListItemProps } from '../../../../types';

const RhymesListItem: VFC<RhymesListItemProps> = ({
    data: { word, score },
}) => (
    <div className='RhymesListItem' data-testid='RhymesListItem'>
        <h3 className='RhymesListItemWord'>{word}</h3>
        {score ? (
            <div className='RhymesListItemScore' title='Rhyme score'>
                {score}
            </div>
        ) : null}
    </div>
);
export default RhymesListItem;
