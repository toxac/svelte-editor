<script lang="ts">
    import Editor from '@tinymce/tinymce-svelte';
    
    let apiKey = "no-api-key";
    let conf = {
      "height": 500,
      "plugins": [
          "a11ychecker","advlist","advcode","advtable","autolink","checklist","export",
          "lists","link","image","charmap","preview","anchor","searchreplace","visualblocks",
          "powerpaste","fullscreen","formatpainter","insertdatetime","media","table","help","wordcount"
        ],
       "toolbar": "undo redo | a11ycheck casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | " +
          "bullist numlist checklist outdent indent | removeformat | code table help"
    }
    </script>
    <main>
      <h1>Hello Tiny</h1>
      <Editor
       {apiKey}
       {conf}
       value="Welcome to TinyMCE Svelte"
      />
    </main>