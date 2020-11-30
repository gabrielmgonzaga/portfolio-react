import addon from '../../images/addon.png'
import edco from '../../images/edco.png'
import proline from '../../images/proline.png'
import sn from '../../images/sn.png'

const WorkCards = [
    {
        id: 'addon',
        link: 'https://gabegonzaga.io/addon',
        title: 'AddOn Networks',
        role: 'Frontend Development',
        description: 'At AddOn, I supported the marketing department by managing and coordinating a dev team from Kazakhstan. We developed features for internal sales flow tracking, and created web media for partner companies. Initially, I was hired for a one month contract.',
        cta: 'Read More',
        img: {
          url: addon,
          alt: 'addon logo'
        },
    },
    {
        id: 'edco',
        link: 'https://gabegonzaga.io/edco',
        title: 'Edco',
        role: 'Frontend Development',
        description: 'Edco is a fundraising platform for K-12 schools. I worked closely with a project manager to update, cleanup, and debug CSS Bootstrap code. I restyled landing pages, forms, and content to brand guidelines and assisted with the Edco platform launch, September 2019.',
        cta: 'Read More',
        img: {
          url: edco,
          alt: 'edco logo'
        },
    },
    {
        id: 'proline',
        link: 'https://prolineoptions.com',
        title: 'Proline Options',
        role: 'Frontend Development',
        description: 'Proline Options is a partner company of AddOn Networks. I coordinated and assisted their marketing team and managed the website launch. I developed frontend landing pages, widgets, tabs, and web media.',
        cta: 'Visit Website',
        img: {
          url: proline,
          alt: 'proline options logo'
        },
    },
    {
        id: 'sn',
        link: 'https://smithandnoble.com',
        title: 'Smith & Noble',
        role: 'Frontend Development, Email Marketing',
        description: 'Smith & Noble provides custom window design and is based in Corona, CA. I worked with the marketing team developing landing pages, analyzing A/B tests, conversions, and supported creative email campaigns.',
        cta: 'Visit Website',
        img: {
          url: sn,
          alt: 'smith and noble log'
        },
    }
]

export default WorkCards
