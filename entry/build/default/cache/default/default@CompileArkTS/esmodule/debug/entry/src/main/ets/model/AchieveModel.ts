import { ACHIEVEMENT_LEVEL_LIST } from "@normalized:N&&&entry/src/main/ets/model/TaskInitList&";
import type GlobalInfo from '../viewmodel/GlobalInfo';
import GlobalInfoApi from "@normalized:N&&&entry/src/main/ets/common/database/tables/GlobalInfoApi&";
export const ACHIEVEMENT_LEVEL_KEY = 'AchievementLevelKey';
export function getAchievementLevel() {
    GlobalInfoApi.query((res: GlobalInfo) => {
        let globalInfo: GlobalInfo = res;
        let achievementStr = globalInfo.achievements ?? '';
        let achievements = achievementStr.split(',');
        if (achievements.length > 0) {
            AppStorage.Set<Number>(ACHIEVEMENT_LEVEL_KEY, Number(achievements[achievements.length - 1]));
        }
    });
}
export function isReachNewAchievement(globalInfo: GlobalInfo): boolean {
    let achievementStr = globalInfo.achievements ?? '';
    let achievements = achievementStr.split(',');
    if (ACHIEVEMENT_LEVEL_LIST.indexOf(globalInfo.checkInDays) >= 0 && achievements.indexOf(String(globalInfo.checkInDays)) < 0) {
        return true;
    }
    return false;
}
