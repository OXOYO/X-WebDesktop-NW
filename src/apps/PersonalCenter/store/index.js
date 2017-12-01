/**
 * Created by OXOYO on 2017/10/9.
 */

import state from './state'
import actions from './actions'
import mutations from './mutations'

// 导出module名称，用于动态注入store
export default {
  moduleName: 'PersonalCenter',
  store: {
    namespaced: true,
    state,
    actions,
    mutations
  }
}
