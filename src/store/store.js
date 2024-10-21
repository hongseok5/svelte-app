// store.js
import { writable } from 'svelte/store';
import { appConfig } from '../../config'
//store.js에서 writable 스토어를 사용하여 선택된 페이지 상태를 관리합니다.
export const selectedPage = writable(appConfig.defaultPage);
