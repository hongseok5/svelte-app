<script>

    import {count, time, doubled, customCount} from "../store/store.js"
    import Updater from "../components/Updater.svelte"
    import Setter from "../components/Setter.svelte"
    import { onDestroy } from "svelte";
    import {get} from 'svelte/store'
    let viewCount
    const unsubscribe = count.subscribe(value => {
        viewCount = value // 이 함수의 구독을 해제한다(메모리 관리차원)
    })

    onDestroy(() => {
      console.log("onDestroy")
      unsubscribe()
    })

    const formatter = new Intl.DateTimeFormat('en', {
      hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit'
    })
  </script>
  
  <style>
  
  </style>
  
  
  <h2>Tutorial6 - store 관리</h2>
  <p>{$count} X 2 = {$doubled}</p>
  <div>
    <Updater num="{1}" text="+" />
    <Updater num="{-1}" text="-" />
    <Setter num="{0}" text="reset" />
  </div>
  <p>스토어를 구독함</p>
  <p>{formatter.format($time)}</p>
  <p>스토어를 구독하지 않고 한 번만 가져옴</p>
  <p>{formatter.format(get(time))}</p>
<p>custom count {$customCount}</p>

<button on:click={customCount.increment}>+</button>
<button on:click={customCount.decrement}>-</button>
<button on:click={customCount.reset}>reset</button>