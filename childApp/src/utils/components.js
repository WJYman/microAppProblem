export function getComponentsWithView(url) {
  return require(`@/views/${url}`).default
}

export function getComponentsWithComponent(url) {
  return require(`@/components/${url}`).default
}
