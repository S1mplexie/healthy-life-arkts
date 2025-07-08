if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AchievementIndex_Params {
}
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import { BadgePanel } from "@normalized:N&&&entry/src/main/ets/view/BadgePanelComponent&";
import { TitleBar } from "@normalized:N&&&entry/src/main/ets/view/TitleBarComponent&";
import Logger from "@normalized:N&&&entry/src/main/ets/common/utils/Logger&";
export class AchievementIndex extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AchievementIndex_Params) {
    }
    updateStateVars(params: AchievementIndex_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    aboutToAppear() {
        Logger.debug('AchievementIndex', 'aboutToAppear');
    }
    onPageShow() {
        Logger.debug('AchievementIndex', 'onPageShow');
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: Const.DEFAULT_20 });
            Column.padding(Const.DEFAULT_10);
            Column.height(Const.FULL_HEIGHT);
            Column.width(Const.FULL_WIDTH);
            Column.backgroundColor({ "id": 16777267, "type": 10001, params: [], "bundleName": "com.example.healthy_life", "moduleName": "entry" });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TitleBar(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/AchievementComponent.ets", line: 33, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TitleBar" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new BadgePanel(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/AchievementComponent.ets", line: 34, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "BadgePanel" });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
