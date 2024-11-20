"use client";
import Image from "next/image";
import Input from "./components/Input";
import { useState } from "react";
import Btn from "./components/Btn";

export default function Home() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [displayInput, setDisplayInput] = useState("flex");
  const [displayComplete, setDisplayComplete] = useState("hidden");
  const [error, setError] = useState<string[]>([" ", " ", " ", " "]);

  const handleReload = () => {
    location.reload();
  };

  const handleChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
    const rawValue = e.target.value.replace(/\s+/g, "");
    if (rawValue.length === 16) {
      const newCardNumber = rawValue.replace(/(\d{4}|\w{4})/g, "$1 ").trim();
      setCardNumber(newCardNumber);
    }
  };

  const handleChangeValidateMonth = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMonth(e.target.value);
    const rawValue = e.target.value.replace(/(\s+|\D+)/g, "");
    setMonth(rawValue);
  };

  const handleChangeValidateYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
    const rawValue = e.target.value.replace(/(\s+|\D+)/g, "");
    setYear(rawValue);
  };

  const handleChangeCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvv(e.target.value);
    const rawValue = e.target.value.replace(/(\s+|\D+)/g, "");
    setCvv(rawValue);
  };

  const handleClick = () => {
    const regex = /[a-zA-Z]/;
    const newError = [...error];

    if (!cardName) {
      newError[0] = "Cant be blank";
    } else {
      newError[0] = " ";
    }

    if (cardNumber.length > 0 && cardNumber.length < 16) {
      newError[1] = "Credit card has 16 numbers";
    } else if (regex.test(cardNumber)) {
      newError[1] = "Wrong format. Numbers only.";
    } else if (!cardNumber) {
      newError[1] = "Cant be blank";
    } else {
      newError[1] = " ";
    }

    if (!month || !year) {
      newError[2] = `Cant be `;
    } else if (parseInt(month) < 1 || parseInt(month) > 12) {
      newError[2] = `Invalid month`;
    } else {
      newError[2] = " ";
    }

    if (!month || !year) {
      newError[3] = "blank";
    } else if (parseInt(year) < new Date().getFullYear() % 100) {
      // Verifica se o ano é menor que o atual (últimos dois dígitos)
      newError[3] = `Invalid year`;
    } else {
      newError[3] = " ";
    }

    if (!cvv) {
      newError[4] = "Cant be blank";
    } else {
      newError[4] = " ";
    }

    setError(newError);

    if (newError.join("") === "     ") {
      setDisplayInput("hidden");
      setDisplayComplete("flex");
    }
  };
  return (
    <div>
      <div className="bg-[url('/images/bg-main-mobile.png')] bg-cover bg-center h-60 w-screen md:hidden relative">
        <div className="flex flex-col items-end top-8 left-16 h-full absolute">
          <div className="relative">
            <Image
              src={"/images/bg-card-back.png"}
              alt="back card"
              width={280}
              height={50}
            />
            <div className="absolute top-[60px] right-10 text-xl text-white tracking-widest">
              {cvv ? <p>{cvv}</p> : <p>000</p>}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end h-full absolute top-32 left-4">
          <div className="relative">
            <div className="border-solid border-2 bg-white border-white rounded-full w-8 h-8 absolute top-4 left-4"></div>
            <div className="border-solid border-2 border-white rounded-full w-4 h-4 absolute top-6 left-16"></div>
            <Image
              src={"/images/bg-card-front.png"}
              alt="back card"
              width={280}
              height={50}
            />
            <div className="absolute text-white text-xl top-20 left-6 tracking-widest">
              {cardNumber ? <p>{cardNumber}</p> : <p>0000 0000 0000 0000</p>}
            </div>
            <div className="absolute text-white text-sm top-28 left-6 tracking-widest">
              {cardName ? <p>{cardName}</p> : <p>Thiago Alves</p>}
            </div>
            <div className="flex absolute text-white text-sm top-28 left-52 tracking-widest">
              {month ? <p>{month}</p> : <p>00</p>}/
              {year ? <p>{year}</p> : <p>00</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:bg-[url('/images/bg-main-desktop.png')] md:bg-cover md:bg-center md:h-screen md:w-[30%]">
        <div className="flex flex-col items-end top-[440px] left-64 h-full absolute">
          <div className="relative">
            <Image
              src={"/images/bg-card-back.png"}
              alt="back card"
              width={480}
              height={50}
            />
            <div className="absolute top-[36px] right-7 text-4xl text-white tracking-widest">
              {cvv ? <p>{cvv}</p> : <p>000</p>}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end h-full absolute top-32 left-32">
          <div className="relative">
            <div className="border-solid border-2 bg-white border-white rounded-full w-12 h-12 absolute top-8 left-6"></div>
            <div className="border-solid border-2 border-white rounded-full w-6 h-6 absolute top-11 left-24"></div>
            <Image
              src={"/images/bg-card-front.png"}
              alt="back card"
              width={480}
              height={50}
            />
            <div className="absolute text-white text-4xl top-36 left-6 tracking-widest">
              {cardNumber ? <p>{cardNumber}</p> : <p>0000 0000 0000 0000</p>}
            </div>
            <div className="absolute text-white text-lg top-52 left-6 tracking-widest">
              {cardName ? <p>{cardName}</p> : <p>Thiago Alves</p>}
            </div>
            <div className="flex absolute text-white text-lg top-52 left-96 tracking-widest">
              {month ? <p>{month}</p> : <p>00</p>}/
              {year ? <p>{year}</p> : <p>00</p>}
            </div>
          </div>
        </div>
      </div>

      <div className={`${displayInput} flex-col mt-24 items-center gap-8`}>
        <Input
          title="Cardholder Name"
          placeholder="e.g. Thiago Alves"
          width="w-4/5"
          paddingLeft="pl-4"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          error={error[0]}
        />
        <Input
          title="Card number"
          placeholder="e.g. 1234 5678 91234 5678"
          width="w-4/5"
          paddingLeft="pl-4"
          value={cardNumber}
          onChange={handleChangeCardNumber}
          error={error[1]}
          cardNumber={true}
          maxLength={19}
        />
        <div className="flex gap-2 justify-center w-4/5">
          <Input
            title="exp. date"
            placeholder="MM"
            width="w-[22%]"
            paddingLeft="pl-3"
            value={month}
            maxLength={2}
            onChange={handleChangeValidateMonth}
            error={error[2]}
          />
          <Input
            title="(MM/YY)"
            placeholder="YY"
            width="w-[22%]"
            paddingLeft="pl-3"
            value={year}
            maxLength={2}
            onChange={handleChangeValidateYear}
            error={error[3]}
          />
          <Input
            title="cvv"
            maxLength={3}
            placeholder="e.g. 123"
            width="w-[54%]"
            paddingLeft="pl-3"
            value={cvv}
            onChange={handleChangeCvv}
            error={error[4]}
          />
        </div>
      </div>
      <div className={`${displayInput} mb-20`}>
        <Btn title="Confirm" onclick={handleClick} />
      </div>

      <div className={`${displayComplete} flex-col`}>
        <div className="flex justify-center w-full mt-20">
          <Image
            alt="complete"
            src={"/images/icon-complete.svg"}
            width={80}
            height={80}
          />
        </div>
        <div className="flex uppercase w-full justify-center mt-5 font-semibold text-3xl">
          <h2>Thank You</h2>
        </div>
        <div className="flex w-full justify-center mt-3 text-colorDarkGrayishViolet font-semibold text-lg">
          We´ve added your card details
        </div>
        <div>
          <Btn onclick={handleReload} title="Continue" />
        </div>
      </div>
    </div>
  );
}
