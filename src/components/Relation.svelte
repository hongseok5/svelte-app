<script>
    export let fromEntity;
    export let toEntity;
  </script>
  
  <svg class="relationship">
    <line x1="{fromEntity.x}" y1="{fromEntity.y}" x2="{toEntity.x}" y2="{toEntity.y}" stroke="black" />
  </svg>
  
  <style>
    .relationship {
      position: absolute;
      z-index: 0;
    }
  </style>
  