import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactInfo from "./ContactInfo";
import { sendContact } from "./FormSubmission";
import SubmitButton from "./SubmitButton";

const emptyContactInfo = {
	firstName: "",
	lastName: "",
	email: "",
	message: "",
};

const testContactInfo = {
	firstName: "TestFirst",
	lastName: "TestLast",
	email: "TestEmail@test.com",
	message: String(Date.now()),
};

const ContactBox = () => {
	const [contactInfo, setContactInfo] = useState(emptyContactInfo);

	const [contactError, setContactError] = useState([]);
	const [contactSuccess, setContactSuccess] = useState(false);

	const [isLoading, setIsLoading] = useState(false);

	const requireAll = true;

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		const newContact = {
			id: uuidv4(),
			...contactInfo,
		};

		sendContact(newContact)
			.then((res) => {
				console.log(res);
				switch (res.status) {
					case 201:
						setContactSuccess(true);
						setContactInfo(emptyContactInfo);
						break;
					case 400:
						setContactError(res.data.error);
						break;
					case 500:
						setContactError([res.statusText]);
						break;
					default:
						setContactError(["Unknown error, please try again later"]);
				}
				setIsLoading(false);
			})
			.catch((err) => {
				setContactError(["Unknown error, please try again later"]);
				setIsLoading(false);
			});
	};

	const updateField = (e) => {
		setContactInfo({
			...contactInfo,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="flex-shrink w-full max-w-xl">
			<h1 className="text-xl font-semibold leading-tight lg:text-2xl font-themeSerif">
				Contact Me
			</h1>
			<form onSubmit={handleSubmit} className="relative mt-4 font-sans text-sm">
				<ContactInfo
					info={{
						firstName: contactInfo.firstName,
						lastName: contactInfo.lastName,
						email: contactInfo.email,
					}}
					updateField={updateField}
					showIcons={true}
					requireAll={requireAll}
					isSmall={true}
				/>
				<div className="block mt-2 mb-4 md:mb-6">
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						required={requireAll}
						maxLength={10000}
						value={contactInfo.message}
						onChange={updateField}
						className="block w-full p-2 mt-2 text-sm text-gray-700 bg-white border rounded-md border-themeblue-100 focus:border-themeblue-200 focus:outline-none focus:ring-2 focus:ring-themeblue-100 focus:ring-opacity-50"
						rows="5"
					/>
				</div>
				<SubmitButton isLoading={isLoading} />
				<div className="mt-3 text-xs text-red-700">
					{contactError &&
						contactError.map((msg, idx) => <p key={idx}>{msg}</p>)}
				</div>
			</form>
			{contactSuccess ? (
				<div className="mt-6 font-sans text-sm">
					Thanks for your message! I'll be reaching out to you soon.
				</div>
			) : null}
		</div>
	);
};

export default ContactBox;
