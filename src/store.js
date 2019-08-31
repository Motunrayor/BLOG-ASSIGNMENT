import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [{
      id: 1,
      title: 'So You Want to be a Functional Programmer',
      author: 'by: Charles Scalfani',
      content: 'When we first learned to drive, we struggled. It sure looked easy when we saw other people doing it. But it turned out to be harder than we thought. We practiced in our parent’s car and we really didn’t venture out on the highway until we had mastered the streets in our own neighborhood.',
      image_url: ('../assets/fire.png'),
    },
    {
      id: 2,
      title: 'The Power of Humor in Healthcare',
      author: 'by: Ashley Abramso',
      content: 'By the end of my first trimester, all the nurses at the local emergency room knew my name. Thanks to a four-month bout of hyperemesis gravidarum — basically, intense and frequent nausea and vomiting during pregnancy — I had wound up at the hospital for fluids about once a week for a whole summer. I…',
      image_url: ''
    }
  
  ]
  },
  mutations: {
      addPost(state, newPost) {
        state.posts = [...state.posts, newPost];
      }
  },
  getters: {
    posts: state => state.post(blog)
  },
  actions: {

  }
})
