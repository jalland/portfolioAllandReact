// This is the home page of the web application. It is the first page that the user sees when they visit the site. It contains a brief introduction to the developer and a picture of the developer.
export default function AboutPage() {
  return (
    <div className="container pt-4">
      <h2>About Me</h2>
      <img src="../../src/assets/Alland_ProfessionalPicture.jpeg" alt="Josh Alland Picture" style={{ width: '200px' }}/>
      <p>
      <br></br>
      My name is Josh Alland. I am a scientist and full-stack web developer. <br></br><br></br>
        
        On the science side, I am an Associate Scientist with NOAA's National Hurricane Center (NHC). At NHC, I work with the scientific community to develop, test, and deploy new products and services. In this role, I collaborate with physical scientistis, social scientists, and our partners, including emergency managers, broadcast meteorologists, and other Federal government agencies. <br></br><br></br> 
        
        On the web development side, I am a graduate of the University of Miami's Coding Bootcamp. I have experience with HTML, CSS, JavaScript, jQuery, Node.js, Express, MySQL, MongoDB, React, and other web development technologies. Please see the Portfolio tab for examples of my work, and please contact me via the Contact tab. You can find my resume on the Resume tab <br></br>
      </p>

      
    </div>
  );
}
