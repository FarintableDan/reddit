import {useState, useEffect} from 'react'

export default (query) => {
	const baseUrl = `https://www.reddit.com/r/${query}/hot.json?count=25`;
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState({});
	const [additionalParams, setAdditionalParams] = useState({});

	const doFetch = (params = {}) => {
		setAdditionalParams(params);
		setIsLoading(true);
	};

	useEffect(() => {
		if (!isLoading) {
			return
		};

		fetch(baseUrl + Object.keys(additionalParams).map(key => `&${key}=${additionalParams[key]}`))
			.then(r => r.json())
			.then(d => {
				if (d.data) {
					setResponse(d.data)
				} else {
					setResponse(d)
				}
				setIsLoading(false)
			})
			.catch((e) => {
				setResponse(e)
				setIsLoading(false)
			})
	}, [isLoading, query, additionalParams]);

	return [{isLoading, response}, doFetch];
};
