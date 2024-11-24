<script>
    import Entity from './Entity.svelte';
    import Relation from './Relation.svelte';
  
    let entities = [
      { name: 'User', fields: ['id', 'name', 'email'], x: 100, y: 100 },
      { name: 'Order', fields: ['order_id', 'user_id', 'amount'], x: 300, y: 150 },
    ];
  
    let relationships = [
      { from: entities[0], to: entities[1] }
    ];
  </script>
  
  <div class="diagram">
    {#each entities as entity}
      <Entity name={entity.name} fields={entity.fields} />
    {/each}
  
    {#each relationships as relation}
      <Relation fromEntity={relation.from} toEntity={relation.to} />
    {/each}
  </div>
  
  <style>
    .diagram {
      position: relative;
      width: 100%;
      height: 100%;
    }
  </style>
  