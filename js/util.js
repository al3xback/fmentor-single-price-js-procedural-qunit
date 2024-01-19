const createLayoutComponents = () => {
	const createCardEl = () => {
		const cardEl = document.createElement('article');
		cardEl.className = 'card';

		/* section join community */
		const sectionJoinCommunityEl = document.createElement('section');
		sectionJoinCommunityEl.className =
			'card__block card__block--join-community';

		const sectionJoinCommunityTitleEl = document.createElement('h2');
		sectionJoinCommunityTitleEl.className = 'card__title';
		sectionJoinCommunityTitleEl.textContent = 'Join our community';

		const sectionJoinCommunitySubtitleEl = document.createElement('mark');
		sectionJoinCommunitySubtitleEl.className = 'card__mark';
		sectionJoinCommunitySubtitleEl.textContent =
			'30-day, hassle-free money back guarantee';

		const sectionJoinCommunityDescriptionEl = document.createElement('p');
		sectionJoinCommunityDescriptionEl.className = 'card__desc';
		sectionJoinCommunityDescriptionEl.textContent =
			'Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.';

		sectionJoinCommunityEl.appendChild(sectionJoinCommunityTitleEl);
		sectionJoinCommunityEl.appendChild(sectionJoinCommunitySubtitleEl);
		sectionJoinCommunityEl.appendChild(sectionJoinCommunityDescriptionEl);

		/* section group */
		const sectionGroupEl = document.createElement('div');
		sectionGroupEl.className = 'card__group';

		/* section monthly subscription */
		const sectionMonthlySubscriptionEl = document.createElement('section');
		sectionMonthlySubscriptionEl.className =
			'card__block card__block--monthly-subsription';

		const sectionMonthlySubscriptionTitleEl = document.createElement('h3');
		sectionMonthlySubscriptionTitleEl.className = 'card__title';
		sectionMonthlySubscriptionTitleEl.textContent = 'Monthly Subscription';

		const sectionMonthlySubscriptionPriceEl = document.createElement('p');
		sectionMonthlySubscriptionPriceEl.className = 'card__price';

		const sectionMonthlySubscriptionPriceAmountEl =
			document.createElement('span');
		sectionMonthlySubscriptionPriceAmountEl.className = 'num';
		sectionMonthlySubscriptionPriceAmountEl.textContent = '$29';

		const sectionMonthlySubscriptionPriceLabelEl =
			document.createElement('span');
		sectionMonthlySubscriptionPriceLabelEl.className = 'label';
		sectionMonthlySubscriptionPriceLabelEl.textContent = 'per month';

		sectionMonthlySubscriptionPriceEl.appendChild(
			sectionMonthlySubscriptionPriceAmountEl
		);
		sectionMonthlySubscriptionPriceEl.appendChild(
			sectionMonthlySubscriptionPriceLabelEl
		);

		const sectionMonthlySubscriptionDescriptionEl =
			document.createElement('p');
		sectionMonthlySubscriptionDescriptionEl.className = 'card__desc';
		sectionMonthlySubscriptionDescriptionEl.textContent =
			'Full access for less than $1 a day';

		const sectionMonthlySubscriptionLinkEl = document.createElement('a');
		sectionMonthlySubscriptionLinkEl.href = '#';
		sectionMonthlySubscriptionLinkEl.className =
			'btn btn--primary btn--full';
		sectionMonthlySubscriptionLinkEl.textContent = 'Sign Up';

		sectionMonthlySubscriptionEl.appendChild(
			sectionMonthlySubscriptionTitleEl
		);
		sectionMonthlySubscriptionEl.appendChild(
			sectionMonthlySubscriptionPriceEl
		);
		sectionMonthlySubscriptionEl.appendChild(
			sectionMonthlySubscriptionDescriptionEl
		);
		sectionMonthlySubscriptionEl.appendChild(
			sectionMonthlySubscriptionLinkEl
		);

		/* section why us */
		const sectionWhyUsEl = document.createElement('section');
		sectionWhyUsEl.className = 'card__block card__block--why-us';

		const sectionWhyUsTitleEl = document.createElement('h3');
		sectionWhyUsTitleEl.className = 'card__title';
		sectionWhyUsTitleEl.textContent = 'Why Us';

		const sectionWhyUsListEl = document.createElement('ul');
		sectionWhyUsListEl.className = 'card__list';

		const benefits = [
			'Tutorials by industry experts',
			'Peer & expert code review',
			'Coding exercises',
			'Access to our GitHub repos',
			'Community forum',
			'Flashcard decks',
			'New videos every week',
		];

		for (const benefit of benefits) {
			const sectionWhyUsListItemEl = document.createElement('li');
			sectionWhyUsListItemEl.textContent = benefit;

			sectionWhyUsListEl.appendChild(sectionWhyUsListItemEl);
		}

		sectionWhyUsEl.appendChild(sectionWhyUsTitleEl);
		sectionWhyUsEl.appendChild(sectionWhyUsListEl);

		sectionGroupEl.appendChild(sectionMonthlySubscriptionEl);
		sectionGroupEl.appendChild(sectionWhyUsEl);

		cardEl.appendChild(sectionJoinCommunityEl);
		cardEl.appendChild(sectionGroupEl);

		return cardEl;
	};

	/* header */
	const headerEl = document.createElement('header');

	const headerTitleEl = document.createElement('h1');
	headerTitleEl.className = 'sr-only';
	headerTitleEl.textContent = 'Single price grid component';

	headerEl.appendChild(headerTitleEl);

	/* main */
	const mainEl = document.createElement('main');

	const mainContainerEl = document.createElement('div');
	mainContainerEl.className = 'container';

	const cardEl = createCardEl();

	mainContainerEl.appendChild(cardEl);

	mainEl.appendChild(mainContainerEl);

	/* footer */
	const footerEl = document.createElement('footer');

	const footerContainerEl = document.createElement('div');
	footerContainerEl.className = 'container';

	const footerTextEl = document.createElement('p');
	footerTextEl.textContent = 'Challenge by ';

	const footerTextLinkCreatorEl = document.createElement('a');
	footerTextLinkCreatorEl.href =
		'https://www.frontendmentor.io?ref=challenge';
	footerTextLinkCreatorEl.className = 'btn btn--link';
	footerTextLinkCreatorEl.textContent = 'Frontend Mentor';
	footerTextLinkCreatorEl.rel = 'noopener';
	footerTextLinkCreatorEl.target = '_blank';

	const footerTextLinkCoderEl = document.createElement('a');
	footerTextLinkCoderEl.href = 'https://github.com/al3xback';
	footerTextLinkCoderEl.className = 'btn btn--link';
	footerTextLinkCoderEl.textContent = 'al3xback';
	footerTextLinkCoderEl.rel = 'noopener';
	footerTextLinkCoderEl.target = '_blank';

	footerTextEl.appendChild(footerTextLinkCreatorEl);
	footerTextEl.append('. Coded by ');
	footerTextEl.appendChild(footerTextLinkCoderEl);

	footerContainerEl.appendChild(footerTextEl);

	footerEl.appendChild(footerContainerEl);

	return {
		headerEl,
		cardEl,
		mainEl,
		footerEl,
	};
};

export default createLayoutComponents;
