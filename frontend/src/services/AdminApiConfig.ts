import axios from 'axios';

import { ADMIN_SITE_URL } from "@/constant/env";


// import Router from 'next/router';

export const AdminApiConfig = axios.create({
    baseURL: ADMIN_SITE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
});


