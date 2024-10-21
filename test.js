outerLoop:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue outerLoop; // 라벨이 없으면 내부 루프만 continue됨
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
