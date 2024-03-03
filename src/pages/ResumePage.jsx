//This is the resume page. It is a functional component that returns a div with a header, a paragraph, and two lists.
export default function ResumePage() {
  return (
    <div className="container pt-4">
      <h2>Resume</h2>
      <p>
        Download my resume <a href="https://www.atmos.albany.edu/student/jalland/Images/CV/Alland_CV.pdf" target="_blank">here</a>.
      </p>
      <h3>Front-End Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h3>Back-End Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>GraphQL</li>
      </ul>

    </div>
  );
}