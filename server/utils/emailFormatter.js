const mainContactFormat = ({
  firstName,
  lastName,
  email,
  message,
  createdAt,
}) => {
  return `<h3>You have a new contact request</h3>
	<ul>
	<li>First name: ${firstName}</li>
	<li>Last name: ${lastName}</li>
	<li>Email: ${email}</li>
	<li>Created at: ${createdAt}</li>
	<li>Message: ${message}</li>
	</ul>`;
};

const clientContactFormat = ({ firstName, lastName, email, message }) => {
  return `<p>I've received your message and will get back to you as soon as possible.</p>
	<p>- Melody</p>
	<br />
	<p>Please see below for a copy of your message.</p>
	<br />
	<ul>
	<li>First name: ${firstName}</li>
	<li>Last name: ${lastName}</li>
	<li>Email: ${email}</li>
	<li>Message: ${message}</li>
	</ul>`;
};

const mainApplicationFormat = ({
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
	<li>First name: ${firstName}</li>
	<li>Last name: ${lastName}</li>
	<li>Email: ${email}</li>
	<li>Created at: ${createdAt}</li>
	</ul>
	<ol>
		<li>
			<p>${q1.prompt}</p>
			<p>${q1.response}</p>
		</li>
		<li>
			<p>${q2.prompt}</p>
			<p>${q2.response}</p>
		</li>
		<li>
			<p>${q3.prompt}</p>
			<p>${q3.response}</p>
		</li>
		<li>
			<p>${q4.prompt}</p>
			<p>${q4.response}</p>
		</li>
		<li>
			<p>${q5.prompt}</p>
			<p>${q5.response}</p>
		</li>
		<li>
			<p>${q6.prompt}</p>
			<p>${q6.response}</p>
		</li>
	</ol>`;
};

const clientApplicationFormat = ({
  firstName,
  lastName,
  email,
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
}) => {
  return `<p>Congratulations, you've taken the first step! I will review your application and get back to you as soon as possible.</p>
	<p>- Melody</p>
	<br />
	<p>Please see below for a copy of your application.</p>  
	<ul>
	<li>First name: ${firstName}</li>
	<li>Last name: ${lastName}</li>
	<li>Email: ${email}</li>
	</ul>
	<ol>
		<li>
			<p>${q1.prompt}</p>
			<p>${q1.response}</p>
		</li>
		<li>
			<p>${q2.prompt}</p>
			<p>${q2.response}</p>
		</li>
		<li>
			<p>${q3.prompt}</p>
			<p>${q3.response}</p>
		</li>
		<li>
			<p>${q4.prompt}</p>
			<p>${q4.response}</p>
		</li>
		<li>
			<p>${q5.prompt}</p>
			<p>${q5.response}</p>
		</li>
		<li>
			<p>${q6.prompt}</p>
			<p>${q6.response}</p>
		</li>
	</ol>`;
};

module.exports = {
  mainContactFormat,
  clientContactFormat,
  mainApplicationFormat,
  clientApplicationFormat,
};
