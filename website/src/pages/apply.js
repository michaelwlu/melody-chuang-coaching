import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ApplicationQuestions from "../components/forms/ApplicationQuestions";
import ContactInfo from "../components/forms/ContactInfo";
import { sendApplication } from "../components/forms/FormSubmission";
import SubmitButton from "../components/forms/SubmitButton";
import Layout from "../components/utils/Layout";
import WidthWrapper from "../components/utils/WidthWrapper";

const initialApplication = {
	firstName: "",
	lastName: "",
	email: "",
};

const testApplication = {
	firstName: String(Date.now()),
	lastName: "Test",
	email: "Test@test.com",
};

for (let question of ApplicationQuestions.questions) {
	initialApplication[question.label] = { prompt: question.text, response: "" };
	testApplication[question.label] = { prompt: question.text, response: "Test" };
}

const Apply = () => {
	const [application, setApplication] = useState(initialApplication);
	const [applicationSuccess, setApplicationSuccess] = useState(false);
	const [applicationError, setApplicationError] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const requireAll = true;

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		const newApplication = {
			id: uuidv4(),
			...application,
		};

		sendApplication(newApplication)
			.then((res) => {
				switch (res.status) {
					case 201:
						setApplicationSuccess(true);
						window.scrollTo(0, 0);
						break;
					case 400:
						setApplicationError(res.data.error);
						break;
					case 500:
						setApplicationError([res.statusText]);
						break;
					default:
						setApplicationError(["Unknown Error"]);
				}
				setIsLoading(false);
			})
			.catch((err) => {
				setApplicationError(["Unknown error, please try again later"]);
				setIsLoading(false);
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

	const successDisplay = (
		<div className="mx-auto text-center">
			<h1 className="mb-6 text-3xl italic font-semibold leading-tight lg:text-4xl font-themeSerif">
				Thank you for your application!
			</h1>
			<p className="mb-10 font-sans text-sm lg:text-base">
				I'll be reaching out to you soon!
			</p>
			<Link
				href="/"
				className="transition duration-200 ease-in-out text-themeblue-500 hover:text-themeblue-200 focus:text-themeblue-200 focus:outline-none"
			>
				Back to home
			</Link>
		</div>
	);

	return (
		<Layout>
			<Head>
				<title>Apply | Melody Chuang Coaching</title>
			</Head>
			<WidthWrapper>
				<main className="max-w-xl mx-auto mt-12 mb-24 md:max-w-2xl">
					{applicationSuccess ? (
						successDisplay
					) : (
						<>
							<h1 className="mb-6 text-3xl italic font-semibold leading-tight lg:text-4xl font-themeSerif">
								Client Application Form
							</h1>
							<p className="pb-8 font-sans text-sm border-b lg:text-base">
								{ApplicationQuestions.preface}
							</p>
							<form
								onSubmit={handleSubmit}
								className="mt-8 font-sans text-sm lg:text-base"
							>
								<p className="mb-4 text-xs italic text-gray-600 sm:text-sm">
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
								<section className="mt-8 mb-8 space-y-8 md:mt-16">
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
												className="block w-full p-2 mt-2 text-sm text-gray-700 bg-white border rounded-md border-themeblue-100 focus:border-themeblue-200 focus:outline-none focus:ring-2 focus:ring-themeblue-100 focus:ring-opacity-50 lg:text-base"
												rows="4"
											/>
										</label>
									))}
								</section>
								<SubmitButton isLoading={isLoading} />
								<div className="mt-3 text-xs text-red-700">
									{applicationError &&
										applicationError.map((msg, idx) => <p key={idx}>{msg}</p>)}
								</div>
							</form>
						</>
					)}
				</main>
			</WidthWrapper>
		</Layout>
	);
};

export default Apply;
