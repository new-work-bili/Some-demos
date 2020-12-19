import { testContext } from "../Context/context";
import React, { useState, useEffect,useContext } from "react";

export default function useContextTest(){
    const context = useContext(testContext)
    return (
        <p>context内容:{context}</p>
    )
} 