import React from "react";

function StudentPage({currentUser}) {
  // console.log(currentUser)
  return (
    <div>
      <h1>AP</h1>
      {/* <h4>Welcome {currentUser.username}</h4> */}

      <img
        src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.2.1858690084.1658745301&semt=sph"
        alt="Mentor"
      />
      <h3>Sammy Kipkosgei</h3>
      <p>sammykipkosgei@gmail.com</p>
      <p>Profile</p>
      <p>Quizes</p>
      <p>Logout</p>
      <h2>You belong to the conquerers group</h2>
      <h4>Tabitha Chepng'etich</h4>
      {/* <img
        src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.2.1858690084.1658745301&semt=sph"
        alt="Pair"
      /> */}
      <p>of email address tabithachepng'etich@gmail.com</p>
      <p>Is your pair for this week</p>
      <p>Your mentor is Dennis Munene </p>
      {/* <img
        src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.2.1858690084.1658745301&semt=sph"
        alt="Pair"
      /> */}
      <p>denniskariuki@gmail.com</p>
      <h6>Feel free to reach out to us!</h6>
      <h5>Visit Us Today</h5>
      <p>Copyright: Automatic Pairing</p>
      <h5>Get in touch</h5>
      <p>Email Us</p>
      <p>02-0000-1000</p>
    </div>
  );
}
export default StudentPage;
