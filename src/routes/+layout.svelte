<script>
  import '../app.css'
  import Nav from '$lib/components/Nav.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
  <title>Hackettstown SDA Church</title>
  <meta name="description" content="Welcome to Hackettstown SDA Church" />
</svelte:head>

<div class="flex flex-col min-h-screen bg-gray-950">
  <Nav />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</div>
