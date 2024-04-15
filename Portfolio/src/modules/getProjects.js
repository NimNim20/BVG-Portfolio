import { ref } from 'vue'

// import image1 from '@/assets/test.jpeg'


const getProjectItems = () => {
  const projectItems = ref([
    {
      id: 1,
      title: 'Portfolio Item 1',
      description: 'This is the first portfolio item',
      image: 'https://via.placeholder.com/150',
      category: 'Web',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      title: 'Portfolio Item 2',
      description: 'This is the second portfolio item',
      category: 'Photo',
      image: 'https://via.placeholder.com/150',
      link: 'https://www.youtube.com'
    },
    {
      id: 3,
      title: 'Portfolio Item 3',
      description: 'This is the third portfolio item'
    },
    {
      id: 4,
      title: 'Portfolio Item 4',
      description: 'This is the second portfolio item'
    }  
  ])

  return { projectItems }
}

export default getProjectItems