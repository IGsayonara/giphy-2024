import { giphyAxios } from './instance'
import { GIFObject, MultiResponse, SingleResponse } from 'giphy-api'

export const fetchSearchResults = async (searchQuery = '', limit = 0, offset = 0): Promise<MultiResponse> => {
  return giphyAxios.get<MultiResponse>('/gifs/search/', {
    params: {
      q: searchQuery,
      ...(limit > 0 && { limit }),
      ...(offset > 0 && { offset }),
    },
  }).then(r => r.data)
}

export const fetchRandomResults = async (limit = 0): Promise<GIFObject[]> => {
  return Promise.all(new Array(limit).fill(0).map(() => {
    return giphyAxios.get<SingleResponse>('/gifs/random/')
      .then(r => r.data)
      .then(r => r.data)
  }))
}
