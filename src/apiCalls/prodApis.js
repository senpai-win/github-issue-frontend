import { customFetch } from '../custom-lib';

const HOST = 'https://github-issue-backend.herokuapp.com';
// const HOST = 'http://localhost:8000';

export const getAllIssues = (params) =>
	customFetch(
		`${HOST}/list-issues?` +
			new URLSearchParams(params).toString(),
		{}
	);

export const createIssue = (params) =>
	customFetch(`${HOST}/add-issue`, {
		headers: {
			'Content-Type': 'application/json',
		},
		mode: 'cors',
		method: 'POST',
		body: JSON.stringify(params),
	});

export const editIssue = (id, params) =>
	customFetch(`${HOST}/update-issue/${id}`, {
		headers: {
			'Content-Type': 'application/json',
		},
		mode: 'cors',
		method: 'PATCH',
		body: JSON.stringify(params),
	});


export const deleteIssue = id =>
	customFetch(`${HOST}/delete-issue/${id}`, {
		mode: 'cors',
		method: 'DELETE',
	});

// export * from './dummyApis';
