<script context="module">
    console.log(`import module from ...`)
    let totalComponents = 0
</script>
<script>
    totalComponents += 1;
    console.log(`컴포넌트 인스턴스 생성시 호출 : ${totalComponents}`)
</script>