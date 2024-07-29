'use client'
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

const Domains = () => {

    const [domain, setDomain] = useState('');

    const path = usePathname();
    
    useEffect(() => {
        const pathAfterDomains = path.split('/domains/')[1];
        if (pathAfterDomains) {
            setDomain(pathAfterDomains);
        }

        console.log(pathAfterDomains);

        
    }, [path]);
    
    
    return (
        <div>
            <h1>redirecting to: {domain}</h1>
        </div>
    )
}

export default Domains;