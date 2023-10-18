import React, { useState, useRef, useEffect } from "react";
import { cabData } from "../data";
import { useParams, Link } from "react-router-dom";
import Visa from "../assets/img/payment/visa.png";
import Cash from "../assets/img/payment/cash.png";
import Card from "../assets/img/payment/card.png";
import emailjs from "@emailjs/browser";
import ConfirmationModal from "../components/ConfirmatiomModal";

const BookingDetails = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [passengerCount, setPassengerCount] = useState(1);

  const form = useRef();
  const { id } = useParams();
  const car = cabData.find((cab) => {
    return cab.id === parseInt(id);
  });

  const handlePassengerCountChange = (event) => {
    const count = event.target.value;
    setPassengerCount(count);
  };


  const closeModal = () => {
    setModalOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const totalAmount = car.price * passengerCount;

    emailjs
      .sendForm(
        "service_q6knl9s",
        "template_f043h07",
        form.current,
        "HPRbn5MkAtZcmHdgq"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setModalOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
      <div
        className={`container mx-auto min-h-[800px] mb-14 ${
          isModalOpen ? "blur" : ""
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{car.name}</h2>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-green-500 text-white px-4 rounded-full">
              {car.type}
            </div>
          </div>
          <div className="text-3xl font-semibold text-violet-600">
            $ {car.price}
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row ">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={car.imageLg} alt="" />
            </div>

            <div>{car.description}</div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8">
            <div className="flex items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={car.agent.image} />
              </div>
              <div>
                <div className="font-bold text-lg">{car.agent.name}</div>
                <Link to="" className="text-violet-700 text-sm">
                  {car.address}
                </Link>
              </div>
            </div>
            {/* form  */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-y-4"
            >
              <input
                type="text"
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                name="user_name"
                placeholder="Name*"
              />
              <input
                type="email"
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                name="user_email"
                placeholder="Email*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                name="user_mobile"
                placeholder="Phone*"
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="number"
                name="user_count"
                placeholder="Passenger count"
                min={1}
                value={passengerCount}
                onChange={handlePassengerCountChange}
              />
              <input
                className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                type="text"
                name="card_number"
                placeholder="Card Number*"
                style={{
                  backgroundImage: `url(${Visa}), url(${Cash}), url(${Card})`,
                  backgroundRepeat: "no-repeat, no-repeat, no-repeat",
                  backgroundPosition: "10px center, 40px center, 70px center",
                  backgroundSize: "20px 20px, 20px 20px, 20px 20px",
                  paddingLeft: "120px",
                }}
              />

              <div className="flex gap-2">
                <input
                  className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                />
                <input
                  className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm"
                  type="number"
                  name="cvv"
                  placeholder="123"
                />
              </div>

              <div className="flex justify-end">
                <input
                  type="text"
                  name="user_amount"
                  className="text-xl font-semibold text-gray-800 border border-none px-2 py-1 rounded"
                  value={`Total: $${car.price * passengerCount}`}
                  readOnly
                />
              </div>

              <div className="flex gap-x-2">
                <button
                  value="Send"
                  className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition"
                >
                  Book Your Ride
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ConfirmationModal isOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
};

export default BookingDetails;
