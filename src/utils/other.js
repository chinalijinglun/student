import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage
} from './localstorage';

export function formatTime(time){
  if(time == null){
    return "";
  }else{
    var findT = time.indexOf('T');
    return time.slice(0,findT);
  }
}

export function guyuTime(start,end){
  var year = start.slice(0,start.indexOf('T'));
  var mouth = start.slice(start.indexOf('T')+1,start.indexOf('T')+6);
  var hour = end.slice(end.indexOf('T')+1,end.indexOf('T')+6);
  return year+" "+mouth+"-"+hour;
}

export function toJson(str){
  var _str =(new Function("","return "+ str))();
  return _str;
}

export const devUrl = 'http://39.106.143.18:5000';


const install = (Vue) => {
  Vue.prototype.formatTime = formatTime;
  Vue.prototype.guyuTime = guyuTime;
  Vue.prototype.toJson = toJson;
  Vue.prototype.devUrl = devUrl;
  Vue.prototype.$setLocalStorage = setLocalStorage;
  Vue.prototype.$getLocalStorage = getLocalStorage;
  Vue.prototype.$deleteLocalStorage = deleteLocalStorage;
}

export default{
  install
}
