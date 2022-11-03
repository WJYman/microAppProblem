import request from '@/utils/request'

export function login(loginName, password) {
  return request({
    url: 'plm-doc/sys/login',
    method: 'post',
    data: {
      loginName,
      password
    }
  })
}

export function resetPwd(email) {
  return request({
    url: 'plm-doc/sys/email/resetPass?loginName=' + email,
    method: 'post'
  })
}

export function codeVerify(info) {
  return request({
    url: 'plm-doc/sys/validated',
    method: 'post',
    data: {
      code: info.code,
      value: info.email
    }
  })
}

export function updatePwd(info) {
  return request({
    url: 'plm-doc/sys/updatePwd',
    method: 'post',
    data: {
      loginName: info.loginName,
      pwd: info.pwd
    }
  })
}

export function getInfo() {
  return request({
    url: '/plm-doc/api/sysUser/viewtoken',
    method: 'GET'
  })
}

export function logout() {
  return request({
    url: '/plm-doc/sys/loginout',
    method: 'post'
  })
}

// 系统配置-动态参数 根据code查询数据 //获取首页地址
export function baseSettingDynamicParamQueryByCode(code) {
  return request({
    url: `/plm-doc/baseSettingDynamicParam/queryByCode?code=${code}`,
    method: 'post'
  })
}
