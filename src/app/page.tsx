"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
    const [name, setName] = useState<string | null>("");
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [result, setResult] = useState<{ title: string, philosophy: string }[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const nameHandler = (event: any) => {
      setName(event.target.value);
    };

    const buttonHandler = (event: any) => {
      event.preventDefault();
      setSubmitted(true);
      setLoading(true);
    };

    const reloadPage = () => {
      window.location.reload()
    }

    useEffect(() => {
      if (submitted) {
        fetch('/api/khodam')
          .then((res) => res.json())
          .then((data) => {
            setResult(data);
            setTimeout(() =>{
              setLoading(false);
            }, 3000);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
      }
    }, [submitted]);

    useEffect(() => {
      setName("");
      setSubmitted(false);
      setResult([]);
      setLoading(false);
    }, []);

    if (submitted && loading) {
      return (
        <section id="cek-khodam" className="flex flex-col gap-5 bg-white bg-opacity-80 rounded-lg p-10">
          <motion.h1 className="text-xl" initial={{y: 0}} animate={{y: [0, 10,20,10,0]}} transition={{duration: 3}}>Loading...</motion.h1>
        </section>
      );
    }
    if (submitted && !loading) {
      const showResult = result;
      const results = {
        khodam: showResult.title,
        philosophy: showResult.philosophy
      };
      return (
        <section id="cek-khodam" className="flex flex-col gap-5 bg-white bg-opacity-80 rounded-lg p-10">
          <h1 className="text-xl">
            Khodam yang berada dalam diri <span className="text-green-600">{name}</span> adalah <span>{results.khodam}</span>.
          </h1>
          <p>
            Bermaknakan: {results.philosophy}
          </p>
          <button onClick={reloadPage}>Cek Ulang</button>
        </section>
      );
    }
    return (
      <section id="cek-khodam" className="flex flex-col gap-5 bg-white bg-opacity-70 rounded-lg p-10">
        <h1 className="text-xl">Cek khodam yang berdiam dalam diri kamu!</h1>
        <form className="flex flex-col gap-3" method="POST">
          <input type="text" name="nama" placeholder="nama kamu..." className="text-lg p-2 rounded-lg" onChange={nameHandler} />
          <button className="bg-black text-white text-lg" onClick={buttonHandler}>Cek Sekarang</button>
        </form>
      </section>
    );
}
