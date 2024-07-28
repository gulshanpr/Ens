'use client'
import React from "react";
import { useRouter } from 'next/router';

const Domains = () => {

    const router = useRouter();
    console.log(router);

    return (
        <div>
            <h1>hiiii</h1>
        </div>
    )
}

export default Domains;