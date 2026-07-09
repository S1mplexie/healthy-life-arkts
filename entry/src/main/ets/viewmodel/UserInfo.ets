export default class UserInfo {
  id: number;
  avatar: string;
  nickname: string;
  signature: string;
  gender: string;
  birthday: string;
  height: string;
  weight: string;

  constructor(id: number = 0, avatar: string = '', nickname: string = '', signature: string = '',
    gender: string = '', birthday: string = '', height: string = '', weight: string = '') {
    this.id = id;
    this.avatar = avatar;
    this.nickname = nickname;
    this.signature = signature;
    this.gender = gender;
    this.birthday = birthday;
    this.height = height;
    this.weight = weight;
  }
}
