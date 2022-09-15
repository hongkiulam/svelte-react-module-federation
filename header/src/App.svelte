<script>
  import Header from "./Header.svelte";
  import * as Footer from 'footer/Footer'
  import Button from 'button/Button'

const mountSvelteComponent = (node, comp) => new comp({target: node})

</script>
<Header />
<div class="container">
  <div>Name: header</div>
  <div>Framework: svelte</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
</div>
<div use:Footer.mount></div>

<div use:mountSvelteComponent={Button}></div>