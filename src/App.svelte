<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from './assets/vite.svg'
  import heroImg from './assets/hero.png'
  import Counter from './lib/Counter.svelte'
  import TaskCard from './lib/TaskCard.svelte'

  // State: list of tasks
  let tasks = $state([
    {
      id: 1,
      title: 'Learn Svelte Basics',
      description: 'Understand reactivity, props, and component composition',
      completed: true,
    },
    {
      id: 2,
      title: 'Build Your First Component',
      description: 'Create a reusable component and use it in App.svelte',
      completed: false,
    },
    {
      id: 3,
      title: 'Explore Event Handling',
      description: 'Practice with click, input, and form events',
      completed: false,
    },
  ])

  // Function to add a new task
  function addTask() {
    const newTask = {
      id: Math.max(...tasks.map(t => t.id), 0) + 1,
      title: 'New Task',
      description: 'Edit this task',
      completed: false,
    }
    tasks.push(newTask)
  }

  // Function to toggle a task's completion status
  /**
   * @param {number} taskId - The task ID
   * @param {boolean} isCompleted - Whether the task is completed
   */
  function toggleTaskComplete(taskId, isCompleted) {
    const task = tasks.find(t => t.id === taskId)
    if (task) {
      task.completed = isCompleted
    }
  }

  // Computed value: count completed tasks
  let completedCount = $derived(tasks.filter(t => t.completed).length)
</script>

<section id="center">
  <div class="hero">
    <img src={heroImg} class="base" width="170" height="179" alt="" />
    <img src={svelteLogo} class="framework" alt="Svelte logo" />
    <img src={viteLogo} class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/App.svelte</code> and save to test <code>HMR</code></p>
  </div>
  <Counter />
</section>

<div class="ticks"></div>

<section id="task-tutorial">
  <h2>My Task List</h2>
  <p>Learn Svelte by building a task manager! Your first component: <code>TaskCard.svelte</code></p>

  <div class="task-stats">
    <p><strong>Progress:</strong> {completedCount} of {tasks.length} tasks completed</p>
    <progress value={completedCount} max={tasks.length}></progress>
  </div>

  <div class="task-list">
    {#each tasks as task (task.id)}
      <TaskCard
        title={task.title}
        description={task.description}
        completed={task.completed}
        onToggleComplete={(/** @type {boolean} */ isCompleted) => toggleTaskComplete(task.id, isCompleted)}
      />
    {/each}
  </div>

  <button class="add-task-btn" onclick={addTask}>+ Add Task</button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true">
      <use href="/icons.svg#documentation-icon"></use>
    </svg>
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank" rel="noreferrer">
          <img class="logo" src={viteLogo} alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://svelte.dev/" target="_blank" rel="noreferrer">
          <img class="button-icon" src={svelteLogo} alt="" />
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true">
      <use href="/icons.svg#social-icon"></use>
    </svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li>
        <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer">
          <svg class="button-icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#github-icon"></use>
          </svg>
          GitHub
        </a>
      </li>
      <li>
        <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
          <svg class="button-icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#discord-icon"></use>
          </svg>
          Discord
        </a>
      </li>
      <li>
        <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
          <svg class="button-icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#x-icon"></use>
          </svg>
          X.com
        </a>
      </li>
      <li>
        <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noreferrer">
          <svg class="button-icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#bluesky-icon"></use>
          </svg>
          Bluesky
        </a>
      </li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>

<style>
  #task-tutorial {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px;
    border-radius: 12px;
    margin: 40px auto;
    max-width: 600px;
  }

  #task-tutorial h2 {
    margin-top: 0;
    font-size: 28px;
  }

  #task-tutorial p {
    margin: 12px 0;
    opacity: 0.95;
  }

  .task-stats {
    background-color: rgba(255, 255, 255, 0.15);
    padding: 16px;
    border-radius: 8px;
    margin: 20px 0;
  }

  .task-stats p {
    margin: 8px 0;
  }

  progress {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    accent-color: #4ade80;
  }

  .task-list {
    margin: 24px 0;
  }

  .add-task-btn {
    background-color: #4ade80;
    color: #1a1a1a;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;
  }

  .add-task-btn:hover {
    background-color: #22c55e;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(68, 222, 128, 0.4);
  }
</style>
