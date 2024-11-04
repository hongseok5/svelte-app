// store.js
import { writable, derived } from 'svelte/store';
import { readable} from 'svelte/store';
import { appConfig } from '../../config'
//store.js에서 writable 스토어를 사용하여 선택된 페이지 상태를 관리합니다.
export const selectedPage = writable(appConfig.defaultPage);
export const count = writable(0, (set) => {
    //store의 값 업데이트 - set 이라는 사용자 함수를 생성한다? update랑 subscribe는 기본적으로 반환됨
    
    console.log('start watch store vale')
    return () => console.log("stop watch store value")
})

export const time = readable(new Date(), function start(set){
    const interval = setInterval(() => {
        set(new Date())
    }, 1000)

    return function stop(){
        clearInterval(interval)
    }
})

export const doubled = derived(count, $count => $count * 2)

function createCount(){
    const {subscribe, set, update} = writable(0)

    return {
        subscribe,
        increment: () => update(n => n + 1),
        decrement: () => update(n => n - 1),
        reset: () => set(0)
    }
}

export const customCount = createCount();