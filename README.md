# Testing Rich Text Editors for svelte

## Tiptap
[https://tiptap.dev/installation/svelte](tiptap)

### Usage

**Install Dependecies**
```
npm install @tiptap/core @tiptap/pm @tiptap/starter-kit
```

**Create a New Component **
```
<script>
  import { onMount, onDestroy } from 'svelte'
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'

  let element
  let editor

  onMount(() => {
    editor = new Editor({
      element: element,
      extensions: [
        StarterKit,
      ],
      content: '<p>Hello World! 🌍️ </p>',
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor
      },
    })
  })

  onDestroy(() => {
    if (editor) {
      editor.destroy()
    }
  })
</script>

{#if editor}
  <button
    on:click={() => editor.chain().focus().toggleHeading({ level: 1}).run()}
    class:active={editor.isActive('heading', { level: 1 })}
  >
    H1
  </button>
  <button
    on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
    class:active={editor.isActive('heading', { level: 2 })}
  >
    H2
  </button>
  <button on:click={() => editor.chain().focus().setParagraph().run()} class:active={editor.isActive('paragraph')}>
    P
  </button>
{/if}

<div bind:this={element} />

<style>
  button.active {
    background: black;
    color: white;
  }
</style>
```

## Svelte Lexical
[https://github.com/umaranis/svelte-lexical/blob/master/demos/richtext-editor/src/App.svelte](svelte-lexical)

## TinyMCE
The best WYSIWYG
Svelte rich text editor
Trusted by 1.5M developers. Used in 100M+ apps.
No matter the project, TinyMCE Svelte works best
[https://www.tiny.cloud/solutions/wysiwyg-svelte-rich-text-editor/](tinyMCE)
