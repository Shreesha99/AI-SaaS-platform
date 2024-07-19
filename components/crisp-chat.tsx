"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("267ccc4f-0d74-4a29-b787-36c40eb871fe");
    }, []);

    return null;
}