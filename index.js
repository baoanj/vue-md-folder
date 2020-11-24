import MarkdownLayout from './MarkdownLayout.vue'
import MarkdownContent from './MarkdownContent.vue'

export default function markdownFolder(router) {
  const req = require.context('@/markdown', true, /\.md$/)
  const list = []
  const children = []
  req.keys().forEach(file => {
    const path = file.match(/^\.\/(.+)\.md$/)[1]
    const [folder, name] = path.split('/')
    const found = list.find(item => item.name === folder)
    if (found) {
      found.children.push({ name })
    } else {
      list.push({ name: folder, children: [{ name }] })
    }
    const content = require('@/markdown/' + path + '.md')
    children.push({
      path,
      name,
      component: {
        render(h) {
          return h(MarkdownContent, {
            props: {
              content
            }
          })
        }
      }
    })
  })
  router.addRoutes([
    {
      path: `/doc`,
      name: 'doc',
      component: {
        render(h) {
          return h(MarkdownLayout, {
            props: {
              list
            }
          })
        }
      },
      children
    }
  ])
}
