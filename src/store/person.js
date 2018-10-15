import {setLocalStorage,getLocalStorage} from '@/utils/localstorage';

const state = {
  name: getLocalStorage('name'),
  count: 0
}

const mutations = {
  setUserName(state, {value, keep=true}) {
    keep ? setLocalStorage('userName', value) : setSession('userName', value)
    state.userName = value;
  },
  inc: state => state.count++,
  dec: state => state.count--,
  test(state,value){
    state.name=value;
  }
}
export default {
  state,
  mutations
}
