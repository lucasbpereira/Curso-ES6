const delay = () => new Promise(resolve => setTimeout(resolve, 2000));

const umPorSegundo = async () => {
    await delay(console.log('1'));
    await delay(console.log('2'));
    await delay(console.log('3'));
}

umPorSegundo();

import axios from 'axios';

async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch(err) {
        console.warn('Usuário não existe')
    }
}

getUserFromGithub('lucasbpereira');
getUserFromGithub('lucosbpereiro')

class github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/users/${repo}/repos`);
            console.log(response.data);
        } catch (err) {
            console.warn('Repositóro não existe');
        }
        
        
    }
};

github.getRepositories('lucasbpereira');
github.getRepositories('lucasbpereiraasdasd');

const buscaUsuario = async (usuario) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(response.data);
    } catch(err) {
        console.warn('O usuário não existe')
    }
}

buscaUsuario('lucasbpereira');
buscaUsuario('lucasbpereira5');