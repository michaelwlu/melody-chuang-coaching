import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ContactInfo from '../Forms/ContactInfo';
import SubmitButton from '../Forms/SubmitButton';
import ApplicationQuestions from './ApplicationQuestions';
import { sendApplication } from '../Forms/FormSubmission';

const initialApplication = {
  firstName: '',
  lastName: '',
  email: '',
};

for (let question of ApplicationQuestions.questions) {
  initialApplication[question.label] = { prompt: question.text, response: '' };
}

const Apply = () => {
  const [application, setApplication] = useState(initialApplication);

  const [applicationError, setApplicationError] = useState([]);

  const [isDisabled, setIsDisabled] = useState(false);

  let history = useHistory();

  const requireAll = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(true);

    const newApplication = {
      id: uuidv4(),
      ...application,
    };

    sendApplication(newApplication).then((res) => {
      switch (res.status) {
        case 201:
          history.push('/application-success');
          break;
        case 400:
          setApplicationError(res.data.error);
          break;
        case 500:
          setApplicationError([res.statusText]);
          break;
        default:
          setApplicationError(['Unknown Error']);
      }
    });
  };

  const updateField = (e) => {
    setApplication({
      ...application,
      [e.target.name]: e.target.value,
    });
  };

  const updateResponse = (e) => {
    setApplication({
      ...application,
      [e.target.name]: {
        ...application[e.target.name],
        response: e.target.value,
      },
    });
  };

  return (
    <main className="relative w-11/12 max-w-md mx-auto mt-10 mb-32 md:max-w-xl lg:max-w-2xl md:mt-12">
      <h1 className="mb-6 text-3xl italic font-semibold leading-tight lg:text-4xl font-themeSerif">
        Client Application Form
      </h1>
      <p className="pb-8 text-sm border-b lg:text-base font-themeSans">
        {ApplicationQuestions.preface}
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 text-sm font-themeSans lg:text-base"
      >
        <p className="text-xs italic text-gray-600 sm:text-sm">
          All fields required
        </p>
        <ContactInfo
          info={{
            firstName: application.firstName,
            lastName: application.lastName,
            email: application.email,
          }}
          updateField={updateField}
          showIcons={false}
          requireAll={requireAll}
        />
        <section className="mt-8 mb-8 space-y-8">
          {ApplicationQuestions.questions.map((question, idx) => (
            <label htmlFor={question.label} className="block" key={idx}>
              <span>{question.text}</span>
              <textarea
                id={question.label}
                name={question.label}
                required={requireAll}
                maxLength={10000}
                value={application[question.label].response}
                onChange={updateResponse}
                className="block w-full mt-4 text-sm bg-gray-100 border-opacity-50 border-themeblue form-textarea lg:text-base"
                rows="4"
              />
            </label>
          ))}
        </section>
        <SubmitButton isDisabled={isDisabled} />
        <div className="mt-3 text-xs text-red-700">
          {applicationError &&
            applicationError.map((msg, idx) => <p key={idx}>{msg}</p>)}
        </div>
      </form>
    </main>
  );
};

export default Apply;
