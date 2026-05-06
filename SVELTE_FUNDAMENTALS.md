# Svelte Fundamentals Tutorial

Welcome to Svelte! This tutorial covers the core concepts from the official [Svelte Tutorial](https://svelte.dev/tutorial). We'll build practical components as we learn.

---

## 1. Reactivity & State with `$state()`

In Svelte 5, use the `$state()` rune to create reactive variables. When state changes, the component automatically re-renders.

```svelte
<script>
  let count = $state(0)
</script>

<button onclick={() => count++}>Count: {count}</button>
```

**Key Points:**
- `$state()` marks a variable as reactive
- Changes to state automatically trigger re-renders
- The syntax is very clean and intuitive

---

## 2. Props: Passing Data to Components

Components accept props (inputs) to be reusable. Define props at the top of your component's script block.

```svelte
<!-- MyComponent.svelte -->
<script>
  let { name = "Guest", age } = $props()
</script>

<p>Hello {name}! You are {age} years old.</p>
```

**Using the component:**
```svelte
<MyComponent name="Alice" age={25} />
```

**Key Points:**
- Use destructuring with `$props()` to define component inputs
- Props are passed as attributes
- Use default values with `=` (e.g., `name = "Guest"`)

---

## 3. Events & Event Binding

Respond to user interactions like clicks, input, etc.

```svelte
<script>
  let message = $state("")

  function handleClick() {
    console.log("Button clicked!")
  }
</script>

<button onclick={handleClick}>Click me</button>
<input onchange={(e) => message = e.target.value} />
<p>{message}</p>
```

**Common Events:**
- `onclick` — mouse click
- `onchange` — input value changed
- `onsubmit` — form submitted
- `oninput` — input while typing
- `onmouseover`, `onmouseout` — mouse movement

---

## 4. Data Binding with `bind:`

Two-way binding automatically synchronizes a variable with an input element.

```svelte
<script>
  let name = $state("")
</script>

<input bind:value={name} placeholder="Type your name" />
<p>You are: {name}</p>
```

This is equivalent to manually listening to input changes—but much simpler!

**Key Point:**
- `bind:value` keeps the variable and input in sync
- Works with `<input>`, `<textarea>`, `<select>`, and checkboxes/radio buttons

---

## 5. Conditional Rendering with `{#if}`

Show or hide content based on conditions.

```svelte
<script>
  let isVisible = $state(true)
</script>

{#if isVisible}
  <p>This is visible!</p>
{:else}
  <p>This is hidden!</p>
{/if}

<button onclick={() => isVisible = !isVisible}>Toggle</button>
```

---

## 6. Looping with `{#each}`

Render a list of items dynamically.

```svelte
<script>
  let items = $state([
    { id: 1, name: "Apples" },
    { id: 2, name: "Bananas" },
    { id: 3, name: "Carrots" },
  ])
</script>

<ul>
  {#each items as item (item.id)}
    <li>{item.name}</li>
  {/each}
</ul>
```

**Key Points:**
- Use `(item.id)` as a unique key for efficient rendering
- You can destructure: `{#each items as { id, name }}`

---

## 7. Component Lifecycle with `$effect()`

Run code when dependencies change (similar to React's `useEffect`).

```svelte
<script>
  let count = $state(0)

  $effect(() => {
    console.log("Count changed to:", count)
  })
</script>

<button onclick={() => count++}>Count: {count}</button>
```

**Key Points:**
- `$effect()` runs after state updates
- It tracks dependencies automatically
- Useful for API calls, logging, or syncing with external systems

---

## 8. Styling in Svelte

CSS in a Svelte component is automatically scoped (only applies to that component).

```svelte
<script>
  let color = $state("red")
</script>

<p class="text">This is styled</p>

<style>
  .text {
    color: v(color);
    font-size: 18px;
  }
</style>
```

**Key Points:**
- Styles are scoped by default
- No CSS conflicts between components
- Use `v(variableName)` to use JavaScript values in CSS

---

## 9. Computed Values

Automatically derive values from state using `$derived()`.

```svelte
<script>
  let firstName = $state("John")
  let lastName = $state("Doe")

  let fullName = $derived(firstName + " " + lastName)
</script>

<p>{fullName}</p>
```

---

## 10. Stores for Global State

Share state across multiple components using stores.

```javascript
// store.js
import { writable } from 'svelte/store'

export const count = writable(0)
```

```svelte
<!-- Component.svelte -->
<script>
  import { count } from './store.js'
</script>

<p>Count: {$count}</p>
<button onclick={() => $count++}>Increment</button>
```

**Key Points:**
- Stores use the `$` prefix when accessing them in components (auto-subscribed)
- Great for app-wide state (user info, settings, etc.)

---

## Next Steps

1. Complete the concepts above by building components
2. Refer to the [Official Svelte Tutorial](https://svelte.dev/tutorial) for deeper dives
3. Check out [Svelte Documentation](https://svelte.dev/docs) for the complete API reference

Happy coding!
