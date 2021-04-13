import axios from 'axios'

const url = 'https://navedex-api.herokuapp.com/v1'

// retorna o TOKEN

export const LOGIN = async (email: string, password: string) =>
  axios
    .post(`${url}/users/login`, {
      email: email,
      password: password,
    })
    .then(({ data }) => data.token)
    .catch((error) => console.error(error))

export const GETNAVERS = async (token: string): Promise<any> =>
  axios
    .get(`${url}/navers`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((data) => data)
    .catch((error) => console.error(error))
