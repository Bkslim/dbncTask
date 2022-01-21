import axios from 'axios';
import { PATHS, RHYMES_PARAM } from '../constants';
import { DataMuseDataType } from '../types';

const dataMuseClient = axios.create({
    baseURL: 'https://api.datamuse.com',
    responseType: 'json',
});

export const get = (path: string, params?: Record<string, string>) =>
    dataMuseClient.get<DataMuseDataType[]>(path, { params });

export const getRhymes = (value?: string | null) =>
    value
        ? Promise.allSettled([
              get(PATHS.WORDS, {
                  [RHYMES_PARAM.RHY]: value,
              }),
              get(PATHS.WORDS, {
                  [RHYMES_PARAM.RNY]: value,
              }),
          ])
        : Promise.resolve([]);
