import axios from 'axios';

const HttpWrapperService = {
    get: (api: string) => {
        return axios.get(api);
    }
};

export default HttpWrapperService;