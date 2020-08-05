const contactFormat = ({ firstName, lastName, email, message, createdAt }) => {
  return `<h3>You have a new contact request</h3>
	<ul>
	<li>First Name: ${firstName}</li>
	<li>Last Name: ${lastName}</li>
	<li>Email: ${email}</li>
	<li>Created At: ${createdAt}</li>
	<li>Message: ${message}</li>
	</ul>`;
};

const applicationFormat = ({
  firstName,
  lastName,
  email,
  createdAt,
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
}) => {
  return `<h3>You have a new application</h3>
	<ul>
	<li>First Name: ${firstName}</li>
	<li>Last Name: ${lastName}</li>
	<li>Email: ${email}</li>
	<li>Created At: ${createdAt}</li>
	</ul>
	<h4>Questions</h4>
	<ol>
		<li>
			<p>${q1.prompt}</p>
			<strong>${q1.response}</strong>
		</li>
		<li>
			<p>${q2.prompt}</p>
			<strong>${q2.response}</strong>
		</li>
		<li>
			<p>${q3.prompt}</p>
			<strong>${q3.response}</strong>
		</li>
		<li>
			<p>${q4.prompt}</p>
			<strong>${q4.response}</strong>
		</li>
		<li>
			<p>${q5.prompt}</p>
			<strong>${q5.response}</strong>
		</li>
		<li>
			<p>${q6.prompt}</p>
			<strong>${q6.response}</strong>
		</li>
	</ol>`;
};

module.exports = { contactFormat, applicationFormat };
