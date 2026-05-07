import { createUserList, overwriteListMusics } from '@/core/list'
import listState from '@/store/list/state'
import { getDailyRecommendDate, setDailyRecommendDate } from '@/utils/data'
import { DAILY_RECOMMEND_DATA_REVISION, FIXED_DAILY_RECOMMEND_LIST } from './dailyRecommendList'

const DAILY_RECOMMEND_LIST_ID = 'daily_recommend'
const DAILY_RECOMMEND_LIST_NAME = '每日推荐'
/** 与内置歌单数据绑定；改歌单请改 dailyRecommendList.ts 里的 DAILY_RECOMMEND_DATA_REVISION */
const DAILY_RECOMMEND_DATA_VERSION = `embedded-v${DAILY_RECOMMEND_DATA_REVISION}`

const ensureRecommendList = async() => {
  if (listState.userList.some(item => item.id == DAILY_RECOMMEND_LIST_ID)) return
  await createUserList(0, [{
    id: DAILY_RECOMMEND_LIST_ID,
    name: DAILY_RECOMMEND_LIST_NAME,
    locationUpdateTime: Date.now(),
  }])
}

export const syncDailyRecommendFromLove = async() => {
  await ensureRecommendList()
  const currentVersion = await getDailyRecommendDate()
  if (currentVersion == DAILY_RECOMMEND_DATA_VERSION) return
  await overwriteListMusics(DAILY_RECOMMEND_LIST_ID, FIXED_DAILY_RECOMMEND_LIST)
  await setDailyRecommendDate(DAILY_RECOMMEND_DATA_VERSION)
}

