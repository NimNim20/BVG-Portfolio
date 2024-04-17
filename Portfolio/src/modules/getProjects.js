import { ref } from 'vue'

import image1 from '@/assets/Ghost_Clothing.png'
import image2 from '@/assets/Remote_job.png'
import image3 from '@/assets/Denmarktravelling.png'
import image4 from '@/assets/KantineApp.png'
import image5 from '@/assets/Merrild.png'


const getProjectItems = () => {
  const projectItems = ref([
    {
      id: 1,
      title: 'Ghost Clothing Website Mockup',
      description: 'This is a project I made together with 3 other classmates during our first semester. We were tasked with creating a website and brand for a clothing company called Ghost.',
      image: image1,
      category: 'Web',
      require: 'Requires Adobe XD to view the prototype.',
      link: 'https://xd.adobe.com/view/f30da69e-e8d0-4b17-8856-3f7c275e37c1-a65e/',
    },
    {
      id: 2,
      title: 'Remote Job Portal',
      description: 'Another first semester project I made together with 2 classmates. An app that was designed to help students find remote jobs a little easier by having all the necessary information about the jobs in one place.',
      category: 'App',
      require: 'Requires Adobe XD to view the prototype.',
      image: image2,
      link: 'https://xd.adobe.com/view/0e6742e1-b015-4dbb-b6f1-2a387be780c0-5b34/?fullscreen'
    },
    {
      id: 3,
      title: 'Denmark Travel Guide',
      description: 'My first proper website I made as a project. I had full control over what I wanted to make and decided to make a travel guide for some of the biggest cities in Denmark.',
      category: 'Web',
      image: image3,
      link: 'https://denmarktravelling.com/'
    },
    {
      id: 4,
      title: 'EASV Cafeteria App',
      description: 'Me and 2 classmates were tasked with creating some form of an interface that could be used on any screen we decided. We chose to make a cafeteria app for our academy, so students can place orders for food, drinks and snacks in our cafeteria.',
      category: 'App',
      image: image4,
      link: 'https://www.figma.com/file/eU3TgI3e5vNIwxGKDs0Gpp/Low-fidelity?type=design&node-id=0%3A1&mode=design&t=DQHP2wLhmLzLMb0S-1'
    },
    {
      id: 5,
      title: 'Red Merrild Coffee Commercial',
      description: 'One of the projects I had the most fun making. A short video telling a story, which we decided should be about a guy and his morning routine, drinking several cups of merrild coffee.',
      category: 'Video',
      image: image5,
      link: 'https://youtu.be/AFBSUQvmt1o'
    }
  ])

  return { projectItems }
}

export default getProjectItems