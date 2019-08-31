<template>
  <div class="blogpost">
      <div class="post-inputs">
          <div class="title-input">
            <error>Title must be more than 10 characters</error>
            <input v-model="title" placeholder="Input a post title"/>
          </div>
          <div class="cat-input">
              <error>post must have a category</error>
              <select 
              placeholder="Select a Category"
              v-model="category"
              v-if="postCategories.length"
              >
                <option
                    v-for="(cat,index) in postCategories"
                    :key="index"
                    :value="cat.id">
                    {{cat.label}}
                  
                </option>
              </select>
          </div>
          <div class="image-input">
              <error>post must have an image</error>
              <button type="primary" class="flex-center" icon="ios-camera-outline">Post Image</button>
          </div>
      </div>
    <quill-editor
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"

    />
    <div class="post-actions-row">
        <button class="btn-delete" @click="del">Delete</button>
        <button type="primary" @click="save">Save</button>
        <button type="primary" @click="publish">Publish</button>
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import { Button, Input, Select } from 'iview'
import Error from './Error.vue'
export default {
    name:"Blogpost",
    components: {
        Button,
        Input,
        Select,
        Error,
        quillEditor
    },
    data: () => ({
        title: '',
        category: '',
        image_url: '',
        content: '',
        editorOption: {
            dedug: 'info',
            placeholder: 'Add a New Post...',
            readOnly: true,
            theme: 'snow'

        },
        delta: undefined,
        postCategories: [
            {
                id: 1,
                label: 'NodeJs',
                img: 'https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png?w=200'
            },
            {
                id: 2,
                label: 'JavaScript',
                img: 'https://cdn.auth0.com/blog/js-fatigue/JSLogo.png'
            }
        ]
    }),
    watch: {
        content () {
            this.delta = this.$refs.myQuillEditor.quill.getContents()
        }
    },
    methods: {
        del () {
            
        },
        save () {

        },
        publish () {

        }
    }
}
</script>
<style>
 .quill-editor{
    height: 72vh;
 }
 .flex-center{
     display:flex;
     align-items: center;
     justify-content: center;
 }
</style>
