import { ref } from 'vue'

// import image1 from '@/assets/test.jpeg'


const getProjectItems = () => {
  const projectItems = ref([
    {
      id: 1,
      title: 'Kvaglund Interactive Folder',
      teaser: 'This is the first portfolio item and a bunch of other filler text that I can not be bothered to write right now.',
      description: '',
      image: 'https://picsum.photos/id/237/200/300',
      category: 'Web',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      title: 'Remote Job Portal',
      teaser: 'This is the second portfolio item',
      description: '',
      category: 'Photo',
      image: 'https://picsum.photos/id/237/200/300',
      link: 'https://www.youtube.com'
    },
    {
      id: 3,
      title: 'Remote Job Portal',
      teaser: 'This is the second portfolio item',
      description: '',
      category: 'Photo',
      image: 'https://picsum.photos/id/237/200/300',
      link: 'https://www.youtube.com'
    },
    {
      id: 4,
      title: 'Remote Job Portal',
      teaser: 'This is the second portfolio item',
      description: '',
      category: 'Photo',
      image: 'https://picsum.photos/id/237/200/300',
      link: 'https://www.youtube.com'
    },
    {
      id: 5,
      title: 'Remote Job Portal',
      teaser: 'This is the second portfolio item',
      description: '',
      category: 'Photo',
      image: 'https://picsum.photos/id/237/200/300',
      link: 'https://www.youtube.com'
    }
  ])

  return { projectItems }
}

export default getProjectItems