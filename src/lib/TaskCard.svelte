<script>
  // Props: accept task data from parent component
  let { title, description, completed = false, onToggleComplete } = $props()

  // Local state: track if expanded (showing full description)
  let expanded = $state(false)
</script>

<div class="card" class:completed>
  <button
    class="header"
    type="button"
    onclick={() => expanded = !expanded}
    aria-expanded={expanded}
    aria-label="Toggle task details for {title}"
  >
    <input
      type="checkbox"
      checked={completed}
      onchange={(e) => onToggleComplete?.((e.currentTarget).checked)}
      class="checkbox"
      aria-label="Mark '{title}' as {completed ? 'incomplete' : 'complete'}"
    />
    <h3 class="title" class:line-through={completed}>
      {title}
    </h3>
    <span class="toggle" aria-hidden="true">{expanded ? "−" : "+"}</span>
  </button>

  {#if expanded && description}
    <div class="description">
      <p>{description}</p>
    </div>
  {/if}
</div>

<style>
  .card {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 16px;
    margin: 12px 0;
    background-color: #fafafa;
    transition: all 0.2s ease;
  }

  .card:hover {
    border-color: #1f9aff;
    box-shadow: 0 2px 8px rgba(31, 154, 255, 0.2);
  }

  .card.completed {
    background-color: #f0f8ff;
    border-color: #90ee90;
  }

  .header {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 12px;
    user-select: none;
    background: none;
    border: none;
    padding: 0;
    font-family: inherit;
    width: 100%;
    text-align: left;
  }

  .header:focus {
    outline: 2px solid #1f9aff;
    outline-offset: -2px;
    border-radius: 4px;
  }

  .checkbox {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #1f9aff;
  }

  .title {
    margin: 0;
    flex: 1;
    font-size: 18px;
    color: #333;
  }

  .title.line-through {
    text-decoration: line-through;
    color: #999;
  }

  .toggle {
    font-size: 20px;
    color: #1f9aff;
    font-weight: bold;
    min-width: 24px;
    text-align: center;
  }

  .description {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid #e0e0e0;
    color: #666;
    animation: slideDown 0.2s ease;
  }

  .description p {
    margin: 0;
    line-height: 1.5;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
