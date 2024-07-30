import { giphyAxios } from './instance'
import { MultiResponse, SingleResponse } from 'giphy-api'

export const fetchSearchResults = async (searchQuery = '', limit = 0, offset = 0): Promise<MultiResponse> => {
  return giphyAxios.get<MultiResponse>('/gifs/search/', {
    params: {
      q: searchQuery,
      ...(limit > 0 && { limit }),
      ...(offset > 0 && { offset }),
    },
  }).then(r => r.data)
}

export const fetchRandom = async (tag = ''): Promise<SingleResponse> => {
  return giphyAxios.get<SingleResponse>('/gifs/random/', {
    params: {
      ...(tag && { tag }),
    },
  }).then(r => r.data)
}

export const fetchTrendingResults = async (limit = 0, offset = 0): Promise<MultiResponse> => {
  return giphyAxios.get<MultiResponse>('/gifs/trending/', {
    params: {
      ...(limit > 0 && { limit }),
      ...(offset > 0 && { offset }),
    },
  }).then(r => r.data)
}
