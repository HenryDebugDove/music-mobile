import { createUserList, overwriteListMusics } from '@/core/list'
import listState from '@/store/list/state'
import { getDailyRecommendDate, setDailyRecommendDate } from '@/utils/data'
import { FIXED_DAILY_RECOMMEND_LIST } from './dailyRecommendList'

const DAILY_RECOMMEND_LIST_ID = 'daily_recommend'
const DAILY_RECOMMEND_LIST_NAME = '每日推荐'
const DAILY_RECOMMEND_DATA_VERSION = '2026-04-28-v2'

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

