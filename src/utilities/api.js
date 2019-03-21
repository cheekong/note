import axios from 'axios';

let axiosInstance = null;//axios.create({baseURL: baseURL});

export const submitNote = (note) => new Promise((resolve, reject) => {
    axios.post(
        'https://notetaking-fce6f.firebaseio.com/note.json',
        {
            note: note
        }
    )
    .then(res => {
        resolve(res);
    })
    .catch(err => {
        reject(err);
    });
});

export const getNotes = () => new Promise((resolve, reject) => {
    axios.get(
        'https://notetaking-fce6f.firebaseio.com/note.json'
    )
    .then(res => {
        resolve(res.data);
    })
    .catch(err => {
        reject(err);
    });
});

export const getNote = (id) => new Promise((resolve, reject) => {
    axios.get(
        'https://notetaking-fce6f.firebaseio.com/note/' + id + '.json'
    )
    .then(res => {
        resolve(res.data);
    })
    .catch(err => {
        reject(err);
    })
})

export const deleteNote = (id) => new Promise((resolve, reject) => {
    axios.delete(
        'https://notetaking-fce6f.firebaseio.com/note/' + id + '.json'
    )
    .then(res => {
        resolve(res.data);
    })
    .catch(err => {
        reject(err);
    })
})

export const createAccount = (email, password) => new Promise((resolve, reject) => {
    axios.post(
        'https://notetaking-fce6f.firebaseio.com/users.json',
        {
            email: email,
            password: password
        }
    )
    .then(res => {
        resolve(res.data);
    })
    .catch(err => {
        reject(err);
    })
})

export const checkExists = (email) => new Promise((resolve, reject) => {
    axios.get(
        'https://notetaking-fce6f.firebaseio.com/users.json?shallow=true&orderBy="email"&startAt="' + email + '"',
    )
    .then(res => {
        resolve(res.data);
    })
    .catch(err => {
        reject(err);
    })
})

export const getAccount = (email, password) => new Promise((resolve, reject) => {
    axios.get(
        'https://notetaking-fce6f.firebaseio.com/users.json'
    )
    .then(res => {
        resolve(res.data);
    })
    .catch(err => {
        reject(err);
    })
})