<template lang="pug">
  #app
    .Content
      h1.Content-title {{ title }}
      .Content-sections
        .Content-section(v-for='section in sections' v-bind:class='"Content-section--" + section.type')
          h2.Content-title--section {{ section.type }}
          ul.Content-list
            li.Content-listItem(v-for='item in section.items')
              a.Content-listLink(:href='item.link') {{ item.name }}
              span.Content-linkMeta(v-if='item.meta') {{ item.meta }}
    p.VisualManifesto {{ visualManifesto }}

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Daniel Dennerkrans',
      sections: [
        { type: 'social', items: [
          { name: 'Twitter', link: 'https://twitter.com/dennerkrans', meta: ''},
          { name: 'Github', link: 'https://github.com/dennerkrans', meta: ''},
          { name: 'LinkedIn', link: 'https://www.linkedin.com/in/danieldennerkrans/', meta: ''},
          { name: 'Email', link: 'mailto:daniel.dennerkrans@hyperisland.se?Subject=Well%20hello%20there.', meta: ''}
        ]},
        { type: 'work', items: [
          { name: 'Inside a strangers mind', link: 'https://medium.com/wolfmother-co/tele2-inside-a-strangers-mind-d27bbf499f72#.v26onwbpf', meta: 'Developer @ Wolfmother'},
          { name: 'Getsomehelp', link: 'http://www.getsomehelp.se/', meta: 'Frontend @ Wolfmother'},
          { name: 'WrittenByZoe', link: 'http://www.writtenbyzoe.com/', meta: 'Developer @ Wolfmother'},
          { name: 'Green vacuum', link: 'https://vimeo.com/139375868', meta: 'Developer and producer @ Hyper Island'},
          { name: 'Carmen Moves', link: '/carmen', meta: 'Innovation & Prototyping @ DDB'},
        ]},
        { type: 'other', items: [
          { name: 'Sunday game brunch', link: 'https://dennerkrans.github.io/sunday-game-brunch/', meta: 'GM and developer'},
          { name: 'Polar balance', link: 'https://dennerkrans.itch.io/polarbalance', meta: 'Unity'},
          { name: 'Balls', link: '/processing/balls', meta: 'Processing experiment'},
          { name: 'Walk on home', link: '/walkonhome', meta: 'Early dev project'}
        ]}
      ],
      visualManifesto: '🐶 ☕️ 🤗'
    }
  }
}
</script>

<style lang="sass">
@import './assets/reset.css'

#app
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

h1, h2
  font-weight: normal

ul
  list-style-type: none

.Content
  margin: 10vh 15vw
  max-width: 1100px

.Content-title
  font-size: 1.5rem
  font-weight: bold
  color: #363A4F

.Content-sections
  display: flex
  justify-content: space-between
  flex-wrap: wrap

.Content-section
  margin-top: 5vh
  min-width: 120px
  display: inline-block

.Content-section--social
  h2
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%)
  a
    color: #43e97b

.Content-section--work
  h2
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
  a
    color: #667eea

.Content-section--other
  h2
    background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)
  a
    color: #fe9a8b


.Content-title--section
  display: inline-block
  font-family: 'Menlo', 'Inconsolata', monospaced
  font-size: 0.75rem
  font-weight: 700
  color: #fff
  padding: 6px 8px 5px 8px
  border-radius: 4px
  text-transform: uppercase

.Content-list
  font-size: 0.875rem

.Content-listItem
  margin-top: 1rem

.Content-linkMeta
  font-size: .75rem
  color: #97B4C2
  margin-left: 4px
  font-weight: 400

.VisualManifesto
  position: fixed
  background-image: linear-gradient(to bottom, rgba(255,255,255,0) 15%, rgba(255,255,255,0.5) 10%, rgba(255,255,255,1) 65%)
  height: 3rem
  font-size: 1.5rem
  text-align: center
  line-height: 3rem
  right: 0
  bottom: 0
  left: 0

@media screen and (min-width: 1440px)
  .Content
    margin: 10vh auto

@media screen and (max-width: 1000px)
  .Content-section
    flex-basis: 50%

@media screen and (max-width: 500px)
  .Content-section
    flex-basis: 100%
</style>
