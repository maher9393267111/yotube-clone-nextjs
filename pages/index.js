import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Showingproducts from "../components/Showingproducts";

import { Button } from "antd";
import MainHome from "../components/mainHome";

import Modal from "react-modal";
import { useAuth } from "../context/global";
import { diffcontext } from "../context/diff";
import { db } from "../firebase";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  onSnapshot,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

export default function Home() {
  const [open, setOpen] = useState(false);

  const {
    logout,
    forgetPassword,
    currentUser,
    userinfo,
    products,
    setProducts,
  } = useAuth();
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
    {
      /* { !isSSR &&  <NewList />} */
    }
  }, []);

  const sendtoemail = (e) => {
    e.preventDefault();
    const email = "maher9911133@gmail.com";
    forgetPassword(email);
  };

  return (
    <div className="  h-[200vh]">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* -------main sectin start- */}

      <div className=" ml-14 mr-14">
        <div>
          <MainHome />
        </div>


{/* show- 6 products */}


<div className=" mt-12">


<Showingproducts productsnumber={6} />



</div>




      </div>
    </div>
  );
}
