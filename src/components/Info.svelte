<script>
     export let name
     export let version
    // export let speed
    // export let website
</script>

<p>
    The <code>{name}</code> pkg is {$$restProps.speed} fast.
    Download version {version} from <a href="https://www.npmjs.com/package/{$$restProps.name}">npm</a>
</p>