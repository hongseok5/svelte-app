import {onDestroy} from 'svelte'

export function onInterval(callback, miliseconds){
    const interval = setInterval(callback, miliseconds)

    onDestroy(() => {
        clearInterval(interval)
    })
}