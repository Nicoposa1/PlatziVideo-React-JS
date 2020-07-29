/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line arrow-parens
export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
})

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload,
})
