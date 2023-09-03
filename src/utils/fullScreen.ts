// 进入全屏模式
function enterFullscreen() {
  const element = document.documentElement as any // 获取文档的根元素
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  }
}

// 退出全屏模式
function exitFullscreen() {
  const doc = document as any
  if (doc.exitFullscreen) {
    doc.exitFullscreen()
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen()
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen()
  } else if (doc.msExitFullscreen) {
    doc.msExitFullscreen()
  }
}

// 检查是否处于全屏模式
function isFullscreen() {
  return document.fullscreenElement !== null
}

function handleFullScreen() {
  if (isFullscreen()) {
    exitFullscreen()
  } else {
    enterFullscreen()
  }
}

export default handleFullScreen
