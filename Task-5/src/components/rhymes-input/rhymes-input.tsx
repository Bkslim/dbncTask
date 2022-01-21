import React, { VFC } from 'react';
import { RhymesInputProps } from '../../../types';

const RhymesInput: VFC<RhymesInputProps> = ({ onChange }) => (
    <input
        className='RhymesInput'
        type='text'
        onChange={({ target: { value } }) => onChange(value)}
        placeholder='Enter text here to get some rhymes...'
        data-testid='RhymesInput'
    />
);
export default RhymesInput;
