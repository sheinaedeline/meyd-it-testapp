import axios from 'axios'

const customInstance = axios.create({
	baseURL: process.env.API_BASEURL,
	headers: { Accept: 'application/json' },
})
