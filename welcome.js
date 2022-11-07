import os from 'os'

export function info () {
  return `привет юзер ты зашел с ${os.type()}`
}

console.log(info())