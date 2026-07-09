/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ListInfo } from '../view/ListInfo';
import { UserBaseInfo } from '../view/UserBaseInfo';
import { CommonConstants as Const } from '../common/constants/CommonConstants';
import UserInfoApi from '../common/database/tables/UserInfoApi';
import UserInfo from '../viewmodel/UserInfo';

@Component
export struct MineIndex {
  @State nickname: string = Const.NICK_NAME;
  @State signature: string = Const.SIGNATURE;
  @State avatar: string = '';

  aboutToAppear() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    UserInfoApi.query((result: UserInfo | null) => {
      if (result) {
        this.nickname = result.nickname || Const.NICK_NAME;
        this.signature = result.signature || '';
        this.avatar = result.avatar;
      }
    });
  }

  build() {
    Column() {
      UserBaseInfo({
        nickname: this.nickname,
        signature: this.signature,
        avatar: this.avatar
      });

      ListInfo();
    }
    .height(Const.FULL_HEIGHT)
    .backgroundColor($r('app.color.mineBgColor'))
    .onVisibleAreaChange([0.0, 1.0], (isVisible: boolean, currentRatio: number) => {
      if (isVisible && currentRatio > 0.0) {
        this.loadUserInfo();
      }
    })
  }
}