import { $http } from '.'
export const getUserlistApi = (params: { pageSize: number; requestPage: number }) => {
  return $http({
    method: 'GET',
    url: '/admin/user/listWithPage',
    params
  })
}

export const updateUserApi = (id: number, data: { phoneNumber: string; nicknName: string }) => {
  return $http({
    method: 'PUT',
    url: `/admin/user/${id}`,
    data
  })
}
export const disableOrEndisaleUserApi = (ids: number[]) => {
  const query = ids.join(',')
  return $http({
    method: 'PUT',
    // url: "/admin/user/disable/{ids}",
    url: `/admin/user/disable/${query}`
  })
}
