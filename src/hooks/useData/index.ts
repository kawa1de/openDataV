import type { CustomComponent } from '@/models'
import { DataType } from '@/enum/data'
import { onMounted, onUnmounted } from 'vue'

export const useData = (
  component: CustomComponent,
  callbackData?: (data: any, type: DataType) => void
) => {
  component.changeDataCallback(callbackData!)
  let timer: IntervalHandle = 0
  const pullData = async () => {
    const requestConfig = component.dataConfig?.requestConfig
    if (requestConfig && callbackData) {
      const result = await component.dataConfig?.requestConfig.getRespData({
        propvalue: component.propValue
      })
      if (callbackData) {
        callbackData(result, component.dataConfig!.type)
      }
    }
  }

  onMounted(async () => {
    await pullData()
  })
  onUnmounted(() => {
    if (timer) {
      clearInterval(timer)
    }
  })
  if (!(callbackData && component.dataConfig)) {
    return
  }
  if (component.dataConfig?.type === DataType.REST && component.dataConfig.otherConfig.isRepeat) {
    if (timer) {
      clearInterval(timer)
    }
    const dataConfig = component.dataConfig
    timer = setInterval(pullData, dataConfig.otherConfig.interval || 300)
  }
}
