<script>
  export let onNewClick;
  export let onEditClick;
  export let onDeleteClick;
</script>

<div class="button-container">
  <button class="new-btn" on:click={onNewClick}>신규</button>
  <button class="edit-btn" on:click={onEditClick}>수정</button>
  <button class="delete-btn" on:click={onDeleteClick}>삭제</button>
</div>

<style>
  .button-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 10px; /* 버튼들 사이에 공백 추가 */
  }

  /* 공통 버튼 스타일 */
  .button-container button {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
  }

  /* 개별 버튼 색상 */
  .new-btn {
    background-color: #007bff; /* 파란색 */
  }

  .edit-btn {
    background-color: #ffc107; /* 노란색 */
  }

  .delete-btn {
    background-color: #dc3545; /* 빨간색 */
  }

  /* 버튼 hover 효과 */
  .button-container button:hover {
    opacity: 0.8;
  }
</style>
