import http from '@/utils/http'


export function login(params) {
  return http({
    url: '/user/login',
    method: 'get',
    data:params
  })
}
export function logout(params) {
  return http({
    url: '/user/logout',
    method: 'get',
    data:params
  })
}


export function getUserInfo(params) {
  return http({
    url: '/user/info/get',
    method: 'get',
    data:params
  })
}

export function getUserList(reqData) {
  return http({
    url:'/user/list/get',
    method: 'get',
    data: reqData
  })
}


