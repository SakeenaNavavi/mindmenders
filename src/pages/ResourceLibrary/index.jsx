
const ResourceLibrary = () => {
  
    const resources = [
      {
        type: 'video',
        url: 'https://www.youtube.com/user/Psych2GoTv',
        description: '',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/@JayShettyPodcast.',
        description: '',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/user/schooloflifechannel',
        description: '',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/user/TEDEducation',
        description: '',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/c/TherapistTalks',
        description: '',
      },
      {
        type: 'video',
        url: 'https://www.youtube.com/user/KatiMorton',
        description: '',
      },
      {
        type: 'link',
        url: 'https://www.psychologytoday.com/intl/counsellors',
        url:'https://www.betterhelp.com/',
        title: 'Consultant & Coaching',
        description: 'It is essential to connect with licensed mental health professionals who can provide you with the support and guidance you need.',
      },
      {
        type: 'link',
        url: 'https://www.nimh.nih.gov/health/topics/mental-health-month',
        title: 'Mental Health Awareness Campaigns',
        description: 'Throughout the month of May,numerous mental health organizations and advocates run awareness campaigns on varies platforms including social media support.',
        
      },
      {
        type: 'link',
        url: 'https://www.who.int/health-topics/mental-health#tab=tab_1',
        url:'https://www.mhpss.net/',
        title: 'Mental Health Organizations',
        description: 'Look for organizations dedicated to mental health awareness and support.',
      },
      {
        type: 'link',
        url: 'https://mysupportforums.org/',
        url:'https://www.dailystrength.org/',
        title: 'Online Mental Health Forums',
        description:'Search for online mental health forums and communities where people share their experience and offer support.',
      },
      {
        type: 'link',
        url: 'https://pubmed.ncbi.nlm.nih.gov/',
        url:'https://scholar.google.com/',
        url:'https://www.apa.org/pubs/databases/psycinfo',
        title: 'Research Papers and Studies',
        description: 'You can search for specific topics, authors, or keywords related to mental healthcare research.',
      },
      {
        type: 'link',
        url: 'https://www.psychologytoday.com/intl',
        url:'https://psychcentral.com/news',
        url:'https://www.mhanational.org/blogs',
        title: 'Mental Health News and Magazines',
        description: 'From news updates to personal stories and expert opinions, to help individuals stay informed about mental health issues and developments in the field.',
      },
      {
        type: 'image',
        imageUrl: 'path_to_your_image.jpg',
        description: 'Description of the image',
      },
    ];
  
    return (
      <div>

        <h2>"Mind Matters: Exploring the Intricacies of Mental Health"</h2>
        {resources.map((resource, index) => {
          if (resource.type === 'video') {
            return (
              <div key={index}>
                <h3></h3>
                <video width="320" height="240" controls>
                  <source src={resource.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>{resource.description}</p>
             </div>
            );
          } else if (resource.type === 'link') {
            return (
              <div key={index}>
                <h3></h3>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
                <p>{resource.description}</p>
  
                
              </div>
            );
          
          } else {
            return null;
          }
        })}
      </div>
    );
  };
  
  export default ResourceLibrary;
  
  
  