/**
 * @param {Sting} auth
 */
export function authTranslation(auth) {
  let authText = ''
  switch (auth) {
    case '1':
      authText = '禁用'
      break
    case '2':
      authText = '只读'
      break
    case '3':
      authText = '编辑'
      break
  }
  return authText
}
