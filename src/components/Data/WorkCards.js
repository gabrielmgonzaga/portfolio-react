import addon from '../../images/addon.png'
import edco from '../../images/edco.png'
import proline from '../../images/proline.png'
import sn from '../../images/sn.png'

const WorkCards = [
    {
        id: 'addon',
        link: 'https://addonnetworks.com',
        title: 'AddOn Networks',
        subtitle: 'Mobile Responsive Refactor | Lead Generation Landing',
        role: 'Frontend Development',
        description: 'At AddOn, I supported the marketing department by managing and coordinating a dev team from Kazakhstan. We developed features for internal sales flow tracking, and created web media for partner companies. Initially, I was hired for a one month contract.',
        cta: 'Read More',
        img: {
          url: addon,
          alt: 'addon logo'
        },
        postImg: {
          url: 'https://gabegonzaga.io/assets/blog/addon/addon-outside.png',
          alt: 'AddOn Networks Lab',
          caption: ''
        },
        intro: [
          {
            duration: 'June 2018 - March 2020',
            team: [ 'Paul Schulte (AddOn Networks)', 'Haley McPherson (Prolabs UK)', 'Stanislav Pershin (Saritasa)', 'Gabe Gonzaga', ],
            role: [ 'Frontend Development', 'Project Coordination' ],
            location: 'Tustin, CA (Remote)'
          }
        ],
        content: [
          {
            heading: 'Mobile Responsive Refactor 📱',
            img: {
              url: '',
              alt: '',
              caption: ''
            },
            paragraph: [
              'AddOn Networks develops computer network upgrades and connectivity hardware. Initially, I was brought on board on a one month contract. In that timeframe, I collaborated closely with the sales and global marketing teams developing and refactoring front end code.'
            ],
            listHeading: 'Challenges',
            list: [
              'Refactor AddOn web application for mobile responsive view.',
              'Ensure new updates are isolated and other elements on the site aren’t affected.',
              'Cross check viewport breakpoints ensuring mobile responsiveness.'
            ]
          },
          {
            heading: 'Saritasa',
            img: {
              url: '',
              alt: '',
              caption: ''
            },
            paragraph: [
              'One of my first tasks were to coordinate and collaborate with Saritasa, a software agency that managed AddOn’s database. I worked closely with their Kazakhstan team to implement new features and requests from AddOn stakeholders.',
            ],
            listHeading: '',
            list: []
          },
          {
            heading: 'Research',
            img: {
              url: 'https://gabegonzaga.io/assets/blog/addon/addon-challenges.png',
              alt: 'Addon Networks smartphone view',
              caption: 'Original Header and Footer View on Smartphones'
            },
            paragraph: [
              'The research process involved inspecting the codebase to identify underlying issues and ensure new updates would not affect other elements on the site. After surveying all the connections on the frontend throughout the application, I felt comfortable proceeding to the testing and experimentation phase.',
              'Initially, testing began on the main home page starting with the navigation, search bar, carousel and card components. During this phase, I learned more about the architecture of the code and generated a solution that would also keep the original design in place.'
            ],
            listHeading: '',
            list: []
          },
          {
            heading: 'Solution',
            img: {
              url: '',
              alt: '',
              caption: ''
            },
            paragraph: [
              'My approach was to remove all static width elements and adjust viewport layout with custom media queries. Some difficulty ensued since many instances of static widths were referenced throughout the code. Also, many elements were positioned absolutely which added to the difficulty. There were many trial and error adjustments.',
              'To keep the codebase clean - I created new CSS class instances for individual sections and elements. Customized media queries were used to declare and implement the new custom views and class instances.',
              'All in all, it took two weeks to update the main home page, and eventually I had the entire site mobile responsive by the end of summer. The mobile responsive update made the site look decent on mobile which led to increased web sessions, new leads, and overall business growth.'
            ],
            listHeading: '',
            list: []
          },
          {
            heading: 'Results',
            img: {
              url: 'https://gabegonzaga.io/assets/blog/addon/addon.png',
              alt: 'Google Analytics mobile overview',
              caption: 'Google Analytics mobile overview'
            },
            paragraph: [
              'Increased mobile engagement for users, new users, and sessions for mobile.',
            ],
            listHeading: '',
            list: [
              'Users: ↑ 56%',
              'New Users: ↑ 56%',
              'Sessions: ↑ 48%'
            ]
          },
          {
            heading: 'Lead Generation Landing Page (OTDR) 📈',
            paragraph: [
              'The AddOn marketing team was tasked with creating a lead generation landing page to gather leads for the OTDR (Optical Time-Domain Reflectometer) campaign. My role was to design and develop the OTDR lead generation landing page with one main task - to gather leads for the AddOn sales team.',
            ],
            listHeading: 'Challenges',
            list: [
              'Design and Develop an approved lead generation landing page by deadline.',
              'Generate leads and engagement for the OTDR product.',
              'Define the user’s perception and what would engage them.',
              'Complete design and development process under limited time constraints.'
            ],
            img: {
              url: '',
              alt: '',
              caption: ''
            },
          },
          {
            heading: 'Research',
            paragraph: [
              'The focal point of initial brainstorming was defining the user and their perceptions. From researching the analytics, roughly 84% of the users were male and approximately 80% were ages 25-54 respectively.',
              'This data provided good insight and concrete evidence to base a user persona against. Since a majority of the users were ages 25-44, I believe the design needed to be as clean and concise as possible to generate engagement.'
            ],
            listHeading: '',
            list: [],
            img: {
              url: 'https://gabegonzaga.io/assets/blog/addon/otdr-demographics.png',
              alt: 'Age and Gender Demographics',
              caption: 'Age and Gender Demographics'
            },
          },
          {
            heading: 'Competition',
            paragraph: [
              'With a good mental model of the user, it was time to research the competition. After reviewing a handful of companies in the same niche (computer network hardware), I looked deeper into Cisco.com to base the initial design upon. Communication and meetings between management also influenced the design decision.',
              'I believe the design needed to instill trust with the user and ensure that AddOn is the right company to solve their specific problem. To gain their trust and generate a potential lead, the design solution focused on the OTDR brochure.'
            ],
            listHeading: '',
            list: [],
            img: {
              url: 'https://gabegonzaga.io/assets/blog/addon/otdr-Cisco.png',
              alt: 'Cisco website',
              caption: 'Cisco website'
            },
          },
          {
            heading: 'Jumbotron',
            paragraph: [
              'Upon page arrival, the main Call to Action is to read the OTDR brochure. Since this could be a first session between a user and AddOn, I believed it was essential to place focus on the OTDR brochure in the hopes of achieving brand trust between the user and company.',
            ],
            listHeading: '',
            list: [],
            img: {
              url: 'https://gabegonzaga.io/assets/blog/addon/otdr-jumbotron.png',
              alt: 'Addon networks otdr',
              caption: 'Main Call to Action'
            },
          },
          {
            heading: 'Content',
            paragraph: [
              'The main content aims to highlight Key Benefits the OTDR product provides. A colorful network map graphic is displayed to help visualize the solution. If the user scrolls to the bottom without reading the initial OTDR brochure, there’s another call to action to remind them to view the brochure.',
              'Since the majority of users read from left to right, I decided to float the form section to the right to direct attention to the main content and keep the page as concise as possible. Downloadable resources are also available above the form fields to further drive brand trust.'
            ],
            listHeading: '',
            list: [],
            img: {
              url: 'https://gabegonzaga.io/assets/blog/addon/otdr-form.png',
              alt: 'Main Content and Form Fields',
              caption: 'Main Content and Form Fields'
            },
          },
          {
            heading: '',
            paragraph: [
              '',
            ],
            listHeading: '',
            list: [],
            img: {
              url: 'https://gabegonzaga.io/assets/blog/addon/otdr-mobile-group.png',
              alt: 'OTDR Mobile Views',
              caption: 'OTDR Mobile Views'
            },
          },
          {
            heading: 'Results',
            paragraph: [
              'The engagement for the OTDR page is above industry standard for a good average session duration (2 - 3 minutes). This metric indicates users are investing a significant amount of time on the page.',
            ],
            listHeading: '',
            list: [],
            img: {
              url: 'https://gabegonzaga.io/assets/blog/addon/otdr-analytics.png',
              alt: 'OTDR google analytics',
              caption: 'OTDR Analytics'
            },
          },
          {
            heading: '',
            paragraph: [
              '',
            ],
            listHeading: '',
            list: [],
            img: {
              url: '',
              alt: '',
              caption: ''
            },
          }
        ],
    },
    {
        id: 'edco',
        link: 'https://ed.co',
        title: 'Edco',
        subtitle: 'Frontend Development',
        role: 'Frontend Development',
        description: 'Edco is a fundraising platform for K-12 schools. I worked closely with a project manager to update, cleanup, and debug CSS Bootstrap code. I restyled landing pages, forms, and content to brand guidelines and assisted with the Edco platform launch, September 2019.',
        cta: 'Read More',
        img: {
          url: edco,
          alt: 'edco logo'
        },
        postImg: {
          url: 'https://gabegonzaga.io/assets/blog/edco/edco-desktop.png',
          alt: 'Edco desktop view',
          caption: ''
        },
        intro: [
          {
            duration: 'February 2019 - September 2019',
            team: [ 'Amy Zucchi (Project Manager)', 'Michael Justice (Engineer)', 'Gabe Gonzaga' ],
            role: [ 'Frontend Development' ],
            location: 'New York, NY (Remote)'
          }
        ],
        content: [
          {
            heading: 'Background',
            img: {
              url: '',
              alt: '',
              caption: ''
            },
            paragraph: [
              'Edco is a fundraising platform for K-12 schools based in New York. The Edco platform allows users to raise funds, create team pages, invite members, and promote their fundraising activities.',
              'I onboarded during the development phase to complete the internal dashboard mobile views. The initial developer departed midway and did not implement the Bootstrap (CSS Framework) correctly, leaving many issues and bugs on the mobile web frontend.'
            ],
            listHeading: 'Challenges',
            list: [
              'Refactor mobile web application internal dashboard pages.',
              'Develop and complete critical pages before September launch.',
              'Code cleanup, mobile testing and debugging.'
            ]
          },
          {
            heading: 'Outcome',
            img: {
              url: 'https://gabegonzaga.io/assets/blog/edco/before-after-2.png',
              alt: 'Edco desktop views',
              caption: 'Before & After Example'
            },
            paragraph: [
              'Edco utilizes a Java backend (Spring framework) where I worked around and cleaned up the CSS Bootstrap code. I simplified and ensured that elements utilizing Bootstrap v3 features were written using common practices. ',
              'I made sure internal dashboard pages were consistent across smartphone viewports, tablets, and desktops. There were 20+ pages to develop and launch for production. Rigorous testing and updates were performed to clean up frontend issues.'
            ],
            listHeading: '',
            list: []
          },
          {
            heading: 'Takeaway',
            img: {
              url: '',
              alt: '',
              caption: ''
            },
            paragraph: [
              'During the project, I leveraged and strengthed my frontend development knowledge specifically with jQuery and Bootstrap. We managed the project with Google Suite Tools and communicated consistently which was essential for launch.'
            ],
            listHeading: '',
            list: []
          },
          {
            heading: 'Completion',
            img: {
              url: '',
              alt: '',
              caption: ''
            },
            paragraph: [
              'The Edco project concluded at the end of summer and launched September 2019. The fundraising platform is used across the United States with users in all 50 states. 🇺🇸'
            ],
            listHeading: '',
            list: []
          },
          {
            heading: '',
            img: {
              url: '',
              alt: '',
              caption: ''
            },
            paragraph: [
              ''
            ],
            listHeading: '',
            list: []
          }
        ]
    },
    {
        id: 'proline',
        link: 'https://prolineoptions.com',
        title: 'Proline Options',
        subtitle: '',
        role: 'Frontend Development',
        description: 'Proline Options is a partner company of AddOn Networks. I coordinated and assisted their marketing team and managed the website launch. I developed frontend landing pages, widgets, tabs, and web media.',
        cta: 'Read More',
        img: {
          url: proline,
          alt: 'proline options logo'
        },
        postImg: {
          url: '',
          alt: '',
          caption: ''
        },
        intro: [
          {
            duration: '',
            team: [],
            role: [],
            location: ''
          }
        ],
        content: [
          {
            heading: '',
            img: {
              url: '',
              alt: '',
              caption: ''
            },
            paragraph: [
              ''
            ],
            listHeading: '',
            list: []
          }
        ]
    },
    {
        id: 'sn',
        link: 'https://smithandnoble.com',
        title: 'Smith & Noble',
        subtitle: '',
        role: 'Frontend Development, Email Marketing',
        description: 'Smith & Noble provides custom window design and is based in Corona, CA. I worked with the marketing team developing landing pages, analyzing A/B tests, conversions, and supported creative email campaigns.',
        cta: 'Read More',
        img: {
          url: sn,
          alt: 'smith and noble log'
        },
        postImg: {
          url: '',
          alt: '',
          caption: ''
        },
        intro: [
          {
            duration: '',
            team: [],
            role: [],
            location: ''
          }
        ],
        content: [
          {
            heading: '',
            img: {
              url: '',
              alt: '',
              caption: ''
            },
            paragraph: [
              ''
            ],
            listHeading: '',
            list: []
          }
        ]
    }
]

export default WorkCards
